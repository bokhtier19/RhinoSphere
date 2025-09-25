import { Response } from "express";
import * as feeService from "../services/fees.service";
import { AuthRequest } from "../middlewares/authMiddlewares";

export const createFees = async (req: AuthRequest, res: Response) => {
    try {
        const fee = await feeService.createFees({ ...req.body, studentId: req.user.id });
        res.json(fee);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getFees = async (req: AuthRequest, res: Response) => {
    try {
        const fee = await feeService.getFees();
        res.json(fee);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getFeesbyId = async (req: AuthRequest, res: Response) => {
    try {
        const fee = await feeService.getFeebyId(Number(req.params.id));

        if (!fee) {
            return res.status(404).json({ error: "Fees not Found!" });
        }
        res.json(fee);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const updateFee = async (req: AuthRequest, res: Response) => {
    try {
        const fee = await feeService.updateFees(Number(req.params.id), req.body);
        res.json(fee);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const deleteFee = async (req: AuthRequest, res: Response) => {
    try {
        await feeService.deleteFees(Number(req.params.id));
        res.json({ message: "Fees Deleted Successfully!" });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
