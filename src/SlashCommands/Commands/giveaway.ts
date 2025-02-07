import {
 SlashCommandBooleanOption,
 SlashCommandBuilder,
 SlashCommandChannelOption,
 SlashCommandIntegerOption,
 SlashCommandRoleOption,
 SlashCommandStringOption,
 SlashCommandSubcommandBuilder,
 SlashCommandUserOption,
} from '@discordjs/builders';
import {
 ApplicationIntegrationType,
 InteractionContextType,
 PermissionFlagsBits,
} from 'discord-api-types/v10.js';
import { GuildTextChannelTypes } from '../../Typings/Channel.js';

export default new SlashCommandBuilder()
 .setName('giveaway')
 .setDescription('Giveaway Management Commands')
 .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
 .setContexts([InteractionContextType.Guild])
 .setIntegrationTypes([ApplicationIntegrationType.GuildInstall])
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('create')
   .setDescription('Create a Giveaway')
   .addStringOption(
    new SlashCommandStringOption()
     .setName('prize-description')
     .setDescription('The Prize of the Giveaway')
     .setRequired(true),
   )
   .addStringOption(
    new SlashCommandStringOption()
     .setName('time')
     .setDescription('The Time of the Giveaway (1d 2h 5m)')
     .setRequired(true),
   )
   .addIntegerOption(
    new SlashCommandIntegerOption()
     .setName('winners')
     .setDescription('The Amount of Winners')
     .setMinValue(1)
     .setMaxValue(100)
     .setRequired(true),
   )
   .addChannelOption(
    new SlashCommandChannelOption()
     .setName('channel')
     .setDescription('The Channel where the Giveaway should be created')
     .setRequired(false)
     .addChannelTypes(...GuildTextChannelTypes),
   )
   .addRoleOption(
    new SlashCommandRoleOption()
     .setName('role')
     .setDescription('The Role that is required to enter the Giveaway')
     .setRequired(false),
   )
   .addUserOption(
    new SlashCommandUserOption()
     .setName('host')
     .setDescription('The Host of the Giveaway')
     .setRequired(false),
   )
   .addStringOption(
    new SlashCommandStringOption()
     .setName('prize')
     .setDescription("The Prize of the Giveaway (will be DM'd to the Winner(s) if set)")
     .setRequired(false),
   )
   .addStringOption(
    new SlashCommandStringOption()
     .setName('claiming-timeout')
     .setDescription('The Time during which the Winners can claim their Prize (1d 2h 5m)')
     .setRequired(false),
   )
   .addBooleanOption(
    new SlashCommandBooleanOption()
     .setName('claim-fail-reroll')
     .setDescription(
      'Whether the Giveaway should be rerolled if a Winner fails to claim their Prize',
     )
     .setRequired(false),
   ),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('end')
   .setDescription('End a Giveaway prematurely')
   .addStringOption(
    new SlashCommandStringOption()
     .setName('message-id')
     .setDescription('The Message ID of the Giveaway')
     .setAutocomplete(true)
     .setRequired(true),
   ),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('reroll')
   .setDescription('Reroll a Giveaway (Please default to the Reroll Button if possible)')
   .addStringOption(
    new SlashCommandStringOption()
     .setName('message-id')
     .setDescription('The Message ID of the Giveaway')
     .setAutocomplete(true)
     .setRequired(true),
   ),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder().setName('list').setDescription('List all Giveaways'),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('edit')
   .setDescription('Edit a Giveaway')
   .addStringOption(
    new SlashCommandStringOption()
     .setName('message-id')
     .setDescription('The Message ID of the Giveaway')
     .setAutocomplete(true)
     .setRequired(true),
   )
   .addStringOption(
    new SlashCommandStringOption()
     .setName('prize-description')
     .setDescription('The Prize of the Giveaway')
     .setRequired(false),
   )
   .addStringOption(
    new SlashCommandStringOption()
     .setName('time')
     .setDescription('The Time of the Giveaway (1d 2h 5m)')
     .setRequired(false),
   )
   .addIntegerOption(
    new SlashCommandIntegerOption()
     .setName('winners')
     .setDescription('The Amount of Winners')
     .setMinValue(1)
     .setMaxValue(100)
     .setRequired(false),
   )
   .addRoleOption(
    new SlashCommandRoleOption()
     .setName('role')
     .setDescription('The Role that is required to enter the Giveaway')
     .setRequired(false),
   )
   .addUserOption(
    new SlashCommandUserOption()
     .setName('host')
     .setDescription('The Host of the Giveaway')
     .setRequired(false),
   )
   .addStringOption(
    new SlashCommandStringOption()
     .setName('prize')
     .setDescription('The Prize of the Giveaway (Winners will be able to claim it if set)')
     .setRequired(false),
   )
   .addStringOption(
    new SlashCommandStringOption()
     .setName('claiming-timeout')
     .setDescription('The Time during which the Winners can claim their Prize (1d 2h 5m)')
     .setRequired(false),
   )
   .addBooleanOption(
    new SlashCommandBooleanOption()
     .setName('claim-fail-reroll')
     .setDescription(
      'Whether the Giveaway should be rerolled if a Winner fails to claim their Prize',
     )
     .setRequired(false),
   ),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('cancel')
   .setDescription('Cancel a Giveaway')
   .addStringOption(
    new SlashCommandStringOption()
     .setName('message-id')
     .setDescription('The Message ID of the Giveaway')
     .setAutocomplete(true)
     .setRequired(true),
   ),
 );
