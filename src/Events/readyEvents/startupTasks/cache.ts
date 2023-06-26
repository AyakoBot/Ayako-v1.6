import * as Jobs from 'node-schedule';
import * as Discord from 'discord.js';
import * as ch from '../../../BaseClient/ClientHelper.js';
import client from '../../../BaseClient/Client.js';
import { giveawayCollectTimeExpired, end } from '../../../Commands/SlashCommands/giveaway/end.js';

export default () => {
 client.guilds.cache.forEach(async (guild) => {
  guild.commands.fetch().catch(() => undefined);
  await guild.members.fetch().catch(() => undefined);

  const language = await ch.languageSelector(guild.id);

  const invites = guild.members.me?.permissions.has(Discord.PermissionFlagsBits.ManageGuild)
   ? await guild.invites.fetch().catch(() => [])
   : [];
  invites.forEach((i) => ch.cache.invites.set(i, guild.id));

  const vanity = guild.members.me?.permissions.has(Discord.PermissionFlagsBits.ManageGuild)
   ? await guild.fetchVanityData().catch(() => undefined)
   : undefined;
  if (vanity) {
   const invite = vanity as Discord.Invite;
   invite.channel = (guild.channels.cache.get(guild.id) ??
    guild.channels.cache.first()) as Discord.NonThreadGuildBasedChannel;
   invite.channelId = invite.channel?.id;

   ch.cache.invites.set(invite, guild.id);
  }

  guild.channels.cache.forEach(async (c) => {
   if (c.isThread()) return;
   if (!c.isTextBased()) return;

   const webhooks = await c.fetchWebhooks().catch(() => undefined);
   webhooks?.forEach((w) => {
    ch.cache.webhooks.set(w);
   });
  });

  guild.channels.cache.forEach(async (c) => {
   if (!c.isTextBased()) return;

   const pins = await c.messages.fetchPinned().catch(() => undefined);
   pins?.forEach((pin) => ch.cache.pins.set(pin));
  });

  if (guild.features.includes(Discord.GuildFeature.WelcomeScreenEnabled)) {
   const welcomeScreen = await guild.fetchWelcomeScreen().catch(() => undefined);
   if (welcomeScreen) ch.cache.welcomeScreens.set(welcomeScreen);
  }

  const intergrations = guild.members.me?.permissions.has(Discord.PermissionFlagsBits.ManageGuild)
   ? await guild.fetchIntegrations()
   : [];
  intergrations.forEach((i) => {
   ch.cache.integrations.set(i, guild.id);
  });

  const scheduledEvents = await guild.scheduledEvents.fetch().catch(() => undefined);
  scheduledEvents?.forEach(async (event) => {
   const users = await event.fetchSubscribers().catch(() => undefined);
   users?.forEach((u) => {
    ch.cache.scheduledEventUsers.add(u.user, guild.id, event.id);
   });
  });

  if (guild.members.me?.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) {
   await guild.autoModerationRules.fetch().catch(() => undefined);
  }

  const claimTimeouts = await ch.query(
   `SELECT * FROM giveawaycollection WHERE guildId = $1;`,
   [guild.id],
   {
    returnType: 'giveawaycollection',
    asArray: true,
   },
  );

  claimTimeouts?.forEach((t) => {
   ch.cache.giveawayClaimTimeout.set(
    Jobs.scheduleJob(
     new Date(Number(t.endtime) < Date.now() ? Date.now() + 10000 : Number(t.endtime)),
     () => {
      giveawayCollectTimeExpired(t.msgid, t.guildid);
     },
    ),
    t.guildid,
    t.msgid,
   );
  });

  const mutes = await ch.query(`SELECT * FROM punish_tempmutes WHERE guildid = $1;`, [guild.id], {
   returnType: 'punish_tempmutes',
   asArray: true,
  });
  mutes?.forEach((m) => {
   const time = Number(m.uniquetimestamp) + Number(m.duration);
   ch.cache.mutes.set(
    Jobs.scheduleJob(new Date(Date.now() < time ? 1000 : time), async () => {
     const target = m.userid ? await ch.getUser(m.userid).catch(() => undefined) : undefined;
     if (!target) {
      ch.error(guild, new Error('Could not find user to initialize muteRemove event.'));
      return;
     }

     ch.mod(
      m.msgid && m.channelid
       ? await (await ch.getChannel.guildTextChannel(m.channelid))?.messages
          .fetch(m.msgid)
          .catch(() => undefined)
       : undefined,
      'muteRemove',
      {
       executor: m.executorid ? await ch.getUser(m.executorid).catch(() => undefined) : undefined,
       target,
       reason: m.reason ?? language.None,
       guild,
       forceFinish: true,
       dbOnly: false,
      },
     );
    }),
    guild.id,
    m.userid,
   );
  });

  const bans = await ch.query(`SELECT * FROM punish_tempbans WHERE guildid = $1;`, [guild.id], {
   returnType: 'punish_tempbans',
   asArray: true,
  });
  bans?.forEach((m) => {
   const time = Number(m.uniquetimestamp) + Number(m.duration);
   ch.cache.mutes.set(
    Jobs.scheduleJob(new Date(Date.now() < time ? 1000 : time), async () => {
     const target = m.userid
      ? (await ch.getUser(m.userid).catch(() => undefined)) ?? client.user
      : client.user;
     if (!target) return;

     ch.mod(
      m.msgid && m.channelid
       ? await (await ch.getChannel.guildTextChannel(m.channelid))?.messages
          .fetch(m.msgid)
          .catch(() => undefined)
       : undefined,
      'banRemove',
      {
       executor: m.executorid ? await ch.getUser(m.executorid).catch(() => undefined) : undefined,
       target,
       reason: m.reason ?? language.None,
       guild,
       forceFinish: true,
       dbOnly: false,
      },
     );
    }),
    guild.id,
    m.userid,
   );
  });

  const channelBans = await ch.query(
   `SELECT * FROM punish_tempchannelbans WHERE guildid = $1;`,
   [guild.id],
   {
    returnType: 'punish_tempchannelbans',
    asArray: true,
   },
  );
  channelBans?.forEach((m) => {
   const time = Number(m.uniquetimestamp) + Number(m.duration);
   ch.cache.mutes.set(
    Jobs.scheduleJob(new Date(Date.now() < time ? 1000 : time), async () => {
     const target = m.userid
      ? (await ch.getUser(m.userid).catch(() => undefined)) ?? client.user
      : client.user;
     if (!target) return;

     ch.mod(
      m.msgid && m.channelid
       ? await (await ch.getChannel.guildTextChannel(m.channelid))?.messages
          .fetch(m.msgid)
          .catch(() => undefined)
       : undefined,
      'channelBanRemove',
      {
       executor: m.executorid ? await ch.getUser(m.executorid).catch(() => undefined) : undefined,
       target,
       reason: m.reason ?? language.None,
       guild,
       forceFinish: true,
       dbOnly: !!guild.channels.cache.get(m.channelid),
       channel: guild.channels.cache.get(m.channelid) as Discord.GuildChannel,
      },
     );
    }),
    guild.id,
    m.userid,
   );
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const disboard = (_: unknown) => null; // TODO: import disboard handler

  const disboardBumpReminders = await ch.query(
   `SELECT * FROM disboard WHERE guildid = $1;`,
   [guild.id],
   {
    returnType: 'disboard',
    asArray: false,
   },
  );
  if (disboardBumpReminders) disboard(disboardBumpReminders);

  const giveaways = await ch.query(
   `SELECT * FROM giveaways WHERE guildid = $1 AND ended = false AND claimingdone = false;`,
   [guild.id],
   {
    returnType: 'giveaways',
    asArray: true,
   },
  );

  giveaways?.forEach((g) => {
   ch.cache.giveaways.set(
    Jobs.scheduleJob(
     new Date(Number(g.endtime) < Date.now() ? Date.now() + 10000 : Number(g.endtime)),
     () => {
      end(g);
     },
    ),
    g.guildid,
    g.channelid,
    g.msgid,
   );
  });
 });
};
