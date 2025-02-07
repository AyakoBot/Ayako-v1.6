import {
 SlashCommandBuilder,
 SlashCommandStringOption,
 SlashCommandSubcommandBuilder,
 SlashCommandSubcommandGroupBuilder,
} from '@discordjs/builders';
import { ApplicationIntegrationType, InteractionContextType } from 'discord-api-types/v10';

export default new SlashCommandBuilder()
 .setName('embed-builder')
 .setDescription('Everything around Embeds and custom Embeds')
 .setContexts([InteractionContextType.Guild])
 .setIntegrationTypes([ApplicationIntegrationType.GuildInstall])
 .addSubcommandGroup(
  new SlashCommandSubcommandGroupBuilder()
   .setName('view')
   .setDescription('View raw Embed Code')
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('custom-embeds')
     .setDescription('View raw Embed Code of your previously saved custom Embeds')
     .addStringOption(
      new SlashCommandStringOption()
       .setName('embed')
       .setDescription('Your saved custom Embeds')
       .setRequired(true)
       .setAutocomplete(true),
     ),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('from-message')
     .setDescription(`View the raw Embed Code of any Message`)
     .addStringOption(
      new SlashCommandStringOption()
       .setName('message-link')
       .setDescription('The Message Link of the Embeds you want to display')
       .setRequired(true),
     ),
   ),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder().setName('create').setDescription('Create a new custom Embed'),
 );
