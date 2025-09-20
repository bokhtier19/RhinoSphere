import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcrypt";
import { signToken } from "./../utils/jwt";

const prisma = new PrismaClient();

interface UserInput {
    name: string;
    email: string;
    password: string;
    role: Role;
}

//Create new user with hashed password

export const createUser = async (data: UserInput) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            passwordHash: hashedPassword,
            role: data.role,
        },
    });
};

// Login user and return JWT token

export const loginUser = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        throw new Error("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
        throw new Error("Password is incorrect");
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error("JWT secret not configured");
    }

    const token = signToken({ userId: user.id, role: user.role });

    const { passwordHash, ...safeUser } = user;

    return { token, user: safeUser };
};

// Get all users
export const getUsers = async () => {
    return prisma.user.findMany();
};
