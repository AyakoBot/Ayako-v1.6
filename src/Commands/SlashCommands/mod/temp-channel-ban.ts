import * as Discord from 'discord.js';
import * as ch from '../../../BaseClient/ClientHelper.js';
import * as CT from '../../../Typings/Typings.js';

export default async (cmd: Discord.ChatInputCommandInteraction) => {
 if (!cmd.inCachedGuild()) return;

 const user = cmd.options.getUser('user', true);
 const reason = cmd.options.getString('reason', false);
 const duration = cmd.options.getString('duration', true);
 const channel = cmd.options.getChannel('channel', true, CT.AllNonThreadGuildChannelTypes);

 const language = await ch.getLanguage(cmd.guildId);

 const modOptions: CT.ModOptions<CT.ModTypes.TempChannelBanAdd> = {
  reason: reason ?? language.t.noReasonProvided,
  guild: cmd.guild,
  target: user,
  executor: cmd.user,
  dbOnly: false,
  duration: ch.getDuration(duration) / 1000,
  channel,
  skipChecks: false,
 };

 ch.mod(cmd, CT.ModTypes.TempChannelBanAdd, modOptions);
};
