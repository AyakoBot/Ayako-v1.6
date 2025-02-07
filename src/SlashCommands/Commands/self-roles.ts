import { SlashCommandBuilder, SlashCommandStringOption } from '@discordjs/builders';
import { ApplicationIntegrationType, InteractionContextType } from 'discord-api-types/v10';

export default new SlashCommandBuilder()
 .setName('self-roles')
 .setDescription('Get yourself some Self-Assignable Roles')
 .setContexts([InteractionContextType.Guild])
 .setIntegrationTypes([ApplicationIntegrationType.GuildInstall])
 .addStringOption(
  new SlashCommandStringOption()
   .setName('category')
   .setDescription('The Category of Self-Roles you want to see')
   .setRequired(true)
   .setAutocomplete(true),
 );
