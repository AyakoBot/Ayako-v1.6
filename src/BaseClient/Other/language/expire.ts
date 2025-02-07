import type { RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.expire,
 punishmentOf: (target: RUser) =>
  t.stp(t.JSON.expire.punishmentOf, { target: t.util.constants.standard.user(target) }),
 endedAt: (time: string) => t.stp(t.JSON.expire.endedAt, { time }),
});
