// prisma/seed.ts
import { PrismaClient, Role, FeeStatus, NotificationType } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    // --- Admin ---
    const admin = await prisma.user.create({
        data: {
            name: "Admin User",
            email: "admin@rhinoschool.com",
            passwordHash: "hashed_admin_password", // replace with bcrypt later
            role: Role.admin,
        },
    });

    // --- Teacher ---
    const teacher = await prisma.user.create({
        data: {
            name: "John Teacher",
            email: "teacher@rhinoschool.com",
            passwordHash: "hashed_teacher_password",
            role: Role.teacher,
        },
    });

    // --- Guardian ---
    const guardian = await prisma.user.create({
        data: {
            name: "Sarah Guardian",
            email: "guardian@rhinoschool.com",
            passwordHash: "hashed_guardian_password",
            role: Role.guardian,
        },
    });

    // --- Student linked to guardian ---
    const student = await prisma.student.create({
        data: {
            name: "Tommy Student",
            age: 12,
            grade: "6th Grade",
            guardianId: guardian.id,
        },
    });

    // --- Fees ---
    const feePending = await prisma.fee.create({
        data: {
            studentId: student.id,
            amount: 5000,
            dueDate: new Date("2025-09-30"),
            status: FeeStatus.pending,
        },
    });

    const feePaid = await prisma.fee.create({
        data: {
            studentId: student.id,
            amount: 3000,
            dueDate: new Date("2025-08-15"),
            status: FeeStatus.paid,
            paidAt: new Date("2025-08-10"),
        },
    });

    // --- Payment for paid fee ---
    await prisma.payment.create({
        data: {
            feeId: feePaid.id,
            amount: 3000,
            paymentMethod: "UPI",
            transactionId: "TXN123456",
        },
    });

    // --- Notification ---
    await prisma.notification.create({
        data: {
            userId: guardian.id,
            message: "Your child’s school fee is due soon.",
            type: NotificationType.fee_due,
        },
    });

    console.log("✅ Database seeded successfully!");
}

main()
    .catch((e) => {
        console.error("❌ Seed error:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
