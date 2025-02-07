import type { RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.mod.execution.softWarnAdd,
 dm: () => t.JSON.mod.execution.softWarnAdd.dm,
 alreadyApplied: (target: RUser) =>
  t.stp(t.JSON.mod.execution.softWarnAdd.alreadyApplied, {
   target: t.languageFunction.getUser(target),
  }),
 success: (target: RUser) =>
  t.stp(t.JSON.mod.execution.softWarnAdd.success, {
   target: t.languageFunction.getUser(target),
  }),
});
