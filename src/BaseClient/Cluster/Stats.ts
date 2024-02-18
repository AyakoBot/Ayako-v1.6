import { DjsDiscordClient } from 'discord-hybrid-sharding';
import { scheduleJob } from 'node-schedule';
import Manager from './Manager.js';

scheduleJob('0 */10 * * * *', async () => {
 const [guildCount, userCount] = await Promise.all(
  [
   'guilds.cache.size',
   (c: DjsDiscordClient) => c.guilds.cache.reduce((a, g) => a + g.memberCount, 0),
  ]
   .map((v) => (typeof v !== 'string' ? Manager.broadcastEval(v) : Manager.fetchClientValues(v)))
   .map(async (v) => ((await v) as number[] | undefined)?.reduce((a, c) => a + c, 0) ?? 0),
 );

 Manager.broadcastEval(
  (cl: DjsDiscordClient, { guilds, users }: { guilds: number; users: number }) => {
   cl.application?.edit({
    description: `\`${cl.util.splitByThousand(guilds)} Servers\` | \`${cl.util.splitByThousand(
     users,
    )} Users\` | \`v${cl.util.files.importCache.package.file.version}\`
**Your go-to, free-to-access, management, and automation Discord Bot!**

https://ayakobot.com
https://support.ayakobot.com`,
   });
  },
  {
   context: {
    guilds: guildCount,
    users: userCount,
   },
   cluster: 0,
  },
 );
});

const APIDiscordBotList = 'https://discordbotlist.com/api/v1/bots/650691698409734151/stats';
const APIDiscordBots = 'https://discord.bots.gg/api/v1/bots/650691698409734151/stats';
const APIDiscords = 'https://discords.com/bots/api/bot/650691698409734151/setservers';

const getAllUsers = async () => {
 const userSize = (await Manager.broadcastEval((c) =>
  c.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0),
 )) ?? [0];

 return userSize?.reduce((acc, guildCount) => acc + guildCount, 0) ?? null;
};

const getAllGuilds = async () => {
 const guildSize = (await Manager.broadcastEval((c) => c.guilds.cache.size)) ?? [0];

 return guildSize?.reduce((acc, guildCount) => acc + guildCount, 0) ?? null;
};

if (Buffer.from(Manager.token!.split('.')[0], 'base64').toString() === process.env.mainID) {
 scheduleJob('0 0 */1 * * *', async () => {
  const users = await getAllUsers();
  const guilds = await getAllGuilds();

  fetch(APIDiscordBots, {
   method: 'post',
   body: JSON.stringify({
    guildCount: guilds,
   }),
   headers: {
    'Content-Type': 'application/json',
    Authorization: process.env.DBToken ?? '',
   },
  });

  fetch(APIDiscordBotList, {
   method: 'post',
   body: JSON.stringify({
    users,
    guilds,
   }),
   headers: {
    'Content-Type': 'application/json',
    Authorization: process.env.DBListToken ?? '',
   },
  });

  fetch(APIDiscords, {
   method: 'post',
   headers: {
    Authorization: process.env.discords ?? '',
    'Content-Type': 'application/json',
   },
   body: JSON.stringify({ server_count: guilds }),
  });
 });
}
