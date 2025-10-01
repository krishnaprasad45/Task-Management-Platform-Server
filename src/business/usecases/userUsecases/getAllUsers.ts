import { fetchAllUsers } from "../../../adapters/data-access/repositories/userRepository";

export async function getAllUsers() {
  const users = await fetchAllUsers();
  if (!users || users.length === 0) {
    console.log("nooooo.....")
    // throw new Error("No users found");
  }
  return users;
}


module.exports = { getAllUsers };