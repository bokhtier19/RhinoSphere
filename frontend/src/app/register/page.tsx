"use client";

import { fetchFromAPI } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterPage = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetchFromAPI("api/auth/register", "POST", { ...form, role: "guardian" });

            router.push("/dashboard");

            alert("Registration successful!");
        } catch (error) {
            alert("Registration failed. Please Check Your Credentials.");
        }
    };

    return (
        <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
            <form
                className="flex flex-col  gap-4 items-center justify-center bg-lime-950 p-8 rounded-lg"
                onSubmit={handleSubmit}
            >
                <div className="flex gap-2 flex-col">
                    <p>Username:</p>
                    <input
                        id="name"
                        type="text"
                        placeholder="Name"
                        onChange={(e) => {
                            setForm({ ...form, name: e.target.value });
                        }}
                        value={form.name}
                        className="border border-lime-500 rounded-md p-2"
                    />
                </div>

                <div className="flex gap-2 flex-col">
                    <p>Email:</p>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => {
                            setForm({ ...form, email: e.target.value });
                        }}
                        className="border border-lime-500 rounded-md p-2"
                        value={form.email}
                    />
                </div>
                <div className="flex gap-2 flex-col">
                    <p>Password:</p>
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => {
                            setForm({ ...form, password: e.target.value });
                        }}
                        className="border border-lime-500 rounded-md p-2"
                        value={form.password}
                    />
                </div>
                <button className="py-2 px-4 bg-lime-800 rounded-xl " type="submit">
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;
