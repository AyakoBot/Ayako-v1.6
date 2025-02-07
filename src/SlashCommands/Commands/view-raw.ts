import { ContextMenuCommandBuilder } from '@discordjs/builders';
import {
 ApplicationCommandType,
 ApplicationIntegrationType,
 InteractionContextType,
} from 'discord-api-types/v10';

export default new ContextMenuCommandBuilder()
 .setName('View Raw')
 .setType(ApplicationCommandType.Message)
 .setContexts([
  InteractionContextType.Guild,
  InteractionContextType.BotDM,
  InteractionContextType.PrivateChannel,
 ])
 .setIntegrationTypes([
  ApplicationIntegrationType.GuildInstall,
  ApplicationIntegrationType.UserInstall,
 ]);
