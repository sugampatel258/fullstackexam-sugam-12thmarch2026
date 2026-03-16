import { Router } from "express";
import { productController } from "./product.controller";
import { userAuthentication } from "../../middleware/userAuth.middleware";

const router: Router = Router();

router.get("/", productController.getProducts);

router.get("/:id", productController.getProductById);

router.post("/", userAuthentication, productController.createProduct);

router.put("/:id", userAuthentication, productController.updateProduct);

router.delete("/:id", userAuthentication, productController.deleteProduct);

router.get(
  "/product-summary",
  userAuthentication,
  productController.productCategorySummary
);

export const productRoutes = router;
