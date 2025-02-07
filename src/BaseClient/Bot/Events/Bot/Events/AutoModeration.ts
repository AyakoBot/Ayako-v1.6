/* eslint-disable @typescript-eslint/no-unused-vars */
import {
 GatewayDispatchEvents,
 type GatewayAutoModerationActionExecutionDispatchData,
 type GatewayAutoModerationRuleCreateDispatchData,
 type GatewayAutoModerationRuleUpdateDispatchData,
} from 'discord-api-types/v10.js';
import { cache as redis } from '../../../Redis.js';

export default {
 [GatewayDispatchEvents.AutoModerationActionExecution]: (
  _: GatewayAutoModerationActionExecutionDispatchData,
 ) => undefined,

 [GatewayDispatchEvents.AutoModerationRuleCreate]: (
  data: GatewayAutoModerationRuleCreateDispatchData,
 ) => redis.automods.set(data),

 [GatewayDispatchEvents.AutoModerationRuleDelete]: (
  data: GatewayAutoModerationRuleCreateDispatchData,
 ) => redis.automods.del(data.id),

 [GatewayDispatchEvents.AutoModerationRuleUpdate]: (
  data: GatewayAutoModerationRuleUpdateDispatchData,
 ) => redis.automods.set(data),
} as const;
