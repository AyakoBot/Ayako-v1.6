import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.slashCommands.roles.take,
 doesntHave: (role: Discord.Role, user: Discord.User) =>
  t.stp(t.JSON.slashCommands.roles.take.doesntHave, {
   role: t.languageFunction.getRole(role),
   user: t.languageFunction.getUser(user),
  }),
 taken: (role: Discord.Role, user: Discord.User) =>
  t.stp(t.JSON.slashCommands.roles.take.taken, {
   role: t.languageFunction.getRole(role),
   user: t.languageFunction.getUser(user),
  }),
});
