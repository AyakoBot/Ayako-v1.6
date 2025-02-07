import type { RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.mod.logs.tempMuteAdd,
 description: (target: RUser, executor: RUser, options: CT.ModOptions<CT.ModTypes.TempMuteAdd>) =>
  t.stp(t.JSON.mod.logs.tempMuteAdd.description, {
   target: t.languageFunction.getUser(target),
   executor: t.languageFunction.getUser(executor),
   duration: t.util.constants.standard.getTime(Date.now() + options.duration * 1000),
  }),
});
