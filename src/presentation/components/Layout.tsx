import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../../core/contexts/ThemeContext";
import { Footer } from "./Footer";
import { NAV_LINKS } from "../../core/constants/navigation";

export function Layout() {
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isDark = theme === "dark";

    // Yardımcı render fonksiyonu (Tekrarı önler)
    const renderNavLink = (to: string, label: string, isMobile = false) => {
        const isActive = location.pathname === to;
        const baseClass = isMobile
            ? "py-2 px-3 rounded transition-colors"
            : "transition-colors";

        const activeClass = isActive
            ? "text-trt-red font-semibold " + (isMobile ? "bg-trt-red/10" : "")
            : "text-foreground hover:text-trt-red " + (isMobile ? "hover:bg-gray-100 dark:hover:bg-gray-700" : "");

        return (
            <Link
                key={to}
                to={to}
                onClick={() => isMobile && setMobileMenuOpen(false)}
                className={`${baseClass} ${activeClass}`}
            >
                {label}
            </Link>
        );
    };

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
            <header className="app-header">
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">


                    <div className="flex items-center gap-8">
                        <Link to="/" className="text-2xl font-bold hover:text-trt-red transition-colors">
                            Mizan
                        </Link>
                        <nav className="hidden md:flex gap-6 text-sm font-medium">
                            {NAV_LINKS.map(link => renderNavLink(link.to, link.label))}
                        </nav>
                    </div>


                    <div className="flex items-center gap-4">
                        <ThemeToggleButton isDark={isDark} onToggle={toggleTheme} />

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
                        >
                            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-border bg-card">
                        <nav className="flex flex-col p-4 gap-3">
                            {NAV_LINKS.map(link => renderNavLink(link.to, link.label, true))}
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

function ThemeToggleButton({ isDark, onToggle }: { isDark: boolean, onToggle: () => void }) {
    return (
        <button
            onClick={onToggle}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 hover:border-trt-red dark:hover:border-trt-red transition-all duration-300"
        >
            <Sun size={16} className={isDark ? 'text-gray-500' : 'text-trt-red'} />
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-600" />
            <Moon size={16} className={isDark ? 'text-white' : 'text-gray-400'} />
        </button>
    );
}