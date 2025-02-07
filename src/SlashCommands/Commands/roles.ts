import {
 SlashCommandAttachmentOption,
 SlashCommandBooleanOption,
 SlashCommandBuilder,
 SlashCommandRoleOption,
 SlashCommandStringOption,
 SlashCommandSubcommandBuilder,
 SlashCommandSubcommandGroupBuilder,
 SlashCommandUserOption,
} from '@discordjs/builders';
import {
 ApplicationIntegrationType,
 InteractionContextType,
 PermissionFlagsBits,
} from 'discord-api-types/v10';

export default new SlashCommandBuilder()
 .setName('roles')
 .setDescription('Everything about Roles')
 .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
 .setContexts([InteractionContextType.Guild])
 .setIntegrationTypes([ApplicationIntegrationType.GuildInstall])
 .addSubcommandGroup(
  new SlashCommandSubcommandGroupBuilder()
   .setName('builders')
   .setDescription('Different kinds of Role Builders')
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('reaction-roles')
     .setDescription('Create a Reaction Role Message')
     .addStringOption(
      new SlashCommandStringOption()
       .setName('message')
       .setDescription('The Message you want to use')
       .setRequired(true),
     ),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('button-roles')
     .setDescription('Create a Button Role Message')
     .addStringOption(
      new SlashCommandStringOption()
       .setName('message')
       .setDescription('The Message you want to use')
       .setRequired(true),
     ),
   ),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('edit')
   .setDescription('Edit an existing Role')
   .addRoleOption(
    new SlashCommandRoleOption()
     .setName('role')
     .setDescription('The Role you want to edit')
     .setRequired(true),
   )
   .addStringOption(
    new SlashCommandStringOption()
     .setName('name')
     .setDescription('The new Name of the Role')
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
   .addBooleanOption(
    new SlashCommandBooleanOption()
     .setName('hoist')
     .setDescription('Whether the Role should be displayed separately')
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
   )
   .addBooleanOption(
    new SlashCommandBooleanOption()
     .setName('mentionable')
     .setDescription('Whether the Role should be mentionable')
     .setRequired(false),
   )
   .addRoleOption(
    new SlashCommandRoleOption()
     .setName('position-role')
     .setDescription('The Role to put this Role below')
     .setRequired(false),
   ),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('create')
   .setDescription('Create a new Role')
   .addStringOption(
    new SlashCommandStringOption()
     .setName('name')
     .setDescription('The Name of the new Role')
     .setMaxLength(100)
     .setRequired(true),
   )
   .addStringOption(
    new SlashCommandStringOption()
     .setName('color')
     .setDescription('The Color of the new Role (Hex Code)')
     .setMaxLength(6)
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
   )
   .addRoleOption(
    new SlashCommandRoleOption()
     .setName('position-role')
     .setDescription('The Role to put this Role under')
     .setRequired(false),
   )
   .addRoleOption(
    new SlashCommandRoleOption()
     .setName('permission-role')
     .setDescription('The Role to copy the Permissions from')
     .setRequired(false),
   ),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('delete')
   .setDescription('Delete a Role')
   .addRoleOption(
    new SlashCommandRoleOption()
     .setName('role')
     .setDescription('The Role to delete')
     .setRequired(true),
   ),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('info')
   .setDescription('View Information about a Role')
   .addRoleOption(
    new SlashCommandRoleOption()
     .setName('role')
     .setDescription('The Role to view the Information of')
     .setRequired(true),
   ),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('members')
   .setDescription('List all Members of a Roles')
   .addRoleOption(
    new SlashCommandRoleOption()
     .setName('role')
     .setDescription('The Role to view the Members of')
     .setRequired(true),
   ),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('give')
   .setDescription('Give a Role to a User')
   .addUserOption(
    new SlashCommandUserOption()
     .setName('user')
     .setDescription('The User to give the Role to')
     .setRequired(true),
   )
   .addRoleOption(
    new SlashCommandRoleOption()
     .setName('role')
     .setDescription('The Role to give to the User')
     .setRequired(true),
   )
   .addStringOption(
    new SlashCommandStringOption()
     .setName('reason')
     .setDescription('The Reason for giving the Role')
     .setRequired(false),
   ),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('take')
   .setDescription('Take a Role from a User')
   .addUserOption(
    new SlashCommandUserOption()
     .setName('user')
     .setDescription('The User to remove the Role from')
     .setRequired(true),
   )
   .addRoleOption(
    new SlashCommandRoleOption()
     .setName('role')
     .setDescription('The Role to remove from the User')
     .setRequired(true),
   )
   .addStringOption(
    new SlashCommandStringOption()
     .setName('reason')
     .setDescription('The Reason for giving the Role')
     .setRequired(false),
   ),
 );
