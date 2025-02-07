import resetReactions from '../button-roles/resetReactions.js';

export default async (cmd: Discord.ButtonInteraction, args: string[]) =>
 resetReactions(cmd, args, 'reaction-roles');
