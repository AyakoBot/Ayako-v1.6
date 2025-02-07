import type { RateLimitData } from '@discordjs/rest';

export default async (info: RateLimitData) => {
 if (!process.argv.includes('--debug')) return;
 const str = `${info.method} ${info.url.replace('https://com/api/v10/', '')} ${info.timeToReset}ms`;

 // eslint-disable-next-line no-console
 console.log('[Ratelimited]', str);
};
