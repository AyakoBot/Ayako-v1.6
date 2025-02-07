import type { RRole, RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.events.ready,
 disboard: {
  ...t.JSON.events.ready.disboard,
  title: t.stp(t.JSON.events.ready.disboard.title, { t }),
 },
 reminder: {
  ...t.JSON.events.ready.reminder,
  failedMsg: (channel: { id: string }) =>
   t.stp(t.JSON.events.ready.reminder.failedMsg, { channel }),
 },
 vote: {
  ...t.JSON.events.ready.vote,
  description: (votegain: string | number) =>
   t.stp(t.JSON.events.ready.vote.description, { votegain }),
 },
 nitro: {
  ...t.JSON.events.ready.nitro,
  stackRoles: (user: RUser, r: RRole[], days: string | number) =>
   t.stp(t.JSON.events.ready.nitro.stackRoles, {
    user: t.languageFunction.getUser(user),
    roles: r.map((r2) => `> ${t.languageFunction.getRole(r2)}`).join(''),
    days,
   }),
  replaceRoles: (user: RUser, r: RRole[], days: string | number) =>
   t.stp(t.JSON.events.ready.nitro.replaceRoles, {
    user: t.languageFunction.getUser(user),
    roles: r.map((r2) => t.languageFunction.getRole(r2)).join(''),
    days,
   }),
  started: (user: RUser) =>
   t.stp(t.JSON.events.ready.nitro.started, {
    user: t.languageFunction.getUser(user),
   }),
  stopped: (user: RUser) =>
   t.stp(t.JSON.events.ready.nitro.stopped, {
    user: t.languageFunction.getUser(user),
   }),
 },
});
