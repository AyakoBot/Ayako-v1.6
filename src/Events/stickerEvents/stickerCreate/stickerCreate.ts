import type * as Discord from 'discord.js';
import * as ch from '../../../BaseClient/ClientHelper.js';
import log from './log.js';

export default async (sticker: Discord.Sticker) => {
 if (!sticker.guild) return;

 await ch.firstGuildInteraction(sticker.guild);

 log(sticker);
};
