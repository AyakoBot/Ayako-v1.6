import {
 SlashCommandBuilder,
 SlashCommandRoleOption,
 SlashCommandStringOption,
 SlashCommandSubcommandBuilder,
 SlashCommandSubcommandGroupBuilder,
 SlashCommandUserOption,
} from '@discordjs/builders';
import {
 ApplicationIntegrationType,
 InteractionContextType,
 PermissionFlagsBits,
} from 'discord-api-types/v10';

const idSelector = new SlashCommandStringOption()
 .setAutocomplete(true)
 .setDescription('The ID of the Setting (Remove if you want to create a Setting)')
 .setRequired(false)
 .setName('id');

export default new SlashCommandBuilder()
 .setName('settings')
 .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
 .setDescription(`Manage ${process.env.mainName}'s Settings`)
 .setContexts([InteractionContextType.Guild])
 .setIntegrationTypes([ApplicationIntegrationType.GuildInstall])
 .addSubcommandGroup(
  new SlashCommandSubcommandGroupBuilder()
   .setName('appeals')
   .setDescription(`Everything about ${process.env.mainName}'s Appeals`)
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('basic')
     .setDescription('Basic Settings for Appeals'),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('questions')
     .setDescription('The Questions of the Appeal-Form')
     .addStringOption(idSelector),
   ),
 )
 .addSubcommandGroup(
  new SlashCommandSubcommandGroupBuilder()
   .setName('moderation')
   .setDescription(`Everything about ${process.env.mainName}'s Moderation`)
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('anti-raid')
     .setDescription('Detect and prevent Raids'),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('anti-spam')
     .setDescription('Stop Members from spamming'),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('anti-virus')
     .setDescription('Stop Members from posting harmful Links'),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('auto-punish')
     .setDescription('Help Moderators punish consistently')
     .addStringOption(idSelector),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('newlines')
     .setDescription('Limit the Amount of Newlines a Message can contain'),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('invites')
     .setDescription('Stop Members from sending Invites'),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('denylist-rules')
     .setDescription('The Rules of the Denylist')
     .addStringOption(idSelector),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('expiry')
     .setDescription('Define when logged Punishments expire'),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('vote-punish')
     .setDescription('In case of idle Staff, let Members vote to keep offenders in Chat')
     .addStringOption(idSelector),
   ),
 )
 .addSubcommandGroup(
  new SlashCommandSubcommandGroupBuilder()
   .setName('leveling')
   .setDescription(`Everything about ${process.env.mainName}'s Leveling`)
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('basic')
     .setDescription('Reward Members for their activity with Server Levels'),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('multi-channels')
     .setDescription('Increase or decrease XP rewarded by Channel')
     .addStringOption(idSelector),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('multi-roles')
     .setDescription('Increase or decrease XP rewarded by Role')
     .addStringOption(idSelector),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('level-roles')
     .setDescription('Reward Activity with Level-Roles')
     .addStringOption(idSelector),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('rule-channels')
     .setDescription('Apply conditional XP rewarded by Action in a Channel')
     .addStringOption(idSelector),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('reset-all')
     .setDescription('Reset all Levels of all Members'),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('reset-user')
     .setDescription('Reset Levels for a User')
     .addUserOption(
      new SlashCommandUserOption()
       .setName('user')
       .setDescription('The User to reset Levels on')
       .setRequired(true),
     ),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('reset-role')
     .setDescription('Reset Levels for all Members of a Role')
     .addRoleOption(
      new SlashCommandRoleOption()
       .setName('role')
       .setDescription('The Role of Users to reset Levels on')
       .setRequired(true),
     ),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('set-level-user')
     .setDescription('Set Levels for a User')
     .addUserOption(
      new SlashCommandUserOption()
       .setName('user')
       .setDescription('The User to set Levels on')
       .setRequired(true),
     ),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('set-level-role')
     .setDescription('Set Levels for all Members of a Role')
     .addRoleOption(
      new SlashCommandRoleOption()
       .setName('role')
       .setDescription('The Role of Users to set Levels on')
       .setRequired(true),
     ),
   ),
 )
 .addSubcommandGroup(
  new SlashCommandSubcommandGroupBuilder()
   .setName('nitro')
   .setDescription(`Everything about ${process.env.mainName}'s Nitro-Rewards`)
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('basic')
     .setDescription('Basic Nitro-Reward Settings'),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('booster-roles')
     .setDescription(`Reward Members for continuously boosting your Server`)
     .addStringOption(idSelector),
   ),
 )
 .addSubcommandGroup(
  new SlashCommandSubcommandGroupBuilder()
   .setName('vote')
   .setDescription('Everything about Voting for your Bot/Server')
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('basic')
     .setDescription(`Basic Settings for Voting on Top.gg`)
     .addStringOption(idSelector),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('vote-rewards')
     .setDescription(`Reward Members for Voting for your Bot/Server`)
     .addStringOption(idSelector),
   ),
 )
 .addSubcommandGroup(
  new SlashCommandSubcommandGroupBuilder()
   .setName('roles')
   .setDescription(`Everything about ${process.env.mainName}'s Role Management`)
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('ping-reporter')
     .setDescription('Ping Members of a Role when a Role is pinged')
     .addStringOption(idSelector),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('linked-roles-deco')
     .setDescription('Useage of Linked-Roles purely for aesthetic purposes')
     .addStringOption(idSelector),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('shop')
     .setDescription('Create a Server-Shop Members can buy Roles in using their Server-Currency'),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('shop-items')
     .setDescription('The Roles you can buy in the Server-Shop')
     .addStringOption(idSelector),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('role-rewards')
     .setDescription('Give Rewards to Members for achieving a Role')
     .addStringOption(idSelector),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('auto-roles')
     .setDescription('Assign Roles to Users and Bots when joining'),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('self-roles')
     .setDescription('Let Members pick their own Roles')
     .addStringOption(idSelector),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('separators')
     .setDescription('Separate Roles into Categories using Category Roles / Role Separators')
     .addStringOption(idSelector),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('separators-apply')
     .setDescription('Apply Separators to Members'),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('sticky')
     .setDescription('Make Roles and Channel Permissions stick to Members across re-joins'),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('reaction-role-settings')
     .setDescription('Let Members pick their own Roles through Reactions')
     .addStringOption(idSelector),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('reaction-roles')
     .setDescription('Here you define the Reactions and their associated Roles')
     .addStringOption(idSelector),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('button-role-settings')
     .setDescription('Let Members pick their own Roles through Buttons')
     .addStringOption(idSelector),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('button-roles')
     .setDescription('Here you define the Buttons and their associated Roles')
     .addStringOption(idSelector),
   ),
 )
 .addSubcommandGroup(
  new SlashCommandSubcommandGroupBuilder()
   .setName('automation')
   .setDescription(`Everything about ${process.env.mainName}'s Automation`)
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('censor')
     .setDescription('Repost Messages that contain Denylisted Words'),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('cooldowns')
     .setDescription(`Assign custom defined Cooldowns to Commands of ${process.env.mainName}`)
     .addStringOption(idSelector),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('disboard-reminders')
     .setDescription('Have a Bump reminder remind your Members to bump your Server'),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('suggestions')
     .setDescription('Let your Members help you decide through a suggestions Channel'),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('verification')
     .setDescription('Make joining Users verify with a Captcha'),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('welcome')
     .setDescription('Greet joining Users with a welcome Message'),
   )
   .addSubcommand(
    new SlashCommandSubcommandBuilder()
     .setName('voice-hubs')
     .setDescription('Have Ayako create Voice Channels for your Members')
     .addStringOption(idSelector),
   ),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('basic')
   .setDescription(`Basic Settings to modify ${process.env.mainName}'s behaviour`),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('custom-client')
   .setDescription(`Change ${process.env.mainName}'s appearance using your own Bot Client`),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('logs')
   .setDescription('Log all kinds of Discord Events into a Channel'),
 )
 .addSubcommand(
  new SlashCommandSubcommandBuilder()
   .setName('afk')
   .setDescription('Make adjustments to the AFK-Command and what can be set as AFK-Status'),
 );
