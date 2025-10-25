"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Fee {
    id: number;
    childName: string;
    month: string;
    amount: number;
    status: "Paid" | "Pending";
    dueDate: Date;
    paidAt?: Date;
}

const GuardianFeePage = () => {
    const [fees] = useState<Fee[]>([
        {
            id: 1,
            childName: "John Doe",
            month: "September 2025",
            amount: 5000,
            status: "Paid",
            dueDate: new Date(2025, 8, 10),
            paidAt: new Date(2025, 8, 5),
        },
        {
            id: 2,
            childName: "John Doe",
            month: "October 2025",
            amount: 5000,
            status: "Pending",
            dueDate: new Date(2025, 9, 10),
        },
    ]);

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">My Child's Fees</h2>

            <div className="grid gap-4">
                {fees.map((fee) => (
                    <Card key={fee.id}>
                        <CardHeader className="flex flex-row justify-between items-center">
                            <CardTitle>{fee.month}</CardTitle>
                            <Badge variant={fee.status === "Paid" ? "default" : "destructive"}>{fee.status}</Badge>
                        </CardHeader>
                        <CardContent>
                            <p>
                                <span className="font-semibold">Child:</span> {fee.childName}
                            </p>
                            <p>
                                <span className="font-semibold">Amount:</span> ₹{fee.amount}
                            </p>
                            <p>
                                <span className="font-semibold">Due Date:</span> {fee.dueDate.toLocaleDateString()}
                            </p>
                            {fee.paidAt && (
                                <p>
                                    <span className="font-semibold">Paid At:</span> {fee.paidAt.toLocaleDateString()}
                                </p>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default GuardianFeePage;
