

export const API_EXAMPLES = {
    main: {
        endpoint: "https://api.mizan.trt.com.tr/v1/analyze",
        payload: {
            text: "TRT Mizan projesi yapay zeka tabanlı bir doğrulama servisidir.",
            detailed_analysis: true,
        },
        response: {
            status: "success",
            data: {
                result: "DOĞRU",
                score: 0.992,
                timestamp: "2026-02-16T17:00:00Z",
            },
        },
    },
    quickCheck: {
        endpoint: "https://api.mizan.trt.com.tr/v1/quick-check",
        payload: { text: "Türkiye'nin başkenti İstanbul'dur." },
        response: { result: "YANLIŞ", confidence: 0.998 },
    },
    batch: {
        endpoint: "https://api.mizan.trt.com.tr/v1/batch",
        payload: { texts: ["Su 100 derecede kaynar.", "Dünya düzdür."] },
        response: {
            results: [
                { result: "DOĞRU", score: 0.99 },
                { result: "YANLIŞ", score: 0.997 },
            ],
        },
    },
    errors: {
        unauthorized: { status: "error", code: 401, message: "Invalid API key" },
        rateLimit: { status: "error", code: 429, message: "Rate limit exceeded", retry_after: 60 },
    },
    streaming: `event: progress
data: {"stage":"kaynaklar taranıyor"}

event: progress
data: {"stage":"model çalışıyor"}

event: done
data: {"result":"DOĞRU","score":0.992}`,
};

export const USAGE_STEPS = [
    {
        title: "1. Metin Girin",
        description: "Analiz etmek istediğiniz metni giriş alanına yazın veya yapıştırın.",
        iconName: "FileText",
    },
    {
        title: "2. Analiz Et",
        description: '"Analiz Et" butonuna tıklayarak işlemi başlatın.',
        iconName: "Zap",
    },
    {
        title: "3. Sonucu Görün",
        description: "Yapay zeka modelimiz sonucu saniyeler içinde size iletecektir.",
        iconName: "CheckCircle",
    },
];