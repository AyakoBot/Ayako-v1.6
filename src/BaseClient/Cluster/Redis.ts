import type { APIInteraction } from 'discord-api-types/v10.js';
import { BaseMessage } from 'discord-hybrid-sharding';
import Redis from 'ioredis';
import * as Typings from '../../Typings/Typings.js';
import Manager from './Manager.js';

// related to /BaseClient/UtilModules/getEvents.ts

export interface Message<
 T extends Typings.MessageType.Vote | Typings.MessageType.Appeal | Typings.MessageType.Interaction,
> extends BaseMessage {
 data: T extends Typings.MessageType.Vote
  ? Typings.TopGGVote
  : T extends Typings.MessageType.Appeal
    ? Typings.Appeal
    : T extends Typings.MessageType.Interaction
      ? APIInteraction
      : never;
}

const client = new Redis({ host: 'redis' });

client.subscribe(
 Typings.MessageType.Interaction,
 Typings.MessageType.Vote,
 Typings.MessageType.Appeal,
 (err, count) => {
  if (err) throw err;
  // eslint-disable-next-line no-console
  console.log(`| => Subscription service listening to ${count} channels`);
 },
);

client.on('message', (channel, message) => {
 const parse = JSON.parse(message) as Message<Typings.MessageType>;
 const data = (typeof parse === 'string' ? JSON.parse(parse) : parse) as typeof parse;

 Manager.broadcast(new BaseMessage({ data, type: channel }));
});

export default client;
