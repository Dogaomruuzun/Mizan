import React from "react";
import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
            <Header />
            <main className="flex-1 overflow-y-auto">
                <div className="page-container">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}