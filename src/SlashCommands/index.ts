import afk from './Commands/afk.js';
import balance from './Commands/balance.js';
import bypass from './Commands/bypass.js';
import customRole from './Commands/custom-role.js';
import embedbuilder from './Commands/embed-builder.js';
import emoji from './Commands/emoji.js';
import giveaway from './Commands/giveaway.js';
import help from './Commands/help.js';
import images from './Commands/images.js';
import info from './Commands/info.js';
import invites from './Commands/invites.js';
import leaderboard from './Commands/leaderboard.js';
import membercount from './Commands/membercount.js';
import mod from './Commands/mod.js';
import ping from './Commands/ping.js';
import rank from './Commands/rank.js';
import reminder from './Commands/reminder.js';
import roles from './Commands/roles.js';
import rp from './Commands/rp.js';
import selfroles from './Commands/self-roles.js';
import server from './Commands/server.js';
import settings from './Commands/settings.js';
import shop from './Commands/shop.js';
import stickMessage from './Commands/stick-message.js';
import sticker from './Commands/stickers.js';
import stp from './Commands/stp.js';
import suggest from './Commands/suggest.js';
import user from './Commands/user.js';
import vote from './Commands/vote.js';
import actions from './Commands/actions.js';
import viewRaw from './Commands/view-raw.js';
import vc from './Commands/vc.js';

export enum CommandCategories {
 Utility = 'utility',
 Info = 'info',
 Roles = 'roles',
 Automation = 'automation',
 Moderation = 'moderation',
 Leveling = 'leveling',
 Nitro = 'nitro',
 Fun = 'fun',
 Channels = 'channels',
 Shop = 'shop',
 Vote = 'vote',
}

export default {
 public: {
  vc,
  leaderboard,
  balance,
  user,
  settings,
  info,
  'embed-builder': embedbuilder,
  'Stick Message': stickMessage,
  stp,
  membercount,
  ping,
  rp,
  images,
  roles,
  afk,
  help,
  emoji,
  vote,
  giveaway,
  mod,
  customRole,
  'self-roles': selfroles,
  reminder,
  suggest,
  shop,
  invites,
  server,
  rank,
  bypass,
  sticker,
  actions0: actions[0],
  actions1: actions[1],
  actions2: actions[2],
  'View Raw': viewRaw,
 },
 categories: {
  'settings_moderation_anti-spam': [CommandCategories.Moderation],
  'settings_moderation_anti-virus': [CommandCategories.Moderation],
  'settings_moderation_auto-punish': [CommandCategories.Moderation],
  settings_moderation_newlines: [CommandCategories.Moderation],
  settings_moderation_invites: [CommandCategories.Moderation],
  'settings_moderation_denylist-rules': [CommandCategories.Moderation],
  settings_moderation_expiry: [CommandCategories.Moderation],
  settings_leveling_basic: [CommandCategories.Leveling],
  'settings_leveling_multi-channels': [CommandCategories.Leveling, CommandCategories.Channels],
  'settings_leveling_reset-all': [CommandCategories.Leveling, CommandCategories.Utility],
  'settings_leveling_reset-user': [CommandCategories.Leveling, CommandCategories.Utility],
  'settings_leveling_reset-role': [
   CommandCategories.Leveling,
   CommandCategories.Utility,
   CommandCategories.Roles,
  ],
  'settings_leveling_multi-roles': [
   CommandCategories.Leveling,
   CommandCategories.Utility,
   CommandCategories.Roles,
  ],
  'settings_leveling_level-roles': [
   CommandCategories.Leveling,
   CommandCategories.Utility,
   CommandCategories.Roles,
   CommandCategories.Automation,
  ],
  'settings_leveling_rule-channels': [CommandCategories.Leveling, CommandCategories.Channels],
  'settings_leveling_set-level-role': [
   CommandCategories.Leveling,
   CommandCategories.Utility,
   CommandCategories.Roles,
  ],
  'settings_leveling_set-level-user': [CommandCategories.Leveling, CommandCategories.Utility],
  settings_nitro_basic: [CommandCategories.Nitro, CommandCategories.Automation],
  'settings_nitro_booster-roles': [
   CommandCategories.Nitro,
   CommandCategories.Roles,
   CommandCategories.Automation,
  ],
  settings_vote_basic: [CommandCategories.Vote, CommandCategories.Automation],
  'settings_vote_vote-rewards': [CommandCategories.Vote, CommandCategories.Automation],
  'settings_roles_role-rewards': [CommandCategories.Automation, CommandCategories.Roles],
  'settings_roles_auto-roles': [CommandCategories.Automation, CommandCategories.Roles],
  'settings_roles_self-roles': [CommandCategories.Roles, CommandCategories.Automation],
  settings_roles_shop: [
   CommandCategories.Roles,
   CommandCategories.Shop,
   CommandCategories.Automation,
  ],
  settings_roles_separators: [CommandCategories.Roles, CommandCategories.Automation],
  settings_roles_sticky: [CommandCategories.Roles, CommandCategories.Automation],
  'settings_roles_reaction-role-settings': [CommandCategories.Roles, CommandCategories.Automation],
  'settings_roles_reaction-roles': [CommandCategories.Roles, CommandCategories.Automation],
  'settings_roles_button-role-settings': [CommandCategories.Roles, CommandCategories.Automation],
  'settings_roles_button-roles': [CommandCategories.Roles, CommandCategories.Automation],
  settings_automation_cooldowns: [CommandCategories.Automation],
  'settings_automation_voice-hubs': [CommandCategories.Automation, CommandCategories.Channels],
  'settings_automation_disboard-reminders': [CommandCategories.Automation],
  settings_automation_suggestions: [CommandCategories.Automation],
  settings_automation_verification: [CommandCategories.Automation],
  settings_automation_censor: [CommandCategories.Automation],
  settings_automation_welcome: [CommandCategories.Automation],
  settings_basic: [CommandCategories.Utility],
  settings_logs: [CommandCategories.Info, CommandCategories.Channels, CommandCategories.Automation],
  info_user: [CommandCategories.Info],
  info_servers: [CommandCategories.Info],
  info_server: [CommandCategories.Info],
  info_channel: [CommandCategories.Info, CommandCategories.Channels],
  info_role: [CommandCategories.Info, CommandCategories.Roles],
  info_bot: [CommandCategories.Info],
  info_badges: [CommandCategories.Info],
  info_emoji: [CommandCategories.Info],
  info_sticker: [CommandCategories.Info],
  info_invite: [CommandCategories.Info],
  server_info: [CommandCategories.Info],
  server_list: [CommandCategories.Info],
  'embed-builder_view_custom-embeds': [CommandCategories.Utility],
  'embed-builder_view_from-message': [CommandCategories.Utility],
  'embed-builder_create': [CommandCategories.Utility],
  check: [CommandCategories.Moderation, CommandCategories.Utility],
  'Stick Message': [CommandCategories.Utility],
  'View Raw': [CommandCategories.Utility],
  stp: [CommandCategories.Utility],
  membercount: [CommandCategories.Info],
  ping: [CommandCategories.Info],
  rp_manager: [CommandCategories.Fun],
  rp_block: [CommandCategories.Utility],
  rp_unblock: [CommandCategories.Utility],
  rp_blocked: [CommandCategories.Info],
  images_neko: [CommandCategories.Fun],
  images_husbando: [CommandCategories.Fun],
  images_kitsune: [CommandCategories.Fun],
  images_waifu: [CommandCategories.Fun],
  images_shinobu: [CommandCategories.Fun],
  images_megumin: [CommandCategories.Fun],
  images_eevee: [CommandCategories.Fun],
  images_holo: [CommandCategories.Fun],
  images_icon: [CommandCategories.Fun],
  images_okami: [CommandCategories.Fun],
  images_senko: [CommandCategories.Fun],
  images_shiro: [CommandCategories.Fun],
  'roles_builders_reaction-roles': [CommandCategories.Utility],
  'roles_builders_button-roles': [CommandCategories.Utility],
  roles_create: [CommandCategories.Utility, CommandCategories.Roles],
  roles_edit: [CommandCategories.Utility, CommandCategories.Roles],
  roles_delete: [CommandCategories.Utility, CommandCategories.Roles],
  roles_info: [CommandCategories.Info, CommandCategories.Roles],
  roles_members: [CommandCategories.Info, CommandCategories.Roles],
  roles_give: [CommandCategories.Moderation, CommandCategories.Roles],
  roles_take: [CommandCategories.Moderation, CommandCategories.Roles],
  afk: [CommandCategories.Utility],
  help_list: [CommandCategories.Info],
  help_moderation: [CommandCategories.Info],
  help_automation: [CommandCategories.Info],
  help_command: [CommandCategories.Info],
  help_channels: [CommandCategories.Info],
  help_utility: [CommandCategories.Info],
  help_info: [CommandCategories.Info],
  help_leveling: [CommandCategories.Info],
  help_nitro: [CommandCategories.Info],
  help_vote: [CommandCategories.Info],
  help_roles: [CommandCategories.Info],
  help_shop: [CommandCategories.Info],
  help_fun: [CommandCategories.Info],
  emojis_info: [CommandCategories.Info],
  'emojis_create_from-url': [CommandCategories.Utility],
  'emojis_create_from-file': [CommandCategories.Utility],
  'emojis_create_from-emoji': [CommandCategories.Utility],
  emojis_delete: [CommandCategories.Utility],
  emojis_edit_name: [CommandCategories.Utility],
  emojis_edit_roles: [CommandCategories.Utility, CommandCategories.Roles],
  invites_create: [CommandCategories.Utility],
  invites_info: [CommandCategories.Info],
  invites_delete: [CommandCategories.Utility],
  user_info: [CommandCategories.Info],
  user_avatar: [CommandCategories.Utility],
  user_banner: [CommandCategories.Utility],
  vote: [CommandCategories.Info],
  giveaway_create: [CommandCategories.Utility],
  giveaway_reroll: [CommandCategories.Utility],
  giveaway_cancel: [CommandCategories.Utility],
  giveaway_list: [CommandCategories.Info],
  giveaway_end: [CommandCategories.Utility],
  mod_tempmute: [CommandCategories.Moderation],
  mod_unmute: [CommandCategories.Moderation],
  mod_ban: [CommandCategories.Moderation],
  'mod_soft-ban': [CommandCategories.Moderation],
  'mod_temp-ban': [CommandCategories.Moderation],
  'mod_channel-ban': [CommandCategories.Moderation],
  'mod_temp-channel-ban': [CommandCategories.Moderation],
  'mod_channel-unban': [CommandCategories.Moderation],
  mod_kick: [CommandCategories.Moderation],
  mod_warn: [CommandCategories.Moderation],
  'mod_soft-warn': [CommandCategories.Moderation],
  mod_strike: [CommandCategories.Moderation, CommandCategories.Automation],
  mod_unafk: [CommandCategories.Moderation],
  mod_unban: [CommandCategories.Moderation],
  mod_pardon_one: [CommandCategories.Moderation],
  mod_pardon_before: [CommandCategories.Moderation],
  mod_pardon_after: [CommandCategories.Moderation],
  mod_pardon_between: [CommandCategories.Moderation],
  mod_pardon_by: [CommandCategories.Moderation],
  'mod_pardon_all-by': [CommandCategories.Moderation],
  'mod_pardon_all-on': [CommandCategories.Moderation],
  'custom-role': [CommandCategories.Utility, CommandCategories.Roles, CommandCategories.Automation],
  'self-roles': [CommandCategories.Roles, CommandCategories.Automation],
  mod_clear_all: [CommandCategories.Utility],
  mod_clear_user: [CommandCategories.Utility],
  mod_clear_between: [CommandCategories.Utility],
  mod_clear_match: [CommandCategories.Utility],
  'mod_clear_not-match': [CommandCategories.Utility],
  'mod_clear_starts-with': [CommandCategories.Utility],
  'mod_clear_ends-with': [CommandCategories.Utility],
  mod_clear_includes: [CommandCategories.Utility],
  mod_clear_links: [CommandCategories.Utility],
  mod_clear_invites: [CommandCategories.Utility],
  mod_clear_images: [CommandCategories.Utility],
  mod_clear_videos: [CommandCategories.Utility],
  mod_clear_files: [CommandCategories.Utility],
  mod_clear_audio: [CommandCategories.Utility],
  mod_clear_mentions: [CommandCategories.Utility],
  mod_clear_stickers: [CommandCategories.Utility],
  mod_clear_embeds: [CommandCategories.Utility],
  mod_clear_text: [CommandCategories.Utility],
  mod_clear_humans: [CommandCategories.Utility],
  mod_clear_bots: [CommandCategories.Utility],
  reminder_create: [CommandCategories.Utility],
  reminder_list: [CommandCategories.Utility],
  reminder_delete: [CommandCategories.Utility],
  reminder_edit: [CommandCategories.Utility],
  suggest: [CommandCategories.Utility],
  shop: [CommandCategories.Utility, CommandCategories.Roles],
  balance: [CommandCategories.Utility, CommandCategories.Shop],
  leaderboard_server: [CommandCategories.Info, CommandCategories.Leveling],
  leaderboard_nitro: [CommandCategories.Info, CommandCategories.Nitro],
  leaderboard_global: [CommandCategories.Info],
  rank_server: [CommandCategories.Info, CommandCategories.Leveling],
  rank_nitro: [CommandCategories.Info, CommandCategories.Nitro],
  rank_global: [CommandCategories.Info],
  bypass: [CommandCategories.Utility],
  stickers_info: [CommandCategories.Info],
  'stickers_create_from-url': [CommandCategories.Utility],
  'stickers_create_from-file': [CommandCategories.Utility],
  'stickers_create_from-sticker': [CommandCategories.Utility],
  stickers_delete: [CommandCategories.Utility],
  stickers_edit_name: [CommandCategories.Utility],
  vc: [CommandCategories.Utility, CommandCategories.Automation],
 },
 names: [
  'settings',
  'info',
  'embed-builder',
  'check',
  'Stick Message',
  'stp',
  'membercount',
  'ping',
  'rp',
  'images',
  'roles',
  'afk',
  'help',
  'emoji',
  'user',
  'vote',
  'giveaway',
  'mod',
  'custom-role',
  'self-roles',
  'reminder',
  'shop',
  'balance',
  'kick',
  'ban',
  'soft-ban',
  'temp-ban',
  'channel-ban',
  'temp-channel-ban',
  'channel-unban',
  'unban',
  'warn',
  'soft-warn',
  'strike',
  'unmute',
  'tempmute',
  'unafk',
  'pardon',
  'edit',
  'leaderboard',
  'rank',
  'bypass',
  'clear',
  'View Raw',
  'vc',
  'vc-mute',
  'vc-unmute',
  'vc-deafen',
  'vc-undeafen',
 ],
} as const;
