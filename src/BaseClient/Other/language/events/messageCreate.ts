import type { RChannel, RRole, RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.events.messageCreate,
 pingReporter: {
  ...t.JSON.events.messageCreate.pingReporter,
  desc: (role: RRole, channel: RChannel, user: RUser) =>
   t.stp(t.JSON.events.messageCreate.pingReporter.desc, {
    role: t.languageFunction.getRole(role),
    channel: t.languageFunction.getChannel(channel, t.JSON.channelTypes[channel.type]),
    user: t.languageFunction.getUser(user),
   }),
 },
});
