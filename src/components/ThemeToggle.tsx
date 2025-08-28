"use client";

import { useState, useEffect } from "react";

// Full theme list
const themes = [
  "light",
  "dark",
  "youtube-light", "youtube-dark",
  "google-light", "google-dark",
  "bootstrap-light", "bootstrap-dark", 'eco-dark', 'eco-light'
];

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    // Remove all theme classes
    root.classList.remove(
      "theme-dark",
      "theme-youtube-light", "theme-youtube-dark",
      "theme-google-light", "theme-google-dark",
      "theme-bootstrap-light", "theme-bootstrap-dark", 'theme-eco-dark', 'theme-eco-light'
    );

    if (theme !== "light") {
      root.classList.add(`theme-${theme}`);
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative inline-block">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="p-3 pr-10 rounded-lg text-sm shadow cursor-pointer appearance-none"
        style={{
          backgroundColor: "var(--color-primary)",
          color: "#fff",
          border: "1px solid var(--color-primary)",
        }}
      >
        {themes.map((t) => (
          <option
            key={t}
            value={t}
            style={{
              backgroundColor: "var(--color-bg)",
              color: "var(--color-text)",
            }}
          >
            {t
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </option>
        ))}
      </select>

      {/* Small SVG chevron */}
      <svg
        className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="none"
        stroke="white"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>


  );
}
