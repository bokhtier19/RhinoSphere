"use client";
import React from "react";
import { resources } from "@/lib/resources";

export default function StudentResourcesPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Study Materials</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((res) => (
                    <div key={res.id} className="rounded-xl p-5 bg-card shadow hover:shadow-lg flex flex-col justify-around gap-2 transition">
                        <div className="flex items-center gap-3 mb-3">
                            <res.icon />
                            <h2 className="text-lg font-semibold">{res.title}</h2>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{res.description}</p>
                        <div className="flex justify-end">
                            <a
                                href={res.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm px-4 py-2 w-fit justify-end rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark transition mt-auto">
                                {res.type}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
