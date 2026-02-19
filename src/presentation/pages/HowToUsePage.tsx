// src/presentation/pages/HowToUsePage.tsx
import React, { useState } from "react";
import { CheckCircle, AlertCircle, FileText, Zap, Key, Server, Database, Copy, Check } from "lucide-react";
import { API_EXAMPLES, USAGE_STEPS } from "../../core/constants/api-docs";

// Icon eşleştirme objesi (Lucide bileşenlerini string isimlerle eşlemek için)
const iconMap = { FileText, Zap, CheckCircle };

export function HowToUsePage() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(JSON.stringify(API_EXAMPLES.main.payload, null, 2));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-5xl mx-auto px-6 py-6 space-y-6">
            {/* Header */}
            <div className="space-y-2">
                <h1 className="text-2xl font-semibold">Nasıl Kullanılır?</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    Mizan analiz platformunu hem web arayüzü hem de API ile kullanabilirsiniz.
                </p>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {USAGE_STEPS.map((step, idx) => {
                    const Icon = iconMap[step.iconName as keyof typeof iconMap];
                    return (
                        <div key={idx} className="mini-card p-4">
                            <div className="w-10 h-10 bg-trt-red/10 rounded-lg flex items-center justify-center mb-3 text-trt-red">
                                <Icon size={20} />
                            </div>
                            <h3 className="text-sm font-semibold mb-1">{step.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
                        </div>
                    );
                })}
            </div>

            {/* API Entegrasyon Kartı (Özetlendi) */}
            <div className="section-card">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                        <Server className="text-blue-500" />
                        <h2 className="text-lg font-semibold">API Entegrasyonu</h2>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-mono">
                        X-API-KEY: GEREKLİ
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <p className="text-sm leading-relaxed">
                            İsteklerinizi <strong>POST</strong> metodu ile iletebilirsiniz.
                        </p>
                        <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border-l-4 border-trt-red text-xs">
                            <strong>Önemli:</strong> <code>detailed_analysis</code> parametresi true olduğunda skor döner.
                        </div>
                    </div>

                    {/* Kod Bloğu */}
                    <div className="code-block text-xs relative">
                        <button onClick={copyToClipboard} className="absolute top-2 right-2 p-1 hover:bg-white/10 rounded">
                            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                        </button>
                        <pre className="text-blue-300">{JSON.stringify(API_EXAMPLES.main.payload, null, 2)}</pre>
                        <hr className="my-3 border-gray-700" />
                        <pre className="text-orange-200 italic">{JSON.stringify(API_EXAMPLES.main.response, null, 2)}</pre>
                    </div>
                </div>
            </div>

            {/* Diğer Örnekler (API_EXAMPLES üzerinden loop da edilebilir) */}
            <div className="section-card">
                <h3 className="text-base font-semibold mb-4">Hızlı Doğrulama Örneği</h3>
                <div className="code-block text-xs">
                    <pre className="text-green-300">{JSON.stringify(API_EXAMPLES.quickCheck.response, null, 2)}</pre>
                </div>
            </div>
        </div>
    );
}