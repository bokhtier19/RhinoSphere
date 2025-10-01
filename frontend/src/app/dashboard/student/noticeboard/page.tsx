"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pin, PinOff } from "lucide-react";
import { notices } from "@/lib/notices";

interface Notice {
    id: number;
    title: string;
    content: string;
    date: Date;
}

const AdminNoticeBoard = () => {
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

export default AdminNoticeBoard;
