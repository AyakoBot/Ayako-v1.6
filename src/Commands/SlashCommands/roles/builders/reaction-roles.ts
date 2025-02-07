import buttonRoles from './button-roles.js';

export default (
 cmd: Discord.ChatInputCommandInteraction | Discord.ButtonInteraction,
 _: [],
 reply?: Discord.InteractionResponse<true>,
) => buttonRoles(cmd, [], reply, 'reaction-roles');
