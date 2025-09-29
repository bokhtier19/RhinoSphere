"use client";

export default function ThemeTestCard() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="p-6 rounded-xl shadow-md bg-card text-card-foreground">
                <h2 className="text-xl font-bold">Theme Test</h2>
                <p className="text-sm">Switch theme to see me change colors 🎨</p>
                <div className="mt-4">
                    <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary-dark transition">Button</button>
                </div>
            </div>
        </div>
    );
}
