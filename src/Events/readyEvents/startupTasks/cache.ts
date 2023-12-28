import Prisma from '@prisma/client';
import * as Discord from 'discord.js';
import * as Jobs from 'node-schedule';
import client from '../../../BaseClient/Client.js';
import * as ch from '../../../BaseClient/ClientHelper.js';
import { endDeleteSuggestion } from '../../../Commands/ModalCommands/suggestion/accept.js';
import { end, giveawayCollectTimeExpired } from '../../../Commands/SlashCommands/giveaway/end.js';
import { endReminder } from '../../../Commands/SlashCommands/reminder/create.js';
import * as CT from '../../../Typings/Typings.js';
import { enableInvites } from '../../guildEvents/guildMemberAdd/antiraid.js';
import { bumpReminder } from '../../messageEvents/messageCreate/disboard.js';
import { del } from '../../voiceStateEvents/voiceStateDeletes/voiceHub.js';

export default () => {
 reminder();

 client.guilds.cache.forEach(async (guild) => {
  Object.values(tasks).forEach((t) => t(guild));
 });
};

const reminder = async () => {
 const reminders = await ch.DataBase.reminders.findMany({
  where: {},
 });

 reminders.forEach((r) => {
  ch.cache.reminders.set(
   Jobs.scheduleJob(
    new Date(Number(r.endtime) < Date.now() ? Date.now() + 10000 : Number(r.endtime)),
    () => {
     endReminder(r);
    },
   ),
   r.userid,
   Number(r.endtime),
  );
 });
};

export const tasks = {
 vcDeleteTimeouts: async (guild: Discord.Guild) => {
  const settings = await ch.DataBase.voicehubs.findMany({
   where: { guildid: guild.id },
  });

  const vcs = await ch.DataBase.voicechannels.findMany({ where: { guildid: guild.id } });

  vcs.forEach(async (vc) => {
   const delDB = () =>
    ch.DataBase.voicechannels
     .delete({ where: { guildid_channelid: { guildid: vc.guildid, channelid: vc.channelid } } })
     .then();

   const applyingSetting = settings.find((s) => vc.hubid === s.channelid);
   if (!applyingSetting) {
    delDB();
    return;
   }

   const channel = await ch.getChannel.guildVoiceChannel(vc.channelid);
   if (!channel) {
    delDB();
    return;
   }

   if (channel.members.size) return;

   if (!vc.everyonelefttime) {
    ch.DataBase.voicechannels
     .update({
      where: { guildid_channelid: { guildid: guild.id, channelid: channel.id } },
      data: { everyonelefttime: Date.now() },
     })
     .then();
   }

   ch.cache.vcDeleteTimeout.set(
    Jobs.scheduleJob(new Date(Date.now() + Number(applyingSetting.deletetime) * 1000), () =>
     del(channel),
    ),
    guild.id,
    channel.id,
   );
  });
 },
 deleteSuggestions: async (guild: Discord.Guild) => {
  const settings = await ch.DataBase.suggestionsettings.findUnique({
   where: {
    guildid: guild.id,
    active: true,
    OR: [{ deleteapproved: true }, { deletedenied: true }],
   },
  });
  if (!settings) return;

  const suggestions = await ch.DataBase.suggestionvotes.findMany({
   where: { guildid: guild.id },
  });

  suggestions.forEach((s) => {
   ch.cache.deleteSuggestions.set(
    Jobs.scheduleJob(
     new Date(
      Date.now() +
       (s.approved ? Number(settings.deleteapprovedafter) : Number(settings.deletedeniedafter)) *
        1000,
     ),
     async () => {
      endDeleteSuggestion(s);
     },
    ),
    guild.id,
    s.msgid,
   );
  });
 },
 disboard: async (guild: Discord.Guild) => {
  const disboardBumpReminders = await ch.DataBase.disboard.findUnique({
   where: { guildid: guild.id },
  });
  if (disboardBumpReminders) {
   ch.cache.disboardBumpReminders.set(
    Jobs.scheduleJob(
     new Date(
      Number(disboardBumpReminders.nextbump) < Date.now()
       ? Date.now() + 10000
       : Number(disboardBumpReminders.nextbump),
     ),
     () => {
      bumpReminder(guild);
     },
    ),
    disboardBumpReminders.guildid,
   );
  }
 },
 giveaways: async (guild: Discord.Guild) => {
  const giveaways = await ch.DataBase.giveaways.findMany({
   where: {
    guildid: guild.id,
    ended: false,
    claimingdone: false,
   },
  });

  giveaways.forEach((g) => {
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
 },
 punishments: async (guild: Discord.Guild) => {
  const language = await ch.getLanguage(guild.id);
  const where = { where: { guildid: guild.id } };
  const tables = [
   {
    rows: () => ch.DataBase.punish_mutes.findMany(where),
    cache: ch.cache.mutes,
    event: CT.ModTypes.MuteRemove,
   },
   {
    rows: () => ch.DataBase.punish_tempbans.findMany(where),
    cache: ch.cache.bans,
    event: CT.ModTypes.BanRemove,
   },
   {
    rows: () => ch.DataBase.punish_tempchannelbans.findMany(where),
    cache: ch.cache.channelBans,
    event: CT.ModTypes.ChannelBanRemove,
   },
  ] as const;

  tables.forEach(async (table) => {
   (await table.rows()).forEach((m) => {
    const time = Number(m.uniquetimestamp) + Number(m.duration) * 1000;

    table.cache.set(
     Jobs.scheduleJob(new Date(Date.now() < time ? 1000 : time), async () => {
      const target = m.userid ? await ch.getUser(m.userid).catch(() => undefined) : undefined;
      if (!target) {
       ch.error(guild, new Error(`Could not find user to initialize ${table}Remove event.`));
       return;
      }

      const channel = await ch.getChannel.guildTextChannel(m.channelid);

      ch.mod(
       m.msgid && channel
        ? await ch.request.channels
           .getMessage(channel, m.msgid)
           .then((s) => ('message' in s ? undefined : s))
        : undefined,
       table.event,
       {
        executor: m.executorid ? await ch.getUser(m.executorid).catch(() => undefined) : undefined,
        target,
        reason: m.reason ?? language.t.None,
        guild,
        skipChecks: true,
        dbOnly:
         'banchannelid' in m
          ? !!guild.channels.cache.get((m as Prisma.punish_tempchannelbans).banchannelid)
          : false,
        channel:
         'banchannelid' in m
          ? (guild.channels.cache.get(
             (m as Prisma.punish_tempchannelbans).banchannelid,
            ) as Discord.GuildChannel)
          : undefined,
       } as CT.ModOptions<
        CT.ModTypes.ChannelBanRemove | CT.ModTypes.BanRemove | CT.ModTypes.MuteRemove
       >,
      );
     }),
     guild.id,
     'banchannelid' in m ? m.channelid : m.userid,
     m.userid,
    );
   });
  });
 },
 claimTimeouts: async (guild: Discord.Guild) => {
  const claimTimeouts = await ch.DataBase.giveawaycollection.findMany({
   where: { guildid: guild.id },
  });
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
 },
 enableInvites: async (guild: Discord.Guild) => {
  const settings = await ch.DataBase.guildsettings.findUnique({
   where: { guildid: guild.id, enableinvitesat: { not: null } },
  });
  if (!settings) return;

  ch.cache.enableInvites.set(
   guild.id,
   Jobs.scheduleJob(new Date(Number(settings.enableinvitesat)), () => {
    enableInvites(guild);
   }),
  );
 },
};
