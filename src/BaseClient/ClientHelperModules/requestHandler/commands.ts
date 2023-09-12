import * as Discord from 'discord.js';
// eslint-disable-next-line import/no-cycle
import error from '../error.js';
import { API } from '../../Client.js';
// eslint-disable-next-line import/no-cycle
import cache from '../cache.js';
import * as Classes from '../../Other/classes.js';

export default {
 getGlobalCommands: (
  guild: Discord.Guild,
  appId: string,
  query?: Discord.RESTGetAPIApplicationCommandsQuery,
 ) =>
  (cache.apis.get(guild.id) ?? API).applicationCommands
   .getGlobalCommands(appId, query)
   .then((cmds) => {
    const parsed = cmds.map((cmd) => new Classes.ApplicationCommand(guild.client, cmd));
    parsed.forEach((p) => guild.client.application.commands.cache.set(p.id, p));
    return parsed;
   })
   .catch((e) => {
    error(guild, new Error((e as Discord.DiscordAPIError).message));
    return e as Discord.DiscordAPIError;
   }),
 createGlobalCommand: (
  guild: Discord.Guild,
  appId: string,
  body: Discord.RESTPostAPIApplicationCommandsJSONBody,
 ) =>
  (cache.apis.get(guild.id) ?? API).applicationCommands
   .createGlobalCommand(appId, body)
   .then((cmd) => {
    const parsed = new Classes.ApplicationCommand(guild.client, cmd);
    guild.client.application.commands.cache.set(cmd.id, parsed);
    return parsed;
   })
   .catch((e) => {
    error(guild, new Error((e as Discord.DiscordAPIError).message));
    return e as Discord.DiscordAPIError;
   }),
 getGlobalCommand: (guild: Discord.Guild, appId: string, commandId: string) =>
  (cache.apis.get(guild.id) ?? API).applicationCommands
   .getGlobalCommand(appId, commandId)
   .then((cmd) => {
    const parsed = new Classes.ApplicationCommand(guild.client, cmd);
    guild.client.application.commands.cache.set(cmd.id, parsed);
    return parsed;
   })
   .catch((e) => {
    error(guild, new Error((e as Discord.DiscordAPIError).message));
    return e as Discord.DiscordAPIError;
   }),
 editGlobalCommand: (
  guild: Discord.Guild,
  appId: string,
  commandId: string,
  body: Discord.RESTPatchAPIApplicationCommandJSONBody,
 ) =>
  (cache.apis.get(guild.id) ?? API).applicationCommands
   .editGlobalCommand(appId, commandId, body)
   .then((cmd) => {
    const parsed = new Classes.ApplicationCommand(guild.client, cmd);
    guild.client.application.commands.cache.set(cmd.id, parsed);
    return parsed;
   })
   .catch((e) => {
    error(guild, new Error((e as Discord.DiscordAPIError).message));
    return e as Discord.DiscordAPIError;
   }),
 deleteGlobalCommand: (guild: Discord.Guild, appId: string, commandId: string) =>
  (cache.apis.get(guild.id) ?? API).applicationCommands
   .deleteGlobalCommand(appId, commandId)
   .then(() => {
    guild.client.application.commands.cache.delete(commandId);
   })
   .catch((e) => {
    error(guild, new Error((e as Discord.DiscordAPIError).message));
    return e as Discord.DiscordAPIError;
   }),
 bulkOverwriteGlobalCommands: (
  guild: Discord.Guild,
  appId: string,
  body: Discord.RESTPutAPIApplicationCommandsJSONBody,
 ) =>
  (cache.apis.get(guild.id) ?? API).applicationCommands
   .bulkOverwriteGlobalCommands(appId, body)
   .then((cmds) => {
    const parsed = cmds.map((cmd) => new Classes.ApplicationCommand(guild.client, cmd));
    parsed.forEach((p) => guild.client.application.commands.cache.set(p.id, p));
    return parsed;
   })
   .catch((e) => {
    error(guild, new Error((e as Discord.DiscordAPIError).message));
    return e as Discord.DiscordAPIError;
   }),
 getGuildCommands: (
  guild: Discord.Guild,
  appId: string,
  query?: Discord.RESTGetAPIApplicationGuildCommandsQuery,
 ) =>
  (cache.apis.get(guild.id) ?? API).applicationCommands
   .getGuildCommands(appId, guild.id, query)
   .then((cmds) => {
    const parsed = cmds.map(
     (cmd) => new Classes.ApplicationCommand(guild.client, cmd, guild, guild.id),
    );
    parsed.forEach((p) => guild.commands.cache.set(p.id, p));
    return parsed;
   })
   .catch((e) => {
    error(guild, new Error((e as Discord.DiscordAPIError).message));
    return e as Discord.DiscordAPIError;
   }),
 createGuildCommand: (
  guild: Discord.Guild,
  appId: string,
  body: Discord.RESTPostAPIApplicationGuildCommandsJSONBody,
 ) =>
  (cache.apis.get(guild.id) ?? API).applicationCommands
   .createGuildCommand(appId, guild.id, body)
   .then((cmd) => {
    const parsed = new Classes.ApplicationCommand(guild.client, cmd, guild, guild.id);
    guild.commands.cache.set(cmd.id, parsed);
    return parsed;
   })
   .catch((e) => {
    error(guild, new Error((e as Discord.DiscordAPIError).message));
    return e as Discord.DiscordAPIError;
   }),
 getGuildCommand: (guild: Discord.Guild, appId: string, commandId: string) =>
  (cache.apis.get(guild.id) ?? API).applicationCommands
   .getGuildCommand(appId, guild.id, commandId)
   .then((cmd) => {
    const parsed = new Classes.ApplicationCommand(guild.client, cmd, guild, guild.id);
    guild.commands.cache.set(cmd.id, parsed);
    return parsed;
   })
   .catch((e) => {
    error(guild, new Error((e as Discord.DiscordAPIError).message));
    return e as Discord.DiscordAPIError;
   }),
 editGuildCommand: (
  guild: Discord.Guild,
  appId: string,
  commandId: string,
  body: Discord.RESTPatchAPIApplicationGuildCommandJSONBody,
 ) =>
  (cache.apis.get(guild.id) ?? API).applicationCommands
   .editGuildCommand(appId, guild.id, commandId, body)
   .then((cmd) => {
    const parsed = new Classes.ApplicationCommand(guild.client, cmd, guild, guild.id);
    guild.commands.cache.set(cmd.id, parsed);
    return parsed;
   })
   .catch((e) => {
    error(guild, new Error((e as Discord.DiscordAPIError).message));
    return e as Discord.DiscordAPIError;
   }),
 deleteGuildCommand: (guild: Discord.Guild, appId: string, commandId: string) =>
  (cache.apis.get(guild.id) ?? API).applicationCommands
   .deleteGuildCommand(appId, guild.id, commandId)
   .then(() => {
    guild.commands.cache.delete(commandId);
   })
   .catch((e) => {
    error(guild, new Error((e as Discord.DiscordAPIError).message));
    return e as Discord.DiscordAPIError;
   }),
 bulkOverwriteGuildCommands: (
  guild: Discord.Guild,
  appId: string,
  body: Discord.RESTPutAPIApplicationGuildCommandsJSONBody,
 ) =>
  (cache.apis.get(guild.id) ?? API).applicationCommands
   .bulkOverwriteGuildCommands(appId, guild.id, body)
   .then((cmds) => {
    const parsed = cmds.map(
     (cmd) => new Classes.ApplicationCommand(guild.client, cmd, guild, guild.id),
    );
    parsed.forEach((p) => guild.commands.cache.set(p.id, p));
    return parsed;
   })
   .catch((e) => {
    error(guild, new Error((e as Discord.DiscordAPIError).message));
    return e as Discord.DiscordAPIError;
   }),
 getGuildCommandPermissions: (guild: Discord.Guild, appId: string, commandId: string) =>
  (cache.apis.get(guild.id) ?? API).applicationCommands
   .getGuildCommandPermissions(appId, guild.id, commandId)
   .catch((e) => {
    error(guild, new Error((e as Discord.DiscordAPIError).message));
    return e as Discord.DiscordAPIError;
   }),
 getGuildCommandsPermissions: (guild: Discord.Guild, appId: string) =>
  (cache.apis.get(guild.id) ?? API).applicationCommands
   .getGuildCommandsPermissions(appId, guild.id)
   .catch((e) => {
    error(guild, new Error((e as Discord.DiscordAPIError).message));
    return e as Discord.DiscordAPIError;
   }),
 editGuildCommandPermissions: (
  guild: Discord.Guild,
  userToken: string,
  appId: string,
  commandId: string,
  body: Discord.RESTPutAPIApplicationCommandPermissionsJSONBody,
 ) =>
  (cache.apis.get(guild.id) ?? API).applicationCommands
   .editGuildCommandPermissions(userToken, appId, guild.id, commandId, body)
   .catch((e) => {
    error(guild, new Error((e as Discord.DiscordAPIError).message));
    return e as Discord.DiscordAPIError;
   }),
};
