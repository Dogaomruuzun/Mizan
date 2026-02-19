

export const USAGE_STEPS = [
    {
        iconName: "FileText",
        title: "1. Metin Girin",
        description: "Analiz etmek istediğiniz metni giriş alanına yazın veya yapıştırın.",
    },
    {
        iconName: "Zap",
        title: "2. Analiz Et",
        description: '"Analiz Et" butonuna tıklayarak işlemi başlatın.',
    },
    {
        iconName: "CheckCircle",
        title: "3. Sonucu Görün",
        description: "Yapay zeka modelimiz sonucu saniyeler içinde size iletecektir.",
    },
];

export const CODE_SAMPLES = {
    shell: {
        language: "bash",
        label: "cURL",
        code: `curl https://api.mizan.trt.com.tr/v1/analyze \\
  -H "Content-Type: application/json" \\
  -H "X-API-KEY: YOUR_API_KEY" \\
  -d '{
    "text": "Yapay zeka geleceği şekillendiriyor.",
    "detailed_analysis": true
  }'`
    },
    python: {
        language: "python",
        label: "Python",
        code: `import requests

url = "https://api.mizan.trt.com.tr/v1/analyze"
headers = {
    "X-API-KEY": "YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "text": "Yapay zeka geleceği şekillendiriyor.",
    "detailed_analysis": True
}

response = requests.post(url, json=data, headers=headers)
print(response.json())`
    },
    typescript: {
        language: "typescript",
        label: "TypeScript",
        code: `import axios from 'axios';

const analyzeText = async (text: string) => {
  const { data } = await axios.post('https://api.mizan.trt.com.tr/v1/analyze', {
    text,
    detailed_analysis: true
  }, {
    headers: { 'X-API-KEY': 'YOUR_API_KEY' }
  });
  
  return data;
};`
    }
};
export const SYSTEM_PROMPT_EXAMPLE = {
    title: "Sistem Rolü ile Analiz",
    description: "Analiz motoruna özel bir rol tanımlayarak (örn: Hukuki Çeviri Denetmeni) daha spesifik sonuçlar alabilirsiniz.",
    payload: {
        system_instructions: "Sen profesyonel bir TRT haber editörüsün. Metinler arasındaki siyasi terminoloji uyumunu denetle.",
        source_text: "The diplomatic relations have reached a turning point.",
        translated_text: "Diplomatik ilişkiler bir dönüm noktasına ulaştı.",
        context_weight: 0.8
    },
    response: {
        status: "success",
        analysis: "TRT yayın ilkelerine ve diplomatik terminolojiye %100 uygundur.",
        suggestions: []
    }
};
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
        payload: {
            source_text: "The meeting has been postponed indefinitely.",
            translated_text: "Toplantı süresiz ertelendi."
        },
        response: {
            result: "TUTARLI ÇEVİRİ",
            confidence: 0.998
        },
    },
    batch: {
        endpoint: "https://api.mizan.trt.com.tr/v1/batch",
        payload: {
            pairs: [
                {
                    source: "Success is not final, failure is not fatal.",
                    translation: "Başarı son değildir, başarısızlık ölümcül değildir."
                },
                {
                    source: "The early bird catches the worm.",
                    translation: "Erken kalkan yol alır."
                }
            ]
        },
        response: {
            results: [
                { result: "TUTARLI", score: 0.99 },
                { result: "TUTARLI (ANLAMSAL EŞLEŞME)", score: 0.975 },
            ],
        },
    },
    error401: { status: "error", code: 401, message: "Invalid API key" },
    error429: { status: "error", code: 429, message: "Rate limit exceeded", retry_after: 60 },
};