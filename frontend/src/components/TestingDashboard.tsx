import React from "react";

export default function ColorTestDashboard() {
    return (
        <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)] p-6">
            {/* Header */}
            <header className="header text-center py-10 rounded-2xl mb-10">
                <h1 className="text-3xl font-bold mb-2">Color Palette Test Dashboard</h1>
                <p className="text-[var(--color-text-secondary)]">Testing theme colors and UI contrast levels</p>
            </header>

            {/* Primary Colors */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="p-6 rounded-2xl text-center text-white" style={{ background: "var(--color-primary)" }}>
                    Primary
                </div>
                <div className="p-6 rounded-2xl text-center text-white" style={{ background: "var(--color-primary-light)" }}>
                    Primary Light
                </div>
                <div className="p-6 rounded-2xl text-center text-white" style={{ background: "var(--color-primary-bright)" }}>
                    Primary Bright
                </div>
                <div className="p-6 rounded-2xl text-center text-white" style={{ background: "var(--color-primary-gradient-end)" }}>
                    Primary Gradient End
                </div>
            </section>

            {/* Accent Colors */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="p-6 rounded-2xl text-center" style={{ background: "var(--color-accent-yellow)" }}>
                    Accent Yellow
                </div>
                <div className="p-6 rounded-2xl text-center bg-[var(--color-accent-white)] text-[var(--color-text-primary)]">Accent White</div>
            </section>

            {/* Neutral Colors */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="p-6 rounded-2xl text-center bg-[var(--color-background)] border border-[var(--color-border)]">Background</div>
                <div className="p-6 rounded-2xl text-center bg-[var(--color-foreground)] border border-[var(--color-border)]">Foreground</div>
                <div className="p-6 rounded-2xl text-center bg-[var(--color-border)] text-white">Border</div>
                <div className="p-6 rounded-2xl text-center bg-[var(--color-sidebar-hover)]">Sidebar Hover</div>
            </section>

            {/* Buttons */}
            <section className="flex gap-4 justify-center mb-10">
                <button className="btn">Primary Button</button>
                <button className="btn bg-[var(--color-primary-light)] text-[var(--color-text-primary)] hover:bg-[var(--color-primary)]">Light Button</button>
            </section>

            {/* Cards */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card p-6 rounded-2xl shadow-md">
                    <h2 className="font-semibold mb-2">Dashboard Card</h2>
                    <p className="text-[var(--color-text-secondary)]">Testing foreground and text colors</p>
                </div>
                <div className="card p-6 rounded-2xl shadow-md">
                    <h2 className="font-semibold mb-2 text-[var(--color-success-content)]">Success Card</h2>
                    <p className="text-[var(--color-text-secondary)]">Uses success color context</p>
                </div>
                <div className="card p-6 rounded-2xl shadow-md">
                    <h2 className="font-semibold mb-2 text-[var(--color-error-content)]">Error Card</h2>
                    <p className="text-[var(--color-text-secondary)]">Uses error color context</p>
                </div>
            </section>
        </div>
    );
}
