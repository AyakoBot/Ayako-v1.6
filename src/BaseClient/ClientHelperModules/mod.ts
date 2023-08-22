import * as Discord from 'discord.js';
import * as Jobs from 'node-schedule';
import * as CT from '../../Typings/CustomTypings.js';
import languageSelector from './languageSelector.js';
import constants from '../Other/constants.js';
import stringEmotes from './stringEmotes.js';
import replyMsg from './replyMsg.js';
import replyCmd from './replyCmd.js';
import send from './send.js';
import cache from './cache.js';
import log from './log.js';
import getPunishment from './getPunishment.js';
import DataBase from '../DataBase.js';
import roleManager from './roleManager.js';
import objectEmotes from './objectEmotes.js';
import errorCmd from './errorCmd.js';
import errorMsg from './errorMsg.js';
import error from './error.js';
import { request } from './requestHandler.js';
import { ThreadChannel, GuildMember } from '../Other/classes.js';
import getBotIdFromToken from './getBotIdFromToken.js';

type CmdType = Discord.ChatInputCommandInteraction<'cached'> | Discord.Message<true> | undefined;
type ResponseMessage = Discord.Message<true> | undefined;

export default async <T extends CT.ModTypes>(cmd: CmdType, type: T, options: CT.ModOptions<T>) => {
 const basicsResponse = await runBasics1(options, cmd, type);
 if (!basicsResponse) return;
 const { message, language } = basicsResponse;

 const runAction = async () => {
  switch (type) {
   case 'banAdd':
    return mod.banAdd(options as unknown as CT.ModOptions<'banAdd'>, language, message, cmd);
   case 'channelBanAdd':
    return mod.channelBanAdd(
     options as unknown as CT.ModOptions<'channelBanAdd'>,
     language,
     message,
     cmd,
    );
   case 'softBanAdd':
    return mod.softBanAdd(
     options as unknown as CT.ModOptions<'softBanAdd'>,
     language,
     message,
     cmd,
    );
   case 'kickAdd':
    return mod.kickAdd(options, language, message, cmd);
   case 'tempBanAdd':
    return mod.tempBanAdd(
     options as unknown as CT.ModOptions<'tempBanAdd'>,
     language,
     message,
     cmd,
    );
   case 'tempChannelBanAdd':
    return mod.tempChannelBanAdd(
     options as unknown as CT.ModOptions<'tempChannelBanAdd'>,
     language,
     message,
     cmd,
    );
   case 'tempMuteAdd':
    return mod.tempMuteAdd(
     options as unknown as CT.ModOptions<'tempMuteAdd'>,
     language,
     message,
     cmd,
    );
   case 'warnAdd':
    return mod.warnAdd();
   case 'strikeAdd':
    return mod.strikeAdd(options, language, message, cmd);
   case 'softWarnAdd':
    return mod.softWarnAdd();
   case 'roleRemove':
    return mod.roleRemove(options as unknown as CT.ModOptions<'roleRemove'>, language, message);
   case 'roleAdd':
    return mod.roleAdd(options as unknown as CT.ModOptions<'roleAdd'>, language, message);
   case 'muteRemove':
    return mod.muteRemove(options, language, message, cmd);
   case 'channelBanRemove':
    return mod.channelBanRemove(
     options as unknown as CT.ModOptions<'channelBanRemove'>,
     language,
     message,
     cmd,
    );
   case 'banRemove':
    return mod.banRemove(options, language, message, cmd);
   default: {
    throw new Error(`Unknown modType ${type}`);
   }
  }
 };

 if (!(await runAction())) return;

 runBasics2(options, message, language, type, cmd);
};

const mod = {
 roleAdd: async (
  options: CT.ModOptions<'roleAdd'>,
  language: CT.Language,
  message: ResponseMessage,
 ) => {
  const type = 'roleAdd';

  const memberResponse = await getMembers(options, language, message, type);
  if (!memberResponse) return false;
  const { targetMember } = memberResponse;

  if (targetMember.roles.cache.hasAll(...options.roles.map((r) => r.id))) {
   actionAlreadyApplied(message, options.target, language, type);
   return false;
  }

  if (
   !options.guild.members.me?.permissions.has(Discord.PermissionFlagsBits.ManageRoles) ||
   !targetMember.manageable
  ) {
   permissionError(message, language, type);
   return false;
  }

  await roleManager.add(
   targetMember,
   options.roles.map((r) => r.id),
   options.reason,
   1,
  );

  return true;
 },
 roleRemove: async (
  options: CT.ModOptions<'roleRemove'>,
  language: CT.Language,
  message: ResponseMessage,
 ) => {
  const type = 'roleRemove';

  const memberResponse = await getMembers(options, language, message, type);
  if (!memberResponse) return false;
  const { targetMember } = memberResponse;

  if (!targetMember.roles.cache.hasAny(...options.roles.map((r) => r.id))) {
   actionAlreadyApplied(message, options.target, language, type);
   return false;
  }

  if (
   !options.guild.members.me?.permissions.has(Discord.PermissionFlagsBits.ManageRoles) ||
   !targetMember.manageable
  ) {
   permissionError(message, language, type);
   return false;
  }

  await roleManager.remove(
   targetMember,
   options.roles.map((r) => r.id),
   options.reason,
   1,
  );

  return true;
 },
 tempMuteAdd: async (
  options: CT.ModOptions<'tempMuteAdd'>,
  language: CT.Language,
  message: ResponseMessage,
  cmd: CmdType,
 ) => {
  const type = 'tempMuteAdd';

  const memberResponse = await getMembers(options, language, message, type);
  if (!memberResponse) return false;
  const { targetMember } = memberResponse;

  if (!targetMember.moderatable) {
   permissionError(message, language, type);
   return false;
  }

  if (targetMember.isCommunicationDisabled()) {
   actionAlreadyApplied(message, options.target, language, type);
   return false;
  }

  const res = await request.guilds.editMember(
   options.guild,
   targetMember.id,
   {
    communication_disabled_until: new Date(
     Date.now() + (options.duration > 2419200 ? 2419200000 : options.duration * 1000),
    ).toISOString(),
   },
   options.reason,
  );

  if ('message' in res) {
   err(cmd, res, language, message, options.guild);
   return false;
  }

  cache.mutes.set(
   Jobs.scheduleJob(
    new Date(Date.now() + (options.duration > 2419200 ? 2419200000 : options.duration * 1000)),
    () => {
     mod.muteRemove(options, language, message, cmd);
    },
   ),
   options.guild.id,
   options.target.id,
  );

  return true;
 },
 muteRemove: async (
  options: CT.ModOptions<'muteRemove'>,
  language: CT.Language,
  message: ResponseMessage,
  cmd: CmdType,
 ) => {
  const type = 'muteRemove';

  cache.mutes.delete(options.guild.id, options.target.id);

  const memberResponse = await getMembers(options, language, message, type);
  if (!memberResponse) return false;
  const { targetMember } = memberResponse;

  if (!targetMember.moderatable) {
   permissionError(message, language, type);
   return false;
  }

  if (targetMember.isCommunicationDisabled()) {
   actionAlreadyApplied(message, options.target, language, type);
   return false;
  }

  const res = await request.guilds.editMember(options.guild, targetMember.id, {
   communication_disabled_until: null,
  });

  if ('message' in res) {
   err(cmd, res, language, message, options.guild);
   return false;
  }

  return true;
 },
 banAdd: async (
  options: CT.ModOptions<'banAdd'>,
  language: CT.Language,
  message: ResponseMessage,
  cmd: CmdType,
 ) => {
  const type = 'banAdd';

  const memberRes = await getMembers(options, language, message, type);

  if (
   (memberRes && !memberRes.targetMember.moderatable) ||
   !options.guild.members.me?.permissions.has(Discord.PermissionFlagsBits.BanMembers)
  ) {
   permissionError(message, language, type);
   return false;
  }

  if (options.guild.bans.cache.has(options.target.id)) {
   actionAlreadyApplied(message, options.target, language, type);
   return false;
  }

  const res = await request.guilds.banUser(
   options.guild,
   options.target.id,
   {
    delete_message_seconds: options.deleteMessageSeconds,
   },
   options.reason,
  );

  if (typeof res !== 'undefined' && 'message' in res) {
   err(cmd, res, language, message, options.guild);
   return false;
  }

  return true;
 },
 softBanAdd: async (
  options: CT.ModOptions<'softBanAdd'>,
  language: CT.Language,
  message: ResponseMessage,
  cmd: CmdType,
 ) => {
  const res = await mod.banAdd(options, language, message, cmd);
  if (!res) return false;

  const res2 = await mod.banRemove(options, language, message, cmd);
  if (!res2) return false;

  return true;
 },
 tempBanAdd: async (
  options: CT.ModOptions<'tempBanAdd'>,
  language: CT.Language,
  message: ResponseMessage,
  cmd: CmdType,
 ) => {
  const res = await mod.banAdd(options, language, message, cmd);
  if (!res) return res;

  cache.bans.set(
   Jobs.scheduleJob(new Date(Date.now() + options.duration * 1000), () => {
    mod.banRemove(options, language, message, cmd);
   }),
   options.guild.id,
   options.target.id,
  );

  return res;
 },
 banRemove: async (
  options: CT.ModOptions<'banRemove'>,
  language: CT.Language,
  message: ResponseMessage,
  cmd: CmdType,
 ) => {
  const type = 'banRemove';

  cache.bans.delete(options.guild.id, options.target.id);

  if (!options.guild.members.me?.permissions.has(Discord.PermissionFlagsBits.BanMembers)) {
   permissionError(message, language, type);
   return false;
  }

  if (!options.guild.bans.cache.has(options.target.id)) {
   actionAlreadyApplied(message, options.target, language, type);
   return false;
  }

  const res = await request.guilds.unbanUser(options.guild, options.target.id, options.reason);
  if (res && 'message' in res) {
   err(cmd, res, language, message, options.guild);
   return false;
  }

  return true;
 },
 kickAdd: async (
  options: CT.ModOptions<'kickAdd'>,
  language: CT.Language,
  message: ResponseMessage,
  cmd: CmdType,
 ) => {
  const type = 'kickAdd';

  if (!options.guild.members.me?.permissions.has(Discord.PermissionFlagsBits.KickMembers)) {
   permissionError(message, language, type);
   return false;
  }

  if (!options.guild.bans.cache.has(options.target.id)) {
   actionAlreadyApplied(message, options.target, language, type);
   return false;
  }

  const res = await request.guilds.removeMember(options.guild, options.target.id);
  if ((res as Discord.DiscordAPIError).message) {
   err(cmd, res as Discord.DiscordAPIError, language, message, options.guild);
   return false;
  }

  return true;
 },
 warnAdd: async () => true,
 softWarnAdd: async () => true,
 channelBanAdd: async (
  options: CT.ModOptions<'channelBanAdd'>,
  language: CT.Language,
  message: ResponseMessage,
  cmd: CmdType,
 ) => {
  const type = 'channelBanAdd';

  if (options.channel.id === options.guild.rulesChannelId) {
   if (!message) return false;

   request.channels.editMsg(message, {
    embeds: [
     {
      color: constants.colors.danger,
      description: language.mod.execution.channelBanAdd.importantChannel,
      author: {
       icon_url: objectEmotes.warning.link,
       name: language.error,
      },
     },
    ],
   });
   return false;
  }

  const memberResponse = await getMembers(options, language, message, type);
  if (!memberResponse) return false;

  if (
   !options.guild.members.me?.permissions.has(Discord.PermissionFlagsBits.ManageChannels) ||
   !options.channel
    .permissionsFor(options.guild.members.me)
    .has(Discord.PermissionFlagsBits.ManageChannels)
  ) {
   permissionError(message, language, type);
   return false;
  }

  const perm = options.channel?.permissionOverwrites.cache.get(options.target.id);

  if (
   perm &&
   perm.deny.has(Discord.PermissionFlagsBits.SendMessages) &&
   perm.deny.has(Discord.PermissionFlagsBits.SendMessagesInThreads) &&
   perm.deny.has(Discord.PermissionFlagsBits.ViewChannel) &&
   perm.deny.has(Discord.PermissionFlagsBits.AddReactions) &&
   perm.deny.has(Discord.PermissionFlagsBits.Connect)
  ) {
   actionAlreadyApplied(message, options.target, language, type);
   return false;
  }

  const newPerms = new Discord.PermissionsBitField([
   Discord.PermissionsBitField.Flags.SendMessages,
   Discord.PermissionsBitField.Flags.SendMessagesInThreads,
   Discord.PermissionsBitField.Flags.ViewChannel,
   Discord.PermissionsBitField.Flags.AddReactions,
   Discord.PermissionsBitField.Flags.Connect,
  ]);

  const res = await request.channels.editPermissionOverwrite(
   options.channel,
   options.target.id,
   {
    type: Discord.OverwriteType.Member,
    deny: (perm ? perm.deny.add(newPerms.bitfield) : newPerms).bitfield.toString(),
    allow: perm ? perm.allow.remove(newPerms.bitfield).bitfield.toString() : '0',
   },
   options.reason,
  );

  if (res && 'message' in res) {
   err(cmd, res, language, message, options.guild);
   return false;
  }

  return true;
 },
 channelBanRemove: async (
  options: CT.ModOptions<'channelBanRemove'>,
  language: CT.Language,
  message: ResponseMessage,
  cmd: CmdType,
 ) => {
  const type = 'channelBanRemove';

  cache.channelBans.delete(options.guild.id, options.channel.id, options.target.id);

  const memberResponse = await getMembers(options, language, message, type);
  if (!memberResponse) return false;

  if (
   !options.guild.members.me?.permissions.has(Discord.PermissionFlagsBits.ManageChannels) ||
   !options.channel
    .permissionsFor(options.guild.members.me)
    .has(Discord.PermissionFlagsBits.ManageChannels)
  ) {
   permissionError(message, language, type);
   return false;
  }

  const perm = options.channel.permissionOverwrites.cache.get(options.target.id);

  if (
   !perm ||
   (!perm?.deny.has(Discord.PermissionFlagsBits.SendMessages) &&
    !perm?.deny.has(Discord.PermissionFlagsBits.SendMessagesInThreads) &&
    !perm?.deny.has(Discord.PermissionFlagsBits.ViewChannel) &&
    !perm?.deny.has(Discord.PermissionFlagsBits.AddReactions) &&
    !perm?.deny.has(Discord.PermissionFlagsBits.Connect))
  ) {
   actionAlreadyApplied(message, options.target, language, type);
   return false;
  }

  const newPerms = new Discord.PermissionsBitField([
   Discord.PermissionsBitField.Flags.SendMessages,
   Discord.PermissionsBitField.Flags.SendMessagesInThreads,
   Discord.PermissionsBitField.Flags.ViewChannel,
   Discord.PermissionsBitField.Flags.AddReactions,
   Discord.PermissionsBitField.Flags.Connect,
  ]);

  if (perm.deny.remove(newPerms).bitfield === 0n && perm.allow.bitfield === 0n) {
   const res = await request.channels.editPermissionOverwrite(
    options.channel,
    options.target.id,
    {
     type: Discord.OverwriteType.Member,
     deny: perm.deny.remove(newPerms).bitfield.toString(),
     allow: perm.allow.bitfield.toString(),
    },
    options.reason,
   );

   if (res && 'message' in res) {
    err(cmd, res, language, message, options.guild);
    return false;
   }
  } else {
   const res = await request.channels.deletePermissionOverwrite(
    options.channel,
    options.target.id,
    options.reason,
   );

   if (res && 'message' in res) {
    err(cmd, res, language, message, options.guild);
    return false;
   }
  }

  return true;
 },
 tempChannelBanAdd: async (
  options: CT.ModOptions<'tempChannelBanAdd'>,
  language: CT.Language,
  message: ResponseMessage,
  cmd: CmdType,
 ) => {
  const res = await mod.channelBanAdd(options, language, message, cmd);
  if (!res) return res;

  cache.channelBans.set(
   Jobs.scheduleJob(new Date(Date.now() + options.duration * 1000), () => {
    mod.channelBanRemove(options, language, message, cmd);
   }),
   options.guild.id,
   options.channel.id,
   options.target.id,
  );

  return res;
 },
 strikeAdd: async (
  options: CT.ModOptions<'strikeAdd'>,
  language: CT.Language,
  message: ResponseMessage,
  cmd: CmdType,
 ) => {
  const strike = await getStrike(options.target, options.guild);
  if (!strike) return;

  if (!cmd) {
   error(options.guild, new Error('Guild not found'));
   return;
  }

  switch (strike.punishment) {
   case 'ban':
    mod.banAdd(
     {
      ...options,
      deleteMessageSeconds:
       strike.deletemessageseconds.toNumber() > 604800
        ? 604800
        : strike.deletemessageseconds.toNumber(),
     },
     language,
     message,
     cmd,
    );
    break;
   case 'channelban':
    if (!cmd.channel) {
     error(cmd.guild, new Error('No Channel found in strikeAdd'));
     return;
    }

    mod.channelBanAdd(
     {
      ...options,
      channel: cmd.channel.isThread()
       ? (cmd.channel.parent as NonNullable<typeof cmd.channel.parent>)
       : cmd.channel,
     },
     language,
     message,
     cmd,
    );
    break;
   case 'kick':
    mod.kickAdd(options, language, message, cmd);
    break;
   case 'tempmute':
    mod.tempMuteAdd(
     { ...options, duration: strike.duration.toNumber() * 1000 },
     language,
     message,
     cmd,
    );
    break;
   case 'tempchannelban':
    if (!cmd.channel) {
     error(cmd.guild, new Error('No channel found in strikeAdd'));
     return;
    }

    mod.tempChannelBanAdd(
     {
      ...options,
      duration: strike.duration.toNumber() * 1000,
      channel: cmd.channel.isThread()
       ? (cmd.channel.parent as NonNullable<typeof cmd.channel.parent>)
       : cmd.channel,
     },
     language,
     message,
     cmd,
    );
    break;
   case 'warn':
    mod.warnAdd();
    break;
   case 'tempban':
    mod.tempBanAdd(
     {
      ...options,
      duration: strike.duration.toNumber() * 1000,
      deleteMessageSeconds:
       strike.deletemessageseconds.toNumber() > 604800
        ? 604800
        : strike.deletemessageseconds.toNumber(),
     } as unknown as CT.ModOptions<'tempBanAdd'>,
     language,
     message,
     cmd,
    );
    break;
   case 'softban': {
    mod.softBanAdd(
     {
      ...options,
      deleteMessageSeconds:
       strike.deletemessageseconds.toNumber() > 604800
        ? 604800
        : strike.deletemessageseconds.toNumber(),
     },
     language,
     message,
     cmd,
    );
    break;
   }
   default: {
    mod.softWarnAdd();
    break;
   }
  }
 },
};

const getStrike = async (user: Discord.User | CT.bEvalUser, guild: Discord.Guild) => {
 const punishments = await getPunishment(user.id, 'all-on');
 const strikeSettings = await DataBase.autopunish.findMany({
  where: {
   guildid: guild.id,
   active: true,
   warnamount: { gte: Number(punishments?.length) },
  },
  orderBy: { warnamount: 'desc' },
 });

 return strikeSettings[0];
};

const permissionError = async (
 message: ResponseMessage,
 language: CT.Language,
 type: CT.ModTypes,
): Promise<boolean> => {
 if (!message) return false;

 const payload = {
  embeds: [
   {
    color: constants.colors.danger,
    author: {
     icon_url: objectEmotes.warning.link,
     name: language.error,
    },
    description: language.mod.execution[type as keyof CT.Language['mod']['execution']].meNoPerms,
   },
  ],
 };

 request.channels.editMsg(message, payload);

 return false;
};

const startLoading = async (
 cmd: CmdType,
 language: CT.Language,
 type: CT.ModTypes,
): Promise<ResponseMessage> => {
 if (!cmd) return undefined;

 const payload = {
  embeds: [
   {
    color: constants.colors.loading,
    author: {
     icon_url: objectEmotes.loading.link,
     name: language.mod.execution[type as keyof typeof language.mod.execution].loading,
    },
   },
  ],
 };

 if (cmd instanceof Discord.Message) {
  return replyMsg(cmd, payload);
 }
 return replyCmd(cmd, { ...payload, fetchReply: true });
};

const checkExeCanManage = async (
 target: Discord.GuildMember,
 executor: Discord.GuildMember,
 message: ResponseMessage,
 language: CT.Language,
 type: CT.ModTypes,
): Promise<boolean> => {
 if (target.roles.highest.position < executor.roles.highest.position) return true;
 if (!message) return false;

 request.channels.editMsg(message, {
  embeds: [
   {
    color: constants.colors.danger,
    author: {
     icon_url: objectEmotes.warning.link,
     name: language.error,
    },
    description: language.mod.execution[type as keyof CT.Language['mod']['execution']].youNoPerms,
   },
  ],
 });

 return false;
};

const actionAlreadyApplied = async (
 message: ResponseMessage,
 target: Discord.User | CT.bEvalUser,
 language: CT.Language,
 type: CT.ModTypes,
) => {
 if (!message) return;

 request.channels.editMsg(message, {
  embeds: [
   {
    color: constants.colors.danger,
    description:
     language.mod.execution[type as keyof CT.Language['mod']['execution']].alreadyApplied(target),
   },
  ],
 });
};

const declareSuccess = async <T extends CT.ModTypes>(
 message: ResponseMessage,
 language: CT.Language,
 options: CT.ModOptions<T>,
 type: T,
) => {
 if (!message) return;

 const { success } = language.mod.execution[type as keyof CT.Language['mod']['execution']];
 const embed = {
  color: constants.colors.success,
  description: success(options.target, options as never),
 };

 request.channels.editMsg(message, {
  embeds: [embed],
 });
};

const notifyTarget = async <T extends CT.ModTypes>(
 options: CT.ModOptions<T>,
 language: CT.Language,
 type: T,
) => {
 const { dm } = language.mod.execution[type as keyof CT.Language['mod']['execution']];

 const embed = {
  color: ['roleAdd', 'roleRemove', 'banRemove', 'muteRemove', 'channelBanRemove'].includes(type)
   ? constants.colors.success
   : constants.colors.danger,
  description: `${dm(options as never)}${
   !['roleAdd', 'roleRemove'].includes(type) ? `\n${language.mod.appeal(options.guild.id)}` : ''
  }`,
  fields: [...(options.reason ? [{ name: language.reason, value: options.reason }] : [])],
  thumbnail: ['roleAdd', 'roleRemove', 'banRemove', 'muteRemove', 'channelBanRemove'].includes(type)
   ? undefined
   : {
      url: objectEmotes.warning.link,
     },
 };

 if (
  !options.guild.rulesChannel ||
  ['banAdd', 'tempBanAdd', 'softBanAdd', 'kickAdd', 'banRemove'].includes(type)
 ) {
  send(options.target, { embeds: [embed] });
  return;
 }

 const rawThread = await request.channels.createThread(options.guild.rulesChannel, {
  type: Discord.ChannelType.PrivateThread,
  invitable: false,
  name: stringEmotes.warning,
 });

 if ('message' in rawThread) return;

 const thread = new ThreadChannel(options.guild, rawThread);

 await request.threads.addMember(options.guild, thread.id, options.target.id);
 await send(thread, {
  embeds: [embed],
  content: `<@${options.target.id}>`,
  allowed_mentions: {
   users: [options.target.id],
  },
 });
 await request.channels.edit(thread, { locked: true });

 cache.deleteThreads.set(
  Jobs.scheduleJob(new Date(Date.now() + (thread.autoArchiveDuration ?? 60) * 60 * 1000), () => {
   deleteThread(options.guild, thread.id);
  }),
  options.guild.id,
  thread.id,
 );
};

export const deleteThread = async (guild: Discord.Guild, threadId: string) => {
 cache.deleteThreads.delete(guild.id, threadId);
 DataBase.deletethreads
  .delete({
   where: {
    guildid: guild.id,
    channelid: threadId,
   },
  })
  .then();

 if (!guild.rulesChannel) return;
 const rawThread = await request.channels.get(guild, threadId);
 if ('message' in rawThread) return;
 request.channels.delete(guild, rawThread.id);
};

const db = async <T extends CT.ModTypes>(
 cmd: CmdType,
 options: CT.ModOptions<T>,
 language: CT.Language,
 type: T,
) => {
 const baseData = {
  guildid: options.guild.id,
  userid: options.target.id,
  reason: options.reason,
  uniquetimestamp: Date.now(),
  channelid: cmd?.channelId ?? language.Unknown,
  channelname: cmd?.channel?.name ?? language.Unknown,
  executorid: options.executor.id,
  executorname: options.executor.username,
  msgid: cmd?.id ?? language.Unknown,
 };

 switch (type) {
  case 'banAdd':
   return DataBase.punish_bans.create({
    data: baseData,
   });
  case 'channelBanAdd': {
   const opts = options as unknown as CT.ModOptions<'channelBanAdd'>;
   return DataBase.punish_channelbans.create({
    data: { ...baseData, banchannelid: opts.channel.id },
   });
  }
  case 'kickAdd':
   return DataBase.punish_kicks.create({
    data: baseData,
   });
  case 'tempBanAdd': {
   const opts = options as unknown as CT.ModOptions<'tempBanAdd'>;
   return DataBase.punish_tempbans.create({
    data: { ...baseData, duration: opts.duration },
   });
  }
  case 'tempChannelBanAdd': {
   const opts = options as unknown as CT.ModOptions<'tempChannelBanAdd'>;
   return DataBase.punish_tempchannelbans.create({
    data: { ...baseData, banchannelid: opts.channel.id, duration: opts.duration },
   });
  }
  case 'tempMuteAdd': {
   const opts = options as unknown as CT.ModOptions<'tempMuteAdd'>;
   return DataBase.punish_tempmutes.create({
    data: { ...baseData, duration: opts.duration },
   });
  }
  case 'warnAdd':
   return DataBase.punish_warns.create({
    data: baseData,
   });
  case 'softBanAdd':
  case 'strikeAdd':
  case 'softWarnAdd':
  case 'roleRemove':
  case 'roleAdd':
  case 'muteRemove':
  case 'channelBanRemove':
  case 'banRemove':
   return undefined;
  default: {
   throw new Error(`Unknown modType in DB fn ${type}`);
  }
 }
};

const isSelf = (
 executor: Discord.User | CT.bEvalUser,
 target: Discord.User | CT.bEvalUser,
 message: ResponseMessage,
 language: CT.Language,
 type: CT.ModTypes,
) => {
 if (executor.id !== target.id) return false;
 if (!message) return true;

 const { self } = language.mod.execution[type as keyof CT.Language['mod']['execution']];

 request.channels.editMsg(message, {
  embeds: [
   {
    color: constants.colors.danger,
    author: {
     name: language.error,
     icon_url: objectEmotes.warning.link,
    },
    description: self,
   },
  ],
 });

 return true;
};

const isMe = async (
 client: Discord.User,
 message: ResponseMessage,
 language: CT.Language,
 options: CT.BaseOptions,
 type: CT.ModTypes,
) => {
 const tokenSettings = await DataBase.guildsettings.findUnique({
  where: { guildid: options.guild.id, token: { not: null } },
 });
 if (
  options.target.id !== (tokenSettings?.token ? getBotIdFromToken(tokenSettings.token) : client.id)
 ) {
  return false;
 }
 if (!message) return true;

 const { me } = language.mod.execution[type as keyof CT.Language['mod']['execution']];

 request.channels.editMsg(message, {
  embeds: [
   {
    color: constants.colors.danger,
    author: {
     name: language.error,
     icon_url: objectEmotes.warning.link,
    },
    description: me,
   },
  ],
 });

 return true;
};

const getMembers = async (
 options: CT.BaseOptions,
 language: CT.Language,
 message: ResponseMessage,
 type: CT.ModTypes,
) => {
 const executorMember = await request.guilds.getMember(options.guild, options.executor.id);
 if ('message' in executorMember) return undefined;

 const targetMember = await options.guild.members.fetch(options.target.id).catch(() => undefined);
 if (!targetMember) {
  message?.edit({
   embeds: [
    {
     description: language.errors.memberNotFound,
     color: constants.colors.danger,
     author: { name: language.error, icon_url: objectEmotes.warning.link },
    },
   ],
  });

  return undefined;
 }

 if (
  !(await checkExeCanManage(
   targetMember,
   new GuildMember(options.guild.client, executorMember, options.guild),
   message,
   language,
   type,
  ))
 ) {
  return undefined;
 }

 return { executorMember, targetMember };
};

const runBasics1 = async (options: CT.BaseOptions, cmd: CmdType, type: CT.ModTypes) => {
 const language = await languageSelector(options.guild.id);

 if (options.dbOnly) {
  log(options.guild, type, options.target, options.executor, options);
  await db(cmd, options, language, type);
  return false;
 }

 const message = await startLoading(cmd, language, type);

 if (await isMe(options.guild.client.user, message, language, options, type)) return false;
 if (isSelf(options.executor, options.target, message, language, type)) return false;

 return { message, language };
};

const runBasics2 = async (
 options: CT.BaseOptions,
 message: ResponseMessage,
 language: CT.Language,
 type: CT.ModTypes,
 cmd: CmdType,
) => {
 declareSuccess(message, language, options, type);
 log(options.guild, type, options.target, options.executor, options);
 await db(cmd, options, language, type);
 notifyTarget(options, language, type);
};

const err = (
 cmd: CmdType,
 errs: Discord.DiscordAPIError,
 language: CT.Language,
 message: ResponseMessage,
 guild: Discord.Guild,
) => {
 if (cmd instanceof Discord.Message) {
  errorMsg(cmd, errs.message, language, message as Discord.Message<true>);
  return;
 }

 if (!cmd) {
  error(guild, new Error(errs.message));
  return;
 }
 errorCmd(cmd, errs.message, language, message);
};
