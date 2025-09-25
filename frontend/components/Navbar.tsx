"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
    const router = useRouter();
    return (
        <div>
            {/* Navbar */}
            <nav className="flex justify-between items-center bg-[var(--color-primary)] text-white px-6 py-4 rounded-lg shadow-lg">
                <h1 className="text-xl font-bold">School Management</h1>
                <div className="flex gap-4">
                    <a href="/dashboard/students" className="hover:underline">
                        Students
                    </a>
                    <a href="/dashboard/fees" className="hover:underline">
                        Fees
                    </a>
                    <a href="/dashboard/notifications" className="hover:underline">
                        Notifications
                    </a>
                    <a href="/dashboard/profile" className="hover:underline">
                        Profile
                    </a>
                    <a
                        href="/login"
                        className="hover:underline"
                        onClick={(e) => {
                            e.preventDefault();
                            localStorage.removeItem("token");
                            document.cookie = "token=; path=/; max-age=0; Secure; SameSite=Strict";
                            router.push("/login");
                            alert("Logged out successfully!");
                        }}>
                        Logout
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
