/* eslint-disable no-console */
import * as DiscordCore from '@discordjs/core';
import * as DiscordRest from '@discordjs/rest';
import 'dotenv/config';
import DataBase from './BaseClient/Bot/DataBase.js';
import commands from './SlashCommands/index.js';

const createCommands = Object.values(commands.public);
const token = process.env.Token ?? '';

const requestHandler = (t: string) =>
 new DiscordCore.API(new DiscordRest.REST({ version: '10' }).setToken(t.replace('Bot ', '')));

await requestHandler(token)
 .applicationCommands.bulkOverwriteGlobalCommands(
  Buffer.from(token.replace('Bot ', '')?.split('.')[0] ?? '0', 'base64').toString() ?? '',
  createCommands.map((c) => c.toJSON()),
 )
 .then((r) => console.log(`[MAIN] Registered ${r.length} Global Commands`));

await fetch(`https://discordbotlist.com/api/v1/bots/${process.env.mainId}/commands`, {
 method: 'post',
 headers: {
  Authorization: process.env.DBListToken ?? '',
  'Content-Type': 'application/json',
 },
 body: JSON.stringify(createCommands.map((c) => c.toJSON())),
});

(
 await DataBase.customclients.findMany({ where: { token: { not: null }, appid: { not: null } } })
).forEach(async (s) => {
 const api = requestHandler(s.token ?? '');

 await api.applicationCommands
  .bulkOverwriteGlobalCommands(
   s.appid ?? '',
   createCommands
    .filter((c) => !c.name.includes('action'))
    .map((c) =>
     c
      .setContexts(DiscordCore.InteractionContextType.Guild)
      .setIntegrationTypes(DiscordCore.ApplicationIntegrationType.GuildInstall)
      .toJSON(),
    ),
  )
  .then((r) => console.log(`[CUSTOM] Registered ${r.length} Global Commands`))
  .catch((e: Error) => {
   if (!e.message.includes('401')) return;
   console.log(`Unauthorized for ${s.appid}`, e);
   DataBase.customclients.delete({ where: { guildid: s.guildid } }).then();
  });
});

setTimeout(async () => {
 console.log('Finished. Exiting...');

 await DataBase.$disconnect();
 process.exit(0);
}, 10000);
