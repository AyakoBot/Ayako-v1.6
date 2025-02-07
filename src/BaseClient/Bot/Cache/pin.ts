import type Redis from 'ioredis';

export default class PinCache {
 prefix: string;
 redis: Redis;
 ttl = 1209600;

 constructor(prefix: string, redis: Redis) {
  this.prefix = `${prefix}:pins`;
  this.redis = redis;
 }

 key() {
  return this.prefix;
 }

 refresh(cId: string) {
  return this.redis.expire(`${this.key()}:${cId}`, this.ttl);
 }

 async set(guildId: string, channelId: string, messageIds: string[]) {
  await this.redis.setex(
   `${this.key()}:${guildId}:${channelId}`,
   this.ttl,
   JSON.stringify(messageIds),
  );

  return true;
 }

 get(gId: string, cId: string) {
  return this.redis
   .get(`${this.key()}:${gId}:${cId}`)
   .then((data) => (data ? (JSON.parse(data) as string[]) : []));
 }
}
