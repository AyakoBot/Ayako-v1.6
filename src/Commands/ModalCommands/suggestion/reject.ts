import accept from './accept.js';

export default async (cmd: Discord.ModalSubmitInteraction, args: string[]) =>
 accept(cmd, args, false);
