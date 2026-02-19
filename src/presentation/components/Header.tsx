import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../../core/contexts/ThemeContext";
import { NAV_LINKS } from "../../core/constants/navigation";

export function Header() {
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isDark = theme === "dark";

    // Navigasyon linklerini basan yardımcı fonksiyon
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
        <header className="app-header">
            <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4">


                <div className="flex items-center gap-8">
                    <Link to="/" className="text-3xl font-bold hover:text-trt-red transition-colors">
                        Mizan
                    </Link>
                    <nav className="hidden md:flex gap-6 text-md font-medium">
                        {NAV_LINKS.map(link => renderNavLink(link.to, link.label))}
                    </nav>
                </div>


                <div className="flex items-center gap-4">

                    <button
                        onClick={toggleTheme}
                        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 hover:border-trt-red dark:hover:border-trt-red transition-all duration-300"
                    >
                        <Sun size={16} className={isDark ? 'text-gray-500' : 'text-trt-red'} />
                        <div className="w-px h-4 bg-gray-300 dark:bg-gray-600" />
                        <Moon size={16} className={isDark ? 'text-white' : 'text-gray-400'} />
                    </button>

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
    );
}