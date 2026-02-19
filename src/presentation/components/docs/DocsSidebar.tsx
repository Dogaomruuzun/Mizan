import React from "react";
import { Link, useLocation } from "react-router";
import { BookOpen, KeyRound, AlertTriangle, Braces, GitBranch } from "lucide-react";
import { DOCS_MENU } from "../../../core/constants/docs-content";

const iconComponents: Record<string, React.ElementType> = {
    BookOpen,
    KeyRound,
    AlertTriangle,
    Braces,
    GitBranch,
};

export function DocsSidebar() {
    const location = useLocation();

    const isActive = (path: string) => {
        if (path === "/how-to-use") {
            return location.pathname === "/how-to-use" || location.pathname === "/how-to-use/";
        }
        return location.pathname === path;
    };

    return (
        <>
            {/* Desktop sidebar */}
            <aside className="docs-sidebar hidden md:flex flex-col">
                <div className="px-5 pt-6 pb-4">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                        API Referansı
                    </h2>
                </div>
                <nav className="flex-1 px-3 pb-6 space-y-1">
                    {DOCS_MENU.map((item) => {
                        const Icon = iconComponents[item.iconName];
                        const active = isActive(item.path);
                        return (
                            <Link
                                key={item.id}
                                to={item.path}
                                className={`
                                    flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-medium transition-all duration-150
                                    ${active
                                        ? "bg-trt-red/10 text-trt-red border-l-[3px] border-trt-red pl-[9px]"
                                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/60 hover:text-gray-900 dark:hover:text-gray-200"
                                    }
                                `}
                            >
                                <Icon size={18} className={active ? "text-trt-red" : "text-gray-400 dark:text-gray-500"} />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            {/* Mobile horizontal nav */}
            <div className="docs-mobile-nav md:hidden">
                <nav className="flex overflow-x-auto gap-1 px-3 py-2 no-scrollbar">
                    {DOCS_MENU.map((item) => {
                        const active = isActive(item.path);
                        return (
                            <Link
                                key={item.id}
                                to={item.path}
                                className={`
                                    flex-shrink-0 px-4 py-2 rounded-full text-[13px] font-medium transition-all whitespace-nowrap
                                    ${active
                                        ? "bg-trt-red text-white"
                                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                                    }
                                `}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </>
    );
}
