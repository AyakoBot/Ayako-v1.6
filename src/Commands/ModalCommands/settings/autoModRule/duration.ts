import * as Discord from 'discord.js';
import ms, { type StringValue } from 'ms';
import * as CT from '../../../../Typings/Typings.js';
import { getAPIRule } from '../../../ButtonCommands/settings/autoModRule/boolean.js';
import * as SettingsFile from '../../../SlashCommands/settings/moderation/denylist-rules.js';

const settingName = CT.SettingNames.DenylistRules;

export default async (cmd: Discord.ModalSubmitInteraction, args: string[]) => {
 if (!cmd.inCachedGuild()) return;
 if (!cmd.isFromMessage()) return;

 args.shift();

 const language = await cmd.client.util.getLanguage(cmd.guildId);

 const field = cmd.fields.fields.first();
 if (!field) {
  cmd.client.util.errorCmd(cmd, language.errors.numNaN, language);
  return;
 }

 const verify = (): Promise<{ value?: number; error?: Error }> =>
  new Promise((res) => {
   try {
    ms(field.value as StringValue);
    res({ value: cmd.client.util.getDuration(field.value) / 1000 });
   } catch (e) {
    res({ error: e as Error });
   }
  });
 const { value: newSetting, error } = await verify();

 if (error) {
  cmd.client.util.errorCmd(cmd, error, language);
  return;
 }

 const getId = () => {
  const arg = args.shift();
  if (arg) return arg;
  return undefined;
 };
 const id = getId();
 if (!id) {
  cmd.client.util.error(cmd.guild, new Error('No ID found'));
  return;
 }

 const rule = cmd.guild.autoModerationRules.cache.get(id);
 if (!rule) {
  cmd.client.util.errorCmd(cmd, language.errors.automodRuleNotFound, language);
  return;
 }

 const currentSetting = Number(
  rule.actions.find((a) => a.type === Discord.AutoModerationActionType.Timeout)?.metadata
   .durationSeconds,
 );

 const updatedRule = await cmd.client.util.request.guilds.editAutoModerationRule(
  rule.guild,
  rule.id,
  {
   actions: [
    ...getAPIRule(rule).actions.filter((a) => a.type !== Discord.AutoModerationActionType.Timeout),
    {
     type: Discord.AutoModerationActionType.Timeout,
     metadata: {
      duration_seconds: Number(newSetting),
     },
    },
   ],
  },
 );

 if ('message' in updatedRule) {
  cmd.client.util.errorCmd(cmd, updatedRule, language);
  return;
 }

 cmd.client.util.settingsHelpers.updateLog(
  { timeoutDuration: currentSetting } as never,
  { timeoutDuration: updatedRule?.['timeoutDuration' as keyof typeof updatedRule] } as never,
  'timeoutDuration' as Parameters<(typeof cmd.client.util)['settingsHelpers']['updateLog']>[2],
  settingName,
  id,
  cmd.guild,
  language,
  language.slashCommands.settings.categories[settingName],
 );

 const settingsFile = (await cmd.client.util.settingsHelpers.getSettingsFile(
  settingName,
  cmd.guild,
 )) as unknown as typeof SettingsFile;
 if (!settingsFile) return;

 cmd.update({
  embeds: settingsFile.getEmbeds(
   cmd.client.util.settingsHelpers.embedParsers,
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
