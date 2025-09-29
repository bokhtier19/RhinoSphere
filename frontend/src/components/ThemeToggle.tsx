"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="px-2 py-2  rounded-lg transition hover:cursor-pointer">
            {theme === "dark" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
        </button>
    );
}
