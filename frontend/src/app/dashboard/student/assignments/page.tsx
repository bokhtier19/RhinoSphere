"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload } from "lucide-react";

interface Assignment {
    id: number;
    title: string;
    description: string;
    dueDate: Date;
    subject: string;
}

const StudentAssignments = () => {
    const [assignments, setAssignments] = useState<Assignment[]>([
        {
            id: 1,
            title: "Math Homework",
            description: "Solve exercises 1–10 from Chapter 5 (Algebra).",
            dueDate: new Date(2025, 9, 5),
            subject: "Mathematics",
        },
        {
            id: 2,
            title: "History Essay",
            description: "Write a 500-word essay on The French Revolution.",
            dueDate: new Date(2025, 9, 8),
            subject: "History",
        },
    ]);

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">My Assignments</h2>

            {/* Assignments List */}
            <div className="grid gap-4">
                {assignments.map((assignment) => (
                    <Card key={assignment.id}>
                        <CardHeader>
                            <CardTitle>{assignment.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">
                                Subject: {assignment.subject} | Due: {assignment.dueDate.toLocaleDateString()}
                            </p>
                        </CardHeader>
                        <CardContent>
                            <p>{assignment.description}</p>
                        </CardContent>
                        <div className="flex bg-primary text-primary-foreground font-semibold gap-2 text-sm hover:cursor-pointer items-center px-8 border w-fit py-1 mx-4 rounded-sm">
                            <Upload />
                            Upload Assignment
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default StudentAssignments;
