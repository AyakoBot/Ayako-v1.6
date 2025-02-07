import type { RInvite, RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.events.logs.invite,
 descCreateAudit: (user: RUser, invite: RInvite) =>
  t.stp(t.JSON.events.logs.invite.descCreateAudit, {
   user: t.languageFunction.getUser(user),
   invite: t.languageFunction.getInvite(invite),
  }),
 descCreate: (invite: RInvite) =>
  t.stp(t.JSON.events.logs.invite.descCreate, {
   invite: t.languageFunction.getInvite(invite),
  }),
 descDeleteAudit: (user: RUser, invite: RInvite) =>
  t.stp(t.JSON.events.logs.invite.descDeleteAudit, {
   user: t.languageFunction.getUser(user),
   invite: t.languageFunction.getInvite(invite),
  }),
 descDelete: (invite: RInvite) =>
  t.stp(t.JSON.events.logs.invite.descDelete, {
   invite: t.languageFunction.getInvite(invite),
  }),
 targetType: {
  1: t.JSON.events.logs.invite.targetType[1],
  2: t.JSON.events.logs.invite.targetType[2],
 },
});
