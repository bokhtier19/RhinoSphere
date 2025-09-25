"use client";

import { fetchFromAPI } from "@/lib/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RegisterPage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
    });

    const router = useRouter();

    const roles = ["teacher", "student", "guardian"];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRoleSelect = (role: string) => {
        setForm({ ...form, role });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (!form.name || !form.email || !form.password || !form.role) {
            alert("Please fill all fields and select a role!");
            return;
        }

        // call your backend API here
        try {
            await fetchFromAPI("api/auth/register", "POST", { ...form });
            router.push("/login");
        } catch (error) {
            setError("Registration Failed ! Please check ur credentials!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-2xl flex flex-col gap-4 p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                    <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Role Selection */}
                    <div>
                        <p className="mb-2 font-semibold">Select Role</p>
                        <div className="grid grid-cols-3 gap-2">
                            {roles.map((role) => (
                                <button
                                    type="button"
                                    key={role}
                                    onClick={() => handleRoleSelect(role)}
                                    className={`p-3 rounded-lg border text-center font-medium transition ${
                                        form.role === role ? "bg-blue-500 text-white border-blue-600" : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                                    }`}>
                                    {role.charAt(0).toUpperCase() + role.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                        {loading ? "Registering" : "Register"}
                    </button>
                    <div>
                        <Link href={"/login"} className="flex gap-4">
                            Already have an Account ?<span className="underline text-primary text-center">Login</span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
