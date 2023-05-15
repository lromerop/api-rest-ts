import { Request, Response } from "express";
import { loginUser, registerUser } from "../services/auth.service";
import { handleHttp } from "../utils/error.handle";

const registerController = async ({ body }: Request, res: Response) => {
  try {
    const response = await registerUser(body);
    return res.send(response);
  } catch (error) {
    handleHttp(res, `${error}`);
  }
};

const loginController = async ({ body }: Request, res: Response) => {
  try {
    const { email, password } = body;
    const response = await loginUser({ email, password });
    return res.send(response);
  } catch (error) {
    handleHttp(res, `${error}`);
  }
};

export { registerController, loginController };
