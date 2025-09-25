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
        <div className="flex flex-col gap-6 items-center justify-center min-h-screen ">
            <form className="flex flex-col shadow-2xl  gap-4 items-center justify-center  border-2 border-primary p-8 rounded-lg" onSubmit={handleLogin}>
                <div className="flex gap-2 flex-col">
                    <p>Email:</p>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => {
                            setForm({ ...form, email: e.target.value });
                        }}
                        className="w-full border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 focus:border-gray-500"
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
                        className="w-full border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 focus:border-gray-500"
                        value={form.password}
                    />
                </div>
                <button className="py-2 px-4 bg-primary text-white font-bold rounded-sm " type="submit">
                    {loading ? "Logging in..." : "Login"}
                </button>
                <div>
                    <Link href={"/register"} className="">
                        Need an Account ?<p className="underline text-primary text-center">Register</p>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
