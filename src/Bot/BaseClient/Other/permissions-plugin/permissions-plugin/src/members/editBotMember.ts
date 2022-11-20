
import { requireBotGuildPermissions } from "../permissions";
import type { Bot } from "discordeno";
import type { BotWithProxyCache, ProxyCacheTypes } from "../../..";
export function editBotMember<B extends Bot>(
    bot: BotWithProxyCache<ProxyCacheTypes, B>
  ) {
  const editBotMember = bot.helpers.editBotMember;

  bot.helpers.editBotMember = async function (guildId, options) {
    requireBotGuildPermissions(bot, bot.transformers.snowflake(guildId), ["CHANGE_NICKNAME"]);

    return await editBotMember(guildId, options);
  };
}
