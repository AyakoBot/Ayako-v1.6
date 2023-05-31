import type * as Discord from 'discord.js';

const punishment = {
 warnamount: 'number',
 punishment: 'punishment',
 duration: 'duration',
};

const colors = {
 danger: 16711680,
 success: 65280,
 ephemeral: 3092790,
 loading: 16776960,
 base: 11599616,
};

export default {
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
  softbanAdd: 'danger',
  tempbanAdd: 'danger',
  tempchannelbanAdd: 'danger',
  channelbanAdd: 'danger',
  channelbanRemove: 'danger',
  banRemove: 'success',
  kickAdd: 'danger',
  roleAdd: 'success',
  roleRemove: 'danger',
  muteRemove: 'danger',
  tempmuteAdd: 'danger',
  warnAdd: 'danger',
 } as Record<string, keyof typeof colors>,
 colors,
 standard: {
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
  getEmote: (emoji: Discord.Emoji) =>
   emoji.id ? `<${emoji.animated ? 'a:' : ':'}${emoji.name}:${emoji.id}>` : `${emoji.name}`,
  getTime: (time: number) =>
   `<t:${String(time).slice(0, -3)}:f> (<t:${String(time).slice(0, -3)}:R>)`,
  msgurl: (g: string, c: string | undefined, m: string) =>
   `https://discord.com/channels/${g}/${c ?? '@me'}/${m}`,
  ytURL: 'https://www.youtube.com/@AyakoBot',
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
  interactions: [
   { name: 'awoo', desc: 'Awooo~!!', users: true, reqUser: false, buttons: ['pat', 'awoo'] },
   { name: 'ayaya', desc: 'AYAYA !!!', users: true, reqUser: false, buttons: [] },
   {
    name: 'baka',
    desc: 'Call someone a baka',
    users: true,
    reqUser: true,
    buttons: ['bonk', 'hit'],
   },
   {
    name: 'bath',
    desc: 'Bathe with someone',
    users: true,
    reqUser: false,
    buttons: ['bath', 'pat', 'bonk'],
   },
   {
    name: 'bite',
    desc: 'Bite someone',
    users: true,
    reqUser: true,
    buttons: ['bite', 'pat', 'bonk'],
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
    buttons: ['bonk', 'hit', 'cry'],
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
    name: 'handhold',
    desc: 'Hold hands with someone',
    users: true,
    reqUser: true,
    buttons: ['holdhands'],
   },
   {
    name: 'comfort',
    desc: 'Comfort someone',
    users: true,
    reqUser: true,
    buttons: ['cry', 'snuggle'],
   },
   { name: 'hold', desc: 'Hold someone', users: true, reqUser: true, buttons: ['cry', 'nuzzle'] },
   { name: 'hug', desc: 'Hug someone', users: true, reqUser: true, buttons: ['hug'] },
   {
    name: 'kidnap',
    desc: 'Kidnap someone',
    users: true,
    reqUser: true,
    buttons: ['happy', 'run'],
   },
   { name: 'kith', desc: 'Kiss someone', users: true, reqUser: true, buttons: ['kith', 'bonk'] },
   { name: 'pash', desc: 'Pash someone', users: true, reqUser: true, buttons: ['pash', 'bonk'] },
   {
    name: 'smooch',
    desc: 'Smooch someone',
    users: true,
    reqUser: true,
    buttons: ['smooch', 'bonk'],
   },
   { name: 'kiss', desc: 'Kiss someone', users: true, reqUser: true, buttons: ['kiss', 'bonk'] },
   { name: 'mwah', desc: 'Mwah someone', users: true, reqUser: true, buttons: ['mwah', 'bonk'] },
   { name: 'laugh', desc: 'Laugh', users: true, reqUser: false, buttons: ['peck', 'bonk'] },
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
    name: 'pickup',
    desc: 'Pick someone up',
    users: true,
    reqUser: true,
    buttons: ['happy', 'bite'],
   },
   { name: 'lift', desc: 'Lift someone', users: true, reqUser: true, buttons: ['happy', 'bite'] },
   { name: 'lurk', desc: 'Lurk in Chat', users: false, reqUser: false, buttons: ['pat', 'hug'] },
   { name: 'nam', desc: 'Nom on someone', users: true, reqUser: true, buttons: ['nam'] },
   { name: 'nom', desc: 'Nom on someone', users: true, reqUser: true, buttons: ['nom'] },
   {
    name: 'nuzzle',
    desc: 'Nuzzle someone',
    users: true,
    reqUser: true,
    buttons: ['nuzzle', 'bonk'],
   },
   { name: 'mew', desc: 'Mew =^_^=', users: false, reqUser: false, buttons: ['pat', 'woof'] },
   { name: 'nya', desc: 'Nya! =^_^=', users: false, reqUser: false, buttons: ['pat', 'woof'] },
   { name: 'pat', desc: 'Headpat time~!', users: true, reqUser: true, buttons: ['blush', 'happy'] },
   {
    name: 'peck',
    desc: 'Peck someone on the cheek',
    users: true,
    reqUser: true,
    buttons: ['blush', 'peck'],
   },
   { name: 'peek', desc: 'Peek into Chat', users: false, reqUser: false, buttons: ['pat', 'lurk'] },
   { name: 'boop', desc: 'Boop someone', users: true, reqUser: true, buttons: ['pat'] },
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
   { name: 'sleep', desc: 'Sleep', users: true, reqUser: false, buttons: ['sleep'] },
   { name: 'eep', desc: 'eep', users: true, reqUser: false, buttons: ['eep'] },
   { name: 'smile', desc: 'Smile', users: true, reqUser: false, buttons: ['happy'] },
   { name: 'smug', desc: 'Smug', users: true, reqUser: false, buttons: ['poke'] },
   { name: 'snuggle', desc: 'Snuggle someone', users: true, reqUser: true, buttons: ['snuggle'] },
   { name: 'stare', desc: 'Stare at someone', users: true, reqUser: true, buttons: ['stare'] },
   { name: 'wag', desc: 'Wag your tail', users: true, reqUser: false, buttons: ['fluff'] },
   {
    name: 'lapsleep',
    desc: "Sleep on someone's lap",
    users: true,
    reqUser: true,
    buttons: ['comfy'],
   },
   {
    name: 'thighsleep',
    desc: "Sleep on someone's lap",
    users: true,
    reqUser: true,
    buttons: ['comfy'],
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
   { name: 'yeet', desc: 'Yeet someone', users: true, reqUser: true, buttons: [] },
   { name: 'yawn', desc: 'Yawn', users: true, reqUser: false, buttons: ['cuddle', 'boop'] },
   { name: 'woof', desc: 'Woof', users: true, reqUser: false, buttons: ['pat', 'nya'] },
   { name: 'kick', desc: 'Kick someone', users: true, reqUser: true, buttons: ['cry'] },
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
     roleposition: 'position',
     xpmultiplier: 'number',
     currency: 'number',
     blroles: 'roles',
     blusers: 'users',
    },
    'anti-raid': {
     punishment: 'punishment',
     posttof: 'boolean',
     postchannel: 'channel',
     pingroles: 'roles',
     pingusers: 'users',
     time: 'number',
     jointhreshold: 'number',
     punishmenttof: 'boolean',
    },
    'anti-spam': {
     wlchannelid: 'channels',
     wluserid: 'users',
     wlroleid: 'roles',
     msgthreshold: 'number',
     dupemsgthreshold: 'number',
     timeout: 'number',
     deletespam: 'boolean',
     usestrike: 'boolean',
    },
    'anti-virus': {
     minimize: 'number',
     delete: 'number',
     linklogging: 'boolean',
     linklogchannels: 'channels',
     minimizetof: 'boolean',
     deletetof: 'boolean',
     usestrike: 'boolean',
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
     blchannels: 'channels',
     blroles: 'roles',
     blusers: 'usersy',
     wlchannels: 'channels',
     wlroles: 'roles',
     wlusers: 'users',
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
     channelid: 'channel',
     novoteroles: 'roles',
     novoteusers: 'users',
     approverroleid: 'roles',
     anonvote: 'boolean',
     anonsuggestion: 'boolean',
     nosendroles: 'roles',
     nosendusers: 'users',
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
     blroles: 'roles',
     blusers: 'users',
     wlroles: 'roles',
     wlusers: 'users',
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
     lan: 'language',
     errorchannel: 'channel',
     vanity: 'string',
     ptreminderenabled: 'boolean',
    },
    'disboard-reminders': {
     repeatreminder: 'duration',
     channelid: 'channel',
     roles: 'roles',
     users: 'users',
     deletereply: 'boolean',
     repeatenabled: 'boolean',
    },
    'delete-commands': {
     deletecommand: 'boolean',
     deletereply: 'boolean',
     deletetimeout: 'duration',
     command: 'command',
     wlchannelid: 'channels',
     activechannelid: 'channels',
    },
    cooldowns: {
     command: 'command',
     cooldown: 'duration',
     wlchannelid: 'channels',
     wlroleid: 'roles',
     wluserid: 'users',
     activechannelid: 'channels',
    },
    blacklist: {
     wlchannelid: 'channels',
     wlroleid: 'roles',
     wluserid: 'users',
     words: 'strings',
     usestrike: 'boolean',
    },
    'auto-punish': {
     duration: 'duration',
     warnamount: 'number',
     punishment: 'punishment',
     addroles: 'roles',
     removeroles: 'roles',
     confirmationreq: 'boolean',
     punishmentawaittime: 'duration',
    },
    'auto-roles': {
     botroleid: 'roles',
     userroleid: 'roles',
     allroleid: 'roles',
    },
    'anti-spam-punishments': punishment,
    'anti-virus-punishments': punishment,
    'blacklist-punishments': punishment,
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
     onlyone: 'boolean',
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
   },
   tableNames: {
    'anti-spam': 'antispam',
    'anti-spam-punishments': 'punishments_antispam',
    'anti-virus-punishments': 'punishments_antivirus',
    'blacklist-punishments': 'punishments_blacklist',
    'anti-raid': 'antiraid',
    'anti-virus': 'antivirus',
    'auto-punish': 'autopunish',
    blacklist: 'blacklist',
    'auto-roles': 'autoroles',
    cooldowns: 'cooldowns',
    expiry: 'expiry',
    'disboard-reminders': 'disboard',
    'self-roles': 'selfroles',
    separators: 'roleseparator',
    sticky: 'sticky',
    verification: 'verification',
    welcome: 'welcome',
    leveling: 'leveling',
    nitro: 'nitrosettings',
    'delete-commands': 'deletecommands',
    suggestions: 'suggestionsettings',
    logs: 'logchannels',
    basic: 'guildsettings',
    'multi-channels': 'levelingmultichannels',
    'multi-roles': 'levelingmultiroles',
    'level-roles': 'levelingroles',
    'rule-channels': 'levelingruleschannels',
    'booster-roles': 'nitroroles',
    'button-roles': 'buttonroles',
    'reaction-roles': 'reactionroles',
    'reaction-role-settings': 'reactionrolesettings',
    'button-role-settings': 'buttonrolesettings',
    vote: 'votesettings',
    'vote-rewards': 'voterewards',
    'role-rewards': 'rolerewards',
    logchannels: 'logchannels',
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
