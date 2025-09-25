import React from "react";
import { jwtDecode } from "jwt-decode";
import { sidebarConfig } from "@/lib/sidebarCongig";
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

const SideBar = () => {
    const role = getUserRole() || "student";
    const menuItems = sidebarConfig[role] || [];
    const router = useRouter();

    return (
        <aside className="w-56 flex flex-col h-screen p-4 gap-12 bg-secondary text-white">
            <div className="text-2xl uppercase mb-5 font-extrabold">RhinoSphere</div>
            <nav className="flex flex-col">
                {menuItems.map((item) => (
                    <div className="hover:bg-secondary-dark rounded-sm">
                        <Link key={item.path} href={item.path} className="gap-2 flex items-center hover:bg-secondary p-2 rounded-md">
                            <item.icon className="w-5 h-5" />
                            <span>{item.label}</span>
                        </Link>
                    </div>
                ))}
            </nav>
            <div className="flex">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        localStorage.removeItem("token");
                        document.cookie = "token=; path=/; max-age=0; Secure; SameSite=Strict";
                        router.push("/login");
                    }}
                    className=" rounded-sm text-white py-2 px-4 hover:underline flex gap-2">
                    Logout
                    <LogOut className="w-5 h-5" />
                </button>
            </div>
        </aside>
    );
};

export default SideBar;
