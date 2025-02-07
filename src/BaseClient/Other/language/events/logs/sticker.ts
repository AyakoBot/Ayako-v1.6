import type { RSticker, RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.events.logs.sticker,
 descCreateAudit: (sticker: RSticker, user: RUser) =>
  t.stp(t.JSON.events.logs.sticker.descCreateAudit, {
   user: t.languageFunction.getUser(user),
   sticker: t.languageFunction.getSticker(sticker),
  }),
 descCreate: (sticker: RSticker) =>
  t.stp(t.JSON.events.logs.sticker.descCreate, {
   sticker: t.languageFunction.getSticker(sticker),
  }),
 descDeleteAudit: (sticker: RSticker, user: RUser) =>
  t.stp(t.JSON.events.logs.sticker.descDeleteAudit, {
   user: t.languageFunction.getUser(user),
   sticker: t.languageFunction.getSticker(sticker),
  }),
 descDelete: (sticker: RSticker) =>
  t.stp(t.JSON.events.logs.sticker.descDelete, {
   sticker: t.languageFunction.getSticker(sticker),
  }),
 descUpdateAudit: (sticker: RSticker, user: RUser) =>
  t.stp(t.JSON.events.logs.sticker.descUpdateAudit, {
   user: t.languageFunction.getUser(user),
   sticker: t.languageFunction.getSticker(sticker),
  }),
 descUpdate: (sticker: RSticker) =>
  t.stp(t.JSON.events.logs.sticker.descUpdate, {
   sticker: t.languageFunction.getSticker(sticker),
  }),
 format: {
  1: t.JSON.events.logs.sticker.format[1],
  2: t.JSON.events.logs.sticker.format[2],
  3: t.JSON.events.logs.sticker.format[3],
  4: t.JSON.events.logs.sticker.format[4],
 },
});
