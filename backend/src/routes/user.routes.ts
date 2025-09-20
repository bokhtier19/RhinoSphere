import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { adminMiddleware, authMiddleware } from "../middlewares/authMiddlewares";

const router = Router();

router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/users", authMiddleware, adminMiddleware, userController.getUsers);

export default router;
