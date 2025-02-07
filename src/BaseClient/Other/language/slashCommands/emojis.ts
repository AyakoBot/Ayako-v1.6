import type { REmoji, RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.slashCommands.emojis,
 createReason: (user: RUser) =>
  t.stp(t.JSON.slashCommands.emojis.createReason, {
   user,
  }),
 deleteReason: (user: RUser) =>
  t.stp(t.JSON.slashCommands.emojis.deleteReason, {
   user,
  }),
 editReason: (user: RUser) =>
  t.stp(t.JSON.slashCommands.emojis.editReason, {
   user,
  }),
 created: (e: REmoji) =>
  t.stp(t.JSON.slashCommands.emojis.created, {
   e: t.languageFunction.getEmote(e),
  }),
 deleted: (e: REmoji) =>
  t.stp(t.JSON.slashCommands.emojis.deleted, {
   e: t.languageFunction.getEmote(e),
  }),
 edited: (e: REmoji) =>
  t.stp(t.JSON.slashCommands.emojis.edited, {
   e: t.languageFunction.getEmote(e),
  }),
});
