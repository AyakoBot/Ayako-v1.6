import accept from './accept.js';

export default async (cmd: Discord.ButtonInteraction, args: string[]) => accept(cmd, args, false);
