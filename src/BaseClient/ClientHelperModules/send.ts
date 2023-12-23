import * as Discord from 'discord.js';
import Jobs from 'node-schedule';
import * as CT from '../../Typings/Typings.js';
import { request } from './requestHandler.js';
import * as Classes from '../Other/classes.js';

// eslint-disable-next-line no-console
const { log } = console;

export interface MessageCreateOptions extends Omit<Discord.MessageCreateOptions, 'embeds'> {
 embeds?: Discord.APIEmbed[];
}

async function send(
 channels: Discord.User | Discord.GuildMember,
 payload: CT.UsualMessagePayload,
 timeout?: number,
): Promise<Discord.Message | null | void>;
async function send(
 channels: Discord.TextBasedChannel[],
 payload: CT.UsualMessagePayload,
 timeout?: number,
): Promise<(Discord.Message | null | void)[] | null | void>;
async function send(
 channels: Discord.TextBasedChannel,
 payload: CT.UsualMessagePayload,
 timeout?: number,
): Promise<Discord.Message | null | void>;
async function send(
 channels: { id: string; guildId: string },
 payload: CT.UsualMessagePayload,
 timeout?: number,
): Promise<Discord.Message | null | void>;
async function send(
 channels: { id: string[]; guildId: string },
 payload: CT.UsualMessagePayload,
 timeout?: number,
): Promise<(Discord.Message | null | void)[] | null | void>;
/**
 * Sends a message to a Discord channel or user.
 * @param channels - The channel or user to send the message to.
 * @param payload - The message payload to send.
 * @param timeout - The timeout for the message, if any.
 * @returns A Promise that resolves to the sent message, an array of sent messages, or null/void.
 */
async function send(
 channels:
  | Discord.TextBasedChannel
  | Discord.TextBasedChannel[]
  | { id: string[]; guildId: string }
  | { id: string; guildId: string }
  | Discord.User
  | Discord.GuildMember,
 payload: CT.UsualMessagePayload,
 timeout?: number,
): Promise<Discord.Message | (Discord.Message | null | void)[] | null | void> {
 if (!channels) return null;

 if (Array.isArray(channels)) {
  const sentMessages = await Promise.all(channels.map((ch) => send(ch, payload, timeout)));
  return sentMessages;
 }

 if (Array.isArray(channels.id)) {
  const sentMessages = await Promise.all(
   channels.id.map((id) =>
    send({ id, guildId: (channels as Discord.TextChannel).guildId }, payload, timeout),
   ),
  );
  return sentMessages;
 }

 if (payload.files?.length) timeout = undefined;
 if (Number(payload.embeds?.length) > 1) timeout = undefined;
 if (payload.components?.length) timeout = undefined;
 if (payload.content?.length) timeout = undefined;

 const channel = await getChannel(channels as Parameters<typeof getChannel>[0]);
 if (!channel) return null;

 if (!('send' in channel)) return null;

 if (
  !payload.content?.length &&
  !payload.embeds?.length &&
  !payload.files?.length &&
  !payload.components?.length
 ) {
  return null;
 }

 const constants = (await import(`${process.cwd()}/BaseClient/Other/constants.js`)).default;
 payload.embeds?.forEach((e) => {
  if (e.author && !e.author.url) e.author.url = constants.standard.invite;

  e.fields?.forEach((f) => {
   if (typeof f.inline !== 'boolean') {
    f.inline = true;
   }
  });
 });

 if (timeout && 'guild' in channel && payload.embeds?.length) {
  combineMessages(channel as Discord.TextChannel, payload.embeds, timeout);
  return null;
 }

 payload.embeds?.forEach((p) => {
  p.fields?.forEach((pa) => (pa.value?.length > 1024 ? log(p) : null));
 });

 const body = (await new Discord.MessagePayload(channel, payload).resolveBody().resolveFiles()) as {
  body: Discord.RESTPostAPIChannelMessageJSONBody;
  files: Discord.RawFile[];
 };

 const sentMessage = await request.channels.sendMessage(
  'guild' in channel ? channel.guild : undefined,
  channel.id,
  { ...body.body, files: body.files },
  channel.client,
 );
 if ('message' in sentMessage) return null;

 return sentMessage;
}

export default send;

/**
 * Combines multiple embeds and sends them to a channel.
 * If the combined embeds exceed the character limit or the maximum number of embeds per message,
 * the function splits them into multiple messages.
 * @param channel The channel to send the embeds to.
 * @param embeds An array of embeds to send.
 * @param timeout The time in milliseconds before the message times out.
 */
const combineMessages = async (
 channel:
  | Discord.AnyThreadChannel<boolean>
  | Discord.NewsChannel
  | Discord.TextChannel
  | Discord.VoiceChannel,
 embeds: Discord.APIEmbed[],
 timeout: number,
) => {
 const ch = (await import(
  `${process.cwd()}/BaseClient/ClientHelper.js`
 )) as typeof import('../ClientHelper.js');

 let guildQueue = ch.channelQueue.get(channel.guildId);
 if (!guildQueue) {
  ch.channelQueue.set(channel.guildId, new Map());
  guildQueue = ch.channelQueue.get(channel.guildId);
 }

 if (!guildQueue) {
  ch.send(channel, { embeds });
  return;
 }

 let channelQueues = guildQueue.get(channel.id);
 if (!channelQueues) {
  guildQueue.set(channel.id, []);
  channelQueues = guildQueue.get(channel.id);
 }

 if (!channelQueues) {
  ch.send(channel, { embeds });
  return;
 }

 if (
  Number(channelQueues.length) + embeds.length > 10 ||
  getEmbedCharLens([...channelQueues, ...embeds]) > 6000
 ) {
  ch.channelTimeout.get(channel.guildId)?.get(channel.id)?.cancel();
  ch.send(channel, { embeds: channelQueues });
  guildQueue.set(channel.id, []);
  channelQueues = guildQueue.get(channel.id);
 }

 if (!channelQueues) {
  ch.send(channel, { embeds });
  return;
 }

 ch.channelQueue
  .get(channel.guildId)
  ?.get(channel.id)
  ?.push(...embeds);

 if (ch.channelTimeout.get(channel.guildId)?.get(channel.id)) return;

 let timeoutGuild = ch.channelTimeout.get(channel.guildId);
 if (!timeoutGuild) {
  ch.channelTimeout.set(channel.guildId, new Map());
  timeoutGuild = ch.channelTimeout.get(channel.guildId);
 }

 if (!timeoutGuild) {
  ch.send(channel, { embeds });
  return;
 }

 timeoutGuild.set(
  channel.guildId,
  Jobs.scheduleJob(new Date(Date.now() + timeout), () => {
   const queuedEmbeds = ch.channelQueue.get(channel.guildId)?.get(channel.id) || [];
   ch.send(channel, { embeds: queuedEmbeds });

   ch.channelQueue.get(channel.guildId)?.delete(channel.id);
   ch.channelTimeout.get(channel.guildId)?.delete(channel.id);

   if (ch.channelQueue.get(channel.guildId)?.size === 0) {
    ch.channelQueue.delete(channel.guildId);
   }
   if (ch.channelTimeout.get(channel.guildId)?.size === 0) {
    ch.channelTimeout.delete(channel.guildId);
   }
  }),
 );
};

/**
 * Calculates the total character length of all strings in an array of Discord API embeds.
 * @param embeds - An array of Discord API embeds.
 * @returns The total character length of all strings in the embeds.
 */
const getEmbedCharLens = (embeds: Discord.APIEmbed[]) => {
 let total = 0;
 embeds.forEach((embed) => {
  Object.values(embed).forEach((data) => {
   if (typeof data === 'string') {
    total += data.length;
   }
  });

  for (let i = 0; i < (embed.fields ? embed.fields.length : 0); i += 1) {
   const field = embed.fields ? embed.fields[i] : null;

   if (!field) return;

   if (typeof field.name === 'string') total += field.name.length;
   if (typeof field.value === 'string') total += field.value.length;
  }
 });
 return total;
};

/**
 * Returns a channel object based on the given input.
 * @param channels - A Discord user, text-based channel, or an object with an ID and guild ID.
 * @returns A channel object.
 */
const getChannel = async (
 channels:
  | Discord.User
  | Discord.TextBasedChannel
  | {
     id: string;
     guildId: string;
    },
) => {
 const { default: client, API } = await import('../Client.js');

 if ('username' in channels) {
  return Classes.Channel<Discord.ChannelType.DM>(
   client,
   await API.users.createDM(channels.id),
   undefined as never,
  );
 }
 return 'name' in channels ? channels : client.channels.cache.get(channels.id);
};
