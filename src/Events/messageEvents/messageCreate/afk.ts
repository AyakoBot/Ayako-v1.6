import Jobs from 'node-schedule';
import * as Discord from 'discord.js';
import { getPrefix } from './commandHandler.js';
import * as ch from '../../../BaseClient/ClientHelper.js';
import * as CT from '../../../Typings/CustomTypings.js';

export default async (msg: Discord.Message<true>) => {
 if (!msg.author) return;
 if (msg.author.bot) return;

 const prefix = await getPrefix(msg);
 const commandName = prefix
  ? msg.content.slice(prefix.length).split(/\s+/)[0].toLowerCase()
  : undefined;
 const language = await ch.languageSelector(msg.guildId);

 self(msg, commandName, language);
 mention(msg, commandName, language);
};

const self = async (
 msg: Discord.Message<true>,
 commandName: string | undefined,
 language: CT.Language,
) => {
 if (commandName === 'afk') return;

 const afk = await getAFK(msg.guildId, msg.author.id);
 if (!afk) return;
 if (Number(afk.since) > Date.now() - 60000) return;

 const embed: Discord.APIEmbed = {
  color: ch.constants.colors.loading,
  description: language.slashCommands.afk.removed(ch.constants.standard.getTime(Number(afk.since))),
 };

 const m = await ch.send(msg.channel, { embeds: [embed] });
 Jobs.scheduleJob(new Date(Date.now() + 10000), () => {
  if (m?.deletable) m.delete();
 });

 await ch.DataBase.afk.delete({
  where: {
   userid_guildid: {
    guildid: msg.guildId,
    userid: msg.author.id,
   },
  },
 });

 deleteNick(language, msg.member);
};

const deleteNick = (language: CT.Language, member?: Discord.GuildMember | null) => {
 if (!member) return;
 if (!member.nickname || !member.nickname.endsWith(' [AFK]')) return;
 if (!member.guild.members.me?.permissions.has(134217728n) || !member.manageable) return;

 member
  .setNickname(
   member.displayName.slice(0, member.displayName.length - 6),
   language.slashCommands.afk.removeReason,
  )
  .catch(() => undefined);
};

const mention = async (
 msg: Discord.Message<true>,
 commandName: string | undefined,
 language: CT.Language,
) => {
 if (commandName === 'unafk') return;
 if (msg.mentions.members.size > 10) return;

 const afk = await Promise.all(
  msg.mentions.members.filter((m) => m.id !== msg.author.id).map((m) => getAFK(m.guild.id, m.id)),
 );
 const embeds = afk
  .map((a): Discord.APIEmbed | undefined => {
   if (!a) return undefined;

   return {
    color: ch.constants.colors.loading,
    description: language.slashCommands.afk.isAFK(
     a.userid,
     ch.constants.standard.getTime(Number(a.since)),
     a.text ?? undefined,
    ),
   };
  })
  .filter((e): e is Discord.APIEmbed => !!e);

 if (!embeds.length) return;

 const m = await ch.replyMsg(msg, { embeds, allowed_mentions: { replied_user: true } });

 Jobs.scheduleJob(new Date(Date.now() + 10000), () => {
  if (m?.deletable) m.delete();
 });
};

const getAFK = (guildID: string, userID: string) =>
 ch.DataBase.afk.findUnique({
  where: {
   userid_guildid: {
    guildid: guildID,
    userid: userID,
   },
  },
 });
