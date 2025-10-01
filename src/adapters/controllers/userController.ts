import {
  userProfileInterface,
  userSignupInterface,
} from "../../business//Interfaces/userInterfaces";
import { createUser } from "../../business/usecases/userUsecases/createUser";
import { loginUser } from "../../business/usecases/userUsecases/loginUser";
import { findUser } from "../../business/usecases/userUsecases/findUser";
import { Request, Response } from "express";
import { updateUser } from "../../business/usecases/userUsecases/updateUser";
import { getAllUsers } from "../../business/usecases/userUsecases/getAllUsers";


export const userSignup = async (req: Request, res: Response) => {
  try {
    const {
      firstname,
      lastname,
      email,
      mobile,
      password,
      image,
    } = req.body;

   
    const userData = await createUser({
      firstname,
      lastname,
      email,
      mobile,
      password,
      image,
    } as userSignupInterface);
    res.status(201).json(userData);
  } catch (error) {
    console.error(error);
    res.json({ message: error as Error });
  }
};

export const userLogin = async (req: Request, res: Response) => {
  try {
    const email = req.body.email.toString();
    const password = req.body.password?.toString();
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }
    const response = await loginUser(email, password);
    const { userData, token } = response;
    res.json({ userData, token });
  } catch (error) {
    res.json(error as Error);
  }
};
  
export const profile = async (req: Request, res: Response) => {
  try {
    const email = req.query.email?.toString();
    if (!email) {
      return res.status(400).json({ message: "Something Error" });
    }
    const userData = await findUser(email);
    res.json(userData);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const listUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error: any) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: error.message || "Internal server error" });
  }
};



export const profileUpdate = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, mobile } = req.body;
    const image = req.file?.filename;
    const oldEmail = req.query.userEmail?.toString();
    if (!oldEmail) {
      return res.status(400).json({ message: "No email provided" });
    }
    const userData = await updateUser({
      firstname,
      lastname,
      email,
      mobile,
      image,
      oldEmail,
    } as userProfileInterface);
    res.json(userData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { userSignup, userLogin, profile, profileUpdate,listUsers };