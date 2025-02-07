import { glob } from 'glob';
import redis, { db, subscriber } from '../Redis.js';

subscriber.on('message', async (channel, key) => {
 if (channel !== `__keyevent@${db}__:expired`) return;
 if (key.includes('scheduled-data:')) return;

 const keyArgs = key.split(/:/g).slice(2);
 const path = keyArgs.filter((k) => Number.isNaN(+k)).join('/');

 const dataKey = key.replace('scheduled:', 'scheduled-data:');
 const value = await redis.get(dataKey);
 redis.expire(dataKey, 10);

 const files = await glob(
  `${process.cwd()}${process.cwd().includes('dist') ? '' : '/dist'}/Events/RedisEvents/**/*`,
 );

 const file = files.find((f) => f.endsWith(`${path}.js`));
 if (!file) return;

 // eslint-disable-next-line no-console
 console.log(path);

 (await import(file)).default(value ? JSON.parse(value) : undefined);
});
