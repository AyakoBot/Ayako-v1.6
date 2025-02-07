import type { RGuild, RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.events.vote,
 bot: (user: RUser, bot: RUser, link: string) =>
  t.stp(t.JSON.events.vote.bot, {
   user: user.global_name || user.username,
   bot: bot.username,
   link,
  }),
 guild: (user: RUser, guild: RGuild, link: string) =>
  t.stp(t.JSON.events.vote.guild, {
   user: user.global_name || user.username,
   guild: guild.name,
   link,
  }),
 tempReward: (reward: string) =>
  t.stp(t.JSON.events.vote.tempReward, {
   reward,
  }),
 botReason: (bot: RUser) =>
  t.stp(t.JSON.events.vote.botReason, {
   bot: bot.username,
  }),
 guildReason: (guild: RGuild) =>
  t.stp(t.JSON.events.vote.guildReason, {
   guild: guild.name,
  }),
 reminder: {
  ...t.JSON.events.vote.reminder,
  descBot: (bot: RUser) =>
   t.stp(t.JSON.events.vote.reminder.descBot, {
    bot: t.util.constants.standard.user(bot),
   }),
  descGuild: (guild: RGuild) =>
   t.stp(t.JSON.events.vote.reminder.descGuild, {
    guild: guild.name,
   }),
  voteBotButton: (bot: RUser) =>
   t.stp(t.JSON.events.vote.reminder.voteBotButton, {
    bot: bot.username,
   }),
  voteGuildButton: (guild: RGuild) =>
   t.stp(t.JSON.events.vote.reminder.voteGuildButton, {
    guild: guild.name,
   }),
 },
});
