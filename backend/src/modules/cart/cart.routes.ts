import { Router } from "express";
import { userAuthentication } from "../../middleware/userAuth.middleware";
import { cartController } from "./cart.controller";

const router: Router = Router();

router.get("/", userAuthentication, cartController.getCart);

router.post("/add", userAuthentication, cartController.addToCart);

router.delete("/remove", userAuthentication, cartController.removeCartItem);

export const cartRoutes = router;
