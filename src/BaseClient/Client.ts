import * as Discord from 'discord.js';
import type Jobs from 'node-schedule';
import type RedisxPSQL from 'pg-x-redis';
import * as ch from './ClientHelper.js';
import NekoClient from './NekoClient.js';
import Constants from './Other/Constants.js';
import ObjectEmotes from './Other/ObjectEmotes.json' assert { type: 'json' };
import StringEmotes from './Other/StringEmotes.json' assert { type: 'json' };
import ReactionEmotes from './Other/ReactionEmotes.json' assert { type: 'json' };
import eventHandler from '../Events/baseEventHandler.js';
import DataBase from './DataBase.js';
import auth from '../auth.json' assert { type: 'json' };

const events: { [key: string]: typeof eventHandler } = {};
Constants.allEvents.forEach((e) => {
  events[e] = eventHandler;
});

class CustomClient extends Discord.Client {
  neko: typeof NekoClient;
  customConstants: typeof Constants;
  objectEmotes: typeof ObjectEmotes;
  stringEmotes: typeof StringEmotes;
  reactionEmotes: typeof ReactionEmotes;

  mainID: string;

  channelQueue: Map<string, Map<string, Discord.MessageCreateOptions[]>>;
  channelTimeout: Map<string, Map<string, Jobs.Job>>;
  channelCharLimit: Map<string, Map<string, number>>;

  ch: typeof ch;
  database: RedisxPSQL;

  constructor(options: Discord.ClientOptions) {
    super(options);
    this.neko = NekoClient;
    this.customConstants = Constants;

    this.objectEmotes = ObjectEmotes;
    this.stringEmotes = StringEmotes;
    this.reactionEmotes = ReactionEmotes;

    this.mainID = '650691698409734151';

    this.channelQueue = new Map();
    this.channelTimeout = new Map();
    this.channelCharLimit = new Map();

    this.database = DataBase;
    this.ch = ch;
  }
}

const client = new CustomClient({
  shards: 'auto',
  allowedMentions: {
    parse: ['users'],
    repliedUser: false,
  },
  partials: [
    Discord.Partials.User,
    Discord.Partials.Channel,
    Discord.Partials.GuildMember,
    Discord.Partials.Message,
    Discord.Partials.Reaction,
    Discord.Partials.Reaction,
    Discord.Partials.GuildScheduledEvent,
    Discord.Partials.ThreadMember,
  ],
  failIfNotExists: false,
  presence: {
    status: 'dnd',
    afk: false,
    activities: [
      { name: 'Starting up!', type: Discord.ActivityType.Playing, url: Constants.standard.ytURL },
    ],
  },
  intents: [
    Discord.IntentsBitField.Flags.Guilds,
    Discord.IntentsBitField.Flags.GuildMembers,
    Discord.IntentsBitField.Flags.GuildBans,
    Discord.IntentsBitField.Flags.GuildEmojisAndStickers,
    Discord.IntentsBitField.Flags.GuildIntegrations,
    Discord.IntentsBitField.Flags.GuildWebhooks,
    Discord.IntentsBitField.Flags.GuildInvites,
    Discord.IntentsBitField.Flags.GuildVoiceStates,
    Discord.IntentsBitField.Flags.GuildMessages,
    Discord.IntentsBitField.Flags.GuildMessageReactions,
    Discord.IntentsBitField.Flags.DirectMessages,
    Discord.IntentsBitField.Flags.DirectMessageReactions,
    Discord.IntentsBitField.Flags.MessageContent,
    Discord.IntentsBitField.Flags.GuildScheduledEvents,
    Discord.IntentsBitField.Flags.AutoModerationConfiguration,
    Discord.IntentsBitField.Flags.AutoModerationExecution,
    Discord.IntentsBitField.Flags.GuildMessageTyping,
  ],
  sweepers: {
    messages: {
      interval: 60,
      lifetime: 1_209_600, // 14 days
    },
  },
});

await client.login(auth.token);

export default client;
