/* eslint-disable no-useless-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */

export default async (msg: Discord.Message) => {
 if (msg.author.id !== process.env.ownerId) return;
 if (!msg.content.startsWith('exe')) return;
};
