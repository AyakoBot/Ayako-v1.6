import lvl from '../role/lvl.js';

export default async (cmd: Discord.ButtonInteraction, args: string[]) =>
 lvl(cmd, args, 'lvl', 'user');
