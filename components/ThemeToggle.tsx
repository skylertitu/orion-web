"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle({
  labelLight = "Cambiar a modo claro",
  labelDark = "Cambiar a modo oscuro",
}: {
  labelLight?: string;
  labelDark?: string;
}) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("portfolio_theme") as "dark" | "light" | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.setAttribute("data-theme", stored);
    } else {
      const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      const initial = prefersLight ? "light" : "dark";
      setTheme(initial);
      document.documentElement.setAttribute("data-theme", initial);
    }
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("portfolio_theme", next);
    } catch {
      // ignore
    }
  }

  if (!mounted) {
    return (
      <button
        type="button"
        className="theme-toggle"
        aria-label={theme === "dark" ? labelLight : labelDark}
        title={theme === "dark" ? labelLight : labelDark}
      >
        <span className="theme-toggle-icon" />
      </button>
    );
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === "dark" ? labelLight : labelDark}
      title={theme === "dark" ? labelLight : labelDark}
    >
      {theme === "dark" ? (
        // Sun icon for dark mode (click to switch to light)
        <svg
          className="theme-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ) : (
        // Moon icon for light mode (click to switch to dark)
        <svg
          className="theme-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
      <span className="theme-toggle-label">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}

