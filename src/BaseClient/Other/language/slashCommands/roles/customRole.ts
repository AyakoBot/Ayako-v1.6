import * as CT from '../../../../../Typings/Typings.js';

export default (t: CT.Language) => ({
 ...t.JSON.slashCommands.roles.customRole,
 edit: (role: Discord.Role, limit: { icon: boolean; color: boolean }) =>
  t.stp(t.JSON.slashCommands.roles.customRole.edit, {
   role: t.languageFunction.getRole(role),
   icon: t.util.constants.standard.getEmote(
    limit.icon ? t.util.emotes.enabled : t.util.emotes.disabled,
   ),
   color: t.util.constants.standard.getEmote(
    limit.color ? t.util.emotes.enabled : t.util.emotes.disabled,
   ),
  }),
 create: (role: Discord.Role, limit: { icon: boolean; color: boolean }) =>
  t.stp(t.JSON.slashCommands.roles.customRole.create, {
   role: t.languageFunction.getRole(role),
   icon: t.util.constants.standard.getEmote(
    limit.icon ? t.util.emotes.enabled : t.util.emotes.disabled,
   ),
   color: t.util.constants.standard.getEmote(
    limit.color ? t.util.emotes.enabled : t.util.emotes.disabled,
   ),
  }),
});
