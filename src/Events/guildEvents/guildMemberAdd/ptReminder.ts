import * as Discord from 'discord.js';
import * as ch from '../../../BaseClient/ClientHelper.js';

export default async (member: Discord.GuildMember) => {
 if (member.client.user.id !== ch.mainID) return;

 const guildsettings = await ch.query(
  `SELECT * FROM guildsettings WHERE guildid = $1;`,
  [member.guild.id],
  {
   returnType: 'guildsettings',
   asArray: false,
  },
 );
 if (!guildsettings?.ptreminderenabled) return;

 const user = await ch.query(`SELECT ptremindersent FROM users WHERE userid = $1;`, [member.id], {
  returnType: 'users',
  asArray: false,
 });
 if (user?.ptremindersent) return;

 const embed: Discord.APIEmbed = {
  author: {
   name: "Hi! I don't think we've met before",
   url: ch.constants.standard.invite,
  },
  title: "Here's a quick Guide to my Terms of Service and Privacy Policy",
  description:
   `At least one of the Servers you have joined uses Ayako (and possibly the Ayako Development Version) for some Features and/or Services.\n\n` +
   `**Terms of Service** https://ayakobot.com/terms\nViolation of any of these Terms can lead to your Access to Ayako being revoked.\n\n` +
   `**Privacy Policy** https://ayakobot.com/privacy\nAyako will never share or store sensitive Data or Information about you outside of Discord and outside the Discord Server you sent them in.`,
  fields: [
   {
    name: 'Premium',
    value:
     "Ayako's Service is completely free and will stay free.\nHowever, I do appreciate\nDonations on https://www.patreon.com/Lars_und_so and\nVotes on https://top.gg/bot/650691698409734151/vote",
    inline: false,
   },
   {
    name: 'Support',
    value:
     'If you have Questions or would like your Stored Data to be deleted, join the Discord Server linked to this Message and use this Channel: <#827302309368561715>',
    inline: false,
   },
   {
    name: 'Invite',
    value: `You can Invite Ayako to your Server using this link: ${ch.constants.standard.invite}`,
    inline: false,
   },
   {
    name: 'Opt-out',
    value: "You can opt-out of Ayako's Features by leaving every Mutual Server with Ayako",
    inline: false,
   },
   {
    name: 'Disabling this Reminder',
    value:
     'Server Managers can disable this Reminder with the Command </settings basic:1072246330329669726>. However we ask you to link both, the /terms and the /privacy, URLs in one of your Info Channels if you do that.',
    inline: false,
   },
  ],
  color: ch.constants.colors.base,
 };

 const dmChannel = await member.user.createDM().catch(() => undefined);
 if (!dmChannel) return;

 const dm = await dmChannel
  .send({ embeds: [embed], content: 'Ayako Terms and Privacy Notice' })
  .catch(() => undefined);
 if (!dm) return;

 dm.edit({
  content: 'This Reminder will only be sent to you __once__\nhttps://discord.gg/euTdctganf',
 });

 ch.query(
  `INSERT INTO users (userid, username, avatar, lastfetch, ptremindersent) VALUE ($1, $2, $3, $4, true) 
 ON CONFLICT (userid) DO 
 UPDATE SET username = $2, avatar = $3, lastfetch = $4, ptremindersent = true;`,
  [member.user.id, member.user.username, member.user.avatarURL(), Date.now()],
 );
};
