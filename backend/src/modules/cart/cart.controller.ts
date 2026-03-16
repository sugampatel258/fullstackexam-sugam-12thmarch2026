import { Request, Response } from "express";
import { cartService } from "./cart.service";

const getCart = async (req: Request, res: Response) => {
  try {
    const data = await cartService.getCart(req, res);
    return data;
  } catch (error) {
    return error;
  }
};

const addToCart = async (req: Request, res: Response) => {
  try {
    const data = await cartService.addToCart(req, res);
    return data;
  } catch (error) {
    return error;
  }
};

const removeCartItem = async (req: Request, res: Response) => {
  try {
    const data = await cartService.removeCartItem(req, res);
    return data;
  } catch (error) {
    return error;
  }
};

export const cartController = {
  addToCart,
  getCart,
  removeCartItem,
};
