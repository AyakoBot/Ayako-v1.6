import type { RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.mod.execution.banRemove,
 dm: (options: CT.ModOptions<CT.ModTypes.BanRemove>) =>
  t.stp(t.JSON.mod.execution.banRemove.dm, {
   guild: t.languageFunction.getGuild(options.guild),
  }),
 alreadyApplied: (target: RUser) =>
  t.stp(t.JSON.mod.execution.banRemove.alreadyApplied, {
   target: t.languageFunction.getUser(target),
  }),
 success: (target: RUser) =>
  t.stp(t.JSON.mod.execution.banRemove.success, {
   target: t.languageFunction.getUser(target),
  }),
});
