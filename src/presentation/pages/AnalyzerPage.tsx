
import React from "react";
import { Send } from "lucide-react";
import { useAnalyzer } from "../hooks/useAnalyzer";

export function AnalyzerPage() {
    const { input, setInput, output, isAnalyzing, handleAnalyze } = useAnalyzer();

    return (
        <div className="split-layout">

            <div className="panel panel-surface">
                <label className="text-base font-semibold text-foreground mb-2">Metin Girişi</label>
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="textarea-primary"
                    onKeyDown={(e) => e.key === 'Enter' && e.ctrlKey && handleAnalyze()}
                />
                <div className="mt-2 flex justify-between items-center">
                    <p className="text-xs text-gray-600">{input.length} karakter</p>
                    <button onClick={handleAnalyze} disabled={!input.trim() || isAnalyzing} className="btn-primary btn-round">
                        <Send size={18} />
                    </button>
                </div>
            </div>

            <div className="panel panel-surface">
                <label className="text-base font-semibold text-foreground mb-2">Analiz Sonucu</label>
                <div className="relative flex-1 w-full rounded-lg border border-border bg-white dark:bg-black overflow-hidden flex items-center justify-center">
                    {isAnalyzing ? (
                        <div className="w-12 h-12 border-4 border-trt-red border-t-transparent rounded-full animate-spin" />
                    ) : output ? (
                        <div className={`text-6xl font-extrabold ${output === "DOĞRU" ? "text-green-600" : "text-red-600"}`}>
                            {output}
                        </div>
                    ) : (
                        <div className="text-gray-500 italic text-sm">Sonuç bekleniyor...</div>
                    )}
                </div>

                <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                    {output ? "Analiz başarıyla tamamlandı" : "Henüz analiz yapılmadı"}
                </div>
            </div>
        </div>
    );
}