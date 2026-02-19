// src/presentation/routes.tsx
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { AnalyzerPage } from "./pages/AnalyzerPage";
import { HowToUsePage } from "./pages/HowToUsePage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: AnalyzerPage
            },
            {
                path: "how-to-use",
                Component: HowToUsePage
            },
        ],
    },
]);