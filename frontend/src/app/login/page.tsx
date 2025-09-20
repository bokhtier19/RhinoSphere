"use client";

import { fetchFromAPI } from "@/lib/api";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetchFromAPI("api/auth/login", "POST", { ...form, role: "guardian" });

            // Save token to localStorage and cookie
            localStorage.setItem("token", res.token);
            document.cookie = `token=${res.token}; path=/; max-age=3600; Secure; SameSite=Strict`;
            router.push("/dashboard");
            alert("Login successful!");
        } catch (error) {
            alert("Login failed. Please Check Your credentials.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
            <form
                className="flex flex-col  gap-4 items-center justify-center bg-lime-950 p-8 rounded-lg"
                onSubmit={handleSubmit}
            >
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
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
            <div>
                <Link href={"/register"} className="text-red-500">
                    Create an Account
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;
