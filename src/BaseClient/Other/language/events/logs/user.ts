import type { RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.events.logs.user,
 desc: (user: RUser) =>
  t.stp(t.JSON.events.logs.user.desc, {
   user: t.languageFunction.getUser(user),
  }),
});
