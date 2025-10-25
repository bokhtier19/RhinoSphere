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
        <div className="flex items-center justify-center min-h-screen ">
            <form onSubmit={handleSubmit} className="  shadow-[0_4px_20px_0_rgba(0,0,0,0.1),0_0_10px_2px_rgba(0,0,0,0.05)] rounded-2xl flex flex-col gap-4 p-8 w-full max-w-md bg-card">
                <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

                <div className="flex flex-col gap-4">
                    <p>Email:</p>

                    <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                    <p>Full Name:</p>

                    <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                    <p>Password:</p>

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
                                    className={`p-3 rounded-lg border hover:cursor-pointer text-center font-medium transition ${
                                        form.role === role ? "bg-secondary  text-text-primary border-blue-600" : "text-gray-700 border-gray-300 hover:bg-gray-200"
                                    }`}>
                                    {role.charAt(0).toUpperCase() + role.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button type="submit" disabled={loading} className="w-full bg-secondary text-button-text hover:cursor-pointer py-3 rounded-lg hover:bg-secondary-light transition">
                        {loading ? "Registering" : "Register"}
                    </button>
                    <div>
                        <Link href={"/login"} className="flex gap-4 justify-center">
                            Already have an Account ?<span className="underline text-primary hover:cursor-pointer font-semibold text-center">Login</span>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;
