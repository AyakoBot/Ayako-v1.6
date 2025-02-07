import type { RChannel, RMessage, RThread } from 'src/Typings/Redis.js';
import channelPinsCreate from './channelPinsCreate/channelPinsCreate.js';
import channelPinsDelete from './channelPinsDelete/channelPinsDelete.js';

export default async (
 channel: RChannel | RThread,
 createdPins: RMessage[],
 deletedPins: RMessage[],
) => {
 createdPins.forEach((p) => channelPinsCreate(p, channel));
 deletedPins.forEach((p) => channelPinsDelete(p, channel));
};
