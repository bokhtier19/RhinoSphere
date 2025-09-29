"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { Loader } from "lucide-react";
import ThemeTestCard from "@/components/ThemeTestCard";

interface DecodedToken {
    userId: number;
    role: string;
    iat: number;
    exp: number;
}

export default function DashboardPage() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
            return;
        }

        try {
            const decoded: DecodedToken = jwtDecode(token);
            const role = decoded.role.toLowerCase();

            // Redirect based on role
            if (role === "admin") router.push("/dashboard/admin");
            else if (role === "teacher") router.push("/dashboard/teacher");
            else if (role === "guardian") router.push("/dashboard/guardian");
            else router.push("/dashboard/student");
        } catch (err) {
            console.error("Invalid token", err);
            router.push("/login");
        }
    }, [router]);
    return (
        <div className="flex items-center justify-center h-screen">
            <Loader className="h-8 w-8 animate-spin text-primary" />
        </div>
    );
}
