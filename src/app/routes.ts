import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { AnalyzerPage } from "./components/AnalyzerPage";
import { HowToUsePage } from "./components/HowToUsePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: AnalyzerPage },
      { path: "how-to-use", Component: HowToUsePage },
    ],
  },
]);
