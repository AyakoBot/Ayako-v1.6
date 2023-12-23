import * as Jobs from 'node-schedule';
import * as CT from '../../../../Typings/Typings.js';

import cache from '../../cache.js';
import getBotMemberFromGuild from '../../getBotMemberFromGuild.js';
import type * as ModTypes from '../../mod.js';

import banAdd from './banAdd.js';

export default async (
 options: CT.ModOptions<CT.ModTypes.TempBanAdd>,
 language: CT.Language,
 message: ModTypes.ResponseMessage,
 cmd: ModTypes.CmdType,
) => {
 const res = await banAdd(options, language, message, cmd);
 if (!res) return res;

 cache.bans.set(
  Jobs.scheduleJob(new Date(Date.now() + options.duration * 1000), async () => {
   const m: typeof ModTypes = await import(
    `${process.cwd()}/BaseClient/ClientHelperModules/mod.js`
   );
   m.default(undefined, CT.ModTypes.BanRemove, {
    dbOnly: false,
    executor: (await getBotMemberFromGuild(options.guild)).user,
    guild: options.guild,
    reason: language.mod.execution.muteRemove.reason,
    target: options.target,
    skipChecks: true,
   });
  }),
  options.guild.id,
  options.target.id,
 );

 return res;
};
