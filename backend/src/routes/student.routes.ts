import { Router } from "express";
import * as studentController from "../controllers/student.controller";
import { authMiddleware } from "../middlewares/authMiddlewares";
import { roleMiddleware } from "../middlewares/roleMiddlewares";
import { Role } from "@prisma/client";

const router = Router();

router.post("/", authMiddleware, roleMiddleware([Role.admin]), studentController.createStudent);
router.get("/", authMiddleware, roleMiddleware([Role.admin, Role.guardian, Role.teacher]), studentController.getStudents);
router.get("/:id", authMiddleware, roleMiddleware([Role.admin, Role.guardian]), studentController.getStudentbyId);
router.put("/:id", authMiddleware, roleMiddleware([Role.admin]), studentController.updateStudent);
router.delete("/:id", authMiddleware, roleMiddleware([Role.admin]), studentController.deleteStudent);
export default router;
