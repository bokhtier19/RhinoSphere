"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Reply, Trash } from "lucide-react";

interface Message {
    id: number;
    sender: string;
    subject: string;
    content: string;
    date: string;
}

const AdminMessagesPage = () => {
    const [messages] = useState<Message[]>([
        {
            id: 1,
            sender: "John Doe",
            subject: "Leave request",
            content: "I need to take leave tomorrow.",
            date: "2025-09-25",
        },
        {
            id: 2,
            sender: "Jane Smith",
            subject: "Classroom issue",
            content: "Projector in room 201 is not working.",
            date: "2025-09-24",
        },
    ]);

    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
    const [reply, setReply] = useState("");

    const handleSendReply = () => {
        if (selectedMessage) {
            console.log(`Replying to ${selectedMessage.sender}: ${reply}`);
            setReply("");
            setSelectedMessage(null);
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Mail className="h-5 w-5" /> Admin Messages
            </h2>

            <table className="w-full border">
                <thead className="">
                    <tr>
                        <th className="p-2">id</th>
                        <th className="p-2">Sender</th>
                        <th className="p-2">Subject</th>
                        <th className="p-2">Date</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map((msg) => (
                        <tr key={msg.id} className="border-t text-center">
                            <td className="p-2">{msg.id}</td>
                            <td className="p-2">{msg.sender}</td>
                            <td className="p-2">{msg.subject}</td>
                            <td className="p-2">{msg.date}</td>
                            <td className="p-2 flex gap-2 items-center justify-center">
                                <Button variant="outline" size="sm" onClick={() => setSelectedMessage(msg)} className="flex items-center gap-1">
                                    <Reply className="h-4 w-4" /> Reply
                                </Button>
                                <Trash />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Reply Modal */}
            <Dialog open={!!selectedMessage} onOpenChange={() => setSelectedMessage(null)}>
                <DialogContent className="bg-secondary-dark text-white">
                    <DialogHeader>
                        <DialogTitle>
                            Reply to {selectedMessage?.sender} — {selectedMessage?.subject}
                        </DialogTitle>
                    </DialogHeader>
                    <p className="text-sm mb-2">Message : {selectedMessage?.content}</p>
                    <Textarea placeholder="Write your reply..." value={reply} onChange={(e) => setReply(e.target.value)} className="mb-4 bg-white text-black" />
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setSelectedMessage(null)}>
                            Cancel
                        </Button>
                        <Button onClick={handleSendReply}>Send Reply</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AdminMessagesPage;
