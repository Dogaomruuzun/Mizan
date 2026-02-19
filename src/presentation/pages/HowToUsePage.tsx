import React, { useState } from "react";
import {
    CheckCircle, AlertCircle, FileText, Zap, Key,
    Server, Database, Copy, Check, Terminal, Layers, ShieldAlert
} from "lucide-react";

import { API_EXAMPLES, USAGE_STEPS, CODE_SAMPLES, SYSTEM_PROMPT_EXAMPLE } from "../../core/constants/api-docs";

const iconMap = { FileText, Zap, CheckCircle };

export function HowToUsePage() {
    const [copied, setCopied] = useState(false);
    const [activeTab, setActiveTab] = useState<keyof typeof CODE_SAMPLES>("shell");

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-5xl mx-auto px-6 py-6 space-y-8">
            <div className="space-y-4">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Nasıl Kullanılır?</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Mizan analiz platformunu hem web arayüzü üzerinden hem de API entegrasyonu ile kurumsal sistemlerinize dahil ederek kullanabilirsiniz.
                </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {USAGE_STEPS.map((step, idx) => {
                    const Icon = iconMap[step.iconName as keyof typeof iconMap];
                    return (
                        <div key={idx} className="mini-card p-4">
                            <div className="w-10 h-10 bg-trt-red/10 rounded-lg flex items-center justify-center mb-3 text-trt-red">
                                <Icon size={20} />
                            </div>
                            <h3 className="text-sm font-semibold mb-1 text-gray-900 dark:text-white">{step.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                        </div>
                    );
                })}
            </div>


            <div className="section-card">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                            <Server size={20} />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">API Entegrasyonu</h2>
                            <p className="text-xs text-gray-500">v1 Analysis Engine</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full border border-border">
                        <Key size={12} className="text-yellow-500" />
                        <span className="text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-tighter">X-API-KEY: GEREKLİ</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="space-y-3">
                            <h4 className="text-sm font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
                                <Database size={16} className="text-trt-red" />
                                Endpoint ve İstek Yapısı
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                Analiz isteklerinizi <strong>POST</strong> metodu ile iletebilirsiniz. API anahtarınızı profil sayfanızdaki "Erişim" sekmesinden temin edebilirsiniz.
                            </p>
                        </div>
                    </div>

                    <div className="code-block text-[11px] relative group">
                        <button
                            onClick={() => copyToClipboard(JSON.stringify(API_EXAMPLES.main.payload, null, 2))}
                            className="absolute top-2 right-2 p-1.5 bg-white/5 hover:bg-white/10 rounded-md transition-colors"
                        >
                            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-gray-400" />}
                        </button>
                        <div className="text-gray-500 mb-2">// Request Payload</div>
                        <pre className="text-blue-300">{JSON.stringify(API_EXAMPLES.main.payload, null, 2)}</pre>
                    </div>
                </div>
            </div>


            <div className="section-card border-blue-100 dark:border-blue-900/30 bg-blue-50/20 dark:bg-blue-950/5">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-600/10 rounded-lg text-blue-600">
                        <Layers size={20} />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{SYSTEM_PROMPT_EXAMPLE.title}</h2>
                        <p className="text-xs text-gray-500">Bağlamsal Analiz Motoru</p>
                    </div>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            {SYSTEM_PROMPT_EXAMPLE.description} <code>system_instructions</code> parametresi ile yapay zekaya bir kişilik veya uzmanlık alanı atayarak diller arası çeviri kontrolünü o perspektiften yapmasını sağlayabilirsiniz.
                        </p>
                    </div>

                    <div className="code-block text-[11px] bg-[#1a1c23]">
                        <div className="text-gray-500 mb-2">// System Prompt Payload</div>
                        <pre className="text-blue-200">
                            {JSON.stringify(SYSTEM_PROMPT_EXAMPLE.payload, null, 2)}
                        </pre>
                    </div>
                </div>
            </div>


            <div className="bg-[#f8f9fa] dark:bg-[#0f1117] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg">
                <div className="flex items-center justify-between px-2 bg-[#f1f3f5] dark:bg-[#161b22] border-b border-gray-200 dark:border-gray-800">
                    <div className="flex">
                        {(Object.keys(CODE_SAMPLES) as Array<keyof typeof CODE_SAMPLES>).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-3 text-[13px] font-semibold transition-colors relative ${
                                    activeTab === tab
                                        ? "text-black dark:text-white"
                                        : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                                }`}
                            >
                                {CODE_SAMPLES[tab].label}
                                {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-trt-red" />}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => copyToClipboard(CODE_SAMPLES[activeTab].code)}
                        className="p-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                        {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                    </button>
                </div>
                <div className="p-6 overflow-x-auto bg-white dark:bg-[#0f1117]">

                    <pre className="text-[13px] leading-relaxed text-gray-900 dark:text-gray-100">
            <code>{CODE_SAMPLES[activeTab].code}</code>
        </pre>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="section-card space-y-3">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Hızlı Doğrulama</h3>
                    <div className="code-block text-[11px]">
                        <div className="text-gray-500 mb-1">POST /v1/quick-check</div>
                        <pre className="text-green-300">{JSON.stringify(API_EXAMPLES.quickCheck.response, null, 2)}</pre>
                    </div>
                </div>


                <div className="section-card space-y-3">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Toplu Analiz</h3>
                    <div className="code-block text-[11px]">
                        <div className="text-gray-500 mb-1">POST /v1/batch</div>
                        <pre className="text-blue-300">{JSON.stringify(API_EXAMPLES.batch.payload, null, 2)}</pre>
                    </div>
                </div>
            </div>


            <div className="section-card border-red-100 dark:border-red-900/20 bg-red-50/5">
                <div className="flex items-center gap-2 mb-4">
                    <ShieldAlert size={18} className="text-red-500" />
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Hata Yanıt Formatları</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="code-block text-[10px] bg-red-950/10">
                        <div className="text-red-400/60 mb-1 italic">// 401 Unauthorized</div>
                        <pre className="text-red-200/70">{JSON.stringify(API_EXAMPLES.error401, null, 2)}</pre>
                    </div>
                    <div className="code-block text-[10px] bg-red-950/10">
                        <div className="text-orange-400/60 mb-1 italic">// 429 Rate Limit</div>
                        <pre className="text-orange-200/70">{JSON.stringify(API_EXAMPLES.error429, null, 2)}</pre>
                    </div>
                </div>
            </div>


            <div className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-lg">
                <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                <p className="text-xs text-gray-700 dark:text-amber-200 leading-relaxed">
                    <strong>Dikkat:</strong> Günlük ücretsiz API limitiniz 1000 istektir. Daha yüksek limitler ve kurumsal yetkilendirme için
                    Bilgi Teknolojileri Dairesi ile iletişime geçiniz.
                </p>
            </div>
        </div>
    );
}