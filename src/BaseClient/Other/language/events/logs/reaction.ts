import type { REmoji, RMessage, RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.events.logs.reaction,
 descAdded: (emoji: REmoji, user: RUser, msg: RMessage) =>
  t.stp(t.JSON.events.logs.reaction.descAdded, {
   user: t.languageFunction.getUser(user),
   emoji: t.languageFunction.getEmote(emoji),
   msg: t.languageFunction.getMessage(msg),
  }),
 descRemoved: (emoji: REmoji, user: RUser, msg: RMessage) =>
  t.stp(t.JSON.events.logs.reaction.descRemoved, {
   user: t.languageFunction.getUser(user),
   emoji: t.languageFunction.getEmote(emoji),
   msg: t.languageFunction.getMessage(msg),
  }),
 descRemovedAll: (msg: RMessage) =>
  t.stp(t.JSON.events.logs.reaction.descRemovedAll, {
   msg: t.languageFunction.getMessage(msg),
  }),
 descRemoveEmoji: (msg: RMessage, emoji: REmoji) =>
  t.stp(t.JSON.events.logs.reaction.descRemoveEmoji, {
   emoji: t.languageFunction.getEmote(emoji),
   msg: t.languageFunction.getMessage(msg),
  }),
});
