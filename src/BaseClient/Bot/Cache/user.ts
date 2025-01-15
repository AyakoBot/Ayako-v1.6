import type { APIUser } from 'discord-api-types/v10';
import type Redis from 'ioredis';
import Cache from './base.js';

export type RUser = Omit<APIUser, 'avatar_decoration_data' | 'avatar' | 'banner'> & {
 avatar_decoration_data?: { asset_url: string; sku_id: string };
 avatar_url: string | null;
 banner_url: string | null;
};

const RUserKeys = [
 'id',
 'username',
 'discriminator',
 'global_name',
 'avatar_url',
 'bot',
 'system',
 'mfa_enabled',
 'banner_url',
 'accent_color',
 'locale',
 'verified',
 'flags',
 'premium_type',
 'public_flags',
 'avatar_decoration',
 'avatar_decoration_data',
] as const;

export default class UserCache extends Cache<APIUser> {
 public keys = RUserKeys;

 public extraKeys = {
  avatar_decoration_data: ['asset_url', 'sku_id'] as const,
 };

 constructor(prefix: string, redis: Redis) {
  super(`${prefix}:users`, redis);
 }

 public static assetUrl(asset: string) {
  return `https://cdn.discordapp.com/avatar-decoration-presets/${asset}.png`;
 }

 public static avatarUrl(avatar: string, userId: string) {
  return `https://cdn.discordapp.com/avatars/${userId}/${avatar}.${avatar.startsWith('a_') ? 'gif' : 'webp'}`;
 }

 public static bannerUrl(banner: string, userId: string) {
  return `https://cdn.discordapp.com/banners/${userId}/${banner}.${banner.startsWith('a_') ? 'gif' : 'webp'}`;
 }

 key() {
  return this.prefix;
 }

 async set(data: APIUser) {
  const rData = this.apiToR(data);
  if (!rData) return false;

  await this.redis.set(`${this.key()}:${data.id}`, JSON.stringify(rData));

  return true;
 }

 get(id: string) {
  return this.redis.get(`${this.key()}:${id}`).then((data) => this.stringToData(data));
 }

 del(id: string): Promise<number> {
  return this.redis.del(`${this.key()}:${id}`);
 }

 apiToR(data: APIUser) {
  const keysNotToCache = Object.keys(data).filter(
   (key): key is keyof typeof data => !this.keys.includes(key),
  );

  const rData = structuredClone(data) as unknown as RUser;
  rData.avatar_decoration_data = data.avatar_decoration_data
   ? {
      asset_url: UserCache.assetUrl(data.avatar_decoration_data.asset),
      sku_id: data.avatar_decoration_data.sku_id,
     }
   : undefined;
  rData.avatar_url = data.avatar ? UserCache.avatarUrl(data.avatar, data.id) : null;
  rData.banner_url = data.banner ? UserCache.bannerUrl(data.banner, data.id) : null;

  keysNotToCache.forEach((k) => delete (rData as Record<string, unknown>)[k as string]);

  return rData;
 }
}
