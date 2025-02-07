import * as CT from '../../../../Typings/Typings.js';
import shoptype from './shoptype.js';

export default async (cmd: Discord.ButtonInteraction, args: string[]) =>
 shoptype(cmd, args, CT.EditorTypes.Questions);
