import {
 SlashCommandBuilder,
 SlashCommandStringOption,
 SlashCommandSubcommandBuilder,
 SlashCommandUserOption,
} from '@discordjs/builders';
import { ApplicationIntegrationType, InteractionContextType } from 'discord-api-types/v10';

const User = new SlashCommandUserOption()
 .setName('user')
 .setDescription('The User')
 .setRequired(false);

export default new SlashCommandBuilder()
 .setName('user')
 .setDescription('Get Information about a User')
 .setContexts([
  InteractionContextType.BotDM,
  InteractionContextType.Guild,
  InteractionContextType.PrivateChannel,
 ])
 .setIntegrationTypes([
  ApplicationIntegrationType.GuildInstall,
  ApplicationIntegrationType.UserInstall,
 ])
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('info')
   .setDescription('Get Information about a User')
   .addUserOption(User)
   .addStringOption(
    new SlashCommandStringOption()
     .setName('user-name')
     .setDescription(
      `Username of the User (Searches across all of ${process.env.mainName}'s Servers)`,
     )
     .setRequired(false)
     .setMinLength(2)
     .setAutocomplete(true),
   ),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('avatar')
   .setDescription('Get the Avatar of a User')
   .addUserOption(User),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('banner')
   .setDescription('Get the Banner of a User')
   .addUserOption(User),
 );
