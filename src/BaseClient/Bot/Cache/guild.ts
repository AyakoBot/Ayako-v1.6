import type { APIGuild } from 'discord-api-types/v10';
import type Redis from 'ioredis';
import Cache from './base.js';

export type RGuild = Omit<
 APIGuild,
 'roles' | 'emojis' | 'stickers' | 'icon_hash' | 'discovery_splash' | 'banner'
> & {
 roles: string[];
 emojis: string[];
 stickers: string[];
 icon_url: string | null;
 discovery_splash_url: string | null;
 banner_url: string | null;
 member_count: number;
};

export const RGuildKeys = [
 'icon_url',
 'discovery_splash_url',
 'owner',
 'owner_id',
 'permissions',
 'region',
 'afk_channel_id',
 'afk_timeout',
 'widget_enabled',
 'widget_channel_id',
 'verification_level',
 'default_message_notifications',
 'explicit_content_filter',
 'roles',
 'emojis',
 'features',
 'mfa_level',
 'application_id',
 'system_channel_id',
 'system_channel_flags',
 'rules_channel_id',
 'max_presences',
 'max_members',
 'vanity_url_code',
 'description',
 'banner_url',
 'premium_tier',
 'premium_subscription_count',
 'preferred_locale',
 'public_updates_channel_id',
 'max_video_channel_users',
 'max_stage_video_channel_users',
 'approximate_member_count',
 'approximate_presence_count',
 'welcome_screen',
 'nsfw_level',
 'stickers',
 'premium_progress_bar_enabled',
 'hub_type',
 'safety_alerts_channel_id',
 'member_count',
] as const;

export default class GuildCache extends Cache<APIGuild> {
 public keys = RGuildKeys;

 public static getIconUrl(hash: string, guildId: string) {
  return `https://cdn.discordapp.com/icons/${guildId}/${hash}.${hash.startsWith('a_') ? 'gif' : 'webp'}`;
 }

 public static getPublicSplashUrl(hash: string, guildId: string) {
  return `https://cdn.discordapp.com/discovery-splashes/${guildId}/${hash}.${hash.startsWith('a_') ? 'gif' : 'webp'}`;
 }

 public static getBannerUrl(hash: string, guildId: string) {
  return `https://cdn.discordapp.com/banners/${guildId}/${hash}.${hash.startsWith('a_') ? 'gif' : 'webp'}`;
 }

 constructor(prefix: string, redis: Redis) {
  super(`${prefix}:guilds`, redis);
 }

 key() {
  return this.prefix;
 }

 async set(data: APIGuild) {
  const rData = this.apiToR(data);
  if (!rData) return false;

  await this.redis.setex(`${this.key()}:${data.id}`, this.ttl, JSON.stringify(rData));

  return true;
 }

 get(id: string) {
  return this.redis.get(`${this.key()}:${id}`).then((data) => this.stringToData(data));
 }

 del(id: string): Promise<number> {
  return this.redis.del(`${this.key()}:${id}`);
 }

 _set(data: RGuild) {
  return this.redis.setex(`${this.key()}`, this.ttl, JSON.stringify(data));
 }

 apiToR(data: APIGuild) {
  const keysNotToCache = Object.keys(data).filter(
   (key): key is keyof typeof data => !this.keys.includes(key),
  );

  const rData = structuredClone(data) as unknown as RGuild;
  rData.roles = data.roles.map((r) => r.id);
  rData.emojis = data.emojis.map((e) => e.id).filter((e): e is string => !!e);
  rData.stickers = data.stickers.map((s) => s.id);
  rData.icon_url = data.icon ? GuildCache.getIconUrl(data.icon, data.id) : null;
  rData.discovery_splash_url = data.discovery_splash
   ? GuildCache.getPublicSplashUrl(data.discovery_splash, data.id)
   : null;
  rData.banner_url = data.banner ? GuildCache.getBannerUrl(data.banner, data.id) : null;

  keysNotToCache.forEach((k) => delete (rData as Record<string, unknown>)[k as string]);

  return rData;
 }
}
