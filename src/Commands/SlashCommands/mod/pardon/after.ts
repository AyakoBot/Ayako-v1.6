import before from './before.js';

export default async (cmd: Discord.ChatInputCommandInteraction) => before(cmd, 'after');
