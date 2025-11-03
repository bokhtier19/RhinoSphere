"use client";

import { Button } from "@/components/ui/button";
import { GraduationCap, School, Users } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WelcomePage() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center text-center bg-background text-foreground transition-colors duration-500 px-6">
            {/* Logo / App Name */}
            <motion.div className="flex items-center gap-3 mb-6" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <GraduationCap className="h-12 w-12 text-primary" />
                <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-primary/70  bg-clip-text">
                    Rhino
                    <span className="text-secondary">Sphere</span>
                </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p className="text-lg mb-10 max-w-xl text-muted-foreground" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
                Welcome to <span className="font-semibold text-primary">RhinoSphere</span> – the premium school management platform for{" "}
                <span className="text-secondary">students, teachers, guardians</span>, and <span className="text-secondary/80">admins</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-wrap gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
                <Link href="/login">
                    <Button
                        size="lg"
                        className="px-8 py-5 rounded-xl bg-secondary hover:cursor-pointer
                        font-semibold shadow-md hover:shadow-lg hover:scale-105 hover:bg-secondary/90 transition-all duration-300">
                        Get Started
                    </Button>
                </Link>
                <Link href="/about">
                    <Button
                        size="lg"
                        variant="outline"
                        className="px-8 py-5 rounded-xl border-2 border-primary text-primary
                        font-semibold hover:bg-primary hover:text-secondary-light hover:cursor-pointer hover:scale-105 transition-all duration-300">
                        Learn More
                    </Button>
                </Link>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 1 }}>
                {[
                    {
                        icon: <School className="h-10 w-10 text-primary" />,
                        title: "Smart Dashboard",
                        desc: "Manage classes, schedules, and fees seamlessly.",
                    },
                    {
                        icon: <Users className="h-10 w-10 text-primary" />,
                        title: "Easy Communication",
                        desc: "Instantly connect teachers, guardians, and students.",
                    },
                    {
                        icon: <GraduationCap className="h-10 w-10 text-primary" />,
                        title: "Student Success",
                        desc: "Track growth and help every student excel.",
                    },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -5, scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                        <div className="flex flex-col items-center text-center">
                            {item.icon}
                            <h3 className="font-semibold text-lg mt-3 text-primary">{item.title}</h3>
                            <p className="text-sm mt-2 text-muted-foreground">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
