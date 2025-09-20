import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import studentRoutes from "./routes/student.routes";

export const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", userRoutes);
app.use("/api/students", studentRoutes);

// root
app.get("/", (req, res) => {
    res.send("Welcome to the Student Management API");
});
