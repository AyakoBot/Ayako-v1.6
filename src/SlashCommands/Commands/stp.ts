import { SlashCommandBuilder, SlashCommandStringOption } from '@discordjs/builders';
import { ApplicationIntegrationType, InteractionContextType } from 'discord-api-types/v10';

export default new SlashCommandBuilder()
 .setName('stp')
 .setDescription('String Replace Test')
 .setContexts([
  InteractionContextType.BotDM,
  InteractionContextType.Guild,
  InteractionContextType.PrivateChannel,
 ])
 .setIntegrationTypes([
  ApplicationIntegrationType.GuildInstall,
  ApplicationIntegrationType.UserInstall,
 ])
 .addStringOption(
  new SlashCommandStringOption()
   .setName('string')
   .setDescription('The String to replace')
   .setRequired(true),
 );
