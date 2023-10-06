import cache from './cache.js';
import SlashCommands from '../../Events/readyEvents/startupTasks/SlashCommands.js';

type CommandName = (typeof SlashCommands)['names'][number];

/**
 * Retrieves a custom command by name for a specific guild or globally.
 * @param guildId - The ID of the guild to retrieve the command from.
 * If undefined or null, retrieves the global command.
 * @param name - The name of the command to retrieve.
 * @returns The custom command with the specified name, or undefined if it does not exist.
 */
export default async (guildId: string | undefined | null, name: CommandName) => {
 const { default: client } = await import('../Client.js');

 const clientCommand = client.application?.commands.cache.find((c) => c.name === name);
 return guildId
  ? cache.commands.get(guildId)?.find((c) => c.name === name) ?? clientCommand
  : clientCommand;
};
