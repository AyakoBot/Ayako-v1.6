import type { RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.mod.execution.vcMuteAdd,
 dm: () => t.JSON.mod.execution.vcMuteAdd.dm,
 alreadyApplied: (target: RUser) =>
  t.stp(t.JSON.mod.execution.vcMuteAdd.alreadyApplied, {
   target: t.languageFunction.getUser(target),
  }),
 success: (target: RUser) =>
  t.stp(t.JSON.mod.execution.vcMuteAdd.success, {
   target: t.languageFunction.getUser(target),
  }),
});
