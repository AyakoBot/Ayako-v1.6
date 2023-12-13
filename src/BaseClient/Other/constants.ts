import * as Discord from 'discord.js';
import * as CT from '../../Typings/CustomTypings';

export const GuildTextChannelTypes = [
 Discord.ChannelType.AnnouncementThread,
 Discord.ChannelType.GuildAnnouncement,
 Discord.ChannelType.GuildStageVoice,
 Discord.ChannelType.GuildText,
 Discord.ChannelType.GuildVoice,
 Discord.ChannelType.PrivateThread,
 Discord.ChannelType.PublicThread,
] as const;

export const AllNonThreadGuildChannelTypes = [
 Discord.ChannelType.GuildAnnouncement,
 Discord.ChannelType.GuildStageVoice,
 Discord.ChannelType.GuildText,
 Discord.ChannelType.GuildVoice,
 Discord.ChannelType.GuildForum,
] as const;

export enum TableNamesPrismaTranslation {
 'voice-hubs' = 'voicehubs',
 voicechannels = 'voicechannels',
 shop = 'shop',
 'shop-items' = 'shopitems',
 'anti-spam' = 'antispam',
 'anti-raid' = 'antiraid',
 'anti-virus' = 'antivirus',
 'auto-punish' = 'autopunish',
 censor = 'censor',
 'auto-roles' = 'autoroles',
 cooldowns = 'cooldowns',
 expiry = 'expiry',
 'disboard-reminders' = 'disboard',
 'self-roles' = 'selfroles',
 separators = 'roleseparator',
 sticky = 'sticky',
 verification = 'verification',
 welcome = 'welcome',
 leveling = 'leveling',
 nitro = 'nitrosettings',
 suggestions = 'suggestionsettings',
 logs = 'logchannels',
 basic = 'guildsettings',
 'multi-channels' = 'levelingmultichannels',
 'multi-roles' = 'levelingmultiroles',
 'level-roles' = 'levelingroles',
 'rule-channels' = 'levelingruleschannels',
 'booster-roles' = 'nitroroles',
 vote = 'votesettings',
 'vote-rewards' = 'voterewards',
 'reaction-role-settings' = 'reactionrolesettings',
 'button-role-settings' = 'buttonrolesettings',
 'reaction-roles' = 'reactionroles',
 'button-roles' = 'buttonroles',
 'role-rewards' = 'rolerewards',
 invites = 'invites',
 newlines = 'newlines',
}

const colors = {
 danger: 16711680,
 success: 65280,
 ephemeral: 0x2b2d31,
 loading: 16776960,
 base: 11599616,
};

export default {
 path: {
  allowlist: '/root/Bots/Ayako-VueJS/Website-CDN/antivirus/allowlisted.txt',
  badLinks: '/root/Bots/Ayako-VueJS/Website-CDN/antivirus/badLinks.txt',
 },
 events: {
  logs: {
   automodRule: {
    create: 'https://cdn.ayakobot.com/Ayako_Assets/Events/AutomoderationRuleCreate.png',
    update: 'https://cdn.ayakobot.com/Ayako_Assets/Events/AutomoderationRuleUpdate.png',
    delete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/AutomoderationRuleDelete.png',
   },
   voiceState: {
    update: 'https://cdn.ayakobot.com/Ayako_Assets/Events/MemberUpdate.png',
    LockedVoiceJoin: 'https://cdn.ayakobot.com/Ayako_Assets/Events/LockedVoiceCreate.png',
    VoiceJoin: 'https://cdn.ayakobot.com/Ayako_Assets/Events/VoiceCreate.png',
    StageJoin: 'https://cdn.ayakobot.com/Ayako_Assets/Events/StageCreate.png',
    LockedVoiceLeave: 'https://cdn.ayakobot.com/Ayako_Assets/Events/LockedVoiceDelete.png',
    VoiceLeave: 'https://cdn.ayakobot.com/Ayako_Assets/Events/VoiceDelete.png',
    StageLeave: 'https://cdn.ayakobot.com/Ayako_Assets/Events/StageDelete.png',
    LockedVoiceSwitch: 'https://cdn.ayakobot.com/Ayako_Assets/Events/Events/LockedVoiceUpdate.png',
    VoiceSwitch: 'https://cdn.ayakobot.com/Ayako_Assets/Events/VoiceUpdate.png',
    StageSwitch: 'https://cdn.ayakobot.com/Ayako_Assets/Events/StageUpdate.png',
   },
   threadMembers: {
    update: 'https://cdn.ayakobot.com/Ayako_Assets/Events/MemberUpdate.png',
   },
   stage: {
    open: 'https://cdn.ayakobot.com/Ayako_Assets/Events/StageInstanceOpen.png',
    update: 'https://cdn.ayakobot.com/Ayako_Assets/Events/StageInstanceUpdate.png',
    close: 'https://cdn.ayakobot.com/Ayako_Assets/Events/StageInstanceClose.png',
   },
   channel: {
    TextChannelCreate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/TextChannelCreate.png',
    ThreadCreate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/ThreadCreate.png',
    VoiceCreate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/VoiceCreate.png',
    NewsChannelCreate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/NewsChannelCreate.png',
    NSFWChannelCreate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/NSFWChannelCreate.png',
    RulesCreate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/RulesCreate.png',
    StageCreate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/StageCreate.png',
    CategoryCreate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/CategoryCreate.png',
    LockedChannelCreate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/LockedChannelCreate.png',
    LockedVoiceCreate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/LockedVoiceCreate.png',
    DirectoryCreate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/DirectoryCreate.png',
    ForumCreate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/ForumCreate.png',
    NSFWForumCreate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/NSFWForumCreate.png',
    TextChannelDelete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/TextChannelDelete.png',
    ThreadDelete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/ThreadDelete.png',
    VoiceDelete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/VoiceDelete.png',
    NewsChannelDelete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/NewsChannelDelete.png',
    NSFWChannelDelete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/NSFWChannelDelete.png',
    RulesDelete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/RulesDelete.png',
    StageDelete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/StageDelete.png',
    CategoryDelete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/CategoryDelete.png',
    LockedChannelDelete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/LockedChannelDelete.png',
    LockedVoiceDelete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/LockedVoiceDelete.png',
    DirectoryDelete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/DirectoryDelete.png',
    ForumDelete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/ForumDelete.png',
    NSFWForumDelete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/NSFWForumDelete.png',
    TextChannelUpdate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/TextChannelUpdate.png',
    ThreadUpdate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/ThreadUpdate.png',
    VoiceUpdate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/VoiceUpdate.png',
    NewsChannelUpdate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/NewsChannelUpdate.png',
    NSFWChannelUpdate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/NSFWChannelUpdate.png',
    RulesUpdate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/RulesUpdate.png',
    StageUpdate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/StageUpdate.png',
    CategoryUpdate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/CategoryUpdate.png',
    LockedChannelUpdate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/LockedChannelUpdate.png',
    LockedVoiceUpdate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/Events/LockedVoiceUpdate.png',
    DirectoryUpdate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/DirectoryUpdate.png',
    ForumUpdate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/ForumUpdate.png',
    NSFWForumUpdate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/NSFWForumUpdate.png',
    Pin: 'https://cdn.ayakobot.com/Ayako_Assets/Events/PinCreate.png',
    Unpin: 'https://cdn.ayakobot.com/Ayako_Assets/Events/PinDelete.png',
    PinUpdate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/PinUpdate.png',
   },
   emoji: {
    create: 'https://cdn.ayakobot.com/Ayako_Assets/Events/EmojiCreate.png',
    delete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/EmojiDelete.png',
    update: 'https://cdn.ayakobot.com/Ayako_Assets/Events/EmojiUpdate.png',
   },
   sticker: {
    create: 'https://cdn.ayakobot.com/Ayako_Assets/Events/StickerCreate.png',
    delete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/StickerDelete.png',
    update: 'https://cdn.ayakobot.com/Ayako_Assets/Events/StickerUpdate.png',
   },
   guild: {
    AuditLogCreate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/AuditLogCreate.png',
    BanCreate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/BanCreate.png',
    BanRemove: 'https://cdn.ayakobot.com/Ayako_Assets/Events/BanRemove.png',
    GuildCreate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/GuildCreate.png',
    GuildUpdate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/GuildUpdate.png',
    GuildDelete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/GuildDelete.png',
    WebhookUpdate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/WebhookUpdate.png',
    BotUpdate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/BotUpdate.png',
    ChannelFollowUpdate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/ChannelFollowUpdate.png',
    SlashCommandUpdate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/SlashCommandUpdate.png',
    WebhookDelete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/WebhookDelete.png',
    BotDelete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/BotDelete.png',
    ChannelFollowDelete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/ChannelFollowDelete.png',
    SlashCommandDelete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/SlashCommandDelete.png',
    WebhookCreate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/WebhookCreate.png',
    BotCreate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/BotCreate.png',
    ChannelFollowCreate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/ChannelFollowCreate.png',
    SlashCommandCreate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/SlashCommandCreate.png',
    MemberCreate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/MemberCreate.png',
    MemberDelete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/MemberDelete.png',
    MemberUpdate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/MemberUpdate.png',
    Prune: 'https://cdn.ayakobot.com/Ayako_Assets/Events/Prune.png',
    ScheduledEventCreate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/ScheduledEventCreate.png',
    ScheduledEventDelete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/ScheduledEventDelete.png',
    ScheduledEventUpdate: 'https://cdn.ayakobot.com/Ayako_Assets/Events/ScheduledEventUpdate.png',
   },
   invite: {
    create: 'https://cdn.ayakobot.com/Ayako_Assets/Events/InviteCreate.png',
    delete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/InviteDelete.png',
   },
   message: {
    delete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/MessageDelete.png',
    update: 'https://cdn.ayakobot.com/Ayako_Assets/Events/MessageUpdate.png',
    Publish: 'https://cdn.ayakobot.com/Ayako_Assets/Events/Publish.png',
   },
   reaction: {
    create: 'https://cdn.ayakobot.com/Ayako_Assets/Events/ReactionAdd.png',
    remove: 'https://cdn.ayakobot.com/Ayako_Assets/Events/ReactionRemove.png',
   },
   role: {
    create: 'https://cdn.ayakobot.com/Ayako_Assets/Events/RoleCreate.png',
    remove: 'https://cdn.ayakobot.com/Ayako_Assets/Events/RoleDelete.png',
    update: 'https://cdn.ayakobot.com/Ayako_Assets/Events/RoleUpdate.png',
   },
   webhook: {
    create: 'https://cdn.ayakobot.com/Ayako_Assets/Events/WebhookCreate.png',
    update: 'https://cdn.ayakobot.com/Ayako_Assets/Events/WebhookUpdate.png',
    delete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/WebhookDelete.png',
   },
   command: {
    create: 'https://cdn.ayakobot.com/Ayako_Assets/Events/SlashCommandCreate.png',
    delete: 'https://cdn.ayakobot.com/Ayako_Assets/Events/SlashCommandDelete.png',
    update: 'https://cdn.ayakobot.com/Ayako_Assets/Events/SlashCommandUpdate.png',
   },
  },
 },
 discordMsgUrls: [
  'https://discord.com/channels/[Guild ID]/[Channel ID]/[Message ID]',
  'https://ptb.discord.com/channels/[Guild ID]/[Channel ID]/[Message ID]',
  'https://canary.discord.com/channels/[Guild ID]/[Channel ID]/[Message ID]',
 ],
 modColors: {
  banAdd: 'danger',
  softBanAdd: 'danger',
  tempBanAdd: 'danger',
  tempChannelBanAdd: 'danger',
  channelBanAdd: 'danger',
  channelBanRemove: 'success',
  banRemove: 'success',
  kickAdd: 'danger',
  roleAdd: 'success',
  roleRemove: 'danger',
  muteRemove: 'danger',
  tempMuteAdd: 'success',
  warnAdd: 'danger',
  strikeAdd: 'danger',
 } as Record<CT.ModTypes, keyof typeof colors>,
 colors,
 standard: {
  dmLogChannelID: '825297763822469140',
  prefix: 't!',
  invite:
   'https://discord.com/api/oauth2/authorize?client_id=650691698409734151&permissions=1642787630327&scope=bot%20applications.commands',
  image: 'https://ayakobot.com/DefaultEmbedImage',
  support: 'https://discord.gg/euTdctganf',
  permissionsViewer: (permission: bigint) =>
   `https://discordapi.com/permissions.html#${permission}`,
  suggestionsDataChannel: '968628817688133662',
  ownerID: '318453143476371456',
  patreon: 'https://www.patreon.com/Lars_und_so',
  error: 'https://cdn.ayakobot.com/Ayako_Assets/Warning.png',
  appURL: (user: Discord.User) => `discord://-/users/${user.id}`,
  userURL: (user: Discord.User) => `https://discord.com/users/${user.id}`,
  emoteURL: (emote: Discord.Emoji) =>
   `https://cdn.discordapp.com/emojis/${emote.id}.${emote.animated ? 'gif' : 'png'}?size=4096`,
  getEmote: (
   emoji:
    | Discord.Emoji
    | { name: string | undefined; id?: string | null | undefined; animated?: boolean | null },
  ) =>
   emoji.id
    ? `<${emoji.animated ? 'a:' : ':'}${emoji.name}:${emoji.id}>`
    : `${/\w/g.test(emoji.name ?? '') ? `:${emoji.name}:` : emoji.name}`,
  getTime: (time: number) =>
   `<t:${String(time).slice(0, -3)}:f> (<t:${String(time).slice(0, -3)}:R>)`,
  msgurl: (g: string | undefined | null, c: string, m: string) =>
   `https://discord.com/channels/${g ?? '@me'}/${c}/${m}`,
  ytURL: 'https://www.youtube.com/@AyakoBot',
  user: (u: Discord.User | { discriminator: string; username: string }) =>
   `${u.discriminator === '0' ? u.username : `${u.username}#${u.discriminator}`}`,
  roleIconURL: (role: Discord.Role | { icon: string; id: string }) =>
   `https://cdn.discordapp.com/role-icons/${role.id}/${role.icon}.png`,
  scheduledEventImageUrl: (guildId: string, hash: string) =>
   `https://cdn.discordapp.com/guild-events/${guildId}/${hash}`,
  discoverySplashURL: (guildId: string, hash: string) =>
   `https://cdn.discordapp.com/discovery-splashes/${guildId}/${hash}.png`,
  splashURL: (guildId: string, hash: string) =>
   `https://cdn.discordapp.com/splashes/${guildId}/${hash}.png`,
  bannerURL: (guildId: string, hash: string) =>
   `https://cdn.discordapp.com/banners/${guildId}/${hash}.${hash.startsWith('a_') ? 'gif' : 'png'}`,
  webhookAvatarURL: (webhookId: string, hash: string) =>
   `https://cdn.discordapp.com/avatars/${webhookId}/${hash}.png`,
  getEmoteIdentifier: (e: { animated: boolean; name: string; id: string | null | undefined }) =>
   `${e.animated ? 'a:' : ''}${e.name}${e.id ? `:${e.id}` : ''}`,
 },
 customembeds: {
  type: {
   'author-name': 'string',
   'author-icon': 'img',
   'author-url': 'link',
   thumbnail: 'img',
   title: 'string',
   url: 'link',
   description: 'string',
   image: 'img',
   color: 'hex',
   'footer-text': 'string',
   'footer-icon': 'img',
   timestamp: 'timestamp',
  },
  needsOneOf: [
   'title',
   'author-name',
   'description',
   'thumbnail',
   'fields',
   'image',
   'footer-text',
  ],
 },
 commands: {
  help: {
   'Stick Message':
    'Stick a Message to a Channel. The sticked Message will be re-posted with a Delay of 1 Minute after another Message is sent\nUn-Stick the Message by deleting it.',
  },
  interactions: [
   { name: 'awoo', desc: 'Awooo~!!', users: true, reqUser: false, buttons: ['pat', 'awoo'] },
   { name: 'angry', desc: 'Grrrr >:(', users: true, reqUser: false, buttons: ['cry', 'run'] },
   { name: 'ayaya', desc: 'AYAYA !!!', users: true, reqUser: false, buttons: [] },
   {
    name: 'baka',
    desc: 'Call someone a baka',
    users: true,
    reqUser: true,
    buttons: ['bonk'],
   },
   {
    name: 'bath',
    desc: 'Bathe with someone',
    users: true,
    reqUser: false,
    buttons: ['bath', 'pat', 'bonk'],
   },
   {
    name: 'blush',
    desc: 'Blush',
    users: true,
    reqUser: false,
    buttons: ['pat', 'tickle', 'kiss', 'boop'],
   },
   {
    name: 'bonk',
    desc: 'Bonk someone',
    users: true,
    reqUser: true,
    buttons: ['bonk', 'cry'],
   },
   {
    name: 'bored',
    desc: 'Express your boredom',
    users: false,
    reqUser: false,
    buttons: ['bonk', 'tickle'],
   },
   { name: 'comfy', desc: 'Get comfy', users: true, reqUser: false, buttons: ['cuddle', 'pat'] },
   { name: 'cry', desc: 'Cry', users: true, reqUser: false, buttons: ['pat', 'comfort', 'hold'] },
   {
    name: 'cuddle',
    desc: 'Cuddle with someone',
    users: true,
    reqUser: true,
    buttons: ['cuddle', 'pat'],
   },
   { name: 'dance', desc: 'Dance', users: true, reqUser: false, buttons: ['dance', 'pat'] },
   { name: 'facepalm', desc: 'Facepalm', users: true, reqUser: false, buttons: [] },
   {
    name: 'feed',
    desc: 'Feed someone',
    users: true,
    reqUser: true,
    specialOptions: [{ name: 'food', desc: "What you're feeding them" }],
   },
   { name: 'fluff', desc: 'Fluff someone', users: true, reqUser: true, buttons: ['wag', 'lurk'] },
   { name: 'floof', desc: 'Floof someone', users: true, reqUser: true, buttons: ['wag', 'lurk'] },
   {
    name: 'handshake',
    desc: 'Shake Hands with someone',
    users: true,
    reqUser: true,
    buttons: ['handshake'],
   },
   { name: 'happy', desc: 'Be happy', users: true, reqUser: false, buttons: ['pat', 'hug'] },
   {
    name: 'highfive',
    desc: 'Highfive someone',
    users: true,
    reqUser: true,
    buttons: ['highfive'],
   },
   {
    name: 'holdhands',
    desc: 'Hold hands with someone',
    users: true,
    reqUser: true,
    buttons: ['holdhands'],
   },
   {
    aliasOf: 'holdhands',
    name: 'handhold',
    desc: 'Hold hands with someone',
    users: true,
    reqUser: true,
    buttons: ['holdhands'],
   },
   {
    aliasOf: 'hug',
    name: 'comfort',
    desc: 'Comfort someone',
    users: true,
    reqUser: true,
    buttons: ['cry', 'snuggle'],
   },
   {
    aliasOf: 'hug',
    name: 'hold',
    desc: 'Hold someone',
    users: true,
    reqUser: true,
    buttons: ['cry', 'nuzzle'],
   },
   { name: 'hug', desc: 'Hug someone', users: true, reqUser: true, buttons: ['hug'] },
   {
    name: 'kidnap',
    desc: 'Kidnap someone',
    users: true,
    reqUser: true,
    buttons: ['happy', 'run'],
   },
   {
    aliasOf: 'kiss',
    name: 'kith',
    desc: 'Kiss someone',
    users: true,
    reqUser: true,
    buttons: ['kith', 'bonk'],
   },
   {
    aliasOf: 'kiss',
    name: 'pash',
    desc: 'Pash someone',
    users: true,
    reqUser: true,
    buttons: ['pash', 'bonk'],
   },
   {
    aliasOf: 'kiss',
    name: 'smooch',
    desc: 'Smooch someone',
    users: true,
    reqUser: true,
    buttons: ['smooch', 'bonk'],
   },
   { name: 'kiss', desc: 'Kiss someone', users: true, reqUser: true, buttons: ['kiss', 'bonk'] },
   {
    aliasOf: 'kiss',
    name: 'mwah',
    desc: 'Mwah someone',
    users: true,
    reqUser: true,
    buttons: ['mwah', 'bonk'],
   },
   { name: 'laugh', desc: 'Laugh', users: true, reqUser: false, buttons: ['peck', 'bonk'] },
   { name: 'lay', desc: 'Lay', users: true, reqUser: false, buttons: ['fluff', 'cuddle', 'pat'] },
   {
    name: 'lewd',
    desc: 'Lewd someone',
    users: true,
    reqUser: false,
    buttons: ['run', 'lewd', 'lurk'],
   },
   {
    name: 'lick',
    desc: 'Lick someone',
    users: true,
    reqUser: true,
    buttons: ['lick', 'bonk', 'blush'],
   },
   {
    aliasOf: 'lift',
    name: 'pickup',
    desc: 'Pick someone up',
    users: true,
    reqUser: true,
    buttons: ['happy', 'bonk'],
   },
   { name: 'lift', desc: 'Lift someone', users: true, reqUser: true, buttons: ['happy', 'bonk'] },
   {
    aliasOf: 'peek',
    name: 'lurk',
    desc: 'Lurk in Chat',
    users: false,
    reqUser: false,
    buttons: ['pat', 'hug'],
   },
   {
    aliasOf: 'nom',
    name: 'nam',
    desc: 'Nom on someone',
    users: true,
    reqUser: true,
    buttons: ['nam'],
   },
   { name: 'nom', desc: 'Nom on someone', users: true, reqUser: true, buttons: ['nom'] },
   {
    aliasOf: 'cuddle',
    name: 'nuzzle',
    desc: 'Nuzzle someone',
    users: true,
    reqUser: true,
    buttons: ['nuzzle', 'bonk'],
   },
   {
    aliasOf: 'nya',
    name: 'mew',
    desc: 'Mew =^_^=',
    users: false,
    reqUser: false,
    buttons: ['mew', 'pat'],
   },
   {
    name: 'nya',
    desc: 'Nya! =^_^=',
    users: false,
    reqUser: false,
    buttons: ['pat', 'woof', 'nya'],
   },
   {
    name: 'pet',
    desc: 'Headpat time~!',
    users: true,
    reqUser: true,
    buttons: ['blush', 'happy', 'pout'],
   },
   {
    name: 'pat',
    desc: 'Headpat time~!',
    users: true,
    reqUser: true,
    buttons: ['blush', 'happy', 'pout'],
   },
   {
    name: 'peck',
    desc: 'Peck someone on the cheek',
    users: true,
    reqUser: true,
    buttons: ['blush', 'peck'],
   },
   { name: 'peek', desc: 'Peek into Chat', users: false, reqUser: false, buttons: ['pat', 'lurk'] },
   {
    aliasOf: 'poke',
    name: 'boop',
    desc: 'Boop someone',
    users: true,
    reqUser: true,
    buttons: ['pat', 'nom'],
   },
   {
    name: 'poke',
    desc: 'Poke someone',
    users: true,
    reqUser: true,
    buttons: ['pat', 'kiss', 'hug'],
   },
   { name: 'pout', desc: 'Pout', users: true, reqUser: false, buttons: ['pat'] },
   { name: 'quack', desc: 'Quack', users: true, reqUser: false, buttons: ['pat', 'quack'] },
   { name: 'run', desc: 'Run away', users: true, reqUser: false, buttons: [] },
   { name: 'scream', desc: 'Scream', users: true, reqUser: false, buttons: ['shake'] },
   { name: 'shake', desc: 'Shake someone', users: true, reqUser: true, buttons: ['scream', 'cry'] },
   { name: 'shrug', desc: 'Shrug', users: true, reqUser: false, buttons: [] },
   { name: 'sigh', desc: 'Sigh', users: true, reqUser: false, buttons: [] },
   { name: 'sleep', desc: 'Sleep', users: true, reqUser: false, buttons: ['sleep', 'nope'] },
   {
    aliasOf: 'sleep',
    name: 'eep',
    desc: 'eep',
    users: true,
    reqUser: false,
    buttons: ['eep', 'nope'],
   },
   { name: 'smile', desc: 'Smile', users: true, reqUser: false, buttons: ['happy'] },
   { name: 'smug', desc: 'Smug', users: true, reqUser: false, buttons: ['poke'] },
   {
    aliasOf: 'cuddle',
    name: 'snuggle',
    desc: 'Snuggle someone',
    users: true,
    reqUser: true,
    buttons: ['snuggle'],
   },
   { name: 'stare', desc: 'Stare at someone', users: true, reqUser: true, buttons: ['stare'] },
   { name: 'wag', desc: 'Wag your tail', users: true, reqUser: false, buttons: ['fluff'] },
   {
    name: 'lapsleep',
    desc: "Sleep on someone's lap",
    users: true,
    reqUser: true,
    buttons: ['lapsleep'],
   },
   {
    aliasOf: 'lapsleep',
    name: 'thighsleep',
    desc: "Sleep on someone's lap",
    users: true,
    reqUser: true,
    buttons: ['thighsleep'],
   },
   { name: 'think', desc: 'Think', users: true, reqUser: false, buttons: [] },
   {
    name: 'thumbsup',
    desc: 'Give a thumbs up',
    users: true,
    reqUser: false,
    buttons: ['handshake'],
   },
   {
    name: 'tickle',
    desc: 'Tickle someone',
    users: true,
    reqUser: true,
    buttons: ['scream', 'run'],
   },
   { name: 'wave', desc: 'Wave', users: true, reqUser: false, buttons: ['wave', 'boop'] },
   { name: 'wink', desc: 'Wink', users: true, reqUser: false, buttons: [] },
   { name: 'yawn', desc: 'Yawn', users: true, reqUser: false, buttons: ['cuddle', 'boop'] },
   { name: 'woof', desc: 'Woof', users: true, reqUser: false, buttons: ['pat', 'nya'] },
   {
    name: 'nod',
    desc: "Couldn't agree more",
    users: true,
    reqUser: false,
    buttons: ['handshake'],
   },
   { name: 'nope', desc: "I'm outta here", users: true, reqUser: false, buttons: [] },
  ],
  settings: {
   basicSettings: ['vote', 'leveling', 'nitro'],
   types: {
    logchannels: {
     applicationevents: 'channels',
     automodevents: 'channels',
     channelevents: 'channels',
     emojievents: 'channels',
     guildevents: 'channels',
     scheduledeventevents: 'channels',
     inviteevents: 'channels',
     messageevents: 'channels',
     roleevents: 'channels',
     stageevents: 'channels',
     stickerevents: 'channels',
     typingevents: 'channels',
     userevents: 'channels',
     voiceevents: 'channels',
     webhookevents: 'channels',
     settingslog: 'channels',
     modlog: 'channels',
     reactionevents: 'channels',
     memberevents: 'channels',
     auditlogevents: 'channels',
    },
    'role-rewards': {
     roles: 'roles',
     customrole: 'boolean',
     positionrole: 'role',
     xpmultiplier: 'number',
     currency: 'number',
     blroleid: 'roles',
     bluserid: 'users',
     cansetcolor: 'boolean',
     canseticon: 'boolean',
    },
    'anti-spam': {
     wlchannelid: 'channels',
     wluserid: 'users',
     wlroleid: 'roles',
     msgthreshold: 'number',
     dupemsgthreshold: 'number',
     timeout: 'number',
     deletespam: 'boolean',
     deletemessageseconds: 'duration',
     duration: 'duration',
     action: 'punishment',
    },
    'anti-raid': {
     posttof: 'boolean',
     postchannels: 'channels',
     pingroles: 'roles',
     pingusers: 'users',
     time: 'duration',
     jointhreshold: 'number',
     punishmenttof: 'boolean',
     action: 'antiraid-punishment',
     disableinvites: 'boolean',
     actiontof: 'boolean',
    },
    'anti-virus': {
     minimize: 'number',
     delete: 'number',
     linklogging: 'boolean',
     linklogchannels: 'channels',
     minimizetof: 'boolean',
     deletetof: 'boolean',
     deletemessageseconds: 'duration',
     duration: 'duration',
     action: 'punishment',
    },
    leveling: {
     xppermsg: 'number',
     xpmultiplier: 'number',
     rolemode: 'boolean',
     lvlupmode: 'lvlupmode',
     lvlupemotes: 'emotes',
     lvlupdeltimeout: 'number',
     embed: 'embed',
     lvlupchannels: 'channels',
     ignoreprefixes: 'boolean',
     prefixes: 'strings',
     minwords: 'number',
     blchannelid: 'channels',
     blroleid: 'roles',
     bluserid: 'usersy',
     wlchannelid: 'channels',
     wlroleid: 'roles',
     wluserid: 'users',
    },
    'multi-channels': {
     channels: 'channels',
     multiplier: 'number',
    },
    'multi-roles': {
     roles: 'roles',
     multiplier: 'number',
    },
    welcome: {
     channelid: 'channel',
     embed: 'embed',
     pingroles: 'roles',
     pingusers: 'users',
     pingjoin: 'boolean',
    },
    verification: {
     logchannel: 'channel',
     pendingrole: 'role',
     finishedrole: 'role',
     startchannel: 'channel',
     selfstart: 'boolean',
     kickafter: 'duration',
     kicktof: 'boolean',
    },
    suggestions: {
     deletedenied: 'boolean',
     deleteapproved: 'boolean',
     deletedeniedafter: 'duration',
     deleteapprovedafter: 'duration',
     channelid: 'channel',
     novoteroles: 'roles',
     novoteusers: 'users',
     approverroleid: 'roles',
     anonvote: 'boolean',
     anonsuggestion: 'boolean',
     nosendroles: 'roles',
     nosendusers: 'users',
    },
    'shop-items': {
     roles: 'roles',
     price: 'number',
     shoptype: 'shoptype',
     buttonemote: 'emote',
     buttontext: 'string',
     msgid: 'message',
    },
    shop: {
     currencyemote: 'emote',
    },
    sticky: {
     roles: 'roles',
     stickyrolesmode: 'boolean',
     stickyrolesactive: 'boolean',
     stickypermsactive: 'boolean',
    },
    separators: {
     separator: 'role',
     stoprole: 'role',
     isvarying: 'boolean',
     roles: 'roles',
    },
    'self-roles': {
     roles: 'roles',
     onlyone: 'boolean',
     blroleid: 'roles',
     bluserid: 'users',
     wlroleid: 'roles',
     wluserid: 'users',
     name: 'string',
    },
    expiry: {
     bans: 'boolean',
     channelbans: 'boolean',
     kicks: 'boolean',
     mutes: 'boolean',
     warns: 'boolean',
     banstime: 'duration',
     channelbanstime: 'duration',
     kickstime: 'duration',
     mutestime: 'duration',
     warnstime: 'duration',
    },
    logs: {
     applicationevents: 'channels',
     automodevents: 'channels',
     channelevents: 'channels',
     emojievents: 'channels',
     guildevents: 'channels',
     scheduledeventevents: 'channels',
     inviteevents: 'channels',
     messageevents: 'channels',
     roleevents: 'channels',
     stageevents: 'channels',
     stickerevents: 'channels',
     typingevents: 'channels',
     userevents: 'channels',
     voiceevents: 'channels',
     webhookevents: 'channels',
     settingslog: 'channels',
     modlog: 'channels',
     reactionevents: 'channels',
     memberevents: 'channels',
    },
    basic: {
     prefix: 'string',
     interactionsmode: 'boolean',
     legacyrp: 'boolean',
     editrpcommands: 'boolean',
     lan: 'language',
     errorchannel: 'channel',
     vanity: 'string',
     ptreminderenabled: 'boolean',
     token: 'bot-token',
    },
    'disboard-reminders': {
     repeatreminder: 'duration',
     channelid: 'channel',
     roles: 'roles',
     users: 'users',
     deletereply: 'boolean',
     repeatenabled: 'boolean',
    },
    cooldowns: {
     command: 'command',
     cooldown: 'duration',
     wlchannelid: 'channels',
     wlroleid: 'roles',
     wluserid: 'users',
     activechannelid: 'channels',
    },
    censor: {
     repostroles: 'roles',
     repostrules: 'automodrules',
    },
    newlines: {
     maxnewlines: 'number',
     wlchannelid: 'channels',
     wlroleid: 'roles',
     action: 'punishment',
     duration: 'duration',
     deletemessageseconds: 'duration',
    },
    invites: {
     wlchannelid: 'channels',
     wlroleid: 'roles',
     deletemessageseconds: 'duration',
     action: 'punishment',
     duration: 'duration',
    },
    'auto-punish': {
     duration: 'duration',
     warnamount: 'number',
     punishment: 'auto-punishment',
     addroles: 'roles',
     removeroles: 'roles',
     deletemessageseconds: 'duration',
    },
    'auto-roles': {
     botroleid: 'roles',
     userroleid: 'roles',
     allroleid: 'roles',
    },
    'denylist-rules': {},
    'level-roles': {
     level: 'number',
     roles: 'roles',
    },
    'rule-channels': {
     rules: 'permission',
     channels: 'channels',
     hasleastattachments: 'number',
     hasmostattachments: 'number',
     hasleastcharacters: 'number',
     hasmostcharacters: 'number',
     hasleastwords: 'number',
     hasmostwords: 'number',
     mentionsleastusers: 'number',
     mentionsmostusers: 'number',
     mentionsleastchannels: 'number',
     mentionsmostchannels: 'number',
     mentionsleastroles: 'number',
     mentionsmostroles: 'number',
     hasleastlinks: 'number',
     hasmostlinks: 'number',
     hasleastemotes: 'number',
     hasmostemotes: 'number',
     hasleastmentions: 'number',
     hasmostmentions: 'number',
    },
    'booster-roles': {
     roles: 'roles',
     days: 'number',
    },
    nitro: {
     logchannels: 'channels',
     rolemode: 'boolean',
     notification: 'boolean',
     notifchannels: 'channels',
     notifembed: 'embed',
    },
    vote: {
     token: 'token',
     reminders: 'boolean',
     announcementchannel: 'channel',
    },
    'vote-rewards': {
     tier: 'number',
     rewardxp: 'number',
     rewardxpmultiplier: 'number',
     rewardcurrency: 'number',
     rewardroles: 'roles',
    },
    'reaction-role-settings': {
     anyroles: 'roles',
     msgid: 'message',
    },
    'button-role-settings': {
     onlyone: 'boolean',
     anyroles: 'roles',
     msgid: 'message',
    },
    'button-roles': {
     emote: 'emote',
     text: 'string',
     roles: 'roles',
     linkedid: 'settinglink',
    },
    'reaction-roles': {
     emote: 'emote',
     roles: 'roles',
     linkedid: 'settinglink',
    },
    'voice-hubs': {
     channelid: 'voice',
     categoryid: 'category',
     deletetime: 'duration',
    },
   },
  },
 },
 tutorials: {
  welcome: [
   {
    name: "How to restore your Server's Welcome Embed after v1.5 release",
    link: 'https://www.youtube.com/watch?v=yLKgn-Ecduc',
   },
  ],
  separators: [
   {
    name: 'Tutorial for Separators / Category Roles',
    link: 'https://www.youtube.com/watch?v=NysN4BjXhA4',
   },
  ],
 },
};
