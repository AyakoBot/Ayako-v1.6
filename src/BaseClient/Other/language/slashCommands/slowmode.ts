import type { RChannel } from 'src/Typings/Redis.js';
import * as CT from '../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.slashCommands.slowmode,
 deleted: (channel: RChannel) => t.stp(t.JSON.slashCommands.slowmode.deleted, { channel }),
 success: (channel: RChannel, time: string) =>
  t.stp(t.JSON.slashCommands.slowmode.success, { channel, time }),
});
