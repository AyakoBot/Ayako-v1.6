import type { RInvite } from 'src/Typings/Redis.js';
import * as CT from '../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.slashCommands.invites,
 deleted: (invite: RInvite) =>
  t.stp(t.JSON.slashCommands.invites.deleted, {
   invite: t.languageFunction.getInvite(invite),
  }),
 created: (invite: RInvite) =>
  t.stp(t.JSON.slashCommands.invites.created, {
   invite: t.languageFunction.getInvite(invite),
  }),
});
