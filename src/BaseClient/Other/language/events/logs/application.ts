import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.events.logs.application,
 descUpdateCommand: (
  application: Discord.User,
  user: Discord.User,
  command: Discord.ApplicationCommand,
 ) =>
  t.stp(t.JSON.events.logs.application.descUpdateCommand, {
   user: t.languageFunction.getUser(user),
   application: t.languageFunction.getUser(application),
   command: t.languageFunction.getCommand(command),
  }),
 descUpdateAll: (application: Discord.User, user: Discord.User) =>
  t.stp(t.JSON.events.logs.application.descUpdateAll, {
   user: t.languageFunction.getUser(user),
   application: t.languageFunction.getUser(application),
  }),
});
