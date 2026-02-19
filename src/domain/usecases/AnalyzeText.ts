
import { AnalysisResponse } from "../entities/Analysis";

export class AnalyzeTextUseCase {
    async execute(text: string): Promise<AnalysisResponse> {
        if (!text.trim()) {
            throw new Error("Metin boş olamaz.");
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    result: text,
                    score: 1.0,
                    timestamp: new Date().toISOString(),
                    feedback: null // Başlangıçta beğeni yok
                });
            }, 600);
        });
    }
}