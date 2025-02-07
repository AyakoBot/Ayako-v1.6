import {
 SlashCommandAttachmentOption,
 SlashCommandBuilder,
 SlashCommandRoleOption,
 SlashCommandStringOption,
} from '@discordjs/builders';
import { ApplicationIntegrationType, InteractionContextType } from 'discord-api-types/v10';

export default new SlashCommandBuilder()
 .setName('custom-role')
 .setDescription('Create a custom Role')
 .setContexts([InteractionContextType.Guild])
 .setIntegrationTypes([ApplicationIntegrationType.GuildInstall])
 .addStringOption(
  new SlashCommandStringOption()
   .setName('name')
   .setDescription('The Name of your custom Role')
   .setMaxLength(100)
   .setRequired(false),
 )
 .addStringOption(
  new SlashCommandStringOption()
   .setName('color')
   .setDescription('The new Color of the Role (Hex Code)')
   .setMaxLength(6)
   .setRequired(false),
 )
 .addRoleOption(
  new SlashCommandRoleOption()
   .setName('color-role')
   .setDescription('The Role to copy the Color from')
   .setRequired(false),
 )
 .addAttachmentOption(
  new SlashCommandAttachmentOption()
   .setName('icon')
   .setDescription('The new Icon of the Role')
   .setRequired(false),
 )
 .addStringOption(
  new SlashCommandStringOption()
   .setName('icon-emoji')
   .setDescription('The new Icon of the Role derived from an Emoji')
   .setRequired(false),
 )
 .addStringOption(
  new SlashCommandStringOption()
   .setName('icon-url')
   .setDescription('The new Icon of the Role derived from a URL')
   .setRequired(false),
 );
