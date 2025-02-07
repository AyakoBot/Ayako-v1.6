import {
 SlashCommandAttachmentOption,
 SlashCommandBuilder,
 SlashCommandStringOption,
} from '@discordjs/builders';
import { ApplicationIntegrationType, InteractionContextType } from 'discord-api-types/v10';

const suggest = new SlashCommandBuilder()
 .setName('suggest')
 .setDescription('Submit a new Suggestion')
 .setContexts([InteractionContextType.Guild])
 .setIntegrationTypes([ApplicationIntegrationType.GuildInstall])
 .addStringOption(
  new SlashCommandStringOption()
   .setName('content')
   .setDescription('The Content of the Suggestion')
   .setMaxLength(4096)
   .setRequired(true),
 );

new Array(5)
 .fill(null)
 .forEach((_, i) =>
  suggest.addAttachmentOption(
   new SlashCommandAttachmentOption()
    .setName(`attachment-${i}`)
    .setDescription('An Attachment for the Suggestion')
    .setRequired(false),
  ),
 );

export default suggest;
