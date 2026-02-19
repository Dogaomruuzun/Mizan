import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface DocsCodeBlockProps {
    code: string;
    title?: string;
    variant?: "default" | "success" | "blue" | "error";
}

const variantClasses: Record<string, string> = {
    default: "text-gray-200",
    success: "text-green-400",
    blue: "text-blue-400",
    error: "text-red-300",
};

export function DocsCodeBlock({ code, title, variant = "default" }: DocsCodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group rounded-xl overflow-hidden border border-gray-800 bg-[#0f1117]">
            {title && (
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-800 bg-[#161822]">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{title}</span>
                    <button
                        onClick={handleCopy}
                        className="p-1.5 rounded-md hover:bg-gray-700/50 transition-colors"
                        title="Kopyala"
                    >
                        {copied
                            ? <Check size={14} className="text-green-400" />
                            : <Copy size={14} className="text-gray-500 group-hover:text-gray-300" />
                        }
                    </button>
                </div>
            )}
            {!title && (
                <button
                    onClick={handleCopy}
                    className="absolute top-3 right-3 p-1.5 rounded-md hover:bg-gray-700/50 transition-colors opacity-0 group-hover:opacity-100"
                    title="Kopyala"
                >
                    {copied
                        ? <Check size={14} className="text-green-400" />
                        : <Copy size={14} className="text-gray-500" />
                    }
                </button>
            )}
            <pre className={`p-4 text-[13px] font-mono leading-relaxed overflow-x-auto ${variantClasses[variant]}`}>
                {code}
            </pre>
        </div>
    );
}
