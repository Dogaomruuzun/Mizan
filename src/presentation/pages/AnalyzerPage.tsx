import React from "react";
import { Send } from "lucide-react";
import { useAnalyzer } from "../hooks/useAnalyzer";
import { AnalysisResult } from "../components/AnalysisResult";

export function AnalyzerPage() {
    const { input, setInput, output, isAnalyzing, handleAnalyze } = useAnalyzer();

    return (
        <div className="split-layout">
            {/* SOL PANEL: METİN GİRİŞİ */}
            <div className="panel panel-surface">
                <label className="text-base font-semibold text-foreground mb-2">Metin Girişi</label>
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="textarea-primary"
                    placeholder="Analiz edilecek metni buraya yazın..."
                    onKeyDown={(e) => e.key === 'Enter' && e.ctrlKey && handleAnalyze()}
                />
                <div className="mt-2 flex justify-between items-center">
                    <p className="text-xs text-gray-600">{input.length} karakter</p>
                    <button
                        onClick={handleAnalyze}
                        disabled={!input.trim() || isAnalyzing}
                        className="btn-primary btn-round"
                    >
                        <Send size={18} />
                    </button>
                </div>
            </div>

            {/* SAĞ PANEL: ANALİZ SONUCU */}
            <div className="panel panel-surface">
                <label className="text-base font-semibold text-foreground mb-2">Analiz Sonucu</label>

                <div className="relative flex-1 w-full rounded-lg border border-border bg-white dark:bg-black overflow-y-auto p-4">
                    {isAnalyzing ? (
                        /* Yükleniyor Ekranı */
                        <div className="h-full flex items-center justify-center">
                            <div className="w-12 h-12 border-4 border-trt-red border-t-transparent rounded-full animate-spin" />
                        </div>
                    ) : output ? (
                        /* YENİ BİLEŞEN: İşte burada çağırıyoruz */
                        <AnalysisResult result={output} />
                    ) : (
                        /* Boş Durum */
                        <div className="h-full flex items-center justify-center text-gray-500 italic text-sm">
                            Sonuç bekleniyor...
                        </div>
                    )}
                </div>

                <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                    {output ? "Analiz başarıyla tamamlandı" : "Henüz analiz yapılmadı"}
                </div>
            </div>
        </div>
    );
}