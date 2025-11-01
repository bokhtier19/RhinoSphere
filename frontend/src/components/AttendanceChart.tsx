import { Ellipsis } from "lucide-react";
import React from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
    {
        name: "Mon",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Tue",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Wed",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Thu",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Fri",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
];

const AttendanceChart = () => {
    return (
        <div className="h-full w-full p-4 shadow-card">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold mb-2">Attendance</h3>
                <Ellipsis className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
            </div>
            <div className="h-full w-full">
                <ResponsiveContainer width="100%" height="90%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                        <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AttendanceChart;
