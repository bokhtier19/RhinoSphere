"use client";
import StudentChart from "@/components/StudentChart";
import CountCard from "@/components/CountCard";
import React from "react";
import AttendanceChart from "@/components/AttendanceChart";
import FinanceChart from "@/components/FinanceChart";
import CalenderEventCard from "@/components/CalenderEventCard";
import AnnouncementCard from "@/components/AnnouncementCard";

const page = () => {
    return (
        <div className="flex w-full h-screen flex-col gap-6 p-6">
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
                    <div className="w-full flex gap-4 flex-col lg:flex-row">
                        <div className="lg:w-1/3 w-full">
                            <StudentChart />
                        </div>
                        <div className="lg:w-2/3 w-full">
                            <AttendanceChart />
                        </div>
                    </div>

                    <div className="w-full">
                        {/* Finance Chart */}
                        <FinanceChart />
                    </div>
                </div>
                {/* Right side */}
                <div className="lg:w-1/4 w-full p-4 gap-8 flex flex-col">
                    <CalenderEventCard />
                    <AnnouncementCard />
                </div>
            </div>
        </div>
    );
};

export default page;
