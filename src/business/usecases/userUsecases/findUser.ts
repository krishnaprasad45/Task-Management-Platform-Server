import { findUserByEmail } from "../../../adapters/data-access/repositories/userRepository";;

export async function findUser(email:string) {
  const userData = await findUserByEmail(email);
  return userData;
}

module.exports = { findUser };