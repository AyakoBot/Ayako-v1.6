import {
 SlashCommandBuilder,
 SlashCommandChannelOption,
 SlashCommandSubcommandBuilder,
 SlashCommandUserOption,
} from '@discordjs/builders';
import { ApplicationIntegrationType, InteractionContextType } from 'discord-api-types/v10.js';
import { GuildTextChannelTypes } from '../../Typings/Channel.js';

const User = new SlashCommandUserOption()
 .setName('user')
 .setDescription('The User')
 .setRequired(false);

const Channel = new SlashCommandChannelOption()
 .setName('channel')
 .setDescription('The Channel')
 .setRequired(false)
 .addChannelTypes(...GuildTextChannelTypes);

export default new SlashCommandBuilder()
 .setName('rank')
 .setDescription('Leaderboard and Rank Commands')
 .setContexts([
  InteractionContextType.BotDM,
  InteractionContextType.Guild,
  InteractionContextType.PrivateChannel,
 ])
 .setIntegrationTypes([
  ApplicationIntegrationType.GuildInstall,
  ApplicationIntegrationType.UserInstall,
 ])
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('nitro')
   .setDescription('Shows the Leaderboard and Rank of Members who boosted the Server')
   .addUserOption(User),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('global')
   .setDescription('Shows the Global Leaderboard and Rank')
   .addUserOption(User),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('server')
   .setDescription('Shows the Server Leaderboard and Rank')
   .addUserOption(User),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('channel')
   .setDescription('Shows the Channel Leaderboard and Rank')
   .addChannelOption(Channel)
   .addUserOption(User),
 );
