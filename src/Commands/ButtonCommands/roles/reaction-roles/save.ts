import save from '../button-roles/save.js';

export default async (cmd: Discord.ButtonInteraction, args: string[]) =>
 save(cmd, args, 'reaction-roles');
