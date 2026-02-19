import { RouterProvider } from 'react-router';
import { ThemeProvider } from './core/contexts/ThemeContext';
import { router } from './presentation/routes';
import './core/styles/theme.css';
import "./core/styles/components/index.css";

export default function App() {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}