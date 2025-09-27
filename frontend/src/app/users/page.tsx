"use client";
import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "@/lib/api";
import { Loader } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt:Date;
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
        return <div className="flex items-center justify-center h-screen">
      <Loader className="h-8 w-8 animate-spin text-primary" />
    </div>;
    }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Manage Users</h2>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Role</th>
            <th className="p-2 border">Member Since</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-justify">
              <td className="p-2 border">{user.id}</td>
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.role}</td>
              <td className="p-2 border"> { new Date(user.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
