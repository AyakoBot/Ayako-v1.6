import {
 SlashCommandBooleanOption,
 SlashCommandBuilder,
 SlashCommandChannelOption,
 SlashCommandIntegerOption,
 SlashCommandStringOption,
 SlashCommandSubcommandBuilder,
} from '@discordjs/builders';
import { ApplicationIntegrationType, InteractionContextType } from 'discord-api-types/v10.js';
import { AllNonThreadGuildChannelTypes } from '../../Typings/Channel.js';

export default new SlashCommandBuilder()
 .setName('invites')
 .setDescription('Detailed Information and Utilities about Invites')
 .setContexts([InteractionContextType.Guild])
 .setIntegrationTypes([ApplicationIntegrationType.GuildInstall])
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('info')
   .setDescription('Get Information about an Invite')
   .addStringOption(
    new SlashCommandStringOption().setName('invite').setDescription('The Invite').setRequired(true),
   ),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('create')
   .setDescription('Create an Invite')
   .addChannelOption(
    new SlashCommandChannelOption()
     .setName('channel')
     .setDescription('The Channel where the Invite should be created')
     .setRequired(false)
     .addChannelTypes(...AllNonThreadGuildChannelTypes),
   )
   .addIntegerOption(
    new SlashCommandIntegerOption()
     .setName('max-uses')
     .setDescription('The Maximum Amount of Uses')
     .setMaxValue(100)
     .setMinValue(1)
     .setRequired(false),
   )
   .addStringOption(
    new SlashCommandStringOption()
     .setName('max-age')
     .setDescription('The Maximum Age (Between 0 and 7 Days (Example: 4d 2 h 5 mins))')
     .setRequired(false),
   )
   .addBooleanOption(
    new SlashCommandBooleanOption()
     .setName('temporary')
     .setDescription('Whether the Invite grants temporary Membership')
     .setRequired(false),
   )
   .addBooleanOption(
    new SlashCommandBooleanOption()
     .setName('unique')
     .setDescription('Whether the Invite should be unique')
     .setRequired(false),
   ),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('delete')
   .setDescription('Delete an Invite')
   .addStringOption(
    new SlashCommandStringOption().setName('invite').setDescription('The Invite').setRequired(true),
   )
   .addStringOption(
    new SlashCommandStringOption()
     .setName('reason')
     .setDescription('The Reason')
     .setRequired(false),
   ),
 );
