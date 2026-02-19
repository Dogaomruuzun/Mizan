import { AnalysisResponse } from "../entities/Analysis";

export class AnalyzeTextUseCase {
    async execute(text: string): Promise<AnalysisResponse> {
        if (!text.trim()) {
            throw new Error("Metin boş olamaz.");
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                const isTrue = Math.random() > 0.5;
                resolve({
                    result: isTrue ? "DOĞRU" : "YANLIŞ",
                    score: Math.random(),
                    timestamp: new Date().toISOString()
                });
            }, 1000);
        });
    }
}