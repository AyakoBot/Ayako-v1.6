import type { RRole, RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.slashCommands.roles.take,
 doesntHave: (role: RRole, user: RUser) =>
  t.stp(t.JSON.slashCommands.roles.take.doesntHave, {
   role: t.languageFunction.getRole(role),
   user: t.languageFunction.getUser(user),
  }),
 taken: (role: RRole, user: RUser) =>
  t.stp(t.JSON.slashCommands.roles.take.taken, {
   role: t.languageFunction.getRole(role),
   user: t.languageFunction.getUser(user),
  }),
});
