import type * as Discord from 'discord.js';
import client from '../../../BaseClient/Client.js';

export default async (webhook: DDeno.Webhook) => {
  if (!webhook.guild.id) return;
  if (!webhook.channelId) return;

  const channels = await client.ch.getLogChannels('webhookevents', { guildId: webhook.guild.id });
  if (!channels) return;

  const channel = await client.ch.cache.channels.get(webhook.channelId, webhook.guild.id);
  if (!channel) return;

  const guild = await client.ch.cache.guilds.get(webhook.guild.id);
  if (!guild) return;

  const language = await client.ch.languageSelector(webhook.guild.id);
  const lan = language.events.logs.webhook;
  const con = client.customConstants.events.logs.webhook;
  const audit = await client.ch.getAudit(guild, 50, webhook.id);
  const auditUser =
    webhook.user ??
    (audit && audit.userId ? await client.users.fetch(audit.userId) : undefined);
  const files: DDeno.FileContent[] = [];

  const embed: Discord.APIEmbed = {
    author: {
      name: lan.nameCreate,
      icon_url: con.create,
    },
    color: client.customConstants.colors.success,
    description: auditUser
      ? lan.descCreateAudit(
          webhook,
          lan.webhookTypes[webhook.type],
          auditUser,
          channel,
          language.channelTypes[channel.type],
        )
      : lan.descCreate(
          webhook,
          lan.webhookTypes[webhook.type],
          channel,
          language.channelTypes[channel.type],
        ),
  };

  if (webhook.avatar) {
    const url = client.customConstants.standard.userAvatarURL(webhook, 'png');
    const blob = (await client.ch.fileURL2Buffer([url]))?.[0]?.blob;

    if (blob) {
      files.push({
        name: String(webhook.avatar),
        blob,
      });
    }
  }

  if (webhook.sourceGuild) {
    embed.fields?.push({
      name: lan.sourceGuild,
      value: language.languageFunction.getGuild(webhook.sourceGuild as DDeno.Guild),
    });
  }

  if (webhook.sourceChannel) {
    embed.fields?.push({
      name: lan.sourceChannel,
      value: language.languageFunction.getChannel(webhook.sourceChannel as DDeno.Channel),
    });
  }

  client.ch.send(
    { id: channels, guildId: webhook.guild.id },
    { embeds: [embed], files },
    language,
    undefined,
    10000,
  );
};
