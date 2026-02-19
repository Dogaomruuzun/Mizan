import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { Footer } from "./Footer";

const navLinks = [
  { to: "/", label: "Analiz" },
  { to: "/how-to-use", label: "Nasıl Kullanılır" },
];

export function Layout() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isDark = theme === "dark";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
      <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
        <header className="app-header">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
            {/* LEFT SIDE */}
            <div className="flex items-center gap-8">
              <Link to="/" className="text-2xl font-bold text-foreground hover:text-trt-red transition-colors">
                Mizan
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex gap-6 text-sm font-medium">
                {navLinks.map(({ to, label }) => (
                    <Link
                        key={to}
                        to={to}
                        className={`transition-colors ${
                            location.pathname === to
                                ? "text-trt-red font-semibold"
                                : "text-foreground hover:text-trt-red"
                        }`}
                    >
                      {label}
                    </Link>
                ))}
              </nav>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle - Red, White, Black */}
              <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 hover:border-trt-red dark:hover:border-trt-red transition-all duration-300"
                  aria-label="Toggle theme"
                  title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                <Sun
                    size={16}
                    className={`transition-all duration-300 ${
                        isDark ? 'text-gray-500' : 'text-trt-red'
                    }`}
                />
                <div className={`w-px h-4 bg-gray-300 dark:bg-gray-600`} />
                <Moon
                    size={16}
                    className={`transition-all duration-300 ${
                        isDark ? 'text-white' : 'text-gray-400'
                    }`}
                />
              </button>

              {/* Mobile Menu Button */}
              <button
                  onClick={() => setMobileMenuOpen((o) => !o)}
                  className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {mobileMenuOpen && (
              <div className="md:hidden border-t border-border bg-card">
                <nav className="flex flex-col p-4 gap-3">
                  {navLinks.map(({ to, label }) => (
                      <Link
                          key={to}
                          to={to}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`py-2 px-3 rounded transition-colors ${
                              location.pathname === to
                                  ? "text-trt-red font-semibold bg-trt-red/10"
                                  : "text-foreground hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                      >
                        {label}
                      </Link>
                  ))}
                </nav>
              </div>
          )}
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="page-container">
            <Outlet />
          </div>
        </main>

        <Footer />
      </div>
  );
}