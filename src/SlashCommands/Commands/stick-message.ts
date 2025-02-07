import { ContextMenuCommandBuilder } from '@discordjs/builders';
import {
 ApplicationCommandType,
 ApplicationIntegrationType,
 InteractionContextType,
 PermissionFlagsBits,
} from 'discord-api-types/v10';

export default new ContextMenuCommandBuilder()
 .setName('Stick Message')
 .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
 .setType(ApplicationCommandType.Message)
 .setContexts([InteractionContextType.Guild])
 .setIntegrationTypes([ApplicationIntegrationType.GuildInstall]);
