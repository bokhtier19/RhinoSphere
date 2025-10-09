"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useState } from "react";
import Link from "next/link";

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

export default function AdminDashboard() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-2">
            {/* Stats Cards */}
            <div className="flex gap-2 flex-col text-xs">
                <Card className="flex">
                    <CardContent className="p-2 px-4 flex flex-col gap-4 text-sm">
                        <div className="flex justify-between">
                            <h2 className="text-2xl font-semibold text-gray-500 mb-4">Hi, Admin</h2>
                            <img src="/admin.svg" alt="School Illustration" width={170} className="drop-shadow-xl" />
                        </div>
                        <p>Welcome to the schools admin Dashboard.</p>
                        <p>Maintain The Schools Online activities , finances , notices and alerts with Ease. Keep track of your students , teachers and guardians with just a click.</p>
                    </CardContent>
                </Card>
            </div>
            <div className="gap-2 flex flex-col">
                <div className="flex w-full items-between gap-2">
                    <Card className="flex-1">
                        <CardContent className="">
                            <h2 className="text-sm font-semibold text-gray-500">Students</h2>
                            <p className="text-2xl font-bold text-center">1,230</p>
                        </CardContent>
                    </Card>
                    <Card className="flex-1">
                        <CardContent className="">
                            <h2 className="text-sm font-semibold text-gray-500">Teachers</h2>
                            <p className="text-2xl font-bold text-center">67</p>
                        </CardContent>
                    </Card>
                </div>
                <Card>
                    <CardContent className="">
                        <h2 className="text-sm font-semibold text-gray-500">Employees</h2>
                        <p className="text-2xl text-center font-bold">56</p>
                    </CardContent>
                </Card>
            </div>
            <div className="flex flex-col gap-4">
                <Card className="">
                    <CardContent className="flex flex-col gap-3">
                        <p className="text-sm font-semibold text-gray-500">Total Expenditure</p>
                        <p className="text-center text-2xl font-bold text-red-500">₹1,87,000</p>
                    </CardContent>
                </Card>

                <Card className="">
                    <CardContent className="flex flex-col gap-3">
                        <h2 className="text-sm font-semibold text-gray-500">Revenue Collected</h2>
                        <p className="text-2xl font-bold text-green-600  text-center">₹2,34,000</p>
                    </CardContent>
                </Card>
                <Card className="">
                    <CardContent className="flex flex-col gap-3">
                        <h2 className="text-sm font-semibold text-gray-500">Student Added This Month</h2>
                        <p className="text-2xl font-bold text-green-600 dark:text-yellow-500 text-center">+17</p>
                    </CardContent>
                </Card>
            </div>
            {/* Calender */}
            <Card className="flex items-center justify-center h-fit gap-2">
                <h2 className="text-lg font-bold">Calender</h2>
                <Calendar mode="single" selected={date} onSelect={setDate} className="" />
                <div className="text-sm border px-4 py-1 rounded-sm bg-accent-foreground">
                    <Link href={"/dashboard/admin/calender"}>Manage Calender</Link>
                </div>
            </Card>

            {/* Attendance Chart */}
            <Card className="col-span-1">
                <CardContent className="p-2 flex flex-col justify-center items-center">
                    <h2 className="text-lg font-bold">Student Attendance</h2>
                    <p className="text-sm text-secondary">Date: {new Date().toLocaleDateString()}</p>
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
            <Card className="col-span-2 border-none">
                <CardContent className="p-4">
                    <h2 className="text-lg font-bold mb-4">Fees Paid vs Pending</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie data={feeStatusData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
                                {feeStatusData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend verticalAlign="bottom" align="left" iconType="triangle" />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    );
}
