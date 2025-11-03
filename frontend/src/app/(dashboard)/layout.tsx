"use client";

import React from "react";
import ProtectedRoute from "../../components/ProtectedRoute";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/navigation";
import SideBar from "../../components/SideBar";
import Link from "next/link";
import { Volleyball } from "lucide-react";

const DashboardPageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ProtectedRoute>
            <div className="flex h-screen">
                {/* Left Side */}
                <div className="w-[10%] md:w-[15%] lg:w-[10%] xl:w-[10%]">
                    <Link href={"/"}>
                        <div className="flex justify-start items-center text-xl font-extrabold lg:justify-start p-4 mt-5 py-2 gap-2">
                            <Volleyball size={30} className="shrink-0 text-primary" />
                            <span className="hidden md:block">
                                Rhino
                                <span className="text-secondary">Sphere</span>
                            </span>
                        </div>
                    </Link>
                    <SideBar />
                </div>

                {/* Right Side */}
                <div className="w-[90%] md:w-[85%] lg:w-[90%] xl:w-[90%] flex flex-col overflow-scroll">
                    <Navbar />
                    <main className="flex overflow-y-scroll p-6">{children}</main>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default DashboardPageLayout;
