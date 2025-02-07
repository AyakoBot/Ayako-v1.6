import {
 SlashCommandBuilder,
 SlashCommandChannelOption,
 SlashCommandRoleOption,
 SlashCommandStringOption,
 SlashCommandSubcommandBuilder,
 SlashCommandUserOption,
} from '@discordjs/builders';
import { ApplicationIntegrationType, InteractionContextType } from 'discord-api-types/v10.js';
import { ephemeral } from './images.js';

export default new SlashCommandBuilder()
 .setName('info')
 .setDescription('Display Information about anything on Discord')
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
   .setName('invite')
   .setDescription('Display Information about an Invite')
   .addStringOption(
    new SlashCommandStringOption()
     .setName('invite')
     .setDescription('The Invite you want to get Information about')
     .setRequired(true),
   )
   .addBooleanOption(ephemeral),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('user')
   .setDescription('Display Information about a User')
   .addUserOption(
    new SlashCommandUserOption().setName('user').setDescription('The User').setRequired(false),
   )
   .addStringOption(
    new SlashCommandStringOption()
     .setName('user-name')
     .setDescription(
      `Username of the User (Searches across all of ${process.env.mainName}'s Servers)`,
     )
     .setRequired(false)
     .setMinLength(2)
     .setAutocomplete(true),
   )
   .addBooleanOption(ephemeral),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('servers')
   .setDescription(`Display all servers ${process.env.mainName} is part of`)
   .addBooleanOption(ephemeral),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('server')
   .setDescription('Display Information about a Server')
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
   )
   .addBooleanOption(ephemeral),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('channel')
   .setDescription('Display Information about a Channel')
   .addChannelOption(
    new SlashCommandChannelOption()
     .setName('channel')
     .setDescription('The Channel you want to get Information about')
     .setRequired(true),
   )
   .addBooleanOption(ephemeral),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('role')
   .setDescription('Display Information about a Role')
   .addRoleOption(
    new SlashCommandRoleOption()
     .setName('role')
     .setDescription('The Role you want to get Information about')
     .setRequired(true),
   )
   .addBooleanOption(ephemeral),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('bot')
   .setDescription(`Display Information about a ${process.env.mainName}`)
   .addBooleanOption(ephemeral),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('badges')
   .setDescription('Display Information about the Discord Badges Members of this Server have')
   .addBooleanOption(ephemeral),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('emoji')
   .setDescription('Display Information about an Emoji')
   .addStringOption(
    new SlashCommandStringOption()
     .setName('emoji')
     .setDescription('The Emoji you want to get Information about')
     .setRequired(false),
   )
   .addBooleanOption(ephemeral),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('sticker')
   .setDescription('Display Information about a Sticker')
   .addStringOption(
    new SlashCommandStringOption()
     .setName('sticker')
     .setDescription('A Message Link to the Sticker you want info about (can also be a Sticker ID)')
     .setRequired(false),
   )
   .addBooleanOption(ephemeral),
 );
