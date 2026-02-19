import React from "react";

export function Footer() {
    return (
        <footer className="app-footer">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-3 text-sm">
                <div className="bg-trt-red px-3 py-1 rounded">
                    <span className="text-white font-bold">TRT</span>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Bilgi Teknolojileri Dairesi Başkanlığı</span>
                <span className="text-gray-700 dark:text-gray-300">© 2026</span>
            </div>
        </footer>
    );
}
