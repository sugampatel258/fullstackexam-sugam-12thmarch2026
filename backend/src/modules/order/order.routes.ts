import { Router } from "express";
import { userAuthentication } from "../../middleware/userAuth.middleware";
import { orderController } from "./order.controller";

const router: Router = Router();

router.post("/checkout", userAuthentication, orderController.checkout);

router.get("/", userAuthentication, orderController.getOrders);

export const orderRoutes = router;
