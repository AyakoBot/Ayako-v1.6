import {
 SlashCommandBuilder,
 SlashCommandStringOption,
 SlashCommandSubcommandBuilder,
} from '@discordjs/builders';
import { ApplicationIntegrationType, InteractionContextType } from 'discord-api-types/v10';

export default new SlashCommandBuilder()
 .setName('help')
 .setDescription('Get Help for the Bot')
 .setContexts([InteractionContextType.BotDM, InteractionContextType.Guild])
 .setIntegrationTypes([ApplicationIntegrationType.GuildInstall])
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('list')
   .setDescription('See a list of all Commands and Categories')
   .addStringOption(
    new SlashCommandStringOption()
     .setName('type')
     .setDescription('The Category to list Commands for')
     .setRequired(false)
     .addChoices(
      ...[
       ['Moderation', 'moderation'],
       ['Info', 'info'],
       ['Utility', 'utility'],
       ['Leveling', 'leveling'],
       ['Nitro', 'nitro'],
       ['Vote', 'vote'],
       ['Roles', 'roles'],
       ['Channels', 'channels'],
       ['Shop', 'shop'],
       ['Automation', 'automation'],
       ['Fun', 'fun'],
      ].map((c) => ({ name: c[0], value: c[1] })),
     ),
   ),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('command')
   .setDescription('See Help for a specific Command')
   .addStringOption(
    new SlashCommandStringOption()
     .setName('command')
     .setDescription('The Command to see Help for')
     .setRequired(true)
     .setAutocomplete(true),
   ),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('moderation')
   .setDescription('Help for the Moderation Commands'),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder().setName('info').setDescription('Help for the Info Commands'),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('utility')
   .setDescription('Help for the Utility Commands'),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('leveling')
   .setDescription('Help for the Leveling Commands'),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('nitro')
   .setDescription('Help for the Nitro Commands'),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder().setName('vote').setDescription('Help for the Vote Commands'),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder().setName('roles').setDescription('Help for the Role Commands'),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('channels')
   .setDescription('Help for the Channel Commands'),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder().setName('shop').setDescription('Help for the Shop Commands'),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('automation')
   .setDescription('Help for the Automation Commands'),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder().setName('fun').setDescription('Help for the Fun Commands'),
 );
