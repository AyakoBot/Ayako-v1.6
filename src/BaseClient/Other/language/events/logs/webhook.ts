import type { RChannel, RThread, RUser, RWebhook } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.events.logs.webhook,
 descCreateAudit: (
  webhook: RWebhook,
  webhookType: string,
  user: RUser,
  channel: RChannel | RThread,
  channelType: string,
 ) =>
  t.stp(t.JSON.events.logs.webhook.descCreateAudit, {
   user: t.languageFunction.getUser(user),
   channel: t.languageFunction.getChannel(channel, channelType),
   webhook: t.languageFunction.getWebhook(webhook, webhookType),
  }),
 descCreate: (
  webhook: RWebhook,
  webhookType: string,
  channel: RChannel | RThread,
  channelType: string,
 ) =>
  t.stp(t.JSON.events.logs.webhook.descCreate, {
   channel: t.languageFunction.getChannel(channel, channelType),
   webhook: t.languageFunction.getWebhook(webhook, webhookType),
  }),
 descDeleteAudit: (
  webhook: RWebhook,
  webhookType: string,
  user: RUser,
  channel: RChannel | RThread,
  channelType: string,
 ) =>
  t.stp(t.JSON.events.logs.webhook.descDeleteAudit, {
   user: t.languageFunction.getUser(user),
   channel: t.languageFunction.getChannel(channel, channelType),
   webhook: t.languageFunction.getWebhook(webhook, webhookType),
  }),
 descDelete: (
  webhook: RWebhook,
  webhookType: string,
  channel: RChannel | RThread,
  channelType: string,
 ) =>
  t.stp(t.JSON.events.logs.webhook.descDelete, {
   channel: t.languageFunction.getChannel(channel, channelType),
   webhook: t.languageFunction.getWebhook(webhook, webhookType),
  }),
 descUpdateAudit: (
  webhook: RWebhook,
  webhookType: string,
  user: RUser,
  channel: RChannel | RThread,
  channelType: string,
 ) =>
  t.stp(t.JSON.events.logs.webhook.descUpdateAudit, {
   user: t.languageFunction.getUser(user),
   channel: t.languageFunction.getChannel(channel, channelType),
   webhook: t.languageFunction.getWebhook(webhook, webhookType),
  }),
 descUpdate: (
  webhook: RWebhook,
  webhookType: string,
  channel: RChannel | RThread,
  channelType: string,
 ) =>
  t.stp(t.JSON.events.logs.webhook.descUpdate, {
   channel: t.languageFunction.getChannel(channel, channelType),
   webhook: t.languageFunction.getWebhook(webhook, webhookType),
  }),
 webhookTypes: {
  1: t.JSON.events.logs.webhook.webhookTypes[1],
  2: t.JSON.events.logs.webhook.webhookTypes[2],
  3: t.JSON.events.logs.webhook.webhookTypes[3],
 },
});
