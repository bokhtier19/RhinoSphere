import React from "react";
import { jwtDecode } from "jwt-decode";

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
    const role = getUserRole();
    if (role == "admin") {
        return;
    } else if (role == "teacher") {
    } else if (role == "guardian") {
        return;
    } else {
        return;
    }
};

export default SideBar;
