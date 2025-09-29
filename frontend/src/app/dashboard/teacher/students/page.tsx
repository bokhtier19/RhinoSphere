"use client";
import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "@/lib/api";
import { Delete, Edit, Loader, Trash } from "lucide-react";

interface Student {
    id: number;
    name: string;
    email: string;
    role: string;
    createdAt: Date;
}

const AdminTeacherPage = () => {
    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await fetchFromAPI("api/students", "GET");
                setStudents(data);
            } catch (error) {
                console.error("Failed to fetch Users", error);
            } finally {
                setLoading(false);
            }
        };

        getUsers();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Your Class Students</h2>
            <table className="w-full">
                <thead>
                    <tr className="">
                        <th className="p-2">ID</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Member Since</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id} className="text-center">
                            <td className="p-2">{student.id}</td>
                            <td className="p-2">{student.name}</td>
                            <td className="p-2">{student.email}</td>
                            <td className="p-2"> {new Date(student.createdAt).toLocaleDateString()}</td>
                            <td className="flex gap-2 p-2 justify-center">
                                <Edit />
                                <Trash />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminTeacherPage;
