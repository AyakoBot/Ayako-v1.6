import type { RAutomod, RChannel, RMessage, RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.events.logs.automodExec,
 descMessage: (rule: RAutomod, msg: RMessage, user: RUser) =>
  t.stp(t.JSON.events.logs.automodExec.descMessage, {
   rule: t.languageFunction.getAutoModerationRule(rule),
   msg: t.languageFunction.getMessage(msg),
   user: t.languageFunction.getUser(user),
  }),
 desc: (rule: RAutomod, user: RUser) =>
  t.stp(t.JSON.events.logs.automodExec.desc, {
   rule: t.languageFunction.getAutoModerationRule(rule),
   user: t.languageFunction.getUser(user),
  }),
 descChannel: (rule: RAutomod, user: RUser, channel: RChannel) =>
  t.stp(t.JSON.events.logs.automodExec.descChannel, {
   rule: t.languageFunction.getAutoModerationRule(rule),
   user: t.languageFunction.getUser(user),
   channel: t.languageFunction.getChannel(channel, t.JSON.channelTypes[channel.type]),
  }),
 ruleTriggerType: {
  1: t.JSON.events.logs.automodExec.ruleTriggerType[1],
  3: t.JSON.events.logs.automodExec.ruleTriggerType[3],
  4: t.JSON.events.logs.automodExec.ruleTriggerType[4],
  5: t.JSON.events.logs.automodExec.ruleTriggerType[5],
  6: t.JSON.events.logs.automodExec.ruleTriggerType[6],
 },
 actionType: {
  1: t.JSON.events.logs.automodExec.actionType[1],
  2: t.JSON.events.logs.automodExec.actionType[2],
  3: t.JSON.events.logs.automodExec.actionType[3],
  4: t.JSON.events.logs.automodExec.actionType[4],
 },
});
