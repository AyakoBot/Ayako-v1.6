import {
 SlashCommandBuilder,
 SlashCommandStringOption,
 SlashCommandSubcommandBuilder,
} from '@discordjs/builders';
import { ApplicationIntegrationType, InteractionContextType } from 'discord-api-types/v10';

export default new SlashCommandBuilder()
 .setName('reminder')
 .setDescription('Reminder Commands')
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
   .setName('create')
   .setDescription('Create a Reminder')
   .addStringOption(
    new SlashCommandStringOption()
     .setName('duration')
     .setDescription('The Duration (Example: 4d 30m 12s)')
     .setRequired(true),
   )
   .addStringOption(
    new SlashCommandStringOption()
     .setName('content')
     .setDescription('The Content')
     .setMinLength(1)
     .setRequired(true),
   ),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder().setName('list').setDescription('List all of your Reminders'),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('edit')
   .setDescription('Edit a Reminder')
   .addStringOption(
    new SlashCommandStringOption()
     .setName('id')
     .setDescription('The ID of the Reminder')
     .setRequired(true)
     .setAutocomplete(true),
   )
   .addStringOption(
    new SlashCommandStringOption()
     .setName('content')
     .setDescription('The new Content')
     .setMinLength(1)
     .setRequired(true),
   ),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('delete')
   .setDescription('Delete a Reminder')
   .addStringOption(
    new SlashCommandStringOption()
     .setName('id')
     .setDescription('The ID of the Reminder')
     .setRequired(true)
     .setAutocomplete(true),
   ),
 );
