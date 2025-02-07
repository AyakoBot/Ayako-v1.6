import * as CT from '../../../../Typings/Typings.js';

import getBotMemberFromGuild from '../../getBotMemberFromGuild.js';
import type * as ModTypes from '../../mod.js';
import { request } from '../../requestHandler.js';

import cache from '../../cache.js';
import { canEditMember } from '../../requestHandler/guilds/editMember.js';
import actionAlreadyApplied from '../actionAlreadyApplied.js';
import err from '../err.js';
import getMembers from '../getMembers.js';
import permissionError from '../permissionError.js';

export default async (
 options: CT.ModOptions<CT.ModTypes.VcDeafenRemove>,
 language: CT.Language,
 message: ModTypes.ResponseMessage,
 cmd: ModTypes.CmdType,
) => {
 const type = CT.ModTypes.VcDeafenRemove;

 cache.vcDeafens.delete(options.guild.id, options.target.id);

 const memberRes = await getMembers(cmd, options, language, message, type);
 if (memberRes && !memberRes.canExecute) return false;

 if (!!options.skipChecks && (!memberRes?.targetMember || !memberRes.targetMember.voice.deaf)) {
  actionAlreadyApplied(cmd, message, options.target, language, type);
  return false;
 }

 const me = await getBotMemberFromGuild(options.guild);
 if (
  memberRes?.targetMember &&
  memberRes.targetMember.voice.channelId &&
  !canEditMember(me, memberRes.targetMember, { deaf: false }) &&
  !options.skipChecks
 ) {
  permissionError(cmd, message, language, type);
  return false;
 }

 if (!memberRes?.targetMember.voice.channelId) {
  await options.guild.client.util.DataBase.voiceStateUpdateQueue.upsert({
   where: { userId_guildId: { guildId: options.guild.id, userId: options.target.id } },
   update: { deaf: false },
   create: {
    guildId: options.guild.id,
    userId: options.target.id,
    deaf: false,
    mute: false,
   },
  });

  return true;
 }

 const res = memberRes?.targetMember
  ? await request.guilds.editMember(memberRes.targetMember, { deaf: false }, options.reason)
  : false;
 if (res && (res as Discord.DiscordAPIError).message) {
  err(cmd, res as Discord.DiscordAPIError, language, message, options.guild);
  return false;
 }

 return true;
};
