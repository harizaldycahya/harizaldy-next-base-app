"use client";

import { useState, useEffect } from "react";

const themes = ["light", "dark", "red", "green", "purple"];

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  // Apply theme and persist
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(...themes.map((t) => `theme-${t}`));
    root.classList.add(`theme-${theme}`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm"
    >
      {themes.map((t) => (
        <option key={t} value={t}>
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </option>
      ))}
    </select>
  );
}
