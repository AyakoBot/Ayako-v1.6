import type { RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.mod.execution.vcTempMuteAdd,
 dm: () => t.JSON.mod.execution.vcTempMuteAdd.dm,
 alreadyApplied: (target: RUser) =>
  t.stp(t.JSON.mod.execution.vcTempMuteAdd.alreadyApplied, {
   target: t.languageFunction.getUser(target),
  }),
 success: (target: RUser) =>
  t.stp(t.JSON.mod.execution.vcTempMuteAdd.success, {
   target: t.languageFunction.getUser(target),
  }),
});
