export type AnalysisStatus = "DOĞRU" | "YANLIŞ";

export interface AnalysisResponse {
    result: AnalysisStatus;
    score?: number;
    timestamp?: string;
}