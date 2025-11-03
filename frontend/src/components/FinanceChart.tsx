"use client";
import { Ellipsis } from "lucide-react";
import React from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, ResponsiveContainer } from "recharts";
const data = [
    {
        name: "Jan",
        Income: 70000,
        Expense: 24000,
    },
    {
        name: "Feb",
        Income: 40000,
        Expense: 13980,
    },
    {
        name: "Mar",
        Income: 80000,
        Expense: 98000,
    },
    {
        name: "Apr",
        Income: 50000,
        Expense: 39080,
    },
    {
        name: "May",
        Income: 30000,
        Expense: 48000,
    },
    {
        name: "Jun",
        Income: 90000,
        Expense: 38000,
    },
    {
        name: "Jul",
        Income: 60000,
        Expense: 43000,
    },
    {
        name: "Aug",
        Income: 70000,
        Expense: 24000,
    },
    {
        name: "Sep",
        Income: 40000,
        Expense: 13980,
    },
    {
        name: "Oct",
        Income: 80000,
        Expense: 98000,
    },
    {
        name: "Nov",
        Income: 50000,
        Expense: 39080,
    },
    {
        name: "Dec",
        Income: 30000,
        Expense: 48000,
    },
];

const FinanceChart = ({ isAnimationActive = true }) => {
    return (
        <div className="h-[350px] w-full bg-card rounded-lg p-4 shadow-card">
            <div className="flex justify-between items-center">
                <h3 className="text-lg text-primary font-semibold mb-2">Finance</h3>
                <Ellipsis className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
            </div>
            <div className="h-full w-[90%] mx-auto">
                <ResponsiveContainer width="100%" height="90%">
                    <LineChart data={data}>
                        <XAxis dataKey="name" tickLine={false} axisLine={false} />
                        <YAxis tickLine={false} axisLine={false} />
                        <Tooltip />
                        <Legend verticalAlign="top" align="center" wrapperStyle={{ paddingTop: "20px", paddingBottom: "20px" }} />
                        <Line type="monotone" dataKey="Income" stroke="#818cf8" isAnimationActive={isAnimationActive} strokeWidth={3} />
                        <Line type="monotone" dataKey="Expense" stroke="#2dd4bf" isAnimationActive={isAnimationActive} strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default FinanceChart;
