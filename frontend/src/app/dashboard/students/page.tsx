"use client";

import { fetchFromAPI } from "@/lib/api";
import React, { useState, useEffect } from "react";

type Student = {
    id: number;
    name: string;
    age: number;
    grade: string;
    email: string;
};

const StudentsPage = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchStudents = async () => {
        const token = localStorage.getItem("token") ?? undefined;
        try {
            const data: Student[] = await fetchFromAPI("api/students", "GET", undefined, token);
            setStudents(data);
        } catch (error) {
            console.error(error);
            alert("Error fetching students");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    if (loading) return <p className="p-6">Loading students...</p>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Students</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 text-left">ID</th>
                            <th className="py-2 px-4 text-left">Name</th>
                            <th className="py-2 px-4 text-left">Age</th>
                            <th className="py-2 px-4 text-left">Grade</th>
                            <th className="py-2 px-4 text-left">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td className="py-2 px-4">{student.id}</td>
                                <td className="py-2 px-4">{student.name}</td>
                                <td className="py-2 px-4">{student.age}</td>
                                <td className="py-2 px-4">{student.grade}</td>
                                <td className="py-2 px-4">{student.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentsPage;
