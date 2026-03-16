import { Request, Response } from "express";
import { productService } from "./product.service";

const getProducts = async (req: Request, res: Response) => {
  try {
    const data = await productService.getProducts(req, res);
    return data;
  } catch (error) {
    return error;
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const data = await productService.getProductById(req, res);
    return data;
  } catch (error) {
    return error;
  }
};

const createProduct = async (req: Request, res: Response) => {
  try {
    const data = await productService.createProduct(req, res);
    return data;
  } catch (error) {
    return error;
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const data = await productService.updateProduct(req, res);
    return data;
  } catch (error) {
    return error;
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const data = await productService.deleteProduct(req, res);
    return data;
  } catch (error) {
    return error;
  }
};

const productCategorySummary = async (req: Request, res: Response) => {
  try {
    const data = await productService.productCategorySummary(req, res);
    return data;
  } catch (error) {
    return error;
  }
};

export const productController = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  productCategorySummary,
};
