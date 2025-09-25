import { Router } from "express";
import * as feeController from "../controllers/fees.controller";
import { authMiddleware } from "../middlewares/authMiddlewares";
import { roleMiddleware } from "../middlewares/roleMiddlewares";
import { Role } from "@prisma/client";

const router = Router();

router.post("/", authMiddleware, roleMiddleware([Role.admin]), feeController.createFees);

router.get("/", authMiddleware, roleMiddleware([Role.admin, Role.guardian]), feeController.getFees);

router.get("/:id", authMiddleware, roleMiddleware([Role.admin, Role.guardian]), feeController.getFeesbyId);

router.put("/:id", authMiddleware, roleMiddleware([Role.admin]), feeController.updateFee);

router.delete("/:id", authMiddleware, roleMiddleware([Role.admin]), feeController.deleteFee);

export default router;
