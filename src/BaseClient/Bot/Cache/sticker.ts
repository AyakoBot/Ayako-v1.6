import { StickerFormatType, type APISticker } from 'discord-api-types/v10';
import type Redis from 'ioredis';
import type { MakeRequired } from 'src/Typings/Typings';
import Cache from './base.js';

export type RSticker = MakeRequired<APISticker, 'guild_id'> & {
 user_id: string | null;
 url: string;
};

export const RStickerKeys = [
 'id',
 'pack_id',
 'name',
 'description',
 'tags',
 'type',
 'format_type',
 'available',
 'guild_id',
 'sort_value',
 'url',
] as const;

export default class StickerCache extends Cache<APISticker> {
 public keys = RStickerKeys;

 constructor(prefix: string, redis: Redis) {
  super(`${prefix}:stickers`, redis);
 }

 public static assetUrl(id: string, format: StickerFormatType) {
  return `https://media.discordapp.net/stickers/${id}.${
   format === StickerFormatType.GIF
    ? 'gif'
    : (format === StickerFormatType.Lottie && 'json') || 'png'
  }`;
 }

 key() {
  return this.prefix;
 }

 async set(data: APISticker) {
  const rData = this.apiToR(data);
  if (!rData) return false;

  await this.redis.setex(
   `${this.key()}:${data.guild_id}:${data.id}`,
   this.ttl,
   JSON.stringify(rData),
  );

  return true;
 }

 get(id: string) {
  return this.redis.get(`${this.key()}:${id}`).then((data) => this.stringToData(data));
 }

 del(id: string): Promise<number> {
  return this.redis
   .keys(`${this.key()}:${id}`)
   .then((keys) => (keys.length ? this.redis.del(keys) : 0));
 }

 apiToR(data: APISticker) {
  const keysNotToCache = Object.keys(data).filter(
   (key): key is keyof typeof data => !this.keys.includes(key),
  );

  const rData = structuredClone(data) as unknown as RSticker;
  rData.user_id = data.user?.id || null;
  rData.url = StickerCache.assetUrl(data.id, data.format_type);

  keysNotToCache.forEach((k) => delete (rData as unknown as Record<string, unknown>)[k as string]);

  return rData;
 }
}
