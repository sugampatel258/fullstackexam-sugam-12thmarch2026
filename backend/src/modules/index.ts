import { Router } from "express";
import { authRoutes } from "./auth/auth.routes";
import { productRoutes } from "./product/product.routes";
import { cartRoutes } from "./cart/cart.routes";
import { orderRoutes } from "./order/order.routes";
import { reportRoutes } from "./reports/reports.routes";

const router: Router = Router();

// User routes
router.use("/auth", authRoutes);

router.use("/product", productRoutes);

router.use("/cart", cartRoutes);

router.use("/order", orderRoutes);

router.use("/report", reportRoutes);

export default router;
