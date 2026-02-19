import React, { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";

export function AnalysisResult({ result }: { result: string }) {
    const [userFeedback, setUserFeedback] = useState<'up' | 'down' | null>(null);

    if (!result) return null;

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 text-foreground text-base leading-relaxed whitespace-pre-wrap">
                {result}
            </div>
            <div className="mt-4 pt-4 border-t border-border flex items-center gap-6">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                    Sonuçtan memnun musunuz?
                </span>
                <div className="flex gap-3">
                    <button
                        type="button"
                        onClick={() => setUserFeedback('up')}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all ${
                            userFeedback === 'up' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100 text-muted-foreground'
                        }`}
                    >
                        <ThumbsUp size={16} /> <span className="text-sm">Beğendim</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => setUserFeedback('down')}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all ${
                            userFeedback === 'down' ? 'bg-red-100 text-red-700' : 'hover:bg-gray-100 text-muted-foreground'
                        }`}
                    >
                        <ThumbsDown size={16} /> <span className="text-sm">Beğenmedim</span>
                    </button>
                </div>
            </div>
        </div>
    );
}