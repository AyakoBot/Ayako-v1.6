import sticker from '../../SlashCommands/info/sticker.js';

export default async (cmd: Discord.ButtonInteraction, args: string[]) =>
 sticker(cmd, [], Number(args.shift()));
