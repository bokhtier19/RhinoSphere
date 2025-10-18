"use client";

import { Button } from "@/components/ui/button";
import { GraduationCap, School, Users } from "lucide-react";
import Link from "next/link";

export default function WelcomePage() {
    return (
        <div className="flex flex-col min-h-screen header items-center justify-center bg-[var(--color-background)] text-[var(--color-copy)] transition-colors duration-300">
            {/* Logo / App name */}
            <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-12 w-12 text-[var(--color-primary)]" />
                <h1 className="text-4xl font-bold tracking-tight text-[var(--color-primary)]">RhinoSphere</h1>
            </div>

            {/* Tagline */}
            <p className="text-lg mb-10 text-center max-w-lg text-[var(--color-copy-light)]">
                Welcome to <span className="font-semibold text-[var(--color-primary)]">RhinoSphere</span> – the smart school management system for students, teachers, guardians, and admins.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4">
                <Link href="/login">
                    <Button
                        size="lg"
                        className="px-6 bg-[var(--color-secondary)] text-[var(--color-primary-content)] border border-[var(--color-secondary-dark)] hover:bg-[var(--color-secondary-dark)] hover:text-[var(--color-secondary-content)] hover:cursor-pointer">
                        Get Started
                    </Button>
                </Link>
                <Link href="/about">
                    <Button
                        size="lg"
                        variant="outline"
                        className="px-6 bg-transparent text-[var(--color-secondary)] border border-[var(--color-secondary)] hover:bg-[var(--color-secondary-light)] hover:text-[var(--color-secondary-content)] hover:cursor-pointer">
                        Learn More
                    </Button>
                </Link>
            </div>

            {/* Feature Highlights */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl px-6">
                {/* Card 1 */}
                <div className="starting_page_cards">
                    <School className="h-10 w-10 mb-4 text-[var(--color-primary)]" />
                    <h3 className="font-semibold text-lg text-[var(--color-primary-light)]">Smart Dashboard</h3>
                    <p className="text-sm mt-2 text-[var(--color-copy-light)]">Manage classes, schedules, and fees in one place.</p>
                </div>

                {/* Card 2 */}
                <div className="starting_page_cards">
                    <Users className="h-10 w-10 mb-4 text-[var(--color-primary)]" />
                    <h3 className="font-semibold text-lg text-[var(--color-primary-light)]">Easy Communication</h3>
                    <p className="text-sm mt-2 text-[var(--color-copy-light)]">Connect teachers, guardians, and students instantly.</p>
                </div>

                {/* Card 3 */}
                <div className="starting_page_cards">
                    <GraduationCap className="h-10 w-10 mb-4 text-[var(--color-primary)]" />
                    <h3 className="font-semibold text-lg text-[var(--color-primary-light)]">Student Success</h3>
                    <p className="text-sm mt-2 text-[var(--color-copy-light)]">Track progress and help students achieve more.</p>
                </div>
            </div>
        </div>
    );
}
