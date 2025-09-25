"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProtectedRoute from "../../../components/ProtectedRoute";
const DashboardPage = () => {
    const [loading, setLoading] = useState(false);
    const [stats, setStats] = useState({
        students: 0,
        pendingFees: 0,
        notifications: 0,
    });

    const router = useRouter();

    useEffect(() => {
        setLoading(true);
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
            return;
        } else {
            setLoading(false);
        }
    }, [router]);

    // Simulate fetching dashboard data
    useEffect(() => {
        // In real case, call your API:
        // fetch("/api/dashboard")...
        setStats({
            students: 12,
            pendingFees: 5,
            notifications: 3,
        });
    }, []);

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen text-xl">Checking authentication...</div>;
    }

    return (
        <div className="min-h-screen bg-[var(--color-bg)] p-8">
            {/* Dashboard Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-10">
                {/* Students */}
                <div className="bg-[var(--color-card)] rounded-2xl p-6 shadow hover:shadow-lg transition">
                    <h2 className="text-lg font-semibold text-[var(--color-primary)]">Total Students</h2>
                    <p className="text-3xl font-bold mt-2">{stats.students}</p>
                </div>

                {/* Pending Fees */}
                <div className="bg-[var(--color-card)] rounded-2xl p-6 shadow hover:shadow-lg transition">
                    <h2 className="text-lg font-semibold text-[var(--color-secondary)]">Pending Fees</h2>
                    <p className="text-3xl font-bold mt-2">{stats.pendingFees}</p>
                </div>

                {/* Notifications */}
                <div className="bg-[var(--color-card)] rounded-2xl p-6 shadow hover:shadow-lg transition">
                    <h2 className="text-lg font-semibold text-[var(--color-primary-dark)]">Notifications</h2>
                    <p className="text-3xl font-bold mt-2">{stats.notifications}</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
