import all from './all.js';

export default async (cmd: Discord.ChatInputCommandInteraction) => all(cmd, [], 'starts-with');
