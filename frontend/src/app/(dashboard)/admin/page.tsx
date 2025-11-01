"use client";
import StudentChart from "@/components/StudentChart";
import CalenderCard from "@/components/CalenderCard";
import CountCard from "@/components/CountCard";
import SchoolInfoCard from "@/components/SchoolInfoCard";
import React from "react";
import AttendanceChart from "@/components/AttendanceChart";

const page = () => {
    return (
        <div className="flex w-full h-screen flex-col gap-6 p-6">
            {/* School Info Header */}
            <SchoolInfoCard />

            <div className="flex flex-col lg:flex-row w-full h-full">
                {/* Left side */}
                <div className="lg:w-3/4 w-full p-4 flex flex-col gap-6">
                    {/* count CArds */}
                    <div className="flex gap-4 flex-wrap">
                        <CountCard type="Total Students" />
                        <CountCard type="Total Teachers" />
                        <CountCard type="Total Classes" />
                        <CountCard type="Total Subjects" />
                    </div>
                    {/* Attendance and Finance Charts */}
                    <div className="w-full flex gap-4">
                        <div className="w-1/3">
                            <StudentChart />
                        </div>
                        <div className="w-2/3">
                            <AttendanceChart />
                        </div>
                    </div>
                </div>
                {/* Right side */}
                <div className="lg:w-1/4 w-full p-4">
                    <CalenderCard />
                </div>
            </div>
        </div>
    );
};

export default page;
