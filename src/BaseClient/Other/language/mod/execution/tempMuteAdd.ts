import type { RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.mod.execution.tempMuteAdd,
 dm: () => t.JSON.mod.execution.tempMuteAdd.dm,
 alreadyApplied: (target: RUser) =>
  t.stp(t.JSON.mod.execution.tempMuteAdd.alreadyApplied, {
   target: t.languageFunction.getUser(target),
  }),
 success: (target: RUser) =>
  t.stp(t.JSON.mod.execution.tempMuteAdd.success, {
   target: t.languageFunction.getUser(target),
  }),
});
