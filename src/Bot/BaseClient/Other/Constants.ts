import * as DDeno from 'discordeno';

export default {
  events: {
    logs: {
      automodRule: {
        create: 'https://ayakobot.com/cdn/Ayako_Assets/Events/AutomoderationRuleCreate',
        update: 'https://ayakobot.com/cdn/Ayako_Assets/Events/AutomoderationRuleUpdate',
        delete: 'https://ayakobot.com/cdn/Ayako_Assets/Events/AutomoderationRuleDelete',
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
        Stage: 'https://ayakobot.com/cdn/Ayako_Assets/Events/StageUpdate.png',
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
    guildDelete: {
      color: 16711680,
      guildName: 'Guild Name',
      guildId: 'Guild ID',
      memberCount: 'Membercount',
      currentGuildCount: (length: number) => `Ayako is now in ${length} guilds`,
      joinedAGuild: '<@&669894051851403294> left a Guild',
      guildOwner: 'Guild Owner',
    },
  },
  allEvents: [
    'debug',
    'automodRuleCreate',
    'automodRuleUpdate',
    'automodRuleDelete',
    'automodActionExecution',
    'threadCreate',
    'threadDelete',
    'threadMemberUpdate',
    'threadMembersUpdate',
    'threadUpdate',
    'scheduledEventCreate',
    'scheduledEventUpdate',
    'scheduledEventDelete',
    'scheduledEventUserAdd',
    'scheduledEventUserRemove',
    'ready',
    'dispatchRequirements',
    'integrationCreate',
    'integrationDelete',
    'integrationUpdate',
    'interactionCreate',
    'inviteCreate',
    'inviteDelete',
    'guildMemberAdd',
    'guildMemberRemove',
    'guildMemberUpdate',
    'messageCreate',
    'messageDelete',
    'messageDeleteBulk',
    'messageUpdate',
    'reactionAdd',
    'reactionRemove',
    'reactionRemoveAll',
    'reactionRemoveEmoji',
    'presenceUpdate',
    'voiceServerUpdate',
    'voiceStateUpdate',
    'channelCreate',
    'channelDelete',
    'channelPinsUpdate',
    'channelUpdate',
    'guildEmojisUpdate',
    'guildBanAdd',
    'guildBanRemove',
    'guildCreate',
    'guildDelete',
    'guildUpdate',
    'raw',
    'stageInstanceCreate',
    'stageInstanceDelete',
    'stageInstanceUpdate',
    'roleCreate',
    'roleDelete',
    'roleUpdate',
    'webhooksUpdate',
    'botUpdate',
    'typingStart',
  ],
  antiraidMessage: {
    color: 16711680,
    image: 'https://ayakobot.com/cdn/Ayako_Assets/Warning.png',
  },
  discordMsgUrls: [
    'https://discord.com/channels/[Guild ID]/[Channel ID]/[Message ID]',
    'https://ptb.discord.com/channels/[Guild ID]/[Channel ID]/[Message ID]',
    'https://canary.discord.com/channels/[Guild ID]/[Channel ID]/[Message ID]',
  ],
  colors: {
    warning: 16711680,
    success: 65280,
    ephemeral: 3092790,
    loading: 16776960,
  },
  standard: {
    color: 11599616,
    name: 'Ayako',
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
    guildAvatarURL: (guild: DDeno.Guild, member: DDeno.Member, fileEnd: string) =>
      `https://cdn.discordapp.com/guilds/${guild.id}/users/${member.id}/avatars/${member.avatar}.${fileEnd}?size=4096`,
    guildIconURL: (guild: DDeno.Guild, fileEnd: string) =>
      `https://cdn.discordapp.com/icons/${guild.id}/${DDeno.iconBigintToHash(
        guild.icon as bigint,
      )}.${fileEnd}?size=4096`,
    emojiURL: (emoji: DDeno.Emoji, fileEnd: string) =>
      `https://cdn.discordapp.com/emojis/${emoji.id}.${fileEnd}?size=4096`,
    roleIconURL: (role: DDeno.Role) =>
      `https://cdn.discordapp.com/role-icons/${role.id}/${DDeno.iconBigintToHash(
        role.icon as bigint,
      )}.png?size=4096`,
    userAvatarURL: (user: DDeno.User | DDeno.Webhook, fileEnd: string) =>
      `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${fileEnd}?size=4096`,
    appURL: (user: DDeno.User) => `discord://-/users/${user.id}`,
    getEmote: (emoji: DDeno.Emoji) =>
      emoji.toggles.requireColons
        ? `<${emoji.toggles.animated ? 'a:' : ''}${emoji.name}:${emoji.id}>`
        : `${emoji.name}`,
    getTime: (time: number) =>
      `<t:${String(time).slice(0, -3)}:f> (<t:${String(time).slice(0, -3)}:R>)`,
  },
  mod: {
    strike: {
      color: 16711680,
      confirmColor: 16711680,
    },
    roleAdd: {
      color: 65280,
    },
    roleRemove: {
      color: 65280,
    },
    tempmuteAdd: {
      color: 16711680,
    },
    tempbanAdd: {
      color: 16711680,
    },
    muteRemove: {
      color: 65280,
    },
    kickAdd: {
      color: 16711680,
    },
    banAdd: {
      color: 16711680,
    },
    softbanAdd: {
      color: 16711680,
    },
    banRemove: {
      color: 65280,
    },
    channelbanAdd: {
      color: 16711680,
    },
    tempchannelbanAdd: {
      color: 16711680,
    },
    channelbanRemove: {
      color: 65280,
    },
    warnAdd: {
      color: 16711680,
    },
    softwarnAdd: {
      color: 16711680,
    },
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
  expire: {
    success: 65280,
    color: 65280,
  },
  commands: {
    synclevel: {
      methods: ['api', 'lb', 'lr'],
    },
    afk: 16776960,
    toxicityCheck: 16711680,
    pardon: {
      success: 65280,
      color: 65280,
    },
    edit: {
      success: 65280,
      color: 65280,
      image: 'https://ayakobot.com/cdn/Ayako_Assets/Edit.png',
    },
    clearwarns: {
      success: 65280,
      fail: 16711680,
      loading: 16776960,
      color: 65280,
    },
    massban: {
      success: 65280,
      fail: 16711680,
      color: 16711680,
    },
    invite: {
      image: 'https://ayakobot.com/cdn/Ayako_Assets/help.png',
    },
    settings: {
      colors: {
        other: '🔵',
        roles: '🔴',
        channels: '🟢',
        chats: '🟡',
      },
      selectMenuTypes: {
        text: 3,
        user: 5,
        role: 6,
        all: 7,
        channels: 8,
      },
      categories: [
        {
          name: 'auto-moderation',
          categories: [
            { name: 'anti-spam', category: 'chats' },
            { name: 'anti-spam-punishments', category: 'chats' },
            { name: 'anti-virus', category: 'chats' },
            { name: 'anti-virus-punishments', category: 'chats' },
            { name: 'anti-raid', category: 'other' },
            { name: 'auto-punish', category: 'other' },
            { name: 'blacklist', category: 'chats' },
            { name: 'blacklist-punishments', category: 'chats' },
          ],
        },
        {
          name: 'moderation',
          categories: [{ name: 'expiry', category: 'other' }],
        },
        {
          name: 'automation',
          categories: [
            { name: 'auto-roles', category: 'roles' },
            { name: 'cooldowns', category: 'chats' },
            { name: 'disabled-commands', category: 'chats' },
            { name: 'disboard-reminders', category: 'other' },
            { name: 'self-roles', category: 'roles' },
            { name: 'separators', category: 'roles' },
            { name: 'sticky', category: 'roles' },
            { name: 'verification', category: 'roles' },
            { name: 'welcome', category: 'chats' },
            { name: 'leveling', category: 'other' },
            { name: 'nitro', category: 'roles' },
            { name: 'reaction-roles', category: 'roles' },
            { name: 'delete-commands', category: 'chats' },
            { name: 'suggestions', category: 'other' },
          ],
        },
        {
          name: 'other',
          categories: [
            { name: 'logs', category: 'other' },
            { name: 'language', category: 'chats' },
            { name: 'overview', category: 'other' },
            { name: 'prefix', category: 'chats' },
          ],
        },
      ],
      tutorials: {
        separators: ['https://youtu.be/yLKgn-Ecduc'],
      },
      settings: {
        leveling: {
          active: 'boolean',
          xppermsg: 'number',
          xpmultiplier: 'number',
          rolemode: 'boolean',
          lvlupmode: 'lvlupmode',
          lvlupemotes: 'emotes',
          lvlupdeltimeout: 'seconds',
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
        welcome: {
          channelid: 'channel',
          active: 'boolean',
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
          active: 'boolean',
        },
        suggestions: {
          active: 'boolean',
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
          active: 'boolean',
          stoprole: 'role',
          isvarying: 'boolean',
          roles: 'roles',
          name: 'string',
        },
        'self-roles': {
          active: 'boolean',
          roles: 'roles',
          onlyone: 'boolean',
          blacklistedroles: 'roles',
          blacklistedusers: 'users',
          whitelistedroles: 'roles',
          whitelistedusers: 'users',
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
          emojievents: 'channels',
          guildevents: 'channels',
          inviteevents: 'channels',
          messageevents: 'channels',
          modlogs: 'channels',
          roleevents: 'channels',
          userevents: 'channels',
          voiceevents: 'channels',
          webhookevents: 'channels',
          settingslog: 'channels',
          channelevents: 'channels',
          stickerevents: 'channels',
          threadevents: 'channels',
          guildmemberevents: 'channels',
          stageevents: 'channels',
        },
        overview: {
          prefix: 'string',
          interactionsmode: 'boolean',
          lan: 'language',
          errorchannel: 'channel',
          vanity: 'string',
        },
        language: {
          prefix: 'string',
          interactionsmode: 'boolean',
          lan: 'language',
          errorchannel: 'channel',
          vanity: 'string',
        },
        prefix: {
          prefix: 'string',
          interactionsmode: 'boolean',
          lan: 'language',
          errorchannel: 'channel',
          vanity: 'string',
        },
        'disboard-reminders': {
          active: 'boolean',
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
          deletetimeout: 'seconds',
          active: 'boolean',
          commands: 'command',
        },
        cooldowns: {
          active: 'boolean',
          command: 'command',
          cooldown: 'duration',
          bpchannelid: 'channels',
          bproleid: 'roles',
          bpuserid: 'users',
          activechannelid: 'channels',
        },
        blacklist: {
          active: 'boolean',
          bpchannelid: 'channels',
          bproleid: 'roles',
          bpuserid: 'users',
          words: 'strings',
        },
        'auto-punish': {
          duration: 'duration',
          warnamount: 'number',
          punishment: 'punishment',
          active: 'boolean',
          addroles: 'roles',
          removeroles: 'roles',
          confirmationreq: 'boolean',
          punishmentawaittime: 'seconds',
        },
        'auto-roles': {
          active: 'boolean',
          botroleid: 'roles',
          userroleid: 'roles',
          allroleid: 'roles',
        },
        'anti-virus': {
          active: 'boolean',
          minimize: 'seconds',
          delete: 'seconds',
          linklogging: 'boolean',
          linklogchannels: 'channels',
          minimizetof: 'boolean',
          deletetof: 'boolean',
        },
        'anti-raid': {
          active: 'boolean',
          punishment: 'punishment',
          posttof: 'boolean',
          postchannel: 'channel',
          pingroles: 'roles',
          pingusers: 'users',
          time: 'seconds',
          jointhreshold: 'number',
          punishmenttof: 'boolean',
        },
        'anti-spam': {
          active: 'boolean',
          wlchannelid: 'channels',
          wluserid: 'users',
          wlroleid: 'roles',
          msgthreshold: 'number',
          dupemsgthreshold: 'number',
          timeout: 'seconds',
          deletespam: 'boolean',
        },
        'anti-spam-punishments': {
          active: 'boolean',
          warnamount: 'number',
          punishment: 'punishment',
          duration: 'duration',
        },
        'anti-virus-punishments': {
          active: 'boolean',
          warnamount: 'number',
          punishment: 'punishment',
          duration: 'duration',
        },
        'blacklist-punishments': {
          active: 'boolean',
          warnamount: 'number',
          punishment: 'punishment',
          duration: 'duration',
        },
        'level-roles': {
          level: 'number',
          roles: 'roles',
        },
      },
      tableNames: {
        'anti-spam': 'antispam',
        'anti-spam-punishments': 'antispampunishments',
        'anti-virus-punishments': 'antiviruspunishments',
        'blacklist-punishments': 'blacklistpunishments',
        'anti-raid': 'antiraid',
        'anti-virus': 'antivirus',
        'auto-punish': 'autopunish',
        blacklist: 'blacklist',
        'auto-roles': 'autoroles',
        cooldowns: 'cooldowns',
        expiry: 'expiry',
        'disabled-commands': 'disabledcommands',
        'disboard-reminders': 'disboard',
        'self-roles': 'selfroles',
        separators: 'roleseparator',
        sticky: 'sticky',
        verification: 'verification',
        welcome: 'welcome',
        leveling: 'leveling',
        nitro: 'nitrosettings',
        'reaction-roles': 'rrsettings',
        'delete-commands': 'deletecommands',
        suggestions: 'suggestionsettings',
        logs: 'logchannels',
        language: 'guildsettings',
        prefix: 'guildsettings',
        overview: 'guildsettings',
        'leveling-multi-channels': 'levelingmultiplierchannels',
        'leveling-multi-roles': 'levelingmultiplierroles',
        'level-roles': 'levelingroles',
        'level-rules-channels': 'levelingruleschannels',
        'nitro-rules': 'nitrorules',
        'reaction-button-settings': 'rrbuttons',
        'reaction-role-settings': 'rrreactions',
      },
      mrmIdentifiers: {
        'anti-spam-punishments': [{ ident: 'warnamount', type: 'string' }],
        'anti-virus-punishments': [{ ident: 'warnamount', type: 'string' }],
        'blacklist-punishments': [{ ident: 'warnamount', type: 'string' }],
        deletecommands: [{ ident: 'command', type: 'text' }],
        reactionroles: [{ ident: 'name', type: 'text' }],
        rrbuttons: [
          { ident: 'buttontext', type: 'text' },
          { ident: 'emote', type: 'emote' },
        ],
        rrreactions: [{ ident: 'emote', type: 'emote' }],
        disabled: [{ ident: 'commands', type: 'text' }],
        cooldowns: [{ ident: 'command', type: 'text' }],
        nitroroles: [],
        selfroles: [{ ident: 'name', type: 'text' }],
        separators: [{ ident: 'name', type: 'text' }],
        'auto-punish': [{ ident: 'warnamount', type: 'text' }],
        'level-roles': [{ ident: 'level', type: 'text' }],
        'leveling-multi-roles': [{ ident: 'multiplier', type: 'text' }],
        'level-rules-channels': [],
        'leveling-multi-channels': [{ ident: 'multiplier', type: 'text' }],
      },
      relatedSettings: {
        'anti-spam': ['anti-spam-punishments'],
        'anti-spam-punishments': ['anti-spam'],
        'anti-virus': ['anti-virus-punishments'],
        'anti-virus-punishments': ['anti-virus'],
        blacklist: ['blacklist-punishments'],
        'blacklist-punishments': ['blacklist'],
        'level-roles': [
          'leveling',
          'leveling-multi-channels',
          'level-rules-channels',
          'leveling-multi-roles',
        ],
        leveling: [
          'leveling-multi-roles',
          'leveling-multi-channels',
          'level-roles',
          'level-rules-channels',
        ],
        'leveling-multi-channels': [
          'leveling-multi-roles',
          'leveling',
          'level-roles',
          'level-rules-channels',
        ],
        'leveling-multi-roles': [
          'leveling-multi-roles',
          'leveling',
          'level-roles',
          'leveling-multi-channels',
          'level-rules-channels',
        ],
        'level-rules-channels': [
          'leveling-multi-roles',
          'leveling',
          'leveling-multi-channels',
          'multiroles',
          'level-roles',
        ],
      },
    },
  },
};
