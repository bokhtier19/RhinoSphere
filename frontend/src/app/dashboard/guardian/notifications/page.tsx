"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Notification {
    id: number;
    title: string;
    message: string;
    date: Date;
}

const NotificationsPage = () => {
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
            <h2 className="text-xl font-bold mb-4">Notifications</h2>
            {/* Guardians */}
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
        </div>
    );
};

export default NotificationsPage;
