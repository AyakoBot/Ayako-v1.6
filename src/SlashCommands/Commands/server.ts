import {
 SlashCommandBuilder,
 SlashCommandStringOption,
 SlashCommandSubcommandBuilder,
} from '@discordjs/builders';
import { ApplicationIntegrationType, InteractionContextType } from 'discord-api-types/v10';

export default new SlashCommandBuilder()
 .setName('server')
 .setDescription(`Get Information about Servers ${process.env.mainName} is on`)
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
   .setDescription('Get Information about a Server')
   .addStringOption(
    new SlashCommandStringOption()
     .setDescription('The ID of the Server')
     .setRequired(false)
     .setName('server-id'),
   )
   .addStringOption(
    new SlashCommandStringOption()
     .setName('server-name')
     .setDescription(
      `Name of the Server (Searches across all of ${process.env.mainName}'s Servers)`,
     )
     .setRequired(false)
     .setMinLength(1)
     .setAutocomplete(true),
   )
   .addStringOption(
    new SlashCommandStringOption()
     .setName('server-invite')
     .setDescription('Invite to the Server')
     .setRequired(false)
     .setMinLength(1),
   ),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('list')
   .setDescription(`Get a List of all Servers ${process.env.mainName} is on`),
 );
