import type { RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.nitro,
 given: (user: RUser, r: string, days: string | number) =>
  t.stp(t.JSON.nitro.given, {
   user,
   r,
   days,
  }),
 taken: (user: RUser, r: string) =>
  t.stp(t.JSON.nitro.taken, {
   user,
   r,
  }),
});
