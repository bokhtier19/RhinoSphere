"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { User, Bell, Settings, Search } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className="flex justify-end items-center px-2 md:px-6 py-4 bg-background/60">
            <div className="flex gap-4 md:gap-6 w-[80%] justify-end md:justify-between items-center">
                {/* Search Bar */}
                <div className="hidden md:flex items-center  gap-2 w-1/2 lg:w-full max-w-sm bg-card border border-border rounded-xl px-3 py-2 shadow-sm">
                    <Search className="w-4 h-4 text-muted-foreground" />
                    <input type="text" placeholder="Search anything..." className="bg-transparent w-full outline-none text-sm text-foreground placeholder:text-muted-foreground" />
                </div>

                {/* Right Section */}
                <div className="flex gap-4 items-center">
                    <ThemeToggle />
                    <button onClick={() => router.push("/dashboard/settings")} className="hover:text-primary transition">
                        <Settings className="w-5 h-5" />
                    </button>
                    <button onClick={() => router.push("/dashboard/notifications")} className="hover:text-primary transition">
                        <Bell className="w-5 h-5" />
                    </button>
                    <div className="flex flex-col text-xs text-end">
                        <p>Dr. Moona</p>
                        <p className="text-primary">admin</p>
                    </div>
                    <button
                        onClick={() => router.push("/dashboard/profile")}
                        className="border flex justify-between rounded-full text-white border-border p-2 bg-primary hover:bg-secondary/80 transition">
                        <User className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
