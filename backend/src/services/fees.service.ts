import { Fee, FeeStatus, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface FeeInput {
    studentId: number;
    amount: number;
    dueDate: Date;
    status?: FeeStatus;
}

//Create New Fees

export const createFees = async (data: FeeInput) => {
    return prisma.fee.create({
        data: {
            studentId: data.studentId,
            amount: data.amount,
            dueDate: data.dueDate,
            status: data.status ?? FeeStatus.pending,
        },
    });
};

//Get Fees

export const getFees = async () => {
    return prisma.fee.findMany({
        include: {
            student: true,
            payments: true,
        },
    });
};

//Get Fees by studentID

export const getFeebyId = async (id: number) => {
    return prisma.fee.findUnique({
        where: { id },
        include: { student: true, payments: true },
    });
};

//Updae Fees

export const updateFees = async (id: number, data: Partial<FeeInput>) => {
    return prisma.fee.update({
        where: { id },
        data,
    });
};

//Delete /fees

export const deleteFees = async (id: number) => {
    return prisma.fee.delete({ where: { id } });
};
