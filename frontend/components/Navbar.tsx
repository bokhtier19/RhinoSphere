"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { User, Bell, Settings, Sun } from "lucide-react";

const Navbar = () => {
    const router = useRouter();
    return (
        <div>
            {/* Navbar */}
            <nav className="flex justify-end items-center   px-6 py-4 ">
                <div className="flex gap-4">
                    <a href="/dashboard/notifications" className="hover:underline">
                        <Sun />
                    </a>
                    <a href="/dashboard/notifications" className="hover:underline">
                        <Settings />
                    </a>
                    <a href="/dashboard/notifications" className="hover:underline">
                        <Bell />
                    </a>
                    <a href="/dashboard/profile" className="hover:underline">
                        <User />
                    </a>
                    <a href=""></a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
