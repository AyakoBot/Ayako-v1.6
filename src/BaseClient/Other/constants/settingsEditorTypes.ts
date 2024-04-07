import * as CT from '../../../Typings/Typings.js';

export default {
 [CT.SettingNames.DenylistRules]: {},
 [CT.SettingNames.RoleRewards]: {
  roles: CT.EditorTypes.Roles,
  customrole: CT.EditorTypes.Boolean,
  positionrole: CT.EditorTypes.Role,
  xpmultiplier: CT.EditorTypes.Number,
  currency: CT.EditorTypes.Number,
  blroleid: CT.EditorTypes.Roles,
  bluserid: CT.EditorTypes.Users,
  cansetcolor: CT.EditorTypes.Boolean,
  canseticon: CT.EditorTypes.Boolean,
 },
 [CT.SettingNames.AntiSpam]: {
  wlchannelid: CT.EditorTypes.Channels,
  wluserid: CT.EditorTypes.Users,
  wlroleid: CT.EditorTypes.Roles,
  msgthreshold: CT.EditorTypes.Number,
  dupemsgthreshold: CT.EditorTypes.Number,
  timeout: CT.EditorTypes.Number,
  deletespam: CT.EditorTypes.Boolean,
  deletemessageseconds: CT.EditorTypes.Duration,
  duration: CT.EditorTypes.Duration,
  action: CT.EditorTypes.Punishment,
 },
 [CT.SettingNames.AntiRaid]: {
  posttof: CT.EditorTypes.Boolean,
  postchannels: CT.EditorTypes.Channels,
  pingroles: CT.EditorTypes.Roles,
  pingusers: CT.EditorTypes.Users,
  time: CT.EditorTypes.Duration,
  jointhreshold: CT.EditorTypes.Number,
  punishmenttof: CT.EditorTypes.Boolean,
  action: CT.EditorTypes.AntiRaidPunishment,
  disableinvites: CT.EditorTypes.Boolean,
  actiontof: CT.EditorTypes.Boolean,
 },
 [CT.SettingNames.AntiVirus]: {
  linklogging: CT.EditorTypes.Boolean,
  linklogchannels: CT.EditorTypes.Channels,
  deletemessageseconds: CT.EditorTypes.Duration,
  duration: CT.EditorTypes.Duration,
  action: CT.EditorTypes.Punishment,
 },
 [CT.SettingNames.Leveling]: {
  xppermsg: CT.EditorTypes.Number,
  xpmultiplier: CT.EditorTypes.Number,
  rolemode: CT.EditorTypes.Boolean,
  lvlupmode: CT.EditorTypes.LvlUpMode,
  lvlupemotes: CT.EditorTypes.Emote,
  lvlupdeltimeout: CT.EditorTypes.Number,
  embed: CT.EditorTypes.Embed,
  lvlupchannels: CT.EditorTypes.Channels,
  ignoreprefixes: CT.EditorTypes.Boolean,
  prefixes: CT.EditorTypes.Strings,
  minwords: CT.EditorTypes.Number,
  blchannelid: CT.EditorTypes.Channels,
  blroleid: CT.EditorTypes.Roles,
  bluserid: CT.EditorTypes.Users,
  wlchannelid: CT.EditorTypes.Channels,
  wlroleid: CT.EditorTypes.Roles,
  wluserid: CT.EditorTypes.Users,
 },
 [CT.SettingNames.MultiChannels]: {
  channels: CT.EditorTypes.Channels,
  multiplier: CT.EditorTypes.Number,
 },
 [CT.SettingNames.MultiRoles]: {
  roles: CT.EditorTypes.Roles,
  multiplier: CT.EditorTypes.Number,
 },
 [CT.SettingNames.Welcome]: {
  channelid: CT.EditorTypes.Channel,
  embed: CT.EditorTypes.Embed,
  pingroles: CT.EditorTypes.Roles,
  pingusers: CT.EditorTypes.Users,
  pingjoin: CT.EditorTypes.Boolean,
 },
 [CT.SettingNames.Verification]: {
  logchannel: CT.EditorTypes.Channel,
  pendingrole: CT.EditorTypes.Role,
  finishedrole: CT.EditorTypes.Role,
  startchannel: CT.EditorTypes.Channel,
  selfstart: CT.EditorTypes.Boolean,
  kickafter: CT.EditorTypes.Duration,
  kicktof: CT.EditorTypes.Boolean,
 },
 [CT.SettingNames.Suggestions]: {
  deletedenied: CT.EditorTypes.Boolean,
  deleteapproved: CT.EditorTypes.Boolean,
  deletedeniedafter: CT.EditorTypes.Duration,
  deleteapprovedafter: CT.EditorTypes.Duration,
  channelid: CT.EditorTypes.Channel,
  novoteroles: CT.EditorTypes.Roles,
  novoteusers: CT.EditorTypes.Users,
  approverroleid: CT.EditorTypes.Roles,
  anonvote: CT.EditorTypes.Boolean,
  anonsuggestion: CT.EditorTypes.Boolean,
  nosendroles: CT.EditorTypes.Roles,
  nosendusers: CT.EditorTypes.Users,
 },
 [CT.SettingNames.ShopItems]: {
  roles: CT.EditorTypes.Roles,
  price: CT.EditorTypes.Number,
  shoptype: CT.EditorTypes.ShopType,
  buttonemote: CT.EditorTypes.Emote,
  buttontext: CT.EditorTypes.String,
  msgid: CT.EditorTypes.Message,
 },
 [CT.SettingNames.Shop]: {
  currencyemote: CT.EditorTypes.Emote,
 },
 [CT.SettingNames.Sticky]: {
  roles: CT.EditorTypes.Roles,
  stickyrolesmode: CT.EditorTypes.Boolean,
  stickyrolesactive: CT.EditorTypes.Boolean,
  stickypermsactive: CT.EditorTypes.Boolean,
 },
 [CT.SettingNames.Separators]: {
  separator: CT.EditorTypes.Role,
  stoprole: CT.EditorTypes.Role,
  isvarying: CT.EditorTypes.Boolean,
  roles: CT.EditorTypes.Roles,
 },
 [CT.SettingNames.SelfRoles]: {
  roles: CT.EditorTypes.Roles,
  onlyone: CT.EditorTypes.Boolean,
  blroleid: CT.EditorTypes.Roles,
  bluserid: CT.EditorTypes.Users,
  wlroleid: CT.EditorTypes.Roles,
  wluserid: CT.EditorTypes.Users,
  name: CT.EditorTypes.String,
 },
 [CT.SettingNames.Expiry]: {
  bans: CT.EditorTypes.Boolean,
  channelbans: CT.EditorTypes.Boolean,
  kicks: CT.EditorTypes.Boolean,
  mutes: CT.EditorTypes.Boolean,
  warns: CT.EditorTypes.Boolean,
  banstime: CT.EditorTypes.Duration,
  channelbanstime: CT.EditorTypes.Duration,
  kickstime: CT.EditorTypes.Duration,
  mutestime: CT.EditorTypes.Duration,
  warnstime: CT.EditorTypes.Duration,
 },
 [CT.SettingNames.Logs]: {
  applicationevents: CT.EditorTypes.Channels,
  automodevents: CT.EditorTypes.Channels,
  channelevents: CT.EditorTypes.Channels,
  emojievents: CT.EditorTypes.Channels,
  guildevents: CT.EditorTypes.Channels,
  scheduledeventevents: CT.EditorTypes.Channels,
  inviteevents: CT.EditorTypes.Channels,
  messageevents: CT.EditorTypes.Channels,
  roleevents: CT.EditorTypes.Channels,
  stageevents: CT.EditorTypes.Channels,
  stickerevents: CT.EditorTypes.Channels,
  typingevents: CT.EditorTypes.Channels,
  userevents: CT.EditorTypes.Channels,
  voiceevents: CT.EditorTypes.Channels,
  webhookevents: CT.EditorTypes.Channels,
  settingslog: CT.EditorTypes.Channels,
  modlog: CT.EditorTypes.Channels,
  memberevents: CT.EditorTypes.Channels,
 },
 [CT.SettingNames.Basic]: {
  prefix: CT.EditorTypes.String,
  interactionsmode: CT.EditorTypes.Boolean,
  legacyrp: CT.EditorTypes.Boolean,
  editrpcommands: CT.EditorTypes.Boolean,
  lan: CT.EditorTypes.Language,
  errorchannel: CT.EditorTypes.Channel,
  statuschannel: CT.EditorTypes.Channel,
  updateschannel: CT.EditorTypes.Channel,
  vanity: CT.EditorTypes.String,
  ptreminderenabled: CT.EditorTypes.Boolean,
  token: CT.EditorTypes.BotToken,
 },
 [CT.SettingNames.DisboardReminders]: {
  repeatreminder: CT.EditorTypes.Duration,
  channelid: CT.EditorTypes.Channel,
  roles: CT.EditorTypes.Roles,
  users: CT.EditorTypes.Users,
  deletereply: CT.EditorTypes.Boolean,
  repeatenabled: CT.EditorTypes.Boolean,
 },
 [CT.SettingNames.Cooldowns]: {
  command: CT.EditorTypes.Command,
  cooldown: CT.EditorTypes.Duration,
  wlchannelid: CT.EditorTypes.Channels,
  wlroleid: CT.EditorTypes.Roles,
  wluserid: CT.EditorTypes.Users,
  activechannelid: CT.EditorTypes.Channels,
 },
 [CT.SettingNames.Censor]: {
  repostroles: CT.EditorTypes.Roles,
  repostrules: CT.EditorTypes.AutoModRules,
 },
 [CT.SettingNames.Newlines]: {
  maxnewlines: CT.EditorTypes.Number,
  wlchannelid: CT.EditorTypes.Channels,
  wlroleid: CT.EditorTypes.Roles,
  action: CT.EditorTypes.Punishment,
  duration: CT.EditorTypes.Duration,
  deletemessageseconds: CT.EditorTypes.Duration,
 },
 [CT.SettingNames.Invites]: {
  wlchannelid: CT.EditorTypes.Channels,
  wlroleid: CT.EditorTypes.Roles,
  deletemessageseconds: CT.EditorTypes.Duration,
  action: CT.EditorTypes.Punishment,
  duration: CT.EditorTypes.Duration,
 },
 [CT.SettingNames.AutoPunish]: {
  duration: CT.EditorTypes.Duration,
  warnamount: CT.EditorTypes.Number,
  punishment: CT.EditorTypes.AutoPunishment,
  addroles: CT.EditorTypes.Roles,
  removeroles: CT.EditorTypes.Roles,
  deletemessageseconds: CT.EditorTypes.Duration,
 },
 [CT.SettingNames.AutoRoles]: {
  botroleid: CT.EditorTypes.Roles,
  userroleid: CT.EditorTypes.Roles,
  allroleid: CT.EditorTypes.Roles,
 },
 [CT.SettingNames.LevelRoles]: {
  level: CT.EditorTypes.Number,
  roles: CT.EditorTypes.Roles,
 },
 [CT.SettingNames.RuleChannels]: {
  rules: CT.EditorTypes.Permission,
  channels: CT.EditorTypes.Channels,
  hasleastattachments: CT.EditorTypes.Number,
  hasmostattachments: CT.EditorTypes.Number,
  hasleastcharacters: CT.EditorTypes.Number,
  hasmostcharacters: CT.EditorTypes.Number,
  hasleastwords: CT.EditorTypes.Number,
  hasmostwords: CT.EditorTypes.Number,
  mentionsleastusers: CT.EditorTypes.Number,
  mentionsmostusers: CT.EditorTypes.Number,
  mentionsleastchannels: CT.EditorTypes.Number,
  mentionsmostchannels: CT.EditorTypes.Number,
  mentionsleastroles: CT.EditorTypes.Number,
  mentionsmostroles: CT.EditorTypes.Number,
  hasleastlinks: CT.EditorTypes.Number,
  hasmostlinks: CT.EditorTypes.Number,
  hasleastemotes: CT.EditorTypes.Number,
  hasmostemotes: CT.EditorTypes.Number,
  hasleastmentions: CT.EditorTypes.Number,
  hasmostmentions: CT.EditorTypes.Number,
 },
 [CT.SettingNames.BoosterRoles]: {
  roles: CT.EditorTypes.Roles,
  days: CT.EditorTypes.Number,
 },
 [CT.SettingNames.Nitro]: {
  logchannels: CT.EditorTypes.Channels,
  rolemode: CT.EditorTypes.Boolean,
  notification: CT.EditorTypes.Boolean,
  notifchannels: CT.EditorTypes.Channels,
  notifembed: CT.EditorTypes.Embed,
 },
 [CT.SettingNames.Vote]: {
  token: CT.EditorTypes.Token,
  reminders: CT.EditorTypes.Boolean,
  announcementchannel: CT.EditorTypes.Channel,
  name: CT.EditorTypes.String,
 },
 [CT.SettingNames.VoteRewards]: {
  rewardxp: CT.EditorTypes.Number,
  rewardxpmultiplier: CT.EditorTypes.Number,
  rewardcurrency: CT.EditorTypes.Number,
  rewardroles: CT.EditorTypes.Roles,
  weekends: CT.EditorTypes.WeekendsType,
 },
 [CT.SettingNames.ReactionRoleSettings]: {
  anyroles: CT.EditorTypes.Roles,
  msgid: CT.EditorTypes.Message,
 },
 [CT.SettingNames.ButtonRoleSettings]: {
  onlyone: CT.EditorTypes.Boolean,
  anyroles: CT.EditorTypes.Roles,
  msgid: CT.EditorTypes.Message,
 },
 [CT.SettingNames.ButtonRoles]: {
  emote: CT.EditorTypes.Emote,
  text: CT.EditorTypes.String,
  roles: CT.EditorTypes.Roles,
  linkedid: CT.EditorTypes.SettingLink,
 },
 [CT.SettingNames.ReactionRoles]: {
  emote: CT.EditorTypes.Emote,
  roles: CT.EditorTypes.Roles,
  linkedid: CT.EditorTypes.SettingLink,
 },
 [CT.SettingNames.VoiceHubs]: {
  channelid: CT.EditorTypes.Voice,
  categoryid: CT.EditorTypes.Category,
  deletetime: CT.EditorTypes.Duration,
  private: CT.EditorTypes.Boolean,
 },
 [CT.SettingNames.Appeals]: {
  channelid: CT.EditorTypes.Channel,
  bluserid: CT.EditorTypes.Users,
 },
 [CT.SettingNames.Questions]: {
  question: CT.EditorTypes.String,
  answertype: CT.EditorTypes.QuestionType,
  required: CT.EditorTypes.Boolean,
  options: CT.EditorTypes.Strings,
 },
};
