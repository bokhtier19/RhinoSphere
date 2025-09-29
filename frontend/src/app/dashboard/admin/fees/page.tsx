"use client";
import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "@/lib/api";
import { BellRing, Loader, Mail, SquareCheck, Trash } from "lucide-react";

interface Fee {
    id: number;
    amount: number;
    status: string;
    dueDate: string;
    paidAt?: string | null;
    student: {
        name: string;
        guardian: {
            email: string;
        };
    };
}

const FeePage = () => {
    const [loading, setLoading] = useState(true);
    const [fees, setFees] = useState<Fee[]>([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await fetchFromAPI("api/fees", "GET");
                setFees(data);
            } catch (error) {
                console.error("Failed to fetch Users", error);
            } finally {
                setLoading(false);
            }
        };

        getUsers();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Manage Fees</h2>
            <table className="w-full">
                <thead>
                    <tr className="">
                        <th className="p-2">ID</th>
                        <th className="p-2">Student</th>
                        <th className="p-2">Guardian Email</th>
                        <th className="p-2">Amount</th>
                        <th className="p-2">Status</th>
                        <th className="p-2">Due Date</th>
                        <th className="p-2">Paid At</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {fees.map((fee) => (
                        <tr key={fee.id} className="text-center">
                            <td className="p-2">{fee.id}</td>
                            <td className="p-2">{fee.student?.name}</td>
                            <td className="p-2">{fee.student?.guardian?.email}</td>
                            <td className="p-2">₹{fee.amount}</td>
                            <td className={`p-2 ${fee.status === "pending" ? "text-red-500" : "text-green-500"}`}>{fee.status}</td>
                            <td className="p-2">{new Date(fee.dueDate).toLocaleDateString()}</td>
                            <td className="p-2">{fee.paidAt ? new Date(fee.paidAt).toLocaleDateString() : "—"}</td>
                            <td className="p-2 flex gap-2 justify-center">
                                <SquareCheck size={20} />
                                <Trash size={20} />
                                <BellRing size={20} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FeePage;
