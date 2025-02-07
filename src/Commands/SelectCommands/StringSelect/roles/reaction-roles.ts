import buttonRoles from './button-roles.js';

export default (cmd: Discord.StringSelectMenuInteraction, args: string[]) =>
 buttonRoles(cmd, args, 'reaction-roles');
