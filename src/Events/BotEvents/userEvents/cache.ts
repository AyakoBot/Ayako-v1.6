import type * as Discord from 'discord.js';

export default async (user: RUser) => {
 user.client.util.DataBase.users
  .upsert({
   where: { userid: user.id },
   update: {
    username: user.username,
    displayName: user.displayName,
    avatar: user.displayAvatarURL(),
    lastfetch: Date.now(),
   },
   create: {
    username: user.username,
    displayName: user.displayName,
    avatar: user.displayAvatarURL(),
    lastfetch: Date.now(),
    userid: user.id,
   },
  })
  .then();
};
