import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
import { Role } from "@prisma/client";

export interface AuthRequest extends Request {
    user?: any;
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers["authorization"];
        if (!authHeader) {
            return res.status(401).json({ error: "Authorization header missing" });
        }

        const token = authHeader.split(" ")[1]; // Expect "Bearer <token>"
        if (!token) {
            return res.status(401).json({ error: "Token missing" });
        }

        const decoded = verifyToken(token);
        req.user = decoded; // attach decoded payload to request
        next();
    } catch (err) {
        return res.status(401).json({ error: "Invalid or expired token" });
    }
};

export const adminMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    if (req.user?.role !== Role.admin) {
        return res.status(403).json({ error: "Admins Only!" });
    }
    next();
};
