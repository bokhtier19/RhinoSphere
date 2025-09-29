"use client";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";

// Define COLORS array for the PieChart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const StudentDashboard = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    // Define attendanceStatus data
    const attendanceStatus = [
        { name: "Present", value: 75 },
        { name: "Absent", value: 15 },
        { name: "Late", value: 10 },
    ];

    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="flex gap-2 flex-col">
                <Card>
                    <CardContent className="p-2 px-4">
                        <h2 className="text-2xl font-semibold text-gray-500 mb-4">Hi, Student</h2>
                        <p className="">
                            Welcome to your personal Profile.Manage and Stay upto dated with your academics. Submit assignments and School works through this portal. Dont forget to attend School
                            regularly.
                        </p>
                    </CardContent>
                </Card>

                <div className="gap-2 flex flex-col">
                    <div className="flex w-full items-between gap-2">
                        <Card className="flex-1">
                            <CardContent className="">
                                <h2 className="text-sm font-semibold text-gray-500">Attendance</h2>
                                <p className="text-2xl font-bold text-center">87%</p>
                            </CardContent>
                        </Card>
                        <Card className="flex-1">
                            <CardContent className="">
                                <h2 className="text-sm font-semibold text-gray-500">Task Completed</h2>
                                <p className="text-2xl font-bold text-center">34</p>
                            </CardContent>
                        </Card>
                    </div>
                    <Card>
                        <CardContent className="">
                            <h2 className="text-sm font-semibold text-gray-500">Reward Points</h2>
                            <p className="text-2xl text-center font-bold">1267</p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Attendance Chart */}
            <Card className="col-span-1">
                <CardContent className="p-4">
                    <h2 className="text-lg font-bold mb-4">Your Attendance</h2>
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
            {/* Calender */}
            <Card className="flex items-center">
                <Calendar mode="single" selected={date} onSelect={setDate} className="" />
            </Card>
        </div>
    );
};

export default StudentDashboard;
