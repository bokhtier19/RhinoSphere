import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface StudentInput {
    name: string;
    age: number;
    grade?: string;
    guardianId?: number;
}

// Create new student
export const createStudent = async (data: StudentInput) => {
    return prisma.student.create({
        data: {
            name: data.name,
            age: data.age,
            grade: data.grade,
            guardianId: data.guardianId,
        },
    });
};

// Get all students

export const getStudents = async () => {
    return prisma.student.findMany({ include: { guardian: true } });
};

// Get student by ID
export const getStudentbyId = async (id: number) => {
    return prisma.student.findUnique({ where: { id } });
};

// Update student
export const updateStudent = async (id: number, data: Partial<StudentInput>) => {
    return prisma.student.update({
        where: { id },
        data,
    });
};

//Delete Student

export const deleteStudent = async (id: number) => {
    return prisma.student.delete({ where: { id } });
};
