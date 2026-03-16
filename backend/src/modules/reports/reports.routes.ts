import { Router } from "express";
import { userAuthentication } from "../../middleware/userAuth.middleware";
import { reportController } from "./reports.controller";

const router: Router = Router();

router.get("/dailyRevenue", userAuthentication, reportController.dailyRevenue);
router.get("/topSpenders", userAuthentication, reportController.topSpenders);

export const reportRoutes = router;
