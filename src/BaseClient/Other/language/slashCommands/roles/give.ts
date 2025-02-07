import type { RRole, RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.slashCommands.roles.give,
 alreadyHas: (role: RRole, user: RUser) =>
  t.stp(t.JSON.slashCommands.roles.give.alreadyHas, {
   role: t.languageFunction.getRole(role),
   user: t.languageFunction.getUser(user),
  }),
 given: (role: RRole, user: RUser) =>
  t.stp(t.JSON.slashCommands.roles.give.given, {
   role: t.languageFunction.getRole(role),
   user: t.languageFunction.getUser(user),
  }),
});
