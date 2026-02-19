// src/presentation/hooks/useAnalyzer.ts
import { useState, useMemo } from "react"; // 1. useMemo ekledik
import { AnalyzeTextUseCase } from "../../domain/usecases/AnalyzeText";
import { AnalysisStatus } from "../../domain/entities/Analysis";

export function useAnalyzer() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState<AnalysisStatus | "">("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    // 2. useCase nesnesini her render'da yeniden oluşturmamak için memoize ediyoruz
    const analyzeUseCase = useMemo(() => new AnalyzeTextUseCase(), []);

    const handleAnalyze = async () => {
        if (!input.trim() || isAnalyzing) return;

        setIsAnalyzing(true);
        // İsteğe bağlı: Yeni analiz başlarken eski sonucu temizlemek istersen:
        // setOutput("");

        try {
            const response = await analyzeUseCase.execute(input);
            setOutput(response.result);
        } catch (error) {
            // Kullanıcıya hata göstermek istersen buraya bir error state'i de eklenebilir
            console.error("Analiz hatası:", error);
        } finally {
            setIsAnalyzing(false);
        }
    };

    return { input, setInput, output, isAnalyzing, handleAnalyze };
}