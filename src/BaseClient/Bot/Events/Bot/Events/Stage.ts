/* eslint-disable @typescript-eslint/no-unused-vars */
import {
 GatewayDispatchEvents,
 type GatewayStageInstanceCreateDispatchData,
 type GatewayStageInstanceDeleteDispatchData,
 type GatewayStageInstanceUpdateDispatchData,
} from 'discord-api-types/v10.js';
import { cache as redis } from '../../../Redis.js';

export default {
 [GatewayDispatchEvents.StageInstanceCreate]: (data: GatewayStageInstanceCreateDispatchData) =>
  redis.stages.set(data),

 [GatewayDispatchEvents.StageInstanceDelete]: (data: GatewayStageInstanceDeleteDispatchData) =>
  redis.stages.del(data.id),

 [GatewayDispatchEvents.StageInstanceUpdate]: (data: GatewayStageInstanceUpdateDispatchData) =>
  redis.stages.set(data),
} as const;
