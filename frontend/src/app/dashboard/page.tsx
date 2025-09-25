"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CalendarDayButton } from "@/components/ui/calendar";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useState } from "react";

const feeTrendData = [
    { month: "Jan", collected: 12000 },
    { month: "Feb", collected: 15000 },
    { month: "Mar", collected: 18000 },
    { month: "Apr", collected: 22000 },
    { month: "May", collected: 19500 },
];

const feeStatusData = [
    { name: "Paid", value: 70 },
    { name: "Pending", value: 30 },
];

const attendanceStatus = [
    { name: "Present", value: 83 },
    { name: "Absent", value: 17 },
];

const COLORS = ["#10B981", "#EF4444"];

export default function Dashboard() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
            {/* Stats Cards */}
            <div>

                <Card>
                    <CardContent className="p-4">
                        <h2 className="text-sm font-semibold text-gray-500">Total Students</h2>
                        <p className="text-2xl font-bold">1,230</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-4">
                        <h2 className="text-sm font-semibold text-gray-500">Total Teachers</h2>
                        <p className="text-2xl font-bold">87</p>
                    </CardContent>
                </Card>
            </div>
            <div>

                <Card>
                    <CardContent className="p-4">
                        <h2 className="text-sm font-semibold text-gray-500">Pending Fees</h2>
                        <p className="text-2xl font-bold text-red-500">₹45,000</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-4">
                        <h2 className="text-sm font-semibold text-gray-500">Revenue Collected</h2>
                        <p className="text-2xl font-bold text-green-600">₹2,34,000</p>
                    </CardContent>
                </Card>
            </div>

            {/* Attendance Chart */}
            <Card className="col-span-1">
                <CardContent className="p-4">
                    <h2 className="text-lg font-bold mb-4">Student Attendance</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Legend
                                verticalAlign="bottom"
                                align="center"
                                iconType="square"
                            />
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
            <Card>
                {/* Calender */}

                <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-full border" />
            </Card>
            {/* Fee Trend Chart */}
            <Card className="col-span-2">
                <CardContent className="p-4">
                    <h2 className="text-lg font-bold mb-4">Fee Collection Trend</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={feeTrendData}>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="collected" fill="#3B82F6" radius={[6, 6, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            {/* Fee Status Chart */}
            <Card className="col-span-2">
                <CardContent className="p-4">
                    <h2 className="text-lg font-bold mb-4">Fees Paid vs Pending</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie data={feeStatusData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label>
                                {feeStatusData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend
                                verticalAlign="bottom"
                                align="center"
                                iconType="square"
                            />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    );
}
