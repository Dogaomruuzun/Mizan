import { useState, useMemo } from "react";
import { AnalyzeTextUseCase } from "../../domain/usecases/AnalyzeText";

export function useAnalyzer() {
    const [input, setInput] = useState("");
    // Tipi sadece string olarak değiştirdik, karışıklığı önledik
    const [output, setOutput] = useState<string>("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const analyzeUseCase = useMemo(() => new AnalyzeTextUseCase(), []);

    const handleAnalyze = async () => {
        if (!input.trim() || isAnalyzing) return;

        setIsAnalyzing(true);
        setOutput(""); // Yeni analiz başlarken eski sonucu temizle

        try {
            const response = await analyzeUseCase.execute(input);
            // Burada response.result (yani yazdığın metin) geliyor
            setOutput(response.result);
        } catch (error) {
            console.error("Analiz hatası:", error);
        } finally {
            setIsAnalyzing(false);
        }
    };

    return { input, setInput, output, isAnalyzing, handleAnalyze };
}