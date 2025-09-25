"use client";

import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../../components/ProtectedRoute";
import Navbar from "../../../components/Navbar";
import { useRouter } from "next/navigation";

const DashboardPageLayout = ({ children }: { children: React.ReactNode }) => {
    const [role, setRole] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const storedRole = localStorage.getItem("role");
        if (storedRole) {
            setRole(storedRole);
        }
    }, []);

    const menus: Record<string, string[]> = {
        admin: ["Students", "Teachers", "Fees", "Notifications", "Analytics"],
        teacher: ["Students", "Attendance", "Grades"],
        guardian: ["My Children", "Fees", "Notifications"],
        student: ["My Profile", "Fees", "Grades"],
    };

    return (
        <ProtectedRoute>
            <div className="flex h-screen">
                {/* Sidebar */}
                <aside className="w-64 bg-white shadow-lg p-4">
                    <h2 className="text-xl font-bold mb-6">Rhinosphere</h2>
                    {role && (
                        <ul className="space-y-2">
                            {menus[role].map((item) => (
                                <li key={item} className="p-2 rounded hover:bg-blue-100 cursor-pointer" onClick={() => router.push(`/dashboard/${item.toLowerCase()}`)}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </aside>

                {/* Main content */}
                <div className="flex-1 flex flex-col">
                    <Navbar />
                    <main className="flex-1 p-6 overflow-y-auto">{children}</main>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default DashboardPageLayout;
