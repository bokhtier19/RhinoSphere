import React from "react";
import { jwtDecode } from "jwt-decode";
import { sidebarConfig } from "@/lib/sidebarConfig";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

interface DecodedToken {
    userId: number;
    role: string;
    iat: number;
    exp: number;
}

const getUserRole = (): string | null => {
    if (typeof window === "undefined") return null;

    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
        const decoded: DecodedToken = jwtDecode(token);
        return decoded.role;
    } catch (error) {
        console.log("Invalid Token ", error);
        return null;
    }
};

const handleLogout = () => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }
};

const SideBar = () => {
    const role = getUserRole() || "student";
    const menuItems = [...(sidebarConfig[role] || []), ...(sidebarConfig["common"] || [])];
    const router = useRouter();

    return (
        <aside className="flex flex-col h-screen p-4 gap-12">
            <nav className="flex flex-col ">
                {menuItems.map((item) => (
                    <div className="hover:bg-primary-light text-sm rounded-sm">
                        <Link key={item.path} href={item.path} className="gap-2 flex items-center py-2 md:p-2 rounded-md">
                            <item.icon className="font-light w-5 h-5 shrink-0" />
                            <span className="hidden md:block text-nowrap">{item.label}</span>
                        </Link>
                    </div>
                ))}
                <div className="mt-auto">
                    <button onClick={handleLogout} className="w-full gap-2 hover:bg-primary-light text-sm rounded-sm flex items-center py-2 md:p-2 hover:cursor-pointer">
                        <LogOut className="font-light w-5 h-5 shrink-0" />
                        <span className="hidden md:block text-nowrap">Logout</span>
                    </button>
                </div>
            </nav>
        </aside>
    );
};

export default SideBar;
