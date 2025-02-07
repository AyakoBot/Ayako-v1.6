import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.mod.logs.vcTempMuteAdd,
 description: (target: Discord.User, executor: Discord.User) =>
  t.stp(t.JSON.mod.logs.vcTempMuteAdd.description, {
   target: t.languageFunction.getUser(target),
   executor: t.languageFunction.getUser(executor),
  }),
});
