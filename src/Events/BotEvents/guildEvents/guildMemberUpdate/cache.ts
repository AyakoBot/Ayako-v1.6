import { StoredPunishmentTypes } from '@prisma/client';

export default async (oldMember: Discord.GuildMember, member: Discord.GuildMember) => {
 if (!oldMember.isCommunicationDisabled()) return;
 if (member.isCommunicationDisabled()) return;

 member.client.util.DataBase.punishments
  .updateMany({
   where: {
    guildid: member.guild.id,
    userid: member.user.id,
    type: StoredPunishmentTypes.tempmute,
   },
   data: { type: StoredPunishmentTypes.mute },
  })
  .then();
};
