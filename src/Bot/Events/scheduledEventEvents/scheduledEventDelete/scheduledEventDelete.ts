import type * as DDeno from 'discordeno';
import type CT from '../../../Typings/CustomTypings';
import client from '../../../BaseClient/DDenoClient.js';

export default async (event: DDeno.ScheduledEvent) => {
  const cache = client.ch.cache.scheduledEvents.cache.get(event.guildId)?.get(event.id);
  if (cache) event = cache;

  client.ch.cache.scheduledEvents.delete(event.id);

  const files: {
    default: (p: CT.ScheduledEvent) => void;
  }[] = await Promise.all(['./log.js'].map((p) => import(p)));

  files.forEach((f) => f.default(event));
};
