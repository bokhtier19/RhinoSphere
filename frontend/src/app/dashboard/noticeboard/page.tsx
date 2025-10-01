"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Notice {
    id: number;
    title: string;
    content: string;
    date: Date;
}

const AdminNoticeBoard = () => {
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
    ]);

    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");

    const addNotice = () => {
        if (!newTitle.trim() || !newContent.trim()) return;

        const newNotice: Notice = {
            id: notices.length + 1,
            title: newTitle,
            content: newContent,
            date: new Date(),
        };
        setNotices([newNotice, ...notices]); // prepend latest
        setNewTitle("");
        setNewContent("");
    };

    return (
        <div className="p-6 w-full">
            <h2 className="text-xl font-bold mb-4 w-full">School Noticeboard</h2>
            <div className="flex gap-4">
                {/* Add Notice Form */}
                <div className="mb-6 space-y-3 flex gap-2 flex-1 flex-col">
                    <Input placeholder="Notice Title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                    <Textarea placeholder="Notice Content" value={newContent} onChange={(e) => setNewContent(e.target.value)} />
                    <Button onClick={addNotice}>Post Notice</Button>
                </div>

                {/* Notices List */}
                <div className="flex-1 flex flex-col gap-4">
                    {notices.map((notice) => (
                        <Card key={notice.id}>
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

export default AdminNoticeBoard;
