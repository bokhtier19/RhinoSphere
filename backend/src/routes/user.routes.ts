import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { adminMiddleware, authMiddleware } from "../middlewares/authMiddlewares";
import { roleMiddleware } from "../middlewares/roleMiddlewares";
import { Role } from "@prisma/client";

const router = Router();

router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/users",authMiddleware, roleMiddleware([Role.admin]), userController.getUsers);

export default router;
