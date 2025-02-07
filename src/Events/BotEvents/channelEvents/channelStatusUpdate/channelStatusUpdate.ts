import type { RChannel } from 'src/Typings/Redis.js';
import log from './log.js';

export default async (channel: RChannel, oldStatus: string, newStatus: string) => {
 log(channel, oldStatus, newStatus);
};
