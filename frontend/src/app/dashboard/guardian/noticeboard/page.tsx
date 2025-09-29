"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pin, PinOff } from "lucide-react";

interface Notice {
    id: number;
    title: string;
    content: string;
    date: Date;
}

const GeneralNoticeBoard = () => {
    const [notices, setNotices] = useState<Notice[]>([
        {
            id: 1,
            title: "Holiday Announcement",
            content: "School will remain closed on October 2nd for Gandhi Jayanti.",
            date: new Date(2025, 8, 25),
        },
        {
            id: 2,
            title: "Exam Schedule",
            content: "Mid-term exams will start from November 15th. Timetable will be shared soon.",
            date: new Date(2025, 8, 27),
        },
        {
            id: 3,
            title: "Exam Schedule",
            content: "Mid-term exams will start from November 15th. Timetable will be shared soon.",
            date: new Date(2025, 8, 27),
        },
    ]);

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">School Noticeboard</h2>
            <div className="flex gap-4">
                {/* Notices List */}
                <div className="flex-1 grid grid-cols-2 gap-8">
                    {notices.map((notice) => (
                        <Card key={notice.id}>
                            <div className="flex justify-end px-8">
                                <Pin className="rotate-45" />
                            </div>
                            <CardHeader>
                                <CardTitle>{notice.title}</CardTitle>
                                <p className="text-sm text-muted-foreground ">Dated: {notice.date.toLocaleDateString()}</p>
                            </CardHeader>
                            <CardContent>
                                <p>{notice.content}</p>
                                <p className="mt-10 text-sm ">Regards,</p>
                                <p className="text-sm">School Management</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GeneralNoticeBoard;
