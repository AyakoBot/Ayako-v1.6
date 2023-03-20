import type * as Discord from 'discord.js';

const punishment = {
  warnamount: 'number',
  punishment: 'punishment',
  duration: 'duration',
};

export default {
  events: {
    logs: {
      automodRule: {
        create: 'https://ayakobot.com/cdn/Ayako_Assets/Events/AutomoderationRuleCreate.png',
        update: 'https://ayakobot.com/cdn/Ayako_Assets/Events/AutomoderationRuleUpdate.png',
        delete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/AutomoderationRuleDelete.png',
      },
      voiceState: {
        update: 'https://ayakobot.com/cdn/Ayako_Assets/Events/MemberUpdate.png',
        LockedVoiceJoin: 'https://ayakobot.com/cdn/Ayako_Assets/Events/LockedVoiceCreate.png',
        VoiceJoin: 'https://ayakobot.com/cdn/Ayako_Assets/Events/VoiceCreate.png',
        StageJoin: 'https://ayakobot.com/cdn/Ayako_Assets/Events/StageCreate.png',
        LockedVoiceLeave: 'https://ayakobot.com/cdn/Ayako_Assets/Events/LockedVoiceDelete.png',
        VoiceLeave: 'https://ayakobot.com/cdn/Ayako_Assets/Events/VoiceDelete.png',
        StageLeave: 'https://ayakobot.com/cdn/Ayako_Assets/Events/StageDelete.png',
        LockedVoiceSwitch:
          'https://ayakobot.com/cdn/Ayako_Assets/Events/Events/LockedVoiceUpdate.png',
        VoiceSwitch: 'https://ayakobot.com/cdn/Ayako_Assets/Events/VoiceUpdate.png',
        StageSwitch: 'https://ayakobot.com/cdn/Ayako_Assets/Events/StageUpdate.png',
      },
      threadMembers: {
        update: 'https://ayakobot.com/cdn/Ayako_Assets/Events/MemberUpdate.png',
      },
      stage: {
        open: 'https://ayakobot.com/cdn/Ayako_Assets/Events/StageInstanceOpen.png',
        update: 'https://ayakobot.com/cdn/Ayako_Assets/Events/StageInstanceUpdate.png',
        close: 'https://ayakobot.com/cdn/Ayako_Assets/Events/StageInstanceClose.png',
      },
      channel: {
        TextChannelCreate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/TextChannelCreate.png',
        ThreadCreate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/ThreadCreate.png',
        VoiceCreate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/VoiceCreate.png',
        NewsChannelCreate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/NewsChannelCreate.png',
        NSFWChannelCreate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/NSFWChannelCreate.png',
        RulesCreate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/RulesCreate.png',
        StageCreate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/StageCreate.png',
        CategoryCreate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/CategoryCreate.png',
        LockedChannelCreate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/LockedChannelCreate.png',
        LockedVoiceCreate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/LockedVoiceCreate.png',
        DirectoryCreate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/DirectoryCreate.png',
        ForumCreate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/ForumCreate.png',
        NSFWForumCreate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/NSFWForumCreate.png',
        TextChannelDelete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/TextChannelDelete.png',
        ThreadDelete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/ThreadDelete.png',
        VoiceDelete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/VoiceDelete.png',
        NewsChannelDelete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/NewsChannelDelete.png',
        NSFWChannelDelete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/NSFWChannelDelete.png',
        RulesDelete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/RulesDelete.png',
        StageDelete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/StageDelete.png',
        CategoryDelete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/CategoryDelete.png',
        LockedChannelDelete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/LockedChannelDelete.png',
        LockedVoiceDelete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/LockedVoiceDelete.png',
        DirectoryDelete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/DirectoryDelete.png',
        ForumDelete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/ForumDelete.png',
        NSFWForumDelete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/NSFWForumDelete.png',
        TextChannelUpdate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/TextChannelUpdate.png',
        ThreadUpdate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/ThreadUpdate.png',
        VoiceUpdate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/VoiceUpdate.png',
        NewsChannelUpdate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/NewsChannelUpdate.png',
        NSFWChannelUpdate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/NSFWChannelUpdate.png',
        RulesUpdate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/RulesUpdate.png',
        StageUpdate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/StageUpdate.png',
        CategoryUpdate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/CategoryUpdate.png',
        LockedChannelUpdate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/LockedChannelUpdate.png',
        LockedVoiceUpdate:
          'https://ayakobot.com/cdn/Ayako_Assets/Events/Events/LockedVoiceUpdate.png',
        DirectoryUpdate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/DirectoryUpdate.png',
        ForumUpdate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/ForumUpdate.png',
        NSFWForumUpdate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/NSFWForumUpdate.png',
        Pin: 'https://ayakobot.com/cdn/Ayako_Assets/Events/PinCreate.png',
        Unpin: 'https://ayakobot.com/cdn/Ayako_Assets/Events/PinDelete.png',
        PinUpdate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/PinUpdate.png',
      },
      emoji: {
        create: 'https://ayakobot.com/cdn/Ayako_Assets/Events/EmojiCreate.png',
        delete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/EmojiDelete.png',
        update: 'https://ayakobot.com/cdn/Ayako_Assets/Events/EmojiUpdate.png',
      },
      sticker: {
        create: 'https://ayakobot.com/cdn/Ayako_Assets/Events/StickerCreate.png',
        delete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/StickerDelete.png',
        update: 'https://ayakobot.com/cdn/Ayako_Assets/Events/StickerUpdate.png',
      },
      guild: {
        BanCreate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/BanCreate.png',
        BanRemove: 'https://ayakobot.com/cdn/Ayako_Assets/Events/BanRemove.png',
        GuildCreate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/GuildCreate.png',
        GuildUpdate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/GuildUpdate.png',
        GuildDelete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/GuildDelete.png',
        WebhookUpdate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/WebhookUpdate.png',
        BotUpdate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/BotUpdate.png',
        ChannelFollowUpdate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/ChannelFollowUpdate.png',
        SlashCommandUpdate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/SlashCommandUpdate.png',
        WebhookDelete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/WebhookDelete.png',
        BotDelete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/BotDelete.png',
        ChannelFollowDelete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/ChannelFollowDelete.png',
        SlashCommandDelete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/SlashCommandDelete.png',
        WebhookCreate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/WebhookCreate.png',
        BotCreate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/BotCreate.png',
        ChannelFollowCreate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/ChannelFollowCreate.png',
        SlashCommandCreate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/SlashCommandCreate.png',
        MemberCreate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/MemberCreate.png',
        MemberDelete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/MemberDelete.png',
        MemberUpdate: 'https://ayakobot.com/cdn/Ayako_Assets/Events/MemberUpdate.png',
        Prune: 'https://ayakobot.com/cdn/Ayako_Assets/Events/Prune.png',
        ScheduledEventCreate:
          'https://ayakobot.com/cdn/Ayako_Assets/Events/ScheduledEventCreate.png',
        ScheduledEventDelete:
          'https://ayakobot.com/cdn/Ayako_Assets/Events/ScheduledEventDelete.png',
        ScheduledEventUpdate:
          'https://ayakobot.com/cdn/Ayako_Assets/Events/ScheduledEventUpdate.png',
      },
      invite: {
        create: 'https://ayakobot.com/cdn/Ayako_Assets/Events/InviteCreate.png',
        delete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/InviteDelete.png',
      },
      message: {
        delete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/MessageDelete.png',
        update: 'https://ayakobot.com/cdn/Ayako_Assets/Events/MessageUpdate.png',
        Publish: 'https://ayakobot.com/cdn/Ayako_Assets/Events/Publish.png',
      },
      reaction: {
        create: 'https://ayakobot.com/cdn/Ayako_Assets/Events/ReactionAdd.png',
        remove: 'https://ayakobot.com/cdn/Ayako_Assets/Events/ReactionRemove.png',
      },
      role: {
        create: 'https://ayakobot.com/cdn/Ayako_Assets/Events/RoleCreate.png',
        remove: 'https://ayakobot.com/cdn/Ayako_Assets/Events/RoleDelete.png',
        update: 'https://ayakobot.com/cdn/Ayako_Assets/Events/RoleUpdate.png',
      },
      webhook: {
        create: 'https://ayakobot.com/cdn/Ayako_Assets/Events/WebhookCreate.png',
        update: 'https://ayakobot.com/cdn/Ayako_Assets/Events/WebhookUpdate.png',
        delete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/WebhookDelete.png',
      },
      command: {
        create: 'https://ayakobot.com/cdn/Ayako_Assets/Events/SlashCommandCreate.png',
        delete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/SlashCommandDelete.png',
        update: 'https://ayakobot.com/cdn/Ayako_Assets/Events/SlashCommandUpdate.png',
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
  },
  colors: {
    danger: 16711680,
    success: 65280,
    ephemeral: 3092790,
    loading: 16776960,
    base: 11599616,
  },
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
    error: 'https://ayakobot.com/cdn/Ayako_Assets/Warning.png',
    appURL: (user: Discord.User) => `discord://-/users/${user.id}`,
    userURL: (user: Discord.User) => `https://discord.com/users/${user.id}`,
    getEmote: (emoji: Discord.Emoji) =>
      emoji.id ? `<${emoji.animated ? 'a:' : ':'}${emoji.name}:${emoji.id}>` : `${emoji.name}`,
    getTime: (time: number) =>
      `<t:${String(time).slice(0, -3)}:f> (<t:${String(time).slice(0, -3)}:R>)`,
    msgurl: (g: string, c: string | undefined, m: string) =>
      `https://discord.com/channels/${g}/${c ? c : '@me'}/${m}`,
    ytURL: 'https://www.youtube.com/@AyakoBot',
  },
  customembeds: {
    limits: {
      fields: {
        title: 256,
        description: 4096,
        'author-name': 256,
        'field-names': 256,
        'field-values': 1024,
        'field-length': 25,
        'footer-text': 4096,
      },
      total: 6000,
      totalOf: [
        'title',
        'description',
        'field-names',
        'field-values',
        'footer-text',
        'author-name',
      ],
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
    settings: {
      tutorials: {
        separators: ['https://youtu.be/yLKgn-Ecduc'],
      },
      basicSettings: ['vote', 'leveling', 'nitro'],
      types: {
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
        },
        'disboard-reminders': {
          repeatreminder: 'minutes',
          channelid: 'channel',
          roles: 'roles',
          users: 'users',
          deletereply: 'boolean',
          repeatenabled: 'boolean',
        },
        'delete-commands': {
          deletecommand: 'boolean',
          deletereply: 'boolean',
          deletetimeout: 'number',
          commands: 'command',
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
          punishmentawaittime: 'number',
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
        'nitro-roles': {
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
        'nitro-roles': 'nitroroles',
        'button-roles': 'buttonroles',
        'reaction-roles': 'reactionroles',
        'reaction-role-settings': 'reactionrolesettings',
        'button-role-settings': 'buttonrolesettings',
        vote: 'votesettings',
        'vote-rewards': 'voterewards',
      },
    },
  },
};
