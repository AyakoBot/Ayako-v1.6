import accept from './accept.js';

export default async (cmd: Discord.ButtonInteraction) => accept(cmd, [], false);
