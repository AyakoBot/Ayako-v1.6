import * as Discord from 'discord.js';
import * as ch from '../../BaseClient/ClientHelper.js';
import * as DBT from '../../Typings/DataBaseTypings.js';

export default async (msg: Discord.AutoModerationActionExecution) => {
 if (msg.action.type !== Discord.AutoModerationActionType.BlockMessage) return;

 const settings = await ch.query(
  `SELECT * FROM blacklist WHERE guildid = $1 AND active = true;`,
  [msg.guild.id],
  {
   returnType: 'blacklist',
   asArray: false,
  },
 );
 if (!settings) return;

 reposter(msg, settings);
};

const reposter = async (msg: Discord.AutoModerationActionExecution, settings: DBT.blacklist) => {
 if (!settings.repostenabled) return;
 if (!settings.repostroles?.some((r) => msg.member?.roles.cache.has(r))) return;
 if (!msg.matchedContent && !msg.matchedKeyword) return;

 const webhook = await getWebhook(msg);
 if (!webhook) return;

 const content = await getContent(msg, settings);
 if (!content) return;

 webhook.send({
  username: msg.member?.displayName,
  avatarURL: msg.member?.displayAvatarURL() ?? msg.member?.user.displayAvatarURL(),
  content,
  threadId: (msg.channel?.isThread() ? msg.channelId : undefined) ?? undefined,
 });
};

const getContent = async (msg: Discord.AutoModerationActionExecution, settings: DBT.blacklist) => {
 const rules = (
  msg.guild.autoModerationRules.cache.size
   ? msg.guild.autoModerationRules.cache
   : await msg.guild.autoModerationRules
      .fetch()
      .catch(() => new Discord.Collection<string, Discord.AutoModerationRule>())
 )
  .filter((r) => r.eventType === Discord.AutoModerationRuleEventType.MessageSend)
  .filter((r) => (settings.repostrules?.length ? settings.repostrules?.includes(r.id) : true))
  .map((r) => r);
 if (!rules.length) return undefined;

 const presetRule = rules.find(
  (r) =>
   r.triggerMetadata.presets.length &&
   r.enabled &&
   r.actions.find((a) => a.type === Discord.AutoModerationActionType.BlockMessage),
 );

 const presetKeywords = presetRule
  ? await ch.query(
     `SELECT * FROM filterscraper WHERE (filtertype IN (${presetRule.triggerMetadata.presets
      .map((_, i) => `$${i + 1}`)
      .join(', ')}));`, // ;`
     presetRule.triggerMetadata.presets,
     {
      returnType: 'filterscraper',
      asArray: true,
     },
    )
  : [];

 let content = String(msg.content);

 presetKeywords?.forEach((p) => {
  content = content.replace(new RegExp(p.keyword, 'g'), '[...]');
 });

 rules.forEach((r) => {
  if (!r.enabled) return;

  if (r.triggerMetadata.regexPatterns) {
   r.triggerMetadata.regexPatterns.forEach((p) => {
    content = content.replace(new RegExp(p, 'g'), '[...]');
   });
  }

  const keywords = r.triggerMetadata.keywordFilter.map((k) =>
   // eslint-disable-next-line no-useless-escape
   k.replace(/\*/g, '').replace(/[\\\.\+\*\?\^\$\[\]\(\)\{\}\/\'\#\:\!\=\|]/gi, '\\$&'),
  );

  const matches = content.match(new RegExp(keywords.map((x) => `(\\w*${x}\\w*)`).join('|'), 'gi'));

  matches
   ?.filter((f) => f.length)
   ?.forEach((m) => {
    if (r.triggerMetadata.allowList.includes(m)) return;
    content = content.replace(new RegExp(m, 'g'), '[...]');
   });
 });

 if (msg.content === content) return undefined;

 content = content
  .replace(msg.matchedContent ?? '', msg.matchedContent ? '[...]' : '')
  .replace(msg.matchedKeyword ?? '', msg.matchedKeyword ? '[...]' : '');

 return content;
};

const getWebhook = async (msg: Discord.AutoModerationActionExecution) => {
 const channelOrThread = await msg.channel?.fetch().catch(() => undefined);
 const channel = channelOrThread?.isThread() ? channelOrThread.parent : channelOrThread;

 if (!channel) {
  ch.error(msg.guild, new Error("Channel not found or can't fetched"));
  return undefined;
 }

 if (!('createWebhook' in channel)) {
  ch.error(msg.guild, new Error('createWebhook does not exist on Channel'));
  return undefined;
 }

 if (
  !msg.guild.members.me?.permissionsIn(channel).has(Discord.PermissionFlagsBits.ManageWebhooks)
 ) {
  ch.error(msg.guild, new Error('Insufficent Permissions to manage Webhooks'));
  return undefined;
 }

 return ch.getChannelWebhook(channel);
};
