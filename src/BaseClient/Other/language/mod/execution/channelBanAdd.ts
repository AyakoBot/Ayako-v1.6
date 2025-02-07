import type { RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.mod.execution.channelBanAdd,
 dm: (options: CT.ModOptions<CT.ModTypes.ChannelBanAdd>) =>
  t.stp(t.JSON.mod.execution.channelBanAdd.dm, {
   channel: t.languageFunction.getChannel(options.channel),
  }),
 alreadyApplied: (target: RUser) =>
  t.stp(t.JSON.mod.execution.channelBanAdd.alreadyApplied, {
   target: t.languageFunction.getUser(target),
  }),
 success: (target: RUser) =>
  t.stp(t.JSON.mod.execution.channelBanAdd.success, {
   target: t.languageFunction.getUser(target),
  }),
});
