"use client";
import { Ellipsis, Users } from "lucide-react";
import React from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, Tooltip } from "recharts";

const data = [
    {
        name: "Total",
        present: 100,
        fill: "#e5e7eb",
    },
    {
        name: "Boys",
        present: 63,
        fill: "#818cf8",
    },
    {
        name: "Girls",
        present: 37,
        fill: "#2dd4bf",
    },
];

const StudentChart = () => {
    return (
        <div className="h-[350px] bg-card w-full p-4 rounded-lg border-border shadow-card">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold mb-2 text-primary">Students</h2>
                <Ellipsis className="text-primary-foreground float-right cursor-pointer" />
            </div>
            {/* Chart from recharts */}
            <div className="h-[80%] w-full items-center mx-auto relative">
                <ResponsiveContainer>
                    <RadialBarChart className="flex" barSize={90} data={data}>
                        <RadialBar label={{ position: "insideStart", fill: "none" }} background dataKey="present" />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Users className="absolute top-1/2 right-1/2 text-secondary translate-x-5 -translate-y-5" size={35} />
            </div>
            {/* Footer */}
            <div className="flex gap-2 px-2 justify-center">
                <div className="flex gap-1 items-center">
                    <div className="bg-white w-3 h-3 rounded"></div>
                    <p className="text-sm text-foreground">Total</p>
                    <p className="font-semibold">200</p>
                </div>
                <div className="flex gap-1 items-center">
                    <div className="bg-primary w-3 h-3 rounded"></div>
                    <p className="text-sm text-primary">Boys</p>
                    <p className="font-semibold">137</p>
                </div>
                <div className="flex gap-1 items-center">
                    <div className="bg-secondary w-3 h-3 rounded"></div>
                    <p className="text-sm text-secondary">Girls</p>
                    <p className="font-semibold">63</p>
                </div>
            </div>
        </div>
    );
};

export default StudentChart;
