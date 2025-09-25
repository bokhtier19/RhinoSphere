"use client";

import { fetchFromAPI } from "@/lib/api";
import React, { useState, useEffect } from "react";

type Fees = {
    id: number;
    amount: number;
    dueDate: string;
    paidAt: string | null;
    payments: any[];
    status: string;
    student: {
        id: number;
        name: string;
    };
};

const FeesPage = () => {
    const [fees, setFees] = useState<Fees[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchFees = async () => {
        const token = localStorage.getItem("token") ?? undefined;
        try {
            const data: Fees[] = await fetchFromAPI("api/fees", "GET", undefined, token);
            setFees(data);
        } catch (error) {
            console.error(error);
            alert("Error fetching fee details!");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFees();
    }, []);

    if (loading) return <p className="p-6">Loading students...</p>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Fees</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 text-left">ID</th>
                            <th className="py-2 px-4 text-left">Student</th>
                            <th className="py-2 px-4 text-left">Amount</th>
                            <th className="py-2 px-4 text-left">Due Date</th>
                            <th className="py-2 px-4 text-left">Paid At</th>
                            <th className="py-2 px-4 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fees.map((fee) => (
                            <tr key={fee.id}>
                                <td className="py-2 px-4">{fee.id}</td>
                                <td className="py-2 px-4">{fee.student?.name ?? "Unknown"}</td>
                                <td className="py-2 px-4">{fee.amount}</td>
                                <td className="py-2 px-4">{new Date(fee.dueDate).toLocaleDateString()}</td>
                                <td className="py-2 px-4">{fee.paidAt ? new Date(fee.paidAt).toLocaleDateString() : "Not Paid"}</td>
                                <td className="py-2 px-4">{fee.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FeesPage;
