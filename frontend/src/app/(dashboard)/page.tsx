"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import Loader from "@/components/Loader";

interface DecodedToken {
    userId: number;
    role: string;
    iat: number;
    exp: number;
}

export default function DashboardPage() {
    return <Loader />;
}
