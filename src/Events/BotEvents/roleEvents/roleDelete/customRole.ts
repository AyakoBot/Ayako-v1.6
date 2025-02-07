
export default async (role: Discord.Role) => {
 role.client.util.DataBase.customroles
  .deleteMany({
   where: {
    roleid: role.id,
   },
  })
  .then();
};
