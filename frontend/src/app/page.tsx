"use client";

import { Button } from "@/components/ui/button";
import { GraduationCap, School, Users } from "lucide-react";
import Link from "next/link";

export default function WelcomePage() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center">
            {/* Logo / App name */}
            <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-12 w-12" />
                <h1 className="text-4xl font-bold tracking-tight">RhinoSchool</h1>
            </div>

            {/* Tagline */}
            <p className="text-lg mb-10 text-center max-w-lg">
                Welcome to <span className="font-semibold">RhinoSchool</span> – the smart school management system for students, teachers, guardians, and admins.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4">
                <Link href="/login">
                    <Button size="lg" className="px-6 hover:cursor-pointer">
                        Get Started
                    </Button>
                </Link>
                <Link href="/about">
                    <Button size="lg" variant="outline" className="px-6 hover:cursor-pointer">
                        Learn More
                    </Button>
                </Link>
            </div>

            {/* Feature Highlights */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl px-6">
                <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-md ">
                    <School className="h-10 w-10  mb-4" />
                    <h3 className="font-semibold text-lg">Smart Dashboard</h3>
                    <p className="text-sm  mt-2">Manage classes, schedules, and fees in one place.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-md">
                    <Users className="h-10 w-10  mb-4" />
                    <h3 className="font-semibold text-lg">Easy Communication</h3>
                    <p className="text-sm   mt-2">Connect teachers, guardians, and students instantly.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-md">
                    <GraduationCap className="h-10 w-10  mb-4" />
                    <h3 className="font-semibold text-lg">Student Success</h3>
                    <p className="text-sm  mt-2">Track progress and help students achieve more.</p>
                </div>
            </div>
        </div>
    );
}
