import { Request, Response } from "express";
import { orderService } from "./order.service";

const checkout = async (req: Request, res: Response) => {
  try {
    const data = await orderService.checkout(req, res);
    return data;
  } catch (error) {
    return error;
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const data = await orderService.getOrders(req, res);
    return data;
  } catch (error) {
    return error;
  }
};

export const orderController = {
  checkout,
  getOrders,
};
