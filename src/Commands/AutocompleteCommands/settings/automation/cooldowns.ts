import client from '../../../../BaseClient/Client.js';
import * as ch from '../../../../BaseClient/ClientHelper.js';
import * as CT from '../../../../Typings/Typings.js';

const f: CT.AutoCompleteFile['default'] = async (cmd) => {
 const settings = (
  await ch.DataBase.cooldowns.findMany({ where: { guildid: cmd.guild.id } })
 )?.filter((s) => {
  const id = 'options' in cmd ? String(cmd.options.get('id', false)?.value) : undefined;

  return id ? Number(s.uniquetimestamp).toString(36).includes(id) : true;
 });

 const language = await ch.getLanguage(cmd.guild.id);
 const lan = language.slashCommands.settings.categories.cooldowns;

 if (!settings) return [];

 return settings?.map((s) => {
  const isID = s.command?.length === s.command?.replace(/\D+/g, '').length;
  const command =
   isID && s.command ? client.application?.commands.cache.get(s.command)?.name : s.command;

  return {
   name: `${lan.fields.command.name}: ${command ?? language.t.None} - ${
    lan.fields.cooldown.name
   }: ${ch.settingsHelpers.embedParsers.time(
    s.cooldown ? Number(s.cooldown) * 1000 : null,
    language,
   )}`,
   value: Number(s.uniquetimestamp).toString(36),
  };
 });
};

export default f;
