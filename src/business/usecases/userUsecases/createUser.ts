import { saveUser, findUserByEmail } from "../../../adapters/data-access/repositories/userRepository";
import { securePassword } from '../../../adapters/external-services/bcrypt';
import { formatDate } from "../../../adapters/external-services/moment";
import { userProfileInterface } from '../../Interfaces/userInterfaces';

export async function createUser({firstname,lastname,email,mobile,password,image,date}:userProfileInterface) {
  const existingUser = await findUserByEmail(email);
  if (!existingUser && password) {
    const securedPassword = await securePassword(password);
    const formattedDate = await formatDate(Date.now().toString());
    password = securedPassword;
    date = formattedDate;
    return await saveUser({firstname,lastname, email, mobile, password, image, date} as userProfileInterface);
  } else {
    throw new Error("Email already exists in the database");
  }
}

module.exports = { createUser };