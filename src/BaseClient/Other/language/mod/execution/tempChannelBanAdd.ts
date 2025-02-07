import type { RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.mod.execution.tempChannelBanAdd,
 dm: (options: CT.ModOptions<CT.ModTypes.TempChannelBanAdd>) =>
  t.stp(t.JSON.mod.execution.tempChannelBanAdd.dm, {
   channel: t.languageFunction.getChannel(options.channel),
  }),
 alreadyApplied: (target: RUser) =>
  t.stp(t.JSON.mod.execution.tempChannelBanAdd.alreadyApplied, {
   target: t.languageFunction.getUser(target),
  }),
 success: (target: RUser) =>
  t.stp(t.JSON.mod.execution.tempChannelBanAdd.success, {
   target: t.languageFunction.getUser(target),
  }),
});
