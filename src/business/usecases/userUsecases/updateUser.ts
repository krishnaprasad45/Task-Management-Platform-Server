import {
  findUserByEmail,
  updateOne,
  updatenewPassword,
} from "../../../adapters/data-access/repositories/userRepository";
import { userProfileInterface } from "../../Interfaces/userInterfaces";
import { securePassword } from "../../../adapters/external-services/bcrypt";

export const updateUser = async ({
  firstname,
  lastname,
  email,
  mobile,
  image,
  oldEmail,
}: userProfileInterface) => {
  try {
    if (oldEmail) {
      const existingUser = await findUserByEmail(oldEmail);
      if (existingUser) {
        const userData = await updateOne({
          firstname,
          lastname,
          email,
          mobile,
          image,
          oldEmail,
        });
        return userData;
      }
    } else {
      throw new Error("Email is undefined");
    }
  } catch (error) {
    throw new Error("User not found");
  }
};
export const updatePassword = async (
  newPassword: string | undefined,
  email: string
) => {
  try {
    const securedPassword: string | undefined =
      await securePassword(newPassword);
    if (securedPassword) {
      const userData = await updatenewPassword(email, securedPassword);
      return userData;
    }
  } catch (error) {
    console.log(error);
  }
};

