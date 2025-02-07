import {
 SlashCommandBuilder,
 SlashCommandStringOption,
 SlashCommandSubcommandBuilder,
 SlashCommandUserOption,
 type ToAPIApplicationCommandOptions,
} from '@discordjs/builders';
import {
 ApplicationCommandOptionType,
 ApplicationIntegrationType,
 InteractionContextType,
} from 'discord-api-types/v10.js';
import interactions from '../../BaseClient/Other/constants/interactions.js';
import getChunks from '../../BaseClient/UtilModules/getChunks.js';
import { getRegisterCommands } from '../../Commands/ButtonCommands/rp/toggle.js';

const commands = getRegisterCommands(interactions);
const commandChunks = getChunks(commands, 25);

const actions = new Array(commandChunks.length)
 .fill(null)
 .map((_, i) =>
  new SlashCommandBuilder()
   .setName(`actions-${i}`)
   .setDescription('RP-Actions')
   .setContexts([InteractionContextType.Guild, InteractionContextType.PrivateChannel])
   .setIntegrationTypes([ApplicationIntegrationType.UserInstall]),
 );

const setOptions = (
 subcommand: SlashCommandSubcommandBuilder,
 options: ToAPIApplicationCommandOptions[],
) => {
 options.forEach((opt) => {
  const o = opt.toJSON();

  switch (o.type) {
   case ApplicationCommandOptionType.String:
    subcommand.addStringOption(
     new SlashCommandStringOption()
      .setName(o.name)
      .setNameLocalizations(o.name_localizations ?? {})
      .setDescription(o.description)
      .setDescriptionLocalizations(o.description_localizations ?? {}),
    );
    break;
   case ApplicationCommandOptionType.User:
    subcommand.addUserOption(
     new SlashCommandUserOption()
      .setName(o.name)
      .setNameLocalizations(o.name_localizations ?? {})
      .setDescription(o.description)
      .setDescriptionLocalizations(o.description_localizations ?? {})
      .setRequired(o.required || false),
    );
    break;
   default:
    break;
  }
 });
};

commandChunks.forEach((chunk, i) => {
 chunk.forEach((c) => {
  actions[i].addSubcommand((subcommand) => {
   subcommand
    .setName(c.name)
    .setNameLocalizations(c.name_localizations ?? {})
    .setDescription(c.description)
    .setDescriptionLocalizations(c.description_localizations ?? {});

   setOptions(subcommand, c.options);

   return subcommand;
  });
 });
});

export default actions;
