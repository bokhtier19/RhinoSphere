"use client";

import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../components/ProtectedRoute";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/navigation";
import SideBar from "../../components/SideBar";

const DashboardPageLayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    return (
        <ProtectedRoute>
            <div className="flex h-screen w-full">
                {/* Main content */}
                <SideBar />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <Navbar />
                    <main className="flex flex-1 overflow-y-auto p-6">{children}</main>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default DashboardPageLayout;
