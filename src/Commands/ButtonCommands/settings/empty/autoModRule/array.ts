import * as Discord from 'discord.js';
import * as ch from '../../../../../BaseClient/ClientHelper.js';
import * as SettingsFile from '../../../../SlashCommands/settings/moderation/denylist-rules.js';
import CT from '../../../../../Typings/CustomTypings.js';

const settingName = 'denylist-rules';

export default async (cmd: Discord.ButtonInteraction, args: string[]) => {
 if (!cmd.inCachedGuild()) return;

 args.shift();
 const fieldName = args.shift() as 'exemptChannels' | 'exemptRoles';

 const getID = () => {
  const arg = args.shift();
  if (arg) return arg;
  return undefined;
 };
 const id = getID();
 if (!id) {
  ch.error(cmd.guild, new Error('No ID found'));
  return;
 }

 const language = await ch.getLanguage(cmd.guildId);
 const rule = cmd.guild.autoModerationRules.cache.get(id);
 if (!rule) {
  ch.errorCmd(cmd, language.errors.automodRuleNotFound, language);
  return;
 }

 const oldSetting = structuredClone(
  fieldName === 'exemptChannels'
   ? rule.exemptChannels.map((o) => o.id)
   : rule.exemptRoles.map((o) => o.id),
 );
 const updatedRule = await (fieldName === 'exemptChannels'
  ? ch.request.guilds.editAutoModerationRule(
     cmd.guild,
     rule.id,
     { exempt_channels: [] },
     cmd.user.username,
    )
  : ch.request.guilds.editAutoModerationRule(
     cmd.guild,
     rule.id,
     { exempt_roles: [] },
     cmd.user.username,
    )
 ).catch((e) => e as Discord.DiscordAPIError);

 if ('message' in updatedRule) {
  ch.errorCmd(cmd, updatedRule, language);
  return;
 }

 ch.settingsHelpers.updateLog(
  { exemptChannels: oldSetting } as never,
  { exemptChannels: rule?.[fieldName as keyof typeof rule] } as never,
  fieldName as CT.Argument<(typeof ch)['settingsHelpers']['updateLog'], 2>,
  settingName,
  id,
  cmd.guild,
  language,
  language.slashCommands.settings.categories[settingName],
 );

 const settingsFile = (await ch.settingsHelpers.getSettingsFile(
  settingName,
  cmd.guild,
 )) as unknown as typeof SettingsFile;
 if (!settingsFile) return;

 cmd.update({
  embeds: settingsFile.getEmbeds(
   ch.settingsHelpers.embedParsers,
   updatedRule,
   language,
   language.slashCommands.settings.categories[settingName],
  ),
  components: settingsFile.getComponents(
   updatedRule,
   language,
   language.slashCommands.settings.categories[settingName],
  ),
 });
};
