import type { RRole, RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.events.logs.role,
 descCreateAudit: (user: RUser, role: RRole) =>
  t.stp(t.JSON.events.logs.role.descCreateAudit, {
   role: t.languageFunction.getRole(role),
   user: t.languageFunction.getUser(user),
  }),
 descCreate: (role: RRole) =>
  t.stp(t.JSON.events.logs.role.descCreate, {
   role: t.languageFunction.getRole(role),
  }),
 descDeleteAudit: (user: RUser, role: RRole) =>
  t.stp(t.JSON.events.logs.role.descDeleteAudit, {
   role: t.languageFunction.getRole(role),
   user: t.languageFunction.getUser(user),
  }),
 descDelete: (role: RRole) =>
  t.stp(t.JSON.events.logs.role.descDelete, {
   role: t.languageFunction.getRole(role),
  }),
 descUpdateAudit: (role: RRole, user: RUser) =>
  t.stp(t.JSON.events.logs.role.descUpdateAudit, {
   role: t.languageFunction.getRole(role),
   user: t.languageFunction.getUser(user),
  }),
 descUpdate: (role: RRole) =>
  t.stp(t.JSON.events.logs.role.descUpdate, {
   role: t.languageFunction.getRole(role),
  }),
});
