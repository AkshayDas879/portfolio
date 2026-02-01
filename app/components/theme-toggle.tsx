"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/theme-context";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
        >
            {theme === "light" ? (
                <Moon className="w-5 h-5 text-slate-600" />
            ) : (
                <Sun className="w-5 h-5 text-slate-300" />
            )}
        </button>
    );
}
