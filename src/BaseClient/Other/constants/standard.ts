import { ApplicationCommandOptionType, type APIApplicationCommand } from 'discord-api-types/v10';
import type { REmoji, RUser } from 'src/Typings/Redis';

export default {
 prefix: 'h!',
 invite:
  'https://discord.com/api/oauth2/authorize?client_id=650691698409734151&permissions=1642787630327&scope=bot%20applications.commands',
 image: 'https://ayakobot.com/DefaultEmbedImage',
 support: 'https://discord.gg/euTdctganf',
 permissionsViewer: (permission: bigint) => `https://discordapi.com/permissions.html#${permission}`,
 patreon: 'https://www.patreon.com/Lars_und_so',
 error: 'https://cdn.ayakobot.com/Ayako_Assets/Warning.png',
 appURL: (user: RUser) => `discord://-/users/${user.id}`,
 userURL: (user: RUser) => `https://discord.com/users/${user.id}`,
 getEmote: (
  emoji:
   | REmoji
   | { name: string | undefined; id?: string | null | undefined; animated?: boolean | null }
   | null
   | undefined,
 ) =>
  emoji
   ? (emoji.id && `<${emoji.animated ? 'a:' : ':'}${emoji.name}:${emoji.id}>`) ||
     `${/\w/g.test(emoji.name ?? '') ? `:${emoji.name}:` : emoji.name}`
   : undefined,
 getTime: (time: number) =>
  `<t:${String(time).slice(0, -3)}:f> (<t:${String(time).slice(0, -3)}:R>)`,
 msgurl: (g: string | undefined | null, c: string, m: string) =>
  `https://discord.com/channels/${g ?? '@me'}/${c}/${m}`,
 ytURL: 'https://www.youtube.com/@AyakoBot',
 user: (u: RUser | { discriminator: string; username: string }) =>
  `${u.discriminator === '0' ? u.username : `${u.username}#${u.discriminator}`}`,
 getEmoteIdentifier: (
  e: { animated: boolean; name: string; id: string | null | undefined } | REmoji,
 ) => `${e.animated ? 'a:' : ''}${e.name}${e.id ? `:${e.id}` : ''}`,
 getBotAddURL: (id: string) => `https://discord.com/oauth2/authorize?client_id=${id}`,
 getCommand: (cmd: APIApplicationCommand): string[] => {
  if (
   !cmd.options?.filter((o) =>
    [
     ApplicationCommandOptionType.SubcommandGroup,
     ApplicationCommandOptionType.Subcommand,
    ].includes(o.type),
   ).length
  ) {
   return [`</${cmd.name}:${cmd.id}>`];
  }

  return cmd.options
   .filter((o) =>
    [
     ApplicationCommandOptionType.SubcommandGroup,
     ApplicationCommandOptionType.Subcommand,
    ].includes(o.type),
   )
   .map((o) =>
    o.type === ApplicationCommandOptionType.SubcommandGroup
     ? o.options
        ?.filter((o2) => o2.type === ApplicationCommandOptionType.Subcommand)
        .map((o2) => `${cmd.name} ${o.name} ${o2.name}`)
     : `${cmd.name} ${o.name}`,
   )
   .filter((s) => !!s)
   .flat()
   .map((c) => `</${c}:${cmd.id}>`);
 },
};
