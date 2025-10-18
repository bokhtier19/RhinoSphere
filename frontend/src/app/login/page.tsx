"use client";

import { fetchFromAPI } from "@/lib/api";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetchFromAPI("api/auth/login", "POST", { email: form.email, password: form.password });

            if (!res?.token) {
                throw new Error("Invalid Token!");
            }

            // Save token to localStorage and cookie
            localStorage.setItem("token", res.token);
            document.cookie = `token=${res.token}; path=/; max-age=3600; Secure; SameSite=Strict`;
            router.push("/dashboard");
        } catch (error) {
            alert("Login failed. Please Check Your credentials.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <form className="shadow-lg rounded-2xl flex flex-col gap-4 bg-card p-8 w-full max-w-md" onSubmit={handleLogin}>
                <h2 className="text-2xl font-bold text-center mb-6">Login to an Account</h2>

                <div className="flex gap-4 flex-col">
                    <p>Email:</p>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => {
                            setForm({ ...form, email: e.target.value });
                        }}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
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
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
                        value={form.password}
                    />
                </div>
                <button className="py-3 px-4 bg-secondary text-primary-foreground font-bold rounded-sm hover:cursor-pointer" type="submit">
                    {loading ? "Logging in..." : "Login"}
                </button>
                <div>
                    <Link href={"/register"} className="flex gap-4 justify-center">
                        Need an Account ?<span className="underline text-primary hover:cursor-pointer font-semibold text-center">Register</span>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
