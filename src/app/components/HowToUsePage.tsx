import React, { useState } from "react";
import {
  CheckCircle,
  AlertCircle,
  FileText,
  Zap,
  Key,
  Server,
  Database,
  Copy,
  Check,
} from "lucide-react";

export function HowToUsePage() {
  const [copied, setCopied] = useState(false);

  const steps = [
    {
      icon: FileText,
      title: "1. Metin Girin",
      description:
          "Analiz etmek istediğiniz metni giriş alanına yazın veya yapıştırın.",
    },
    {
      icon: Zap,
      title: "2. Analiz Et",
      description: '"Analiz Et" butonuna tıklayarak işlemi başlatın.',
    },
    {
      icon: CheckCircle,
      title: "3. Sonucu Görün",
      description:
          "Yapay zeka modelimiz sonucu saniyeler içinde size iletecektir.",
    },
  ];

  const apiExample = {
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
  };

  const moreExamples = {
    quickCheck: {
      endpoint: "https://api.mizan.trt.com.tr/v1/quick-check",
      payload: {
        text: "Türkiye'nin başkenti İstanbul'dur.",
      },
      response: {
        result: "YANLIŞ",
        confidence: 0.998,
      },
    },

    batchAnalyze: {
      endpoint: "https://api.mizan.trt.com.tr/v1/batch",
      payload: {
        texts: ["Su 100 derecede kaynar.", "Dünya düzdür."],
      },
      response: {
        results: [
          { result: "DOĞRU", score: 0.99 },
          { result: "YANLIŞ", score: 0.997 },
        ],
      },
    },

    errorExample: {
      status: "error",
      code: 401,
      message: "Invalid API key",
    },

    rateLimit: {
      status: "error",
      code: 429,
      message: "Rate limit exceeded",
      retry_after: 60,
    },
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(apiExample.payload, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Nasıl Kullanılır?
            </h1>
            <p className="text-sm text-gray-900 dark:text-gray-300 leading-relaxed">
              Mizan analiz platformunu hem web arayüzü üzerinden hem de API
              entegrasyonu ile kurumsal sistemlerinize dahil ederek
              kullanabilirsiniz.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step, index) => (
                <div key={index} className="mini-card p-4">
                  <div className="w-10 h-10 bg-trt-red/10 rounded-lg flex items-center justify-center mb-3 text-trt-red">
                    <step.icon size={20} />
                  </div>
                  <h3 className="text-sm font-semibold mb-1 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-sm text-gray-900 dark:text-gray-300 leading-relaxed">{step.description}</p>
                </div>
            ))}
          </div>

          {/* API Integration */}
          <div className="section-card">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                    <Server size={20} />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      API Entegrasyonu
                    </h2>
                    <p className="text-sm text-gray-900 dark:text-gray-300">
                      Sistemlerinizi Mizan gücüyle birleştirin
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-full">
                  <Key size={14} className="text-yellow-500" />
                  <span className="text-xs font-mono font-medium text-gray-900 dark:text-white">
                  X-API-KEY: GEREKLİ
                </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
                      <Database size={16} className="text-trt-red" />
                      Endpoint ve Kimlik Doğrulama
                    </h4>
                    <p className="text-sm text-gray-900 dark:text-gray-300 leading-relaxed">
                      Analiz isteklerinizi aşağıdaki endpoint'e{" "}
                      <strong>POST</strong> metodu ile iletebilirsiniz. API
                      anahtarınızı profil sayfanızdaki "Erişim" sekmesinden temin
                      edebilirsiniz.
                    </p>
                  </div>

                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-trt-red">
                    <h5 className="text-xs font-semibold mb-1 text-gray-900 dark:text-white">
                      Önemli Parametre
                    </h5>
                    <p className="text-xs text-gray-900 dark:text-gray-300">
                      <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">detailed_analysis</code> parametresi true
                      gönderildiğinde doğruluk skoru da döner.
                    </p>
                  </div>
                </div>

                <div className="relative group space-y-3">
                  <div className="absolute top-3 right-3 z-10">
                    <button
                        onClick={copyToClipboard}
                        className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all backdrop-blur-md text-white"
                    >
                      {copied ? (
                          <Check size={14} className="text-green-400" />
                      ) : (
                          <Copy size={14} />
                      )}
                    </button>
                  </div>
                  <div className="code-block text-xs leading-5">
                    <div className="text-gray-400 mb-2">{"// cURL Example"}</div>
                    <pre className="text-green-300">
                    {`curl -X POST https://api.mizan.trt.com.tr/v1/analyze \\
  -H "Content-Type: application/json" 
  -H "X-API-KEY: YOUR_API_KEY" 
  -d '{
    "text": "Yapay zeka geleceği değiştirecek."
  }'`}
                  </pre>
                  </div>

                  <div className="code-block text-xs leading-5">
                    <div className="flex gap-1.5 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <span className="text-trt-red">POST</span>{" "}
                    <span className="text-green-400">
                    "{apiExample.endpoint}"
                  </span>
                    <div className="mt-3 text-gray-400">{"// Payload"}</div>
                    <pre className="text-blue-300">
                    {JSON.stringify(apiExample.payload, null, 2)}
                  </pre>
                    <div className="mt-3 text-gray-400">{"// Response"}</div>
                    <pre className="text-orange-200/80 italic">
                    {JSON.stringify(apiExample.response, null, 2)}
                  </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Examples */}
          <div className="space-y-4">
            <div className="section-card space-y-3">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">Hızlı Doğrulama</h3>
              <p className="text-sm text-gray-900 dark:text-gray-300">
                Minimum gecikme ile sadece doğruluk sonucu almak için optimize
                edilmiş endpoint.
              </p>

              <div className="code-block text-xs">
                <div className="text-gray-400 mb-2">POST /v1/quick-check</div>
                <pre className="text-blue-300">
                {JSON.stringify(moreExamples.quickCheck.payload, null, 2)}
              </pre>
                <div className="mt-3 text-gray-400">Response</div>
                <pre className="text-green-300">
                {JSON.stringify(moreExamples.quickCheck.response, null, 2)}
              </pre>
              </div>
            </div>

            <div className="section-card space-y-3">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">Toplu Analiz</h3>
              <p className="text-sm text-gray-900 dark:text-gray-300">
                Birden fazla metni tek istekte analiz ederek performansı
                artırabilirsiniz.
              </p>

              <div className="code-block text-xs">
                <div className="text-gray-400 mb-2">POST /v1/batch</div>
                <pre className="text-blue-300">
                {JSON.stringify(moreExamples.batchAnalyze.payload, null, 2)}
              </pre>
                <div className="mt-3 text-gray-400">Response</div>
                <pre className="text-green-300">
                {JSON.stringify(moreExamples.batchAnalyze.response, null, 2)}
              </pre>
              </div>
            </div>

            <div className="section-card space-y-3 border-red-200 dark:border-red-500/30">
              <h3 className="text-base font-semibold text-red-600 dark:text-red-400">Hata Yanıtları</h3>
              <p className="text-sm text-gray-900 dark:text-gray-300">
                API yanlış kullanıldığında aşağıdaki hata formatları döner.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="code-block text-xs">
                  <div className="text-red-400 mb-2">401 Unauthorized</div>
                  <pre className="text-red-300">
                  {JSON.stringify(moreExamples.errorExample, null, 2)}
                </pre>
                </div>

                <div className="code-block text-xs">
                  <div className="text-red-400 mb-2">429 Rate Limit</div>
                  <pre className="text-orange-300">
                  {JSON.stringify(moreExamples.rateLimit, null, 2)}
                </pre>
                </div>
              </div>
            </div>

            <div className="section-card space-y-3">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">Streaming Yanıt</h3>
              <p className="text-sm text-gray-900 dark:text-gray-300">
                Gerçek zamanlı analiz sonucu almak için streaming modunu
                kullanabilirsiniz.
              </p>

              <div className="code-block text-xs text-purple-300">
                {`event: progress
data: {"stage":"kaynaklar taranıyor"}

event: progress
data: {"stage":"model çalışıyor"}

event: done
data: {"result":"DOĞRU","score":0.992}`}
              </div>
            </div>
          </div>

          {/* Warning */}
          <div className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-lg">
            <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
            <p className="text-xs text-gray-900 dark:text-amber-200">
              <strong>Dikkat:</strong> Günlük ücretsiz API limitiniz 1000
              istektir. Daha yüksek limitler için Bilgi Teknolojileri Dairesi ile
              iletişime geçiniz.
            </p>
          </div>
        </div>
      </div>
  );
}
