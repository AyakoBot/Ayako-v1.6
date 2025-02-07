import type { RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.mod.logs.strikeAdd,
 description: (target: RUser, executor: RUser) =>
  t.stp(t.JSON.mod.logs.strikeAdd.description, {
   target: t.languageFunction.getUser(target),
   executor: t.languageFunction.getUser(executor),
  }),
});
