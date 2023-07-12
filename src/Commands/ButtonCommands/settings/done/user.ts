import * as Discord from 'discord.js';
import * as ch from '../../../../BaseClient/ClientHelper.js';
import type * as CT from '../../../../Typings/CustomTypings';

export default async (cmd: Discord.ButtonInteraction, args: string[]) => {
 if (!cmd.inCachedGuild()) return;

 const settingName = args.shift() as keyof CT.TableNamesMap;
 if (!settingName) return;

 const fieldName = args.shift();
 if (!fieldName) return;

 const tableName = ch.constants.commands.settings.tableNames[
  settingName as keyof typeof ch.constants.commands.settings.tableNames
 ] as keyof CT.TableNamesMap;
 type SettingsType = CT.TableNamesMap[typeof tableName];

 const getUniquetimestamp = () => {
  const arg = args.shift();
  if (arg) return Number(arg);
  return undefined;
 };
 const uniquetimestamp = getUniquetimestamp();

 const currentSetting = (await ch.settingsHelpers.changeHelpers.get(
  tableName,
  fieldName,
  cmd.guildId,
  uniquetimestamp,
 )) as SettingsType;

 const userText = cmd.message.embeds[0].description?.split(/,\s/g);
 const userIDs = userText
  ?.map((c) => c.replace(/\D/g, '') || undefined)
  .filter((c): c is string => !!c)?.[0];

 const updatedSetting = (await ch.settingsHelpers.changeHelpers.getAndInsert(
  tableName,
  fieldName,
  cmd.guildId,
  userIDs,
  uniquetimestamp,
 )) as SettingsType;

 ch.settingsHelpers.updateLog(
  currentSetting,
  { [fieldName]: updatedSetting?.[fieldName as keyof typeof updatedSetting] },
  fieldName,
  settingName,
  uniquetimestamp,
 );

 const settingsFile = await ch.settingsHelpers.getSettingsFile(settingName, tableName, cmd.guild);
 if (!settingsFile) return;

 const language = await ch.languageSelector(cmd.guildId);

 cmd.update({
  embeds: await settingsFile.getEmbeds(
   ch.settingsHelpers.embedParsers,
   updatedSetting,
   language,
   language.slashCommands.settings.categories[settingName],
  ),
  components: await settingsFile.getComponents(
   ch.settingsHelpers.buttonParsers,
   updatedSetting,
   language,
  ),
 });
};
