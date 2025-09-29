"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { User, Bell, Settings, Sun } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const router = useRouter();
    return (
        <div>
            {/* Navbar */}
            <nav className="flex justify-end items-center   px-6 py-4 ">
                <div className="flex gap-4 items-center">
                    <ThemeToggle />
                    <a href="/dashboard/notifications" className="hover:underline">
                        <Settings />
                    </a>
                    <a href="/dashboard/notifications" className="hover:underline">
                        <Bell />
                    </a>
                    <a href="/dashboard/profile" className="hover:underline border rounded-full border-secondary-dark p-2 bg-secondary">
                        <User />
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
