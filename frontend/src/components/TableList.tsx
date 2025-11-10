"use client";
import React from "react";
import { Edit, Trash } from "lucide-react";

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    createdAt: Date;
}

interface TableListProps {
    data: User[];
}

const TableList: React.FC<TableListProps> = ({ data }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="p-2">ID</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Role</th>
                        <th className="p-2">Member Since</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.id} className="text-center border-b">
                            <td className="p-2">{user.id}</td>
                            <td className="p-2">{user.name}</td>
                            <td className="p-2">{user.email}</td>
                            <td className="p-2">{user.role}</td>
                            <td className="p-2">{new Date(user.createdAt).toLocaleDateString()}</td>
                            <td className="flex gap-2 p-2 justify-center">
                                <Edit className="cursor-pointer text-blue-500" />
                                <Trash className="cursor-pointer text-red-500" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableList;
