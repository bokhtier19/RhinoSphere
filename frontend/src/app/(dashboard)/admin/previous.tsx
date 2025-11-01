"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useState } from "react";
import Link from "next/link";
import { Bell, ClipboardCheck, Wrench, MessageCircle, FileText, AlertCircle, GraduationCap } from "lucide-react";

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
        <div className="p-6 space-y-6">
            {/* School Info Header */}
            <Card className="bg-card border-border">
                <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4">
                    <div>
                        <h1 className="text-2xl font-bold text-primary">Starlight International School</h1>
                        <p className="text-muted-foreground text-sm mt-1">21 Garden View Road, Greenfield City, Mumbai, India</p>
                        <p className="text-muted-foreground text-sm">Contact: +91 98765 43210</p>
                    </div>
                    <img src="/school.svg" alt="Admin Illustration" width={250} className="drop-shadow-md" />
                </CardContent>
            </Card>

            {/* Top Welcome and Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Welcome Card */}
                <Card className="col-span-1 md:col-span-2 bg-card border-border">
                    <CardContent className="p-4">
                        <div className="flex flex-row justify-between mb-3">
                            <div className="flex flex-col justify-around">
                                <h2 className="text-xl font-semibold text-muted-foreground">Welcome, Admin</h2>
                                <p className="text-sm text-muted-foreground">Manage your school’s daily operations, monitor finances, attendance, and communication — all from one place.</p>
                            </div>
                            <img src="/admin.svg" alt="Admin Illustration" width={130} className="drop-shadow-md" />
                        </div>
                    </CardContent>
                </Card>
                {/* Calender card */}
                <Card className="bg-card border-border">
                    <CardContent className="p-4 flex flex-col items-center">
                        <h2 className="text-lg font-semibold mb-2 text-primary">Calendar</h2>
                        {/* <Calendar mode="single" selected={date} onSelect={setDate} /> */}
                        <Link href="/dashboard/admin/calender" className="text-xs mt-3 px-3 py-1 rounded-md bg-primary text-primary-foreground hover:opacity-80 transition">
                            Manage Calendar
                        </Link>
                    </CardContent>
                </Card>
                {/* Small Summary Cards */}
                <Card className="bg-card border-border">
                    <CardContent className="p-4 text-center">
                        <h2 className="text-sm text-muted-foreground">Students</h2>
                        <p className="text-2xl font-bold text-primary">1,230</p>
                    </CardContent>
                </Card>

                <Card className="bg-card border-border">
                    <CardContent className="p-4 text-center">
                        <h2 className="text-sm text-muted-foreground">Teachers</h2>
                        <p className="text-2xl font-bold text-primary">67</p>
                    </CardContent>
                </Card>
            </div>

            {/* Finance & Calendar Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="bg-card border-border">
                    <CardContent className="p-4 text-center">
                        <h2 className="text-sm text-muted-foreground">Total Expenditure</h2>
                        <p className="text-2xl font-bold text-red-500">₹1,87,000</p>
                    </CardContent>
                </Card>

                <Card className="bg-card border-border">
                    <CardContent className="p-4 text-center">
                        <h2 className="text-sm text-muted-foreground">Revenue Collected</h2>
                        <p className="text-2xl font-bold text-green-500">₹2,34,000</p>
                    </CardContent>
                </Card>

                <Card className="bg-card border-border">
                    <CardContent className="p-4 text-center">
                        <h2 className="text-sm text-muted-foreground">Students Added This Month</h2>
                        <p className="text-2xl font-bold text-blue-500">+17</p>
                    </CardContent>
                </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-card border-border md:col-span-2">
                    <CardContent className="p-4">
                        <h2 className="text-lg font-semibold mb-4 text-primary">Fee Collection Trend</h2>
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
            </div>

            {/* Activity Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="bg-card border-border">
                    <CardContent className="flex items-center gap-3 p-4">
                        <Bell className="text-yellow-500 h-6 w-6" />
                        <div>
                            <h2 className="font-semibold text-sm">Pending Notifications</h2>
                            <p className="text-2xl font-bold">12</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-card border-border">
                    <CardContent className="flex items-center gap-3 p-4">
                        <ClipboardCheck className="text-blue-500 h-6 w-6" />
                        <div>
                            <h2 className="font-semibold text-sm">Assignments Submitted</h2>
                            <p className="text-2xl font-bold">356</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-card border-border">
                    <CardContent className="flex items-center gap-3 p-4">
                        <MessageCircle className="text-green-500 h-6 w-6" />
                        <div>
                            <h2 className="font-semibold text-sm">Support Tickets</h2>
                            <p className="text-2xl font-bold">5</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-card border-border">
                    <CardContent className="flex items-center gap-3 p-4">
                        <Wrench className="text-orange-500 h-6 w-6" />
                        <div>
                            <h2 className="font-semibold text-sm">Maintenance Tasks</h2>
                            <p className="text-2xl font-bold">3</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Notices and Alerts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-card border-border">
                    <CardContent className="p-4 flex items-start gap-3">
                        <FileText className="text-purple-500 h-6 w-6 mt-1" />
                        <div>
                            <h2 className="font-semibold text-sm mb-2">Recent Notices</h2>
                            <ul className="text-xs text-muted-foreground space-y-1 list-disc ml-4">
                                <li>Exam schedule released for Term 2</li>
                                <li>Holiday on Nov 5 (Festival)</li>
                                <li>Parent-teacher meeting next week</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-card border-border">
                    <CardContent className="p-4 flex items-start gap-3">
                        <AlertCircle className="text-red-500 h-6 w-6 mt-1" />
                        <div>
                            <h2 className="font-semibold text-sm mb-2">System Alerts</h2>
                            <ul className="text-xs text-muted-foreground space-y-1 list-disc ml-4">
                                <li>Low attendance warning in Grade 10</li>
                                <li>Fee payment delay for 4 students</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
