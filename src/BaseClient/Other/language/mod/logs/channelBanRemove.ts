import type { RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.mod.logs.channelBanRemove,
 description: (
  target: RUser,
  executor: RUser,
  options: CT.ModOptions<CT.ModTypes.ChannelBanRemove>,
 ) =>
  t.stp(t.JSON.mod.logs.channelBanRemove.description, {
   target: t.languageFunction.getUser(target),
   executor: t.languageFunction.getUser(executor),
   channel: t.languageFunction.getChannel(options.channel),
  }),
});
