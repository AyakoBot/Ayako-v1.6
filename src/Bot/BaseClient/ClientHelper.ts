/* eslint-disable max-len */
/* eslint-disable no-multi-spaces */
/* eslint-disable prettier/prettier */

export const send                       = (await import(`./ClientHelperModules/send.js`)).default;
export const replyMsg                   = (await import(`./ClientHelperModules/replyMsg.js`)).default;
export const replyCmd                   = (await import(`./ClientHelperModules/replyCmd.js`)).default;
export const query                      = (await import(`./ClientHelperModules/query.js`)).default;
export const stp                        = (await import(`./ClientHelperModules/stp.js`)).default;
export const regexes                    = (await import(`./ClientHelperModules/regexes.js`)).default;
export const fileURL2Buffer             = (await import(`./ClientHelperModules/fileURL2Buffer.js`)).default;
export const memberBoostCalc            = (await import(`./ClientHelperModules/memberBoostCalc.js`)).default;
export const userFlagsCalc              = (await import(`./ClientHelperModules/userFlagsCalc.js`)).default;
export const channelRuleCalc            = (await import(`./ClientHelperModules/channelRuleCalc.js`)).default;
export const permCalc                   = (await import(`./ClientHelperModules/permCalc.js`)).default;
export const getUnix                    = (await import(`./ClientHelperModules/getUnix.js`)).default;
export const getDifference              = (await import(`./ClientHelperModules/getDifference.js`)).default;
export const languageSelector           = (await import(`./ClientHelperModules/languageSelector.js`)).default;
export const bitUniques                 = (await import(`./ClientHelperModules/bitUniques.js`)).default;
export const containsNonLatinCodepoints = (await import(`./ClientHelperModules/containsNonLatinCodepoints.js`)).default;
export const txtFileWriter              = (await import(`./ClientHelperModules/txtFileWriter.js`)).default;
export const util                       =  await import(`./ClientHelperModules/util.js`);
export const errorMsg                   = (await import(`./ClientHelperModules/errorMsg.js`)).default;
export const errorCmd                   = (await import(`./ClientHelperModules/errorCmd.js`)).default;
// export const permError                  = (await import(`./ClientHelperModules/permError.js`)).default;
// export const notYours                   = (await import(`./ClientHelperModules/notYours.js`)).default;
export const buttonRower                = (await import(`./ClientHelperModules/buttonRower.js`)).default;
export const collectorEnd               = (await import(`./ClientHelperModules/collectorEnd.js`)).default;
export const colorSelector              = (await import(`./ClientHelperModules/colorSelector.js`)).default;
export const loadingEmbed               = (await import(`./ClientHelperModules/loadingEmbed.js`)).default;
export const arrayEquals                = (await import(`./ClientHelperModules/arrayEquals.js`)).default;
export const txtFileLinkToString        = (await import(`./ClientHelperModules/txtFileLinkToString.js`)).default;
export const getAllInvites              = (await import(`./ClientHelperModules/getAllInvites.js`)).default;
export const getDiscordEmbed            = (await import(`./ClientHelperModules/getDiscordEmbed.js`)).default;
export const dynamicToEmbed             = (await import(`./ClientHelperModules/dynamicToEmbed.js`)).default;
export const embedBuilder               = (await import(`./ClientHelperModules/embedBuilder.js`)).default;
export const disableComponents          = (await import(`./ClientHelperModules/disableComponents.js`)).default;
export const roleManager                = (await import(`./ClientHelperModules/roleManager.js`)).default;
export const getEmote                   = (await import(`./ClientHelperModules/getEmote.js`)).default;
export const isManageable               = (await import(`./ClientHelperModules/isManageable.js`)).default;
// export const msgCTConvert               = (await import(`./ClientHelperModules/msgCTConvert.js`)).default;
// export const getMember                  = (await import(`./ClientHelperModules/getMember.js`)).default;
export const getAudit                   = (await import(`./ClientHelperModules/getAudit.js`)).default;
export const database                   = (await import(`./DataBase.js`)).default;
export const getEmbed                   = (await import(`./ClientHelperModules/getEmbed.js`)).default;
