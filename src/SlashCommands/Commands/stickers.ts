import {
 SlashCommandAttachmentOption,
 SlashCommandBuilder,
 SlashCommandStringOption,
 SlashCommandSubcommandBuilder,
 SlashCommandSubcommandGroupBuilder,
} from '@discordjs/builders';
import {
 ApplicationIntegrationType,
 InteractionContextType,
 PermissionFlagsBits,
} from 'discord-api-types/v10';

const StickerName = new SlashCommandStringOption()
 .setName('name')
 .setDescription('The Name of the Sticker')
 .setMaxLength(30)
 .setMinLength(2)
 .setRequired(true);

const StickerDescription = new SlashCommandStringOption()
 .setName('description')
 .setDescription('The Description of the Sticker')
 .setRequired(true)
 .setMaxLength(100);

const RelatedEmoji = new SlashCommandStringOption()
 .setName('emoji')
 .setDescription('The related Emoji')
 .setRequired(true)
 .setAutocomplete(true);

export default new SlashCommandBuilder()
 .setName('stickers')
 .setDescription('Detailed Information and Utilities about Sticker')
 .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
 .setContexts([InteractionContextType.Guild])
 .setIntegrationTypes([ApplicationIntegrationType.GuildInstall])
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('info')
   .setDescription('Information about many Stickers of the Server, or a specific Sticker')
   .addStringOption(
    new SlashCommandStringOption()
     .setName('sticker')
     .setDescription('A Message Link to the Sticker you want info about (can also be a Sticker ID)')
     .setRequired(false),
   ),
 )
 .addSubcommandGroup(
  new SlashCommandSubcommandGroupBuilder()
   .setName('create')
   .setDescription('Create a new Sticker')
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('from-message')
     .setDescription('Create a Sticker from Message Link')
     .addStringOption(
      new SlashCommandStringOption()
       .setName('link')
       .setDescription('The Message Link to create the Sticker from')
       .setRequired(true),
     )
     .addStringOption(StickerName)
     .addStringOption(StickerDescription)
     .addStringOption(RelatedEmoji)
     .addStringOption(
      new SlashCommandStringOption()
       .setDescription('The Name of the Sticker to clone (if the Message it has multiple Stickers)')
       .setName('sticker-name')
       .setAutocomplete(true)
       .setRequired(false)
       .setMaxLength(30),
     ),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('from-file')
     .setDescription('Create a Sticker from a File')
     .addAttachmentOption(
      new SlashCommandAttachmentOption()
       .setName('file')
       .setDescription('The File to create the Sticker from')
       .setRequired(true),
     )
     .addStringOption(StickerName)
     .addStringOption(StickerDescription)
     .addStringOption(RelatedEmoji),
   ),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('delete')
   .setDescription('Delete an Sticker')
   .addStringOption(
    new SlashCommandStringOption()
     .setName('sticker')
     .setDescription('The Sticker to delete')
     .setRequired(true)
     .setAutocomplete(true),
   ),
 )
 .addSubcommandGroup(
  new SlashCommandSubcommandGroupBuilder()
   .setName('edit')
   .setDescription('Edit a Sticker')
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('name')
     .setDescription('Edit a Sticker')
     .addStringOption(
      new SlashCommandStringOption()
       .setName('sticker')
       .setDescription('The Sticker to edit')
       .setAutocomplete(true)
       .setRequired(true),
     )
     .addStringOption(StickerName),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('description')
     .setDescription('Edit the Description of the Sticker')
     .addStringOption(
      new SlashCommandStringOption()
       .setName('sticker')
       .setDescription('The Sticker to edit')
       .setAutocomplete(true)
       .setRequired(true),
     )
     .addStringOption(StickerDescription),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('emoji')
     .setDescription('Edit the Emoji of the Sticker')
     .addStringOption(
      new SlashCommandStringOption()
       .setName('sticker')
       .setDescription('The Sticker to edit')
       .setAutocomplete(true)
       .setRequired(true),
     )
     .addStringOption(RelatedEmoji),
   ),
 );
