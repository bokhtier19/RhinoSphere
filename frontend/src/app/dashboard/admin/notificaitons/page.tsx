"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Notification {
    id: number;
    title: string;
    message: string;
    date: Date;
}

const AdminNotifications = () => {
    const [studentNotifs] = useState<Notification[]>([
        {
            id: 1,
            title: "New Assignment Posted",
            message: "Math Homework due on 5th October.",
            date: new Date(2025, 8, 28),
        },
        {
            id: 2,
            title: "Exam Reminder",
            message: "Mid-term Science exam on 10th October.",
            date: new Date(2025, 8, 30),
        },
    ]);

    const [teacherNotifs] = useState<Notification[]>([
        {
            id: 1,
            title: "Meeting Scheduled",
            message: "Staff meeting on Friday at 10 AM in the conference hall.",
            date: new Date(2025, 8, 27),
        },
        {
            id: 2,
            title: "Assignment Submissions",
            message: "Students have submitted assignments. Review required.",
            date: new Date(2025, 8, 29),
        },
    ]);

    const [guardianNotifs] = useState<Notification[]>([
        {
            id: 1,
            title: "Fee Reminder",
            message: "October fee payment is due by 7th October.",
            date: new Date(2025, 8, 26),
        },
        {
            id: 2,
            title: "PTA Meeting",
            message: "Parent-Teacher meeting on 12th October at 9 AM.",
            date: new Date(2025, 8, 31),
        },
    ]);

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">🔔 Notifications</h2>

            <Tabs defaultValue="students" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="students">Students</TabsTrigger>
                    <TabsTrigger value="teachers">Teachers</TabsTrigger>
                    <TabsTrigger value="guardians">Guardians</TabsTrigger>
                </TabsList>

                {/* Students */}
                <TabsContent value="students">
                    <div className="grid gap-4 mt-4">
                        {studentNotifs.map((notif) => (
                            <Card key={notif.id}>
                                <CardHeader>
                                    <CardTitle>{notif.title}</CardTitle>
                                    <p className="text-xs text-muted-foreground">{notif.date.toLocaleDateString()}</p>
                                </CardHeader>
                                <CardContent>
                                    <p>{notif.message}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                {/* Teachers */}
                <TabsContent value="teachers">
                    <div className="grid gap-4 mt-4">
                        {teacherNotifs.map((notif) => (
                            <Card key={notif.id}>
                                <CardHeader>
                                    <CardTitle>{notif.title}</CardTitle>
                                    <p className="text-xs text-muted-foreground">{notif.date.toLocaleDateString()}</p>
                                </CardHeader>
                                <CardContent>
                                    <p>{notif.message}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                {/* Guardians */}
                <TabsContent value="guardians">
                    <div className="grid gap-4 mt-4">
                        {guardianNotifs.map((notif) => (
                            <Card key={notif.id}>
                                <CardHeader>
                                    <CardTitle>{notif.title}</CardTitle>
                                    <p className="text-xs text-muted-foreground">{notif.date.toLocaleDateString()}</p>
                                </CardHeader>
                                <CardContent>
                                    <p>{notif.message}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default AdminNotifications;
