import type { RRole } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.slashCommands.roles.delete,
 areYouSure: (role: RRole) =>
  t.stp(t.JSON.slashCommands.roles.delete.areYouSure, {
   role: t.languageFunction.getRole(role),
  }),
 deleted: (role: RRole) =>
  t.stp(t.JSON.slashCommands.roles.delete.deleted, {
   role: t.languageFunction.getRole(role),
  }),
});
