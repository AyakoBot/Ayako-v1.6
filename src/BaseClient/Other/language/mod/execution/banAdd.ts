import type { RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.mod.execution.banAdd,
 dm: (options: CT.ModOptions<CT.ModTypes.BanAdd>) =>
  t.stp(t.JSON.mod.execution.banAdd.dm, {
   guild: t.languageFunction.getGuild(options.guild),
  }),
 alreadyApplied: (target: RUser) =>
  t.stp(t.JSON.mod.execution.banAdd.alreadyApplied, {
   target: t.languageFunction.getUser(target),
  }),
 success: (target: RUser) =>
  t.stp(t.JSON.mod.execution.banAdd.success, {
   target: t.languageFunction.getUser(target),
  }),
});
