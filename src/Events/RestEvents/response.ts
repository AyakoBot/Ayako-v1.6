import type { APIRequest, ResponseLike } from '@discordjs/rest';
import client from '../../BaseClient/Bot/Client.js';
import { getDebugInfo } from '../../BaseClient/UtilModules/console.js';

export default async (request: APIRequest, response: ResponseLike) => {
 client.util.logFiles.ratelimits.write(
  `${getDebugInfo()} [Request] ${request.method} ${request.path} - [Response] ${response.status} | ${response.statusText}\n`,
 );
};
