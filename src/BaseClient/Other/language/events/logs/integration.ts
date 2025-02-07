import type { APIApplication, APIIntegrationAccount } from 'discord-api-types/v10.js';
import type { RIntegration, RUser } from 'src/Typings/Redis.js';
import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.events.logs.integration,
 descCreateAudit: (integration: RIntegration, user: RUser) =>
  t.stp(t.JSON.events.logs.integration.descCreateAudit, {
   user: t.languageFunction.getUser(user),
   integration: t.languageFunction.getIntegration(integration),
  }),
 descCreate: (integration: RIntegration) =>
  t.stp(t.JSON.events.logs.integration.descCreate, {
   integration: t.languageFunction.getIntegration(integration),
  }),
 descDeleteIntegrationAudit: (user: RUser, integration: RIntegration, app: APIApplication) =>
  t.stp(t.JSON.events.logs.integration.descDeleteIntegrationAudit, {
   user: t.languageFunction.getUser(user),
   integration: t.languageFunction.getIntegration(integration),
   app: t.languageFunction.getApplication(app),
  }),
 descDeleteAudit: (user: RUser, integration: RIntegration) =>
  t.stp(t.JSON.events.logs.integration.descDeleteAudit, {
   user: t.languageFunction.getUser(user),
   integration: t.languageFunction.getIntegration(integration),
  }),
 descDeleteIntegration: (integration: RIntegration) =>
  t.stp(t.JSON.events.logs.integration.descDeleteIntegration, {
   integration: t.languageFunction.getIntegration(integration),
  }),
 descUpdateAudit: (user: RUser, integration: RIntegration) =>
  t.stp(t.JSON.events.logs.integration.descUpdateAudit, {
   user: t.languageFunction.getUser(user),
   integration: t.languageFunction.getIntegration(integration),
  }),
 descUpdate: (integration: RIntegration) =>
  t.stp(t.JSON.events.logs.integration.descUpdate, {
   integration: t.languageFunction.getIntegration(integration),
  }),
 getAccount: (account: APIIntegrationAccount) =>
  t.stp(t.JSON.events.logs.integration.getAccount, {
   name: account.name,
   id: account.id,
  }),
 expireBehavior: {
  0: t.JSON.events.logs.integration.expireBehavior[0],
  1: t.JSON.events.logs.integration.expireBehavior[1],
 },
});
