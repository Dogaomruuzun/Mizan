import React, { useState } from "react";
import { Send } from "lucide-react";

export function AnalyzerPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!input.trim()) return;

    setIsAnalyzing(true);

    setTimeout(() => {
      const result = Math.random() > 0.5;
      setOutput(result ? "DOĞRU" : "YANLIŞ");
      setIsAnalyzing(false);
    }, 1000);
  };

  return (
      <div className="split-layout">
        <div className="panel panel-surface">
          <label className="text-base font-semibold text-foreground mb-2">
            Metin Girişi
          </label>

          <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Analiz edilecek metni buraya yazın..."
              className="textarea-primary"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.ctrlKey) {
                  handleAnalyze();
                }
              }}
          />

          <div className="mt-2 flex justify-between items-center">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {input.length} karakter
            </p>

            <button
                type="button"
                onClick={handleAnalyze}
                disabled={!input.trim() || isAnalyzing}
                className="btn-primary btn-round disabled:opacity-50"
                title="Gönder"
                aria-label="Metni analiz et"
            >
              <Send size={18} />
            </button>
          </div>
        </div>

        <div className="panel panel-surface">
          <label className="text-base font-semibold text-foreground mb-2">
            Analiz Sonucu
          </label>

          <div className="relative flex-1 w-full rounded-lg border border-border bg-white dark:bg-black overflow-hidden">
            {isAnalyzing ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-trt-red border-t-transparent rounded-full animate-spin" />
                </div>
            ) : output ? (
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div
                      className={`text-5xl md:text-6xl font-extrabold ${
                          output === "DOĞRU"
                              ? "text-green-600 dark:text-green-400"
                              : "text-red-600 dark:text-red-400"
                      }`}
                  >
                    {output}
                  </div>
                </div>
            ) : (
                <div className="flex items-center justify-center h-full text-gray-500 italic text-sm">
                  Sonuç bekleniyor...
                </div>
            )}
          </div>

          <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
            {output ? "Sonuç üretildi" : "Henüz analiz yapılmadı"}
          </div>
        </div>
      </div>
  );
}