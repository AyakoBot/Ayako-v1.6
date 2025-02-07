
export default async (cmd: APIMessageComponentButtonInteraction) => {
 await cmd.deferUpdate();
 cmd.deleteReply();
};
