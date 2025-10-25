"use client";
import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "@/lib/api";
import { Delete, Edit, Loader, Trash } from "lucide-react";

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    createdAt: Date;
}

const UserPage = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await fetchFromAPI("api/auth/users", "GET");
                setUsers(data);
            } catch (error) {
                console.error("Failed to fetch Users", error);
            } finally {
                setLoading(false);
            }
        };

        getUsers();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="p-6 w-full">
            <h2 className="text-xl font-bold mb-4">Manage All Users</h2>
            <table className="w-full">
                <thead>
                    <tr className="">
                        <th className="p-2">ID</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Role</th>
                        <th className="p-2">Member Since</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="text-center">
                            <td className="p-2">{user.id}</td>
                            <td className="p-2">{user.name}</td>
                            <td className="p-2">{user.email}</td>
                            <td className="p-2">{user.role}</td>
                            <td className="p-2"> {new Date(user.createdAt).toLocaleDateString()}</td>
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

export default UserPage;
