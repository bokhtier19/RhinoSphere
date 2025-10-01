"use client";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from "react";
import { notices } from "@/lib/notices";

// Define COLORS array for the PieChart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import Link from "next/link";

const GuardianDashboardPage = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    // Define attendanceStatus data
    const attendanceStatus = [
        { name: "Present", value: 75 },
        { name: "Absent", value: 15 },
        { name: "Late", value: 10 },
    ];

    return (
        <div className="grid grid-cols-4 gap-4">
            <div>
                <Card className="flex">
                    <CardContent className="p-2 px-4 flex flex-col gap-4 text-sm">
                        <div className="flex justify-between">
                            <h2 className="text-2xl font-semibold text-gray-500 mb-4">Hi, Guardian</h2>
                            <img src="/guardian.svg" alt="School Illustration" width={180} className="drop-shadow-xl" />
                        </div>
                        <p className="">Welcome to your personal Profile.Manage and Stay upto date with your academics.</p>
                        <p>Submit assignments and School works through this portal. Dont forget to attend School regularly.</p>
                    </CardContent>
                </Card>
            </div>
            <div className="gap-2 flex flex-col">
                <div className="flex w-full items-between gap-2">
                    <Card className="flex-1">
                        <CardContent className="flex flex-col items-center justify-center">
                            <h2 className="text-sm font-semibold text-gray-500">Attendance</h2>
                            <p className="text-2xl font-bold">87%</p>
                        </CardContent>
                    </Card>
                    <Card className="flex-1">
                        <CardContent className="flex flex-col items-center justify-center">
                            <h2 className="text-sm font-semibold text-gray-500 text-nowrap">Task Completed</h2>
                            <p className="text-2xl font-bold text-center">34</p>
                        </CardContent>
                    </Card>
                </div>
                <Card>
                    <CardContent className="flex flex-col justify-center items-center">
                        <h2 className="text-sm font-semibold text-gray-500">Reward Points</h2>
                        <p className="text-2xl text-center font-bold">1267</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex flex-col justify-center items-center">
                        <h2 className="text-sm font-semibold text-gray-500">Assignments Pending</h2>
                        <p className="text-2xl text-center font-bold text-red-500">7</p>
                    </CardContent>
                </Card>
            </div>

            {/* Attendance Chart */}
            <Card className="col-span-1 h-fit ">
                <CardContent className="p-2">
                    <div className="flex justify-between items-center px-2">
                        <h2 className=" font-semibold text-gray-500 mb-4">Your ward's Attendance</h2>
                        <Link className="text-xs underline" href={"/dashboard/noticeboard"}>
                            View Report
                        </Link>
                    </div>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Legend verticalAlign="bottom" align="center" iconType="square" />
                            <Pie data={attendanceStatus} cx="50%" cy="50%" outerRadius={80} dataKey="value" label>
                                {attendanceStatus.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
            {/* Notice Board Card */}
            <Card className="flex overflow-hidden ">
                <CardContent className="">
                    <div className="flex justify-between items-center">
                        <h2 className=" font-semibold text-gray-500 mb-4">Latest Notices</h2>
                        <Link className="text-xs underline" href={"/dashboard/noticeboard"}>
                            View all
                        </Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        {notices.slice(0, 2).map((notice) => (
                            <Card key={notice.id} className="p-2">
                                <CardHeader>
                                    <CardTitle>{notice.title}</CardTitle>
                                    <p className="text-sm text-muted-foreground ">Dated: {notice.date.toLocaleDateString()}</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-xs">{notice.content}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>
            <Card className="flex items-center h-fit ">
                <Calendar mode="single" selected={date} onSelect={setDate} className="" />
            </Card>
            <Card className="flex items-center h-fit ">
                <Calendar mode="single" selected={date} onSelect={setDate} className="" />
            </Card>
            <Card className="flex items-center h-fit ">
                <Calendar mode="single" selected={date} onSelect={setDate} className="" />
            </Card>
            <Card className="flex items-center h-fit ">
                <Calendar mode="single" selected={date} onSelect={setDate} className="" />
            </Card>
        </div>
    );
};

export default GuardianDashboardPage;
