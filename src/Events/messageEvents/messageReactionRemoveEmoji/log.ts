import type * as Discord from 'discord.js';
import * as ch from '../../../BaseClient/ClientHelper.js';
import * as CT from '../../../Typings/Typings.js';

export default async (reaction: Discord.MessageReaction, msg: Discord.Message<true>) => {
 if (!msg.inGuild()) return;

 const channels = await ch.getLogChannels('messageevents', msg.guild);
 if (!channels) return;

 const language = await ch.getLanguage(msg.guildId);
 const lan = language.events.logs.reaction;
 const con = ch.constants.events.logs.reaction;
 const files: Discord.AttachmentPayload[] = [];
 if (!msg) return;

 const embed: Discord.APIEmbed = {
  author: {
   name: lan.nameRemoveEmoji,
   icon_url: con.remove,
   url: ch.constants.standard.msgurl(msg.guildId, msg.channelId, msg.id),
  },
  description: lan.descRemoveEmoji(msg, reaction.emoji),
  color: CT.Colors.Danger,
  fields: [],
  timestamp: new Date().toISOString(),
 };

 if (reaction.emoji.url) {
  embed.thumbnail = {
   url: `attachment://${ch.getNameAndFileType(reaction.emoji.url)}`,
  };

  const attachment = (await ch.fileURL2Buffer([reaction.emoji.url]))?.[0];
  if (attachment) files.push(attachment);
 }

 if (reaction.users.cache.size) {
  embed.fields?.push({
   name: lan.count,
   value: String(reaction.count),
  });

  const users = ch.txtFileWriter(
   reaction.users.cache.map((r) => r.id).join(', '),
   undefined,
   lan.reactions,
  );

  if (users) files.push(users);
 }

 await ch.send({ id: channels, guildId: msg.guildId }, { embeds: [embed], files }, 10000);
};
