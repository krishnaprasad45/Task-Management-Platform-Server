import userModel from "../models/userModal";
import {
  userProfileInterface,
} from "../../../business/Interfaces/userInterfaces";

export async function saveUser(data: userProfileInterface) {
  try {
    const user = new userModel({ ...data });
    const result = await user.save();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function findUserByEmail(email: string | undefined) {
  const userData = await userModel.findOne({ email });
  return userData;
}

export async function fetchAllUsers() {
  try {
    const users = await userModel.find().select("-password"); 
    // exclude password field for security
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
}

export async function updateOne(data: userProfileInterface) {
  const userData = await userModel.findOneAndUpdate(
    { email: data.oldEmail },
    {
      $set: {
        ...data,
      },
    },
    { new: true }
  );
  return userData;
}
export async function updatenewPassword(
  email: string,
  securedPassword: string | undefined
) {
  try {
    const userData = await userModel.findOneAndUpdate(
      { email: email },
      {
          password: securedPassword,
      },
      { new: true }
    );
    return userData;
  } catch (error) {
    console.log("error", error);
  }
}
export async function updateMentor(
  email: string,
  mentorName: string,
  courseId: string
) {
  const userData = await userModel.findOneAndUpdate(
    { email: email },
    {
      $set: {
        mentorIncharge: mentorName,
        courseId: courseId,
      },
    },
    { new: true }
  );
  return userData;
}

export async function deleteOne(_id: string) {
  const response = await userModel.findByIdAndDelete(_id);
  if (response) {
    return response;
  } else {
    return { message: "User not found" };
  }
}

module.exports = {
  saveUser,
  findUserByEmail,
  updateOne,
  deleteOne,
  updateMentor,
  updatenewPassword,
  fetchAllUsers
};