import type {
 APIApplication,
 APIApplicationCommand,
 APIAuditLogEntry,
 APIGuildForumTag,
 APIGuildIntegrationApplication,
 APIMessageReference,
} from 'discord-api-types/v10.js';
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
import * as CT from '../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 getForumTag: (tag: APIGuildForumTag, emoji?: REmoji | string) =>
  `**${emoji}${t.util.util.makeInlineCode(tag.name)} / ${t.util.util.makeInlineCode(tag.id)}${
   tag.moderated
    ? ` / ${t.util.constants.standard.getEmote(t.util.emotes.userFlags.DiscordEmployee)}`
    : ''
  }**\n`,
 getGuild: (guild: RGuild) =>
  `**Server ${t.util.util.makeInlineCode(guild.name)} / ${t.util.util.makeInlineCode(guild.id)}${
   'vanityURLCode' in guild && guild.vanityURLCode
    ? ` / [${t.JSON.t.Join}](https://discord.gg/${guild.vanityURLCode})`
    : ''
  }**\n`,
 getChannel: (
  channel: RChannel | RThread | { id: string; name: string } | undefined | null,
  type?: string,
 ) =>
  channel
   ? `**${type ?? t.JSON.t.Channel} <#${channel.id}> / ${t.util.util.makeInlineCode(
      `${channel.name}`,
     )} / ${t.util.util.makeInlineCode(channel.id)}**\n`
   : `**${t.channelTypes.unknownChannel}**\n`,
 getUser: (user: RUser | { bot: boolean; id: string; username: string; discriminator: string }) =>
  `**${user?.bot ? t.JSON.t.Bot : t.JSON.t.User} <@${user?.id}> / ${t.util.util.makeInlineCode(
   user ? t.util.constants.standard.user(user) : t.JSON.t.Unknown,
  )} / ${t.util.util.makeInlineCode(user?.id)}**\n`,
 getAutoModerationRule: (rule: RAutomod) =>
  `**${t.JSON.t.AutoModRule} ${t.util.util.makeInlineCode(rule.name)} / ${t.util.util.makeInlineCode(
   rule.id,
  )}**\n`,
 getMessage: (msg: RMessage | APIMessageReference) =>
  `**[${t.JSON.t.thisMessage}](${t.util.constants.standard.msgurl(
   msg.guild_id,
   msg.channel_id,
   'id' in msg ? msg.id : (msg.message_id ?? ''),
  )})**\n`,
 getEmote: (emoji: REmoji) =>
  `**${t.JSON.t.Emoji} ${t.util.constants.standard.getEmote(emoji)} / \`${
   emoji.name ?? t.JSON.t.None
  }\` / \`${emoji.id ?? t.JSON.t.None}\`**\n`,
 getInvite: (invite: RInvite) =>
  `**${t.JSON.t.Invite} https://discord.gg/${invite.code} / \`${invite.code}\`**\n`,
 getInviteDetails(invite: RInvite, channel: RChannel, user?: RUser) {
  return `**${t.JSON.t.Code}: \`${invite.code}\`**\n${
   user ? `${t.JSON.t.Inviter}: ${this.getUser(user)}` : ''
  }${t.JSON.t.Uses}: ${invite.uses}\n${t.JSON.t.Created}: ${
   invite.created_at
    ? t.util.constants.standard.getTime(new Date(invite.created_at).getTime())
    : t.JSON.t.Unknown
  }\n${this.getChannel(channel, t.JSON.channelTypes[channel.type])}**`;
 },
 getIntegration: (integration: RIntegration) =>
  `**${t.JSON.t.Integration} \`${integration.name}\` / \`${integration.id}\`**\n`,
 getRole: (role: RRole | { id: string; name: string }) =>
  `**${t.JSON.t.Role} <@&${role.id}> / \`${role.name}\` / \`${role.id}\`**\n`,
 getApplication: (application: APIApplication | APIGuildIntegrationApplication | bigint) =>
  `**${t.JSON.t.Application} ${
   typeof application === 'bigint'
    ? `<@${application}> / \`${application}\``
    : `<@${application.id}> / \`${application.name}\` / \`${application.id}\`**\n`
  }**`,
 getScheduledEvent: (event: REvent) =>
  `**${t.JSON.t.ScheduledEvent} \`${event.name}\` / \`${event.id}\`**\n`,
 getWebhook: (webhook: RWebhook, type?: string) =>
  `**${type ? `${type} ` : ''}${t.JSON.t.Webhook} \`${webhook.name}\` / \`${webhook.id}\`**\n`,
 getCommand: (command: APIApplicationCommand) =>
  `**${t.JSON.t.Command} </${command.name}:${command.id}> / \`${command.name}\` / \`${command.id}\`**\n`,
 getPunishment: (id: string, cId: string) =>
  `**${t.JSON.t.Punishment} \`${Number(id).toString(36)}\`**\n${t.util.stp(
   t.JSON.t.lookupPunishment,
   {
    cId,
   },
  )}`,
 getSticker: (sticker: RSticker) =>
  `**${t.JSON.t.Sticker} \`${sticker.name}\` / \`${sticker.id}\`**\n`,
 getStageInstance(stageInstance: RStageInstance, channel: RChannel) {
  return `**${t.JSON.t.stageInstance} \`${stageInstance.topic}\` / \`${
   stageInstance.id
  }\`**\n> ${this.getChannel(channel, t.JSON.channelTypes[channel.type])}\n`;
 },
 getAuditLog: (audit: APIAuditLogEntry) =>
  `**${t.JSON.t.auditLog} \`${t.auditLogAction[audit.action_type]}\` / \`${audit.id}\`**\n`,
});
