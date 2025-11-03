"use client";

import { Ellipsis } from "lucide-react";
import React from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
    {
        name: "Mon",
        present: 60,
        absent: 10,
    },
    {
        name: "Tue",
        present: 70,
        absent: 30,
    },
    {
        name: "Wed",
        present: 80,
        absent: 9,
    },
    {
        name: "Thu",
        present: 30,
        absent: 40,
    },
    {
        name: "Fri",
        present: 40,
        absent: 50,
    },
];

const AttendanceChart = () => {
    return (
        <div className="h-[350px] bg-card rounded-lg w-full p-4 shadow-card">
            <div className="flex justify-between items-center">
                <h3 className="text-lg text-primary font-semibold mb-2">Attendance</h3>
                <Ellipsis className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
            </div>
            <div className="h-full w-full">
                <ResponsiveContainer width="100%" height="90%">
                    <BarChart data={data}>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip />
                        <Legend verticalAlign="top" align="right" wrapperStyle={{ paddingTop: "20px", paddingBottom: "20px" }} />
                        <Bar dataKey="present" fill="#818cf8" />
                        <Bar dataKey="absent" fill="#2dd4bf" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AttendanceChart;
