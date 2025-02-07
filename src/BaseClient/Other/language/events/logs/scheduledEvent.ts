import type { RChannel, REvent, RThread, RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.events.logs.scheduledEvent,
 descUserRemoveChannel: (
  user: RUser,
  event: REvent,
  channel: RChannel | RThread,
  channelType: string,
 ) =>
  t.stp(t.JSON.events.logs.scheduledEvent.descUserRemoveChannel, {
   user: t.languageFunction.getUser(user),
   event: t.languageFunction.getScheduledEvent(event),
   channel: t.languageFunction.getChannel(channel, channelType),
  }),
 descUserRemove: (user: RUser, event: REvent) =>
  t.stp(t.JSON.events.logs.scheduledEvent.descUserRemove, {
   user: t.languageFunction.getUser(user),
   event: t.languageFunction.getScheduledEvent(event),
  }),
 descUserAddChannel: (
  user: RUser,
  event: REvent,
  channel: RChannel | RThread,
  channelType: string,
 ) =>
  t.stp(t.JSON.events.logs.scheduledEvent.descUserAddChannel, {
   user: t.languageFunction.getUser(user),
   event: t.languageFunction.getScheduledEvent(event),
   channel: t.languageFunction.getChannel(channel, channelType),
  }),
 descUserAdd: (user: RUser, event: REvent) =>
  t.stp(t.JSON.events.logs.scheduledEvent.descUserAdd, {
   user: t.languageFunction.getUser(user),
   event: t.languageFunction.getScheduledEvent(event),
  }),
 descDeleteChannelAudit: (
  event: REvent,
  user: RUser,
  channel: RChannel | RThread,
  channelType: string,
 ) =>
  t.stp(t.JSON.events.logs.scheduledEvent.descDeleteChannelAudit, {
   user: t.languageFunction.getUser(user),
   event: t.languageFunction.getScheduledEvent(event),
   channel: t.languageFunction.getChannel(channel, channelType),
  }),
 descDeleteAudit: (event: REvent, user: RUser) =>
  t.stp(t.JSON.events.logs.scheduledEvent.descDeleteAudit, {
   user: t.languageFunction.getUser(user),
   event: t.languageFunction.getScheduledEvent(event),
  }),
 descDeleteChannel: (event: REvent, channel: RChannel | RThread, channelType: string) =>
  t.stp(t.JSON.events.logs.scheduledEvent.descDeleteChannel, {
   event: t.languageFunction.getScheduledEvent(event),
   channel: t.languageFunction.getChannel(channel, channelType),
  }),
 descDelete: (event: REvent) =>
  t.stp(t.JSON.events.logs.scheduledEvent.descDelete, {
   event: t.languageFunction.getScheduledEvent(event),
  }),
 descCreateChannelAudit: (
  event: REvent,
  user: RUser,
  channel: RChannel | RThread,
  channelType: string,
 ) =>
  t.stp(t.JSON.events.logs.scheduledEvent.descDeleteChannelAudit, {
   user: t.languageFunction.getUser(user),
   event: t.languageFunction.getScheduledEvent(event),
   channel: t.languageFunction.getChannel(channel, channelType),
  }),
 descCreateAudit: (event: REvent, user: RUser) =>
  t.stp(t.JSON.events.logs.scheduledEvent.descCreateAudit, {
   user: t.languageFunction.getUser(user),
   event: t.languageFunction.getScheduledEvent(event),
  }),
 descCreateChannel: (event: REvent, channel: RChannel | RThread, channelType: string) =>
  t.stp(t.JSON.events.logs.scheduledEvent.descCreateChannel, {
   event: t.languageFunction.getScheduledEvent(event),
   channel: t.languageFunction.getChannel(channel, channelType),
  }),
 descCreate: (event: REvent) =>
  t.stp(t.JSON.events.logs.scheduledEvent.descCreate, {
   event: t.languageFunction.getScheduledEvent(event),
  }),
 descUpdateChannelAudit: (
  event: REvent,
  user: RUser,
  channel: RChannel | RThread,
  channelType: string,
 ) =>
  t.stp(t.JSON.events.logs.scheduledEvent.descUpdateChannelAudit, {
   user: t.languageFunction.getUser(user),
   event: t.languageFunction.getScheduledEvent(event),
   channel: t.languageFunction.getChannel(channel, channelType),
  }),
 descUpdateAudit: (event: REvent, user: RUser) =>
  t.stp(t.JSON.events.logs.scheduledEvent.descUpdateAudit, {
   user: t.languageFunction.getUser(user),
   event: t.languageFunction.getScheduledEvent(event),
  }),
 descUpdateChannel: (event: REvent, channel: RChannel | RThread, channelType: string) =>
  t.stp(t.JSON.events.logs.scheduledEvent.descUpdateChannel, {
   event: t.languageFunction.getScheduledEvent(event),
   channel: t.languageFunction.getChannel(channel, channelType),
  }),
 descUpdate: (event: REvent) =>
  t.stp(t.JSON.events.logs.scheduledEvent.descUpdate, {
   event: t.languageFunction.getScheduledEvent(event),
  }),
 status: {
  1: t.JSON.events.logs.scheduledEvent.status[1],
  2: t.JSON.events.logs.scheduledEvent.status[2],
  3: t.JSON.events.logs.scheduledEvent.status[3],
  4: t.JSON.events.logs.scheduledEvent.status[4],
 },
 privacyLevel: {
  1: t.JSON.events.logs.scheduledEvent.privacyLevel[1],
  2: t.JSON.events.logs.scheduledEvent.privacyLevel[2],
 },
 entityType: {
  1: t.JSON.events.logs.scheduledEvent.entityType[1],
  2: t.JSON.events.logs.scheduledEvent.entityType[2],
  3: t.JSON.events.logs.scheduledEvent.entityType[3],
 },
});
