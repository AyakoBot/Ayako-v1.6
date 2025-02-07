import type Redis from 'ioredis';

export default class VCStatusCache {
 prefix: string;
 redis: Redis;
 ttl = 1209600;

 constructor(prefix: string, redis: Redis) {
  this.prefix = `${prefix}:vc-status`;
  this.redis = redis;
 }

 key() {
  return this.prefix;
 }

 async set(guildId: string, channelId: string, status: string) {
  await this.redis.setex(`${this.key()}:${guildId}:${channelId}`, this.ttl, status);

  return true;
 }

 get(gId: string, cId: string) {
  return this.redis.get(`${this.key()}:${gId}:${cId}`);
 }
}
