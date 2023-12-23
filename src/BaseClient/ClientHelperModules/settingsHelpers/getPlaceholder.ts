import * as CT from '../../../Typings/Typings.js';

/**
 * Returns a placeholder string based on the type of mentionable.
 * @param type - The type of mentionable.
 * @param language - The language object containing the placeholder strings.
 * @returns The placeholder string.
 */
export default (type: CT.EditorTypes, language: CT.Language) => {
 switch (type) {
  case CT.EditorTypes.Channel:
  case CT.EditorTypes.Channels:
   return language.t.Channels;
  case CT.EditorTypes.User:
  case CT.EditorTypes.Users:
   return language.t.Users;
  case CT.EditorTypes.Role:
  case CT.EditorTypes.Roles:
   return language.t.Roles;
  default:
   return language.t.Mentionables;
 }
};
