"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

    const [newTitle, setNewTitle] = useState("");
    const [newDesc, setNewDesc] = useState("");
    const [newSubject, setNewSubject] = useState("");
    const [newDueDate, setNewDueDate] = useState("");

    const addAssignment = () => {
        if (!newTitle || !newDesc || !newSubject || !newDueDate) return;

        const newAssignment: Assignment = {
            id: assignments.length + 1,
            title: newTitle,
            description: newDesc,
            subject: newSubject,
            dueDate: new Date(newDueDate),
        };

        setAssignments([newAssignment, ...assignments]);
        setNewTitle("");
        setNewDesc("");
        setNewSubject("");
        setNewDueDate("");
    };

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">📘 Student Assignments</h2>

            {/* Add Assignment Form (For Teachers/Admin) */}
            <div className="mb-6 grid gap-3">
                <Input placeholder="Assignment Title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                <Textarea placeholder="Assignment Description" value={newDesc} onChange={(e) => setNewDesc(e.target.value)} />
                <Input placeholder="Subject" value={newSubject} onChange={(e) => setNewSubject(e.target.value)} />
                <Input type="date" value={newDueDate} onChange={(e) => setNewDueDate(e.target.value)} />
                <Button onClick={addAssignment}>Add Assignment</Button>
            </div>

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
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default StudentAssignments;
