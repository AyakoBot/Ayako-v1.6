import type { RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.mod.execution.warnAdd,
 dm: () => t.JSON.mod.execution.warnAdd.dm,
 alreadyApplied: (target: RUser) =>
  t.stp(t.JSON.mod.execution.warnAdd.alreadyApplied, {
   target: t.languageFunction.getUser(target),
  }),
 success: (target: RUser) =>
  t.stp(t.JSON.mod.execution.warnAdd.success, {
   target: t.languageFunction.getUser(target),
  }),
});
