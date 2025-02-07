import type { RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.slashCommands.afk,
 set: (user: RUser) => t.stp(t.JSON.slashCommands.afk.set, { user }),
 updated: (user: RUser) => t.stp(t.JSON.slashCommands.afk.updated, { user }),
 removed: (time: string) => t.stp(t.JSON.slashCommands.afk.removed, { time }),
 isAFK: (user: string, since: string, text: string) =>
  t.stp(t.JSON.slashCommands.afk.isAFK, { user, since, text }),
 disabled: (cmdId: string) => t.stp(t.JSON.slashCommands.afk.disabled, { cmdId }),
});
