"use client";

import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../components/ProtectedRoute";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/navigation";
import SideBar from "../../components/SideBar";
import Link from "next/link";
import { Volleyball } from "lucide-react";

const DashboardPageLayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    return (
        <ProtectedRoute>
            <div className="flex h-screen">
                {/* Left Side */}

                <div className="w-[15%] md:w-[15%] lg:w-[15%] xl:w-[15%]">
                    <Link href={"/"}>
                        <div className="flex justify-center items-center lg:justify-start p-4 mt-5 py-2 gap-2">
                            <Volleyball size={30} className="shrink-0" />
                            <span className="hidden md:block">RhinoSphere</span>
                        </div>
                    </Link>
                    <SideBar />
                </div>

                {/* Right Side */}
                <div className="w-[85%] md:w-[85%] lg:w-[85%] xl:w-[85%] flex flex-col overflow-scroll">
                    <Navbar />
                    <main className="flex flex-1 overflow-y-auto p-6">{children}</main>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default DashboardPageLayout;
