import type { RRole, RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.slashCommands.setLevel,
 descUser: (user: RUser) =>
  t.stp(t.JSON.slashCommands.setLevel.descUser, { user: t.languageFunction.getUser(user) }),
 descFinUser: (user: RUser) =>
  t.stp(t.JSON.slashCommands.setLevel.descFinUser, { user: t.languageFunction.getUser(user) }),
 descRole: (role: RRole) =>
  t.stp(t.JSON.slashCommands.setLevel.descRole, { role: t.languageFunction.getRole(role) }),
 descFinRole: (role: RRole) =>
  t.stp(t.JSON.slashCommands.setLevel.descFinRole, { role: t.languageFunction.getRole(role) }),
});
