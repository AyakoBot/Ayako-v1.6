import {
 SlashCommandBooleanOption,
 SlashCommandBuilder,
 SlashCommandSubcommandBuilder,
} from '@discordjs/builders';
import { ApplicationIntegrationType, InteractionContextType } from 'discord-api-types/v10';

export const ephemeral = new SlashCommandBooleanOption()
 .setName('hide')
 .setDescription('Whether to hide the Response and make it ephemeral')
 .setRequired(false);

const categories = {
 neko: 'Get a random Neko Image',
 husbando: 'Get a random Husbando Image',
 kitsune: 'Get a random Kitsune Image',
 waifu: 'Get a random Waifu Image',
 shinobu: 'Get a random Shinobu Image',
 megumin: 'Get a random Megumin Image',
 eevee: 'Get a random Eevee Image',
 holo: 'Get a random Holo Image',
 icon: 'Get a random Anime Icon',
 okami: 'Get a random Okami Image',
 senko: 'Get a random Senko Image',
 shiro: 'Get a random Shiro Image',
};

const images = new SlashCommandBuilder()
 .setName('images')
 .setDescription('Get a random Image')
 .setContexts([
  InteractionContextType.BotDM,
  InteractionContextType.Guild,
  InteractionContextType.PrivateChannel,
 ])
 .setIntegrationTypes([
  ApplicationIntegrationType.GuildInstall,
  ApplicationIntegrationType.UserInstall,
 ]);

Object.entries(categories).forEach(([name, description]) => {
 images.addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName(name)
   .setDescription(description)
   .addBooleanOption(ephemeral),
 );
});

export default images;
