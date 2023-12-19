import * as Discord from 'discord.js';
import * as ch from '../../BaseClient/ClientHelper.js';

export default async (cmd: Discord.ButtonInteraction<'cached'>) => {
 if (!cmd.channel) return;

 if (
  ![Discord.ChannelType.PublicThread, Discord.ChannelType.PrivateThread].includes(cmd.channel.type)
 ) {
  return;
 }

 const res = await ch.request.channels.delete(cmd.channel);
 if (!('message' in res)) return;

 const language = await ch.getLanguage(cmd.guildId);
 ch.errorCmd(cmd, res, language);
};
