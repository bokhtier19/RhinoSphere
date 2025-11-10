"use client";
import ListSearch from "@/components/ListSearch";
import Pagination from "@/components/Pagination";
import TableList from "@/components/TableList";
import { FilterIcon, Plus, SortDesc } from "lucide-react";
import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "@/lib/api";

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    createdAt: Date;
}

const AllUsersPage = () => {
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
    return (
        <div className="w-full">
            {/* headers */}
            <div className="flex flex-col md:flex-row justify-between items-center ">
                <div>
                    <p className="hidden md:block text-primary">All Users</p>
                </div>
                <div className="flex md:flex-row flex-col justify-between items-center gap-4">
                    <ListSearch />
                    <div className="flex gap-4 justify-between items-center">
                        <button className="bg-secondary p-2 rounded-full">
                            <FilterIcon className="w-4 h-4 text-white" />
                        </button>
                        <button className="bg-secondary p-2 rounded-full">
                            <Plus className="w-4 h-4 text-white" />
                        </button>
                        <button className="bg-secondary p-2 rounded-full">
                            <SortDesc className="w-4 h-4 text-white" />
                        </button>
                    </div>
                </div>
            </div>
            {/* Lists */}
            <TableList data={users} />

            {/* Pagination */}
            <Pagination />
        </div>
    );
};

export default AllUsersPage;
