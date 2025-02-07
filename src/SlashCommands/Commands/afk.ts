import { SlashCommandBuilder, SlashCommandStringOption } from '@discordjs/builders';
import { ApplicationIntegrationType, InteractionContextType } from 'discord-api-types/v10';

export default new SlashCommandBuilder()
 .setName('afk')
 .setDescription('Set your AFK Status')
 .setContexts([InteractionContextType.Guild])
 .setIntegrationTypes([ApplicationIntegrationType.GuildInstall])
 .addStringOption(
  new SlashCommandStringOption()
   .setName('reason')
   .setDescription('The Reason for being AFK')
   .setRequired(false),
 );
