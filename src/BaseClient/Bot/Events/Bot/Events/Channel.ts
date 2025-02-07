/* eslint-disable @typescript-eslint/no-unused-vars */
import {
 GatewayDispatchEvents,
 type GatewayChannelCreateDispatchData,
 type GatewayChannelDeleteDispatchData,
 type GatewayChannelPinsUpdateDispatchData,
 type GatewayChannelUpdateDispatchData,
} from 'discord-api-types/v10.js';
import getChannel from 'src/BaseClient/UtilModules/requestHandler/channels/get.js';
import channelStatusUpdate from 'src/Events/BotEvents/channelEvents/channelStatusUpdate/channelStatusUpdate.js';
import client from '../../../Client.js';
import RedisClient, { cache as redis } from '../../../Redis.js';
import getMessage from 'src/BaseClient/UtilModules/requestHandler/channels/getMessage.js';
import channelPinsUpdate from 'src/Events/BotEvents/channelEvents/channelPinsUpdate/channelPinsUpdate.js';
import type { RChannel, RThread } from 'src/Typings/Redis.js';

export default {
 [GatewayDispatchEvents.ChannelCreate]: (data: GatewayChannelCreateDispatchData) =>
  redis.channels.set(data),

 [GatewayDispatchEvents.ChannelDelete]: (data: GatewayChannelDeleteDispatchData) => {
  redis.channels.del(data.id);
  RedisClient.keys(`${redis.messages.key}:${data.guild_id}:${data.id}:*`).then((keys) =>
   keys.length ? RedisClient.del(keys) : 0,
  );
 },

 [GatewayDispatchEvents.ChannelPinsUpdate]: async (data: GatewayChannelPinsUpdateDispatchData) => {
  let channel: RThread | RChannel | null = await redis.channels.get(data.channel_id);
  if (!channel) {
   channel = await redis.threads.get(data.channel_id);
   if (!channel) return;
  }

  const pins = await client.util.request.channels.getPins(channel);
  if (!pins) return;

  const oldPins = await redis.pins.get(data.guild_id || channel.guild_id, data.channel_id);
  redis.pins.set(data.guild_id || channel.guild_id, data.channel_id, pins);

  if (!oldPins.length) return;

  const createdPins = pins.filter((v) => !oldPins.includes(v.id));
  const deletedPins = await Promise.all(
   oldPins.filter((v) => !pins.find((p) => p.id === v)).map((m) => getMessage(channel, m)),
  );

  channelPinsUpdate(channel, createdPins, deletedPins);
 },

 [GatewayDispatchEvents.ChannelUpdate]: (data: GatewayChannelUpdateDispatchData) =>
  redis.channels.set(data),

 // TODO: wait for discord-api-types to add theses events
 CHANNEL_STATUSES: async (data: {
  guild_id: string;
  channels: { status: string; id: string }[];
 }) => {
  const oldStatusKeys = await RedisClient.keys(`${redis.vcStatus.key()}:${data.guild_id}:*`);
  const oldStatuses = await Promise.all(
   oldStatusKeys.map((key) => {
    const channelId = key.split(':').pop();
    if (!channelId) return undefined;

    return redis.vcStatus.get(data.guild_id, channelId).then((v) => ({ channelId, status: v }));
   }),
  ).then((r) => r.filter((v): v is { channelId: string; status: string } => !!v?.status));

  await RedisClient.del(oldStatusKeys);

  data.channels
   .filter((c) => c.status.length)
   .forEach((c) => redis.vcStatus.set(data.guild_id, c.id, c.status));

  const channelIdSet = new Set<string>();
  oldStatuses.forEach((old) => channelIdSet.add(old.channelId));
  data.channels.forEach((c) => channelIdSet.add(c.id));

  [...channelIdSet].forEach(async (channelId) => {
   const oldStatus = oldStatuses.find((v) => v.channelId === channelId)?.status || '';
   const newStatus = data.channels.find((v) => v.id === channelId)?.status || '';

   if (oldStatus === newStatus) return;

   const channel = await getChannel(data.guild_id, channelId);
   if (!channel) return;

   channelStatusUpdate(channel, oldStatus, newStatus);
  });
 },
 VOICE_CHANNEL_STATUS_UPDATE: async (data: { status: string; id: string; guild_id: string }) => {
  const oldStatus = await redis.vcStatus.get(data.guild_id, data.id).then((r) => r || '');
  if (oldStatus === data.status) return;

  redis.vcStatus.set(data.guild_id, data.id, data.status);

  const channel = await getChannel(data.guild_id, data.id);
  if (!channel) return;

  channelStatusUpdate(channel, oldStatus, data.status);
 },
} as const;
