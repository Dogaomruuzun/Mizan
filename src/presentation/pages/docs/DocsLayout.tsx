import React from "react";
import { Outlet } from "react-router";
import { DocsSidebar } from "../../components/docs/DocsSidebar";

export function DocsLayout() {
    return (
        <div className="docs-layout">
            <DocsSidebar />
            <main className="docs-content">
                <Outlet />
            </main>
        </div>
    );
}
