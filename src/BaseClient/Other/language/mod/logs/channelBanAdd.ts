import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.mod.logs.channelBanAdd,
 description: (
  target: Discord.User,
  executor: Discord.User,
  options: CT.ModOptions<CT.ModTypes.ChannelBanAdd>,
 ) =>
  t.stp(t.JSON.mod.logs.channelBanAdd.description, {
   target: t.languageFunction.getUser(target),
   executor: t.languageFunction.getUser(executor),
   options: t.languageFunction.getChannel(options.channel),
  }),
});
