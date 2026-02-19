export interface AnalysisResponse {
    result: string;
    score: number;
    timestamp: string;
    feedback?: 'up' | 'down' | null; // Beğeni durumu için alan ekledik
}