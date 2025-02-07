import fromFile from '../../emojis/create/from-file.js';

export default (cmd: APIChatInputApplicationCommandGuildInteraction, args: string[]) =>
 fromFile(cmd, args, 'sticker');
