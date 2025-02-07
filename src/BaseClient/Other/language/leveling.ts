import type { RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.leveling,
 author: (author: RUser, level: string) => t.stp(t.JSON.leveling.author, { author, level }),
 description: (reactions?: string) =>
  t.stp(t.JSON.leveling.description, {
   on: reactions ? t.JSON.leveling.on.on : t.JSON.leveling.on.normally,
   reactions: reactions
    ? t.stp(t.JSON.leveling.reactions.current, { reactions })
    : t.JSON.leveling.reactions.however,
  }),
});
