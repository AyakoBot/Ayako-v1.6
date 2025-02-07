import type { RSticker, RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.slashCommands.stickers,
 createReason: (user: RUser) =>
  t.stp(t.JSON.slashCommands.stickers.createReason, {
   user,
  }),
 deleteReason: (user: RUser) =>
  t.stp(t.JSON.slashCommands.stickers.deleteReason, {
   user,
  }),
 editReason: (user: RUser) =>
  t.stp(t.JSON.slashCommands.stickers.editReason, {
   user,
  }),
 created: (s: RSticker) =>
  t.stp(t.JSON.slashCommands.stickers.created, {
   e: t.languageFunction.getSticker(s),
  }),
 deleted: (s: RSticker) =>
  t.stp(t.JSON.slashCommands.stickers.deleted, {
   e: t.languageFunction.getSticker(s),
  }),
 edited: (s: RSticker) =>
  t.stp(t.JSON.slashCommands.stickers.edited, {
   e: t.languageFunction.getSticker(s),
  }),
});
