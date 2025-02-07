/* eslint-disable @typescript-eslint/no-unused-vars */
import {
 GatewayDispatchEvents,
 type GatewayVoiceChannelEffectSendDispatchData,
 type GatewayVoiceServerUpdateDispatchData,
 type GatewayVoiceStateUpdateDispatchData,
} from 'discord-api-types/v10.js';
import { cache as redis } from '../../../Redis.js';

export default {
 [GatewayDispatchEvents.VoiceChannelEffectSend]: (_: GatewayVoiceChannelEffectSendDispatchData) =>
  undefined,

 [GatewayDispatchEvents.VoiceServerUpdate]: (_: GatewayVoiceServerUpdateDispatchData) => undefined,

 [GatewayDispatchEvents.VoiceStateUpdate]: (data: GatewayVoiceStateUpdateDispatchData) =>
  redis.voices.set(data),
} as const;
