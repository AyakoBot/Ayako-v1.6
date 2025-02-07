import type { RChannel, RThread, RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.events.logs.voiceState,
 descCreate: (user: RUser, channel: RChannel | RThread, channelType: string) =>
  t.stp(t.JSON.events.logs.voiceState.descCreate, {
   user: t.languageFunction.getUser(user),
   channel: t.languageFunction.getChannel(channel, channelType),
  }),
 descUpdateChannel: (
  user: RUser,
  channel: RChannel | RThread,
  channelType: string,
  oldChannel: RChannel | RThread | undefined,
  oldChannelType: string | undefined,
 ) =>
  t.stp(t.JSON.events.logs.voiceState.descUpdateChannel, {
   user: t.languageFunction.getUser(user),
   newChannel: t.languageFunction.getChannel(channel, channelType),
   oldChannel: t.languageFunction.getChannel(oldChannel, oldChannelType),
  }),
 descUpdate: (user: RUser, channel: RChannel, channelType: string) =>
  t.stp(t.JSON.events.logs.voiceState.descUpdate, {
   user: t.languageFunction.getUser(user),
   channel: t.languageFunction.getChannel(channel, channelType),
  }),
 descDelete: (user: RUser, channel: RChannel | RThread, channelType: string) =>
  t.stp(t.JSON.events.logs.voiceState.descDelete, {
   user: t.languageFunction.getUser(user),
   channel: t.languageFunction.getChannel(channel, channelType),
  }),
});
