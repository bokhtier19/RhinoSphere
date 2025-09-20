import { Response } from "express";
import * as studentService from "../services/student.service";
import { AuthRequest } from "../middlewares/authMiddlewares";

export const createStudent = async (req: AuthRequest, res: Response) => {
    try {
        const student = await studentService.createStudent({ ...req.body, guardianId: req.user.id });

        res.json(student);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getStudents = async (req: AuthRequest, res: Response) => {
    try {
        const students = await studentService.getStudents();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getStudentbyId = async (req: AuthRequest, res: Response) => {
    try {
        const student = await studentService.getStudentbyId(Number(req.params.id));
        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const updateStudent = async (req: AuthRequest, res: Response) => {
    try {
        const student = await studentService.updateStudent(Number(req.params.id), req.body);
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const deleteStudent = async (req: AuthRequest, res: Response) => {
    try {
        await studentService.deleteStudent(Number(req.params.id));
        res.json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
