"use client";

import Link from "next/link";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 items-center flex flex-col w-full">
            <div className="bg-blue-600 text-white p-4 w-full items-center flex">
                <h1 className="text-2xl font-bold">Student Management</h1>
            </div>

            <div className="p-8">
                <div className="bg-white shadow-lg rounded-lg p-6 w-full items-center flex flex-col gap-4">
                    <h2 className="text-text text-xl mb-4">Welcome Back</h2>
                    <p>The Best School Management App</p>
                    <Link href={"/login"}>
                        <button className="bg-secondary hover:bg-secondary-dark hover:cursor-pointer text-white px-4 py-2 rounded">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
