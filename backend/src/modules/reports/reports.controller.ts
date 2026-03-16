import { Request, Response } from "express";
import { reportService } from "./reports.service";

const dailyRevenue = async (req: Request, res: Response) => {
  try {
    const data = await reportService.dailyRevenue(req, res);
    return data;
  } catch (error) {
    return error;
  }
};

const topSpenders = async (req: Request, res: Response) => {
  try {
    const data = await reportService.topSpenders(req, res);
    return data;
  } catch (error) {
    return error;
  }
};

export const reportController = {
  dailyRevenue,
  topSpenders,
};
