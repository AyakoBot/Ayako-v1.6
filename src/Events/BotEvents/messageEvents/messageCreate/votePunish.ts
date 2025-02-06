import type { Message } from 'discord.js';
import redis from '../../../../BaseClient/Bot/Redis.js';
import { prefix } from '../../../../BaseClient/UtilModules/getScheduled.js';

export default async (msg: Message) => {
 if (!msg.inGuild()) return;

 await Promise.all(
  msg.member?.roles.cache.map((role) =>
   msg.client.util.delScheduled(`votePunish:init:${msg.guildId}:${role.id}:${msg.channelId}`),
  ) || [],
 );

 if (!msg.mentions.roles.size) return;

 if ((await redis.keys(`${prefix}:votePunish:${msg.guildId}:*:${msg.channelId}`)).length) {
  return;
 }

 const settings = await msg.client.util.DataBase.votePunish.findFirst({
  where: {
   active: true,
   guildid: msg.guildId,
   roleId: { in: msg.mentions.roles.map((r) => r.id) },
   OR: [
    { channelIds: { isEmpty: true } },
    { channelIds: { has: msg.channelId } },
    { channelIds: { has: msg.channel.parentId } },
   ],
  },
 });
 if (!settings) return;

 if (settings.bluserid.includes(msg.author.id)) return;
 if (settings.blroleid.find((r) => msg.member?.roles.cache.has(r))) return;
 if (
  settings.voteInitRoles.length &&
  !settings.voteInitRoles.find((r) => msg.member?.roles.cache.has(r))
 ) {
  return;
 }

 if (await msg.client.util.getRatelimit(`votePunish:${settings.roleId}`)) return;
 msg.client.util.setRatelimit(`votePunish:${settings.roleId}`, Number(settings.cooldown));

 msg.client.util.setScheduled(
  `votePunish:init:${msg.guildId}:${settings.roleId}:${msg.channelId}`,
  JSON.stringify({
   id: Number(settings.uniquetimestamp),
   guildId: msg.guildId,
   userId: msg.author.id,
   channelId: msg.channelId,
  }),
  Math.abs(Number(settings.cooldown)),
 );

 msg.client.util.request.channels.addReaction(
  msg,
  msg.client.util.constants.standard.getEmoteIdentifier(msg.client.util.emotes.levelupemotes[1]),
 );
};
