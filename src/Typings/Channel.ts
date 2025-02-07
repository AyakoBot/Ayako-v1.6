import { ChannelType, PermissionFlagsBits } from 'discord-api-types/v10';
import type { RChannel, RThread } from './Redis.js';

export const GuildTextChannelTypes = [
 ChannelType.AnnouncementThread,
 ChannelType.GuildAnnouncement,
 ChannelType.GuildStageVoice,
 ChannelType.GuildText,
 ChannelType.GuildVoice,
 ChannelType.PrivateThread,
 ChannelType.PublicThread,
] as const;

export const AllNonThreadGuildChannelTypes = [
 ChannelType.GuildAnnouncement,
 ChannelType.GuildStageVoice,
 ChannelType.GuildText,
 ChannelType.GuildVoice,
 ChannelType.GuildForum,
 ChannelType.GuildMedia,
] as const;

export const AllThreadGuildChannelTypes = [
 ChannelType.PublicThread,
 ChannelType.PrivateThread,
 ChannelType.AnnouncementThread,
] as const;

export const ChannelBanBits = [
 PermissionFlagsBits.SendMessages,
 PermissionFlagsBits.SendMessagesInThreads,
 PermissionFlagsBits.ViewChannel,
 PermissionFlagsBits.AddReactions,
 PermissionFlagsBits.Connect,
] as const;

export const isThread = (c: RChannel | RThread): c is RThread =>
 AllThreadGuildChannelTypes.includes(c.type);

export const isNonThread = (c: RChannel | RThread): c is RChannel =>
 AllNonThreadGuildChannelTypes.includes(c.type);

export const isGuildText = (c: RChannel | RThread): c is RChannel =>
 GuildTextChannelTypes.includes(c.type);

export const isGuildVoice = (c: RChannel | RThread): c is RChannel =>
 c.type === ChannelType.GuildVoice;

export const isGuildStageVoice = (c: RChannel | RThread): c is RChannel =>
 c.type === ChannelType.GuildStageVoice;

export const isGuildAnnouncement = (c: RChannel | RThread): c is RChannel =>
 c.type === ChannelType.GuildAnnouncement;

export const isGuildForum = (c: RChannel | RThread): c is RChannel =>
 c.type === ChannelType.GuildForum;

export const isGuildMedia = (c: RChannel | RThread): c is RChannel =>
 c.type === ChannelType.GuildMedia;

export const isPublicThread = (c: RChannel | RThread): c is RChannel =>
 c.type === ChannelType.PublicThread;

export const isPrivateThread = (c: RChannel | RThread): c is RChannel =>
 c.type === ChannelType.PrivateThread;

export const isAnnouncementThread = (c: RChannel | RThread): c is RChannel =>
 c.type === ChannelType.AnnouncementThread;

export const isGuildChannel = (c: RChannel | RThread): c is RChannel =>
 isGuildText(c) ||
 isGuildVoice(c) ||
 isGuildStageVoice(c) ||
 isGuildAnnouncement(c) ||
 isGuildForum(c) ||
 isGuildMedia(c);

export const isTextChannel = (c: RChannel | RThread): c is RChannel =>
 isGuildText(c) || isAnnouncementThread(c);

export const isVoiceChannel = (c: RChannel | RThread): c is RChannel =>
 isGuildVoice(c) || isGuildStageVoice(c);
