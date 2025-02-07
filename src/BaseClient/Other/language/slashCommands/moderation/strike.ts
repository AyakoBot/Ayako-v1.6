import type { RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.slashCommands.moderation.strike,
 areYouSure: (user: RUser, punishment: string) =>
  t.stp(t.JSON.slashCommands.moderation.strike.areYouSure, { user, punishment }),
 notEnabled: (cmdId: string) => t.stp(t.JSON.slashCommands.moderation.strike.notEnabled, { cmdId }),
});
