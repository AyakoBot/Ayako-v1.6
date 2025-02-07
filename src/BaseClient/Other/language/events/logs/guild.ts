import type { APIApplicationCommand, APIAuditLogEntry } from 'discord-api-types/v10.js';
import type {
 RAutomod,
 RChannel,
 REmoji,
 REvent,
 RGuild,
 RIntegration,
 RInvite,
 RMessage,
 RRole,
 RStageInstance,
 RSticker,
 RThread,
 RUser,
 RWebhook,
} from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.events.logs.guild,
 descBan: (user: RUser) =>
  t.stp(t.JSON.events.logs.guild.descBan, {
   user: t.languageFunction.getUser(user),
  }),
 descBanAudit: (user: RUser, executor: RUser) =>
  t.stp(t.JSON.events.logs.guild.descBanAudit, {
   executor: t.languageFunction.getUser(executor),
   user: t.languageFunction.getUser(user),
  }),
 descUnban: (user: RUser) =>
  t.stp(t.JSON.events.logs.guild.descUnban, {
   user: t.languageFunction.getUser(user),
  }),
 descUnbanAudit: (user: RUser, executor: RUser) =>
  t.stp(t.JSON.events.logs.guild.descUnbanAudit, {
   executor: t.languageFunction.getUser(executor),
   user: t.languageFunction.getUser(user),
  }),
 descEmojiCreateAudit: (user: RUser, emoji: REmoji) =>
  t.stp(t.JSON.events.logs.guild.descEmojiCreateAudit, {
   user: t.languageFunction.getUser(user),
   emoji: t.languageFunction.getEmote(emoji),
  }),
 descEmojiCreate: (emoji: REmoji) =>
  t.stp(t.JSON.events.logs.guild.descEmojiCreate, {
   emoji: t.languageFunction.getEmote(emoji),
  }),
 descEmojiDeleteAudit: (user: RUser, emoji: REmoji) =>
  t.stp(t.JSON.events.logs.guild.descEmojiDeleteAudit, {
   user: t.languageFunction.getUser(user),
   emoji: t.languageFunction.getEmote(emoji),
  }),
 descEmojiDelete: (emoji: REmoji) =>
  t.stp(t.JSON.events.logs.guild.descEmojiDelete, {
   emoji: t.languageFunction.getEmote(emoji),
  }),
 descEmojiUpdateAudit: (user: RUser, emoji: REmoji) =>
  t.stp(t.JSON.events.logs.guild.descEmojiUpdateAudit, {
   user: t.languageFunction.getUser(user),
   emoji: t.languageFunction.getEmote(emoji),
  }),
 descEmojiUpdate: (emoji: REmoji) =>
  t.stp(t.JSON.events.logs.guild.descEmojiUpdate, {
   emoji: t.languageFunction.getEmote(emoji),
  }),
 descJoinAudit: (user: RUser, executor: RUser) =>
  t.stp(t.JSON.events.logs.guild.descJoinAudit, {
   executor: t.languageFunction.getUser(executor),
   user: t.languageFunction.getUser(user),
  }),
 descMemberJoin: (user: RUser) =>
  t.stp(t.JSON.events.logs.guild.descMemberJoin, {
   user: t.languageFunction.getUser(user),
  }),
 descBotJoin: (user: RUser) =>
  t.stp(t.JSON.events.logs.guild.descBotJoin, {
   user: t.languageFunction.getUser(user),
  }),
 descBotLeave: (user: RUser) =>
  t.stp(t.JSON.events.logs.guild.descBotLeave, {
   user: t.languageFunction.getUser(user),
  }),
 descBotLeaveAudit: (user: RUser, executor: RUser) =>
  t.stp(t.JSON.events.logs.guild.descBotLeaveAudit, {
   executor: t.languageFunction.getUser(executor),
   user: t.languageFunction.getUser(user),
  }),
 descMemberLeave: (user: RUser) =>
  t.stp(t.JSON.events.logs.guild.descMemberLeave, {
   user: t.languageFunction.getUser(user),
  }),
 descMemberLeaveAudit: (user: RUser, executor: RUser) =>
  t.stp(t.JSON.events.logs.guild.descMemberLeaveAudit, {
   executor: t.languageFunction.getUser(executor),
   user: t.languageFunction.getUser(user),
  }),
 descBotUpdate: (user: RUser) =>
  t.stp(t.JSON.events.logs.guild.descBotUpdate, {
   user: t.languageFunction.getUser(user),
  }),
 descBotUpdateAudit: (user: RUser, executor: RUser) =>
  t.stp(t.JSON.events.logs.guild.descBotUpdateAudit, {
   executor: t.languageFunction.getUser(executor),
   user: t.languageFunction.getUser(user),
  }),
 descMemberUpdate: (user: RUser) =>
  t.stp(t.JSON.events.logs.guild.descMemberUpdate, {
   user: t.languageFunction.getUser(user),
  }),
 descMemberUpdateAudit: (user: RUser, executor: RUser) =>
  t.stp(t.JSON.events.logs.guild.descMemberUpdateAudit, {
   executor: t.languageFunction.getUser(executor),
   user: t.languageFunction.getUser(user),
  }),
 descGuildUpdate: () => t.JSON.events.logs.guild.descGuildUpdate,
 descGuildUpdateAudit: (executor: RUser) =>
  t.stp(t.JSON.events.logs.guild.descGuildUpdateAudit, {
   executor: t.languageFunction.getUser(executor),
  }),
 descAuditLogCreate: (audit: APIAuditLogEntry, executor: RUser | undefined) =>
  t.stp(t.JSON.events.logs.guild.descAuditLogCreate, {
   audit: t.languageFunction.getAuditLog(audit),
   executor: executor ? t.languageFunction.getUser(executor) : '',
  }),
 descAuditLogCreateGuild: (audit: APIAuditLogEntry, guild: RGuild, executor: RUser | undefined) =>
  t.stp(t.JSON.events.logs.guild.descAuditLogCreateGuild, {
   audit: t.languageFunction.getAuditLog(audit),
   executor: executor ? t.languageFunction.getUser(executor) : '',
   guild: t.languageFunction.getGuild(guild),
  }),
 descAuditLogCreateChannel: (
  audit: APIAuditLogEntry,
  channel: RChannel,
  executor: RUser | undefined,
 ) =>
  t.stp(t.JSON.events.logs.guild.descAuditLogCreateChannel, {
   audit: t.languageFunction.getAuditLog(audit),
   executor: executor ? t.languageFunction.getUser(executor) : '',
   channel: t.languageFunction.getChannel(channel),
  }),
 descAuditLogCreateUser: (audit: APIAuditLogEntry, user: RUser, executor: RUser | undefined) =>
  t.stp(t.JSON.events.logs.guild.descAuditLogCreateUser, {
   audit: t.languageFunction.getAuditLog(audit),
   executor: executor ? t.languageFunction.getUser(executor) : '',
   user: t.languageFunction.getUser(user),
  }),
 descAuditLogCreateRole: (
  audit: APIAuditLogEntry,
  role: RRole | { id: string; name: string },
  executor: RUser | undefined,
 ) =>
  t.stp(t.JSON.events.logs.guild.descAuditLogCreateRole, {
   audit: t.languageFunction.getAuditLog(audit),
   executor: executor ? t.languageFunction.getUser(executor) : '',
   role: t.languageFunction.getRole(role),
  }),
 descAuditLogCreateInvite: (
  audit: APIAuditLogEntry,
  invite: RInvite,
  executor: RUser | undefined,
 ) =>
  t.stp(t.JSON.events.logs.guild.descAuditLogCreateInvite, {
   audit: t.languageFunction.getAuditLog(audit),
   executor: executor ? t.languageFunction.getUser(executor) : '',
   invite: t.languageFunction.getInvite(invite),
  }),
 descAuditLogCreateWebhook: (
  audit: APIAuditLogEntry,
  webhook: RWebhook,
  executor: RUser | undefined,
 ) =>
  t.stp(t.JSON.events.logs.guild.descAuditLogCreateWebhook, {
   audit: t.languageFunction.getAuditLog(audit),
   executor: executor ? t.languageFunction.getUser(executor) : '',
   webhook: t.languageFunction.getWebhook(webhook),
  }),
 descAuditLogCreateEmoji: (audit: APIAuditLogEntry, emoji: REmoji, executor: RUser | undefined) =>
  t.stp(t.JSON.events.logs.guild.descAuditLogCreateEmoji, {
   audit: t.languageFunction.getAuditLog(audit),
   executor: executor ? t.languageFunction.getUser(executor) : '',
   emoji: t.languageFunction.getEmote(emoji),
  }),
 descAuditLogCreateMessage: (
  audit: APIAuditLogEntry,
  message: RMessage,
  executor: RUser | undefined,
 ) =>
  t.stp(t.JSON.events.logs.guild.descAuditLogCreateMessage, {
   audit: t.languageFunction.getAuditLog(audit),
   executor: executor ? t.languageFunction.getUser(executor) : '',
   message: t.languageFunction.getMessage(message),
  }),
 descAuditLogCreateIntegration: (
  audit: APIAuditLogEntry,
  integration: RIntegration,
  executor: RUser | undefined,
 ) =>
  t.stp(t.JSON.events.logs.guild.descAuditLogCreateIntegration, {
   audit: t.languageFunction.getAuditLog(audit),
   executor: executor ? t.languageFunction.getUser(executor) : '',
   integration: t.languageFunction.getIntegration(integration),
  }),
 descAuditLogCreateStageInstance: (
  audit: APIAuditLogEntry,
  stageInstance: RStageInstance,
  executor: RUser | undefined,
 ) =>
  t.stp(t.JSON.events.logs.guild.descAuditLogCreateStageInstance, {
   audit: t.languageFunction.getAuditLog(audit),
   executor: executor ? t.languageFunction.getUser(executor) : '',
   stageInstance: t.languageFunction.getStageInstance(stageInstance),
  }),
 descAuditLogCreateSticker: (audit: APIAuditLogEntry, s: RSticker, executor: RUser | undefined) =>
  t.stp(t.JSON.events.logs.guild.descAuditLogCreateSticker, {
   audit: t.languageFunction.getAuditLog(audit),
   executor: executor ? t.languageFunction.getUser(executor) : '',
   sticker: t.languageFunction.getSticker(s),
  }),
 descAuditLogCreateThread: (
  audit: APIAuditLogEntry,
  thread: RThread,
  executor: RUser | undefined,
 ) =>
  t.stp(t.JSON.events.logs.guild.descAuditLogCreateThread, {
   audit: t.languageFunction.getAuditLog(audit),
   executor: executor ? t.languageFunction.getUser(executor) : '',
   thread: t.languageFunction.getChannel(thread),
  }),
 descAuditLogCreateGuildScheduledEvent: (
  audit: APIAuditLogEntry,
  s: REvent,
  executor: RUser | undefined,
 ) =>
  t.stp(t.JSON.events.logs.guild.descAuditLogCreateGuildScheduledEvent, {
   audit: t.languageFunction.getAuditLog(audit),
   executor: executor ? t.languageFunction.getUser(executor) : '',
   scheduledEvent: t.languageFunction.getScheduledEvent(s),
  }),
 descAuditLogCreateApplicationCommand: (
  audit: APIAuditLogEntry,
  applicationCommand: APIApplicationCommand,
  executor: RUser | undefined,
 ) =>
  t.stp(t.JSON.events.logs.guild.descAuditLogCreateApplicationCommand, {
   audit: t.languageFunction.getAuditLog(audit),
   executor: executor ? t.languageFunction.getUser(executor) : '',
   command: t.languageFunction.getCommand(applicationCommand),
  }),
 descAuditLogCreateAutoModerationRule: (
  audit: APIAuditLogEntry,
  autoModerationRule: RAutomod,
  executor: RUser | undefined,
 ) =>
  t.stp(t.JSON.events.logs.guild.descAuditLogCreateAutoModerationRule, {
   audit: t.languageFunction.getAuditLog(audit),
   executor: executor ? t.languageFunction.getUser(executor) : '',
   autoModerationRule: t.languageFunction.getAutoModerationRule(autoModerationRule),
  }),
 descAuditLogCreateAutoModeration: (
  audit: APIAuditLogEntry,
  user: RUser,
  rule: RAutomod,
  executor: RUser | undefined,
 ) =>
  t.stp(t.JSON.events.logs.guild.descAuditLogCreateAutoModeration, {
   audit: t.languageFunction.getAuditLog(audit),
   executor: executor ? t.languageFunction.getUser(executor) : '',
   member: t.languageFunction.getUser(user),
   autoModerationRule: t.languageFunction.getAutoModerationRule(rule),
  }),
 descMemberPrune: (executor: RUser, amount: number, days: number) =>
  t.stp(t.JSON.events.logs.guild.descMemberPrune, {
   executor: t.languageFunction.getUser(executor),
   amount: `${amount}`,
   days: `${days}`,
  }),
 welcomeChannelEmoji: (channel: RChannel) =>
  t.stp(t.JSON.events.logs.guild.welcomeChannelEmoji, {
   channel: t.languageFunction.getChannel(channel),
  }),
 defaultMessageNotifications: {
  0: t.JSON.events.logs.guild.defaultMessageNotifications[0],
  1: t.JSON.events.logs.guild.defaultMessageNotifications[1],
 },
 explicitContentFilter: {
  0: t.JSON.events.logs.guild.explicitContentFilter[0],
  1: t.JSON.events.logs.guild.explicitContentFilter[1],
  2: t.JSON.events.logs.guild.explicitContentFilter[2],
 },
 mfaLevel: {
  0: t.JSON.events.logs.guild.mfaLevel[0],
  1: t.JSON.events.logs.guild.mfaLevel[1],
 },
 nsfwLevel: {
  0: t.JSON.events.logs.guild.nsfwLevel[0],
  1: t.JSON.events.logs.guild.nsfwLevel[1],
  2: t.JSON.events.logs.guild.nsfwLevel[2],
  3: t.JSON.events.logs.guild.nsfwLevel[3],
 },
 verificationLevel: {
  0: t.JSON.events.logs.guild.verificationLevel[0],
  1: t.JSON.events.logs.guild.verificationLevel[1],
  2: t.JSON.events.logs.guild.verificationLevel[2],
  3: t.JSON.events.logs.guild.verificationLevel[3],
  4: t.JSON.events.logs.guild.verificationLevel[4],
 },
});
