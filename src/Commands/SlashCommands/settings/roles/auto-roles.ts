import * as Discord from 'discord.js';
import * as ch from '../../../../BaseClient/ClientHelper.js';
import * as CT from '../../../../Typings/Typings.js';

const name = CT.SettingNames.AutoRoles;

export default async (cmd: Discord.ChatInputCommandInteraction) => {
 if (!cmd.inCachedGuild()) return;

 const language = await ch.getLanguage(cmd.guild?.id);
 const lan = language.slashCommands.settings.categories[name];
 const { embedParsers, buttonParsers } = ch.settingsHelpers;
 const settings = await ch.DataBase[CT.SettingsName2TableName[name]]
  .findUnique({
   where: { guildid: cmd.guildId },
  })
  .then(
   (r) =>
    r ??
    ch.DataBase[CT.SettingsName2TableName[name]].create({
     data: { guildid: cmd.guildId },
    }),
  );

 cmd.reply({
  embeds: await getEmbeds(embedParsers, settings, language, lan, cmd.guild),
  components: await getComponents(buttonParsers, settings, language),
  ephemeral: true,
 });
};

export const getEmbeds: CT.SettingsFile<typeof name>['getEmbeds'] = (
 embedParsers,
 settings,
 language,
 lan,
) => [
 {
  author: embedParsers.author(language, lan),
  description: ch.constants.tutorials[name as keyof typeof ch.constants.tutorials]?.length
   ? `${language.slashCommands.settings.tutorial}\n${ch.constants.tutorials[
      name as keyof typeof ch.constants.tutorials
     ].map((t) => `[${t.name}](${t.link})`)}`
   : undefined,
  fields: [
   {
    name: language.slashCommands.settings.active,
    value: embedParsers.boolean(settings?.active, language),
    inline: false,
   },
   {
    name: lan.fields.botroleid.name,
    value: embedParsers.roles(settings?.botroleid, language),
    inline: true,
   },
   {
    name: lan.fields.userroleid.name,
    value: embedParsers.roles(settings?.userroleid, language),
    inline: true,
   },
   {
    name: lan.fields.allroleid.name,
    value: embedParsers.roles(settings?.allroleid, language),
    inline: true,
   },
  ],
 },
];

export const getComponents: CT.SettingsFile<typeof name>['getComponents'] = (
 buttonParsers,
 settings,
 language,
) => [
 {
  type: Discord.ComponentType.ActionRow,
  components: [
   buttonParsers.global(language, !!settings?.active, CT.GlobalDescType.Active, name, undefined),
  ],
 },
 {
  type: Discord.ComponentType.ActionRow,
  components: [
   buttonParsers.specific(
    language,
    settings?.botroleid,
    'botroleid',
    name,
    undefined,
    CT.EditorTypes.Role,
   ),
   buttonParsers.specific(
    language,
    settings?.userroleid,
    'userroleid',
    name,
    undefined,
    CT.EditorTypes.Role,
   ),
   buttonParsers.specific(
    language,
    settings?.allroleid,
    'allroleid',
    name,
    undefined,
    CT.EditorTypes.Role,
   ),
  ],
 },
];
