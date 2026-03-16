import { Request, Response } from "express";
import { authService } from "./auth.service";

const signup = async (req: Request, res: Response) => {
  try {
    const data = await authService.signup(req, res);
    return data;
  } catch (error) {
    return error;
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const data = await authService.login(req, res);
    return data;
  } catch (error) {
    return error;
  }
};

export const authController = {
  signup,
  login,
};
