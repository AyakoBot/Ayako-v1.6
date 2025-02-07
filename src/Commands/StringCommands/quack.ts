
export const requiresSlashCommand = true;
export default (msg: Discord.Message<true>) => msg.client.util.interactionHelpers(msg);
