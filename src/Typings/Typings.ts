import { StoredPunishmentTypes } from '@prisma/client';
import type { APIApplicationCommandAutocompleteInteraction } from 'discord-api-types/v10.js';
import type { RChannel, RGuild, RMessage, RRole, RUser } from './Redis.js';

export type * from '../BaseClient/Cluster/Redis.js';
export * from '../SlashCommands/index.js';
export type * from './DataBase.js';
export * from './Settings.js';
export type * from './TopGG.js';

export type Language = import('../BaseClient/Other/language.js').default;

export interface Command<T extends boolean | undefined> {
 takesFirstArg: boolean;
 thisGuildOnly: string[];
 dmOnly: boolean;
 dmAllowed: T;
 type: 'mod' | 'other' | 'owner';
 requiresSlashCommand: boolean;
 default: (
  msg: RMessage,
  args: string[],
  {
   language,
   command,
   prefix,
  }: {
   language: Language;
   command: Command<T>;
   prefix: string;
  },
 ) => void | Promise<void>;
}

export type AcceptedMergingTypes = 'string' | 'boolean' | 'difference' | 'icon' | 'image';

export interface AutoCompleteFile {
 default: (
  cmd: APIApplicationCommandAutocompleteInteraction | { guild: RGuild },
 ) => Promise<{ name: string; value: string }[] | undefined>;
}

export type TokenResponse = {
 access_token: string;
 expires_in: number;
 refresh_token: string;
 scope: string;
 token_type: string;
};

export type RawUser = {
 id: string;
 username: string;
 global_name: null;
 display_name: null;
 avatar: string;
 discriminator: string;
 public_flags: number;
 flags: number;
 banner: string;
 banner_color: null;
 accent_color: null;
 locale: string;
 mfa_enabled: boolean;
 premium_type: number;
 avatar_decoration: string;
 email: string;
 verified: boolean;
};

export type Appeal = {
 userId: string;
 guildId: string;
 punishmentId: string;
};

export type NeverNull<T, K extends keyof T> = {
 [P in keyof T]: P extends K ? NonNullable<T[P]> : T[P];
};

export type HelpCommand =
 | { parentCommand: string; subCommandGroup: string; subCommand: string }
 | { parentCommand: string; subCommand: string; subCommandGroup?: undefined }
 | { parentCommand: string; subCommandGroup?: undefined; subCommand?: undefined };

export enum Colors {
 Danger = 0xff0000,
 Success = 0x00ff00,
 Ephemeral = 0x2b2d31,
 Loading = 0xffff00,
 Base = 0xb0ff00,
}

export enum ModTypes {
 RoleAdd = 'roleAdd',
 RoleRemove = 'roleRemove',
 TempMuteAdd = 'tempMuteAdd',
 MuteRemove = 'muteRemove',
 BanAdd = 'banAdd',
 BanRemove = 'banRemove',
 SoftBanAdd = 'softBanAdd',
 TempBanAdd = 'tempBanAdd',
 ChannelBanAdd = 'channelBanAdd',
 TempChannelBanAdd = 'tempChannelBanAdd',
 ChannelBanRemove = 'channelBanRemove',
 KickAdd = 'kickAdd',
 WarnAdd = 'warnAdd',
 SoftWarnAdd = 'softWarnAdd',
 StrikeAdd = 'strikeAdd',
 UnAfk = 'unAfk',
 VcMuteAdd = 'vcMuteAdd',
 VcTempMuteAdd = 'vcTempMuteAdd',
 VcMuteRemove = 'vcMuteRemove',
 VcDeafenAdd = 'vcDeafenAdd',
 VcTempDeafenAdd = 'vcTempDeafenAdd',
 VcDeafenRemove = 'vcDeafenRemove',
}

export const ModColors: Record<ModTypes, Colors> = {
 [ModTypes.RoleAdd]: Colors.Success,
 [ModTypes.RoleRemove]: Colors.Danger,
 [ModTypes.TempMuteAdd]: Colors.Success,
 [ModTypes.MuteRemove]: Colors.Danger,
 [ModTypes.BanAdd]: Colors.Danger,
 [ModTypes.BanRemove]: Colors.Success,
 [ModTypes.SoftBanAdd]: Colors.Danger,
 [ModTypes.TempBanAdd]: Colors.Danger,
 [ModTypes.ChannelBanAdd]: Colors.Danger,
 [ModTypes.TempChannelBanAdd]: Colors.Danger,
 [ModTypes.ChannelBanRemove]: Colors.Success,
 [ModTypes.KickAdd]: Colors.Danger,
 [ModTypes.WarnAdd]: Colors.Danger,
 [ModTypes.SoftWarnAdd]: Colors.Danger,
 [ModTypes.StrikeAdd]: Colors.Danger,
 [ModTypes.UnAfk]: Colors.Success,
 [ModTypes.VcMuteAdd]: Colors.Danger,
 [ModTypes.VcTempMuteAdd]: Colors.Danger,
 [ModTypes.VcMuteRemove]: Colors.Success,
 [ModTypes.VcDeafenAdd]: Colors.Danger,
 [ModTypes.VcTempDeafenAdd]: Colors.Danger,
 [ModTypes.VcDeafenRemove]: Colors.Success,
};

export type BaseOptions = {
 reason: string;
 dbOnly: boolean;
 guild: RGuild;
 target: RUser;
 executor: RUser;
 skipChecks: boolean;
};

type Roles = { roles: RRole[] };
type Temp = { duration: number };
type Empty = NonNullable<unknown>;
type DeleteMessageSeconds = { deleteMessageSeconds: number };

type SpecificOpts = {
 [ModTypes.RoleAdd]: Roles;
 [ModTypes.RoleRemove]: Roles;
 [ModTypes.TempMuteAdd]: Temp;
 [ModTypes.MuteRemove]: Empty;
 [ModTypes.BanAdd]: DeleteMessageSeconds;
 [ModTypes.SoftBanAdd]: DeleteMessageSeconds;
 [ModTypes.TempBanAdd]: Temp & DeleteMessageSeconds;
 [ModTypes.ChannelBanAdd]: RChannel;
 [ModTypes.TempChannelBanAdd]: RChannel & Temp;
 [ModTypes.ChannelBanRemove]: RChannel;
 [ModTypes.BanRemove]: Empty;
 [ModTypes.KickAdd]: Empty;
 [ModTypes.WarnAdd]: Empty;
 [ModTypes.SoftWarnAdd]: Empty;
 [ModTypes.StrikeAdd]: Empty;
 [ModTypes.UnAfk]: Empty;
 [ModTypes.VcMuteAdd]: Empty;
 [ModTypes.VcTempMuteAdd]: Temp;
 [ModTypes.VcMuteRemove]: Empty;
 [ModTypes.VcDeafenAdd]: Empty;
 [ModTypes.VcTempDeafenAdd]: Temp;
 [ModTypes.VcDeafenRemove]: Empty;
};

type SpecificOptions = { [K in ModTypes]: SpecificOpts[K] };

export type ModOptions<T extends ModTypes> = BaseOptions & SpecificOptions[T];

export enum PunishmentType {
 Warn = 'warn',
 Kick = 'kick',
 Mute = 'mute',
 Tempmute = 'tempmute',
 Ban = 'ban',
 Tempban = 'tempban',
 Channelban = 'channelban',
 Tempchannelban = 'tempchannelban',
 Softban = 'softban',
 VCMute = 'vcmute',
 VCDeaf = 'vcdeaf',
 VCTempMute = 'vctempmute',
 VCTempDeaf = 'vctempdeaf',
}

export enum MessageType {
 Appeal = 'appeal',
 Vote = 'vote',
 Interaction = 'interaction',
}

export type MakeRequired<T, K extends keyof T> = T & {
 [P in K]-?: Exclude<T[P], null>;
};

export type MaybeArray<T = unknown> = T | T[];

type RequiredKeys<T> = {
 // eslint-disable-next-line @typescript-eslint/no-empty-object-type
 [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

export type RequiredOnly<T> = Pick<T, RequiredKeys<T>>;

export const ModType2StoredPunishmentTypes: Record<ModTypes, StoredPunishmentTypes> = {
 [ModTypes.VcDeafenAdd]: StoredPunishmentTypes.vcdeaf,
 [ModTypes.VcTempDeafenAdd]: StoredPunishmentTypes.vctempdeaf,
 [ModTypes.VcDeafenRemove]: StoredPunishmentTypes.vcdeaf,
 [ModTypes.TempMuteAdd]: StoredPunishmentTypes.tempmute,
 [ModTypes.MuteRemove]: StoredPunishmentTypes.tempmute,
 [ModTypes.BanAdd]: StoredPunishmentTypes.ban,
 [ModTypes.BanRemove]: StoredPunishmentTypes.ban,
 [ModTypes.SoftBanAdd]: StoredPunishmentTypes.softban,
 [ModTypes.TempBanAdd]: StoredPunishmentTypes.tempban,
 [ModTypes.ChannelBanRemove]: StoredPunishmentTypes.channelban,
 [ModTypes.ChannelBanAdd]: StoredPunishmentTypes.channelban,
 [ModTypes.TempChannelBanAdd]: StoredPunishmentTypes.tempchannelban,
 [ModTypes.KickAdd]: StoredPunishmentTypes.kick,
 [ModTypes.WarnAdd]: StoredPunishmentTypes.warn,
 [ModTypes.VcMuteAdd]: StoredPunishmentTypes.vcmute,
 [ModTypes.VcTempMuteAdd]: StoredPunishmentTypes.vctempmute,
 [ModTypes.VcMuteRemove]: StoredPunishmentTypes.vcmute,
 [ModTypes.StrikeAdd]: StoredPunishmentTypes.warn,
 [ModTypes.UnAfk]: StoredPunishmentTypes.warn,
 [ModTypes.SoftWarnAdd]: StoredPunishmentTypes.warn,
 [ModTypes.RoleAdd]: StoredPunishmentTypes.warn,
 [ModTypes.RoleRemove]: StoredPunishmentTypes.warn,
};

export const PunishmentType2StoredPunishmentTypes: Record<PunishmentType, StoredPunishmentTypes> = {
 [PunishmentType.Kick]: StoredPunishmentTypes.kick,
 [PunishmentType.Warn]: StoredPunishmentTypes.warn,
 [PunishmentType.Mute]: StoredPunishmentTypes.mute,
 [PunishmentType.Tempmute]: StoredPunishmentTypes.tempmute,
 [PunishmentType.Ban]: StoredPunishmentTypes.ban,
 [PunishmentType.Tempban]: StoredPunishmentTypes.tempban,
 [PunishmentType.Channelban]: StoredPunishmentTypes.channelban,
 [PunishmentType.Tempchannelban]: StoredPunishmentTypes.tempchannelban,
 [PunishmentType.Softban]: StoredPunishmentTypes.softban,
 [PunishmentType.VCMute]: StoredPunishmentTypes.vcmute,
 [PunishmentType.VCDeaf]: StoredPunishmentTypes.vcdeaf,
 [PunishmentType.VCTempMute]: StoredPunishmentTypes.vcmute,
 [PunishmentType.VCTempDeaf]: StoredPunishmentTypes.vcdeaf,
};

export const StoredTempTypes = [
 StoredPunishmentTypes.tempban,
 StoredPunishmentTypes.tempchannelban,
 StoredPunishmentTypes.tempmute,
 StoredPunishmentTypes.vctempdeaf,
 StoredPunishmentTypes.vctempmute,
];

export const StoredBaseAndTempType = {
 [StoredPunishmentTypes.ban]: [StoredPunishmentTypes.ban, StoredPunishmentTypes.tempban],
 [StoredPunishmentTypes.channelban]: [
  StoredPunishmentTypes.channelban,
  StoredPunishmentTypes.tempchannelban,
 ],
 [StoredPunishmentTypes.mute]: [StoredPunishmentTypes.mute, StoredPunishmentTypes.tempmute],
 [StoredPunishmentTypes.vcdeaf]: [StoredPunishmentTypes.vcdeaf, StoredPunishmentTypes.vctempdeaf],
 [StoredPunishmentTypes.vcmute]: [StoredPunishmentTypes.vcmute, StoredPunishmentTypes.vctempmute],

 [StoredPunishmentTypes.kick]: [StoredPunishmentTypes.kick],
 [StoredPunishmentTypes.warn]: [StoredPunishmentTypes.warn],
 [StoredPunishmentTypes.tempmute]: [StoredPunishmentTypes.tempmute],
 [StoredPunishmentTypes.tempban]: [StoredPunishmentTypes.tempban],
 [StoredPunishmentTypes.tempchannelban]: [StoredPunishmentTypes.tempchannelban],
 [StoredPunishmentTypes.softban]: [StoredPunishmentTypes.softban],
 [StoredPunishmentTypes.vctempdeaf]: [StoredPunishmentTypes.vctempdeaf],
 [StoredPunishmentTypes.vctempmute]: [StoredPunishmentTypes.vctempmute],
};
