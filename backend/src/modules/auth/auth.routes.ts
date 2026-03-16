import { Router } from "express";
import { validator } from "../../utils/validator";
import { authValidation } from "./helpers/auth.validation";
import { authController } from "./auth.controller";

const router: Router = Router();

router.post(
  "/signup",
  validator(authValidation.signupSchema),
  authController.signup
);

router.post(
  "/login",
  validator(authValidation.loginSchema),
  authController.login
);

export const authRoutes = router;
