import { compare } from "bcryptjs";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import { encrypt } from "../utils/bscrypt.handle";
import { Auth } from "../interfaces/auth.interface";

const registerUser = async ({ email, password, name, description }: User) => {
  const check = await UserModel.findOne({ email });
  if ( check ) return "ALREADY_USER";
  const passwordHash = await encrypt(password);
  const registerUser = await UserModel.create({name, password: passwordHash, email, description})
  return registerUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const check = await UserModel.findOne({ email });
  if ( !check ) return "NOT_FOUND_USER";
  const passwordHash = check.password;
  const correct = await compare(password, passwordHash)
  if ( !correct ) return "PASSWORD_INCORRECT";
  return check;
};

export { registerUser, loginUser };
