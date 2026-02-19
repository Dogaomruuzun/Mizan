import React, { useState } from "react";
import {
    CheckCircle, AlertCircle, FileText, Zap, Key,
    Server, Database, Copy, Check, Terminal, Layers, ShieldAlert
} from "lucide-react";
import { RequestResponseExample } from "../components/docs/RequestResponseExample";
import { CodeExampleTabs } from "../components/docs/CodeExampleTabs";


import { API_EXAMPLES, USAGE_STEPS, CODE_SAMPLES, SYSTEM_PROMPT_EXAMPLE } from "../../core/constants/api-docs";


const iconMap = { FileText, Zap, CheckCircle };

export function HowToUsePage() {
    const [copied, setCopied] = useState(false);
    const [activeTab, setActiveTab] = useState<keyof typeof CODE_SAMPLES>("shell");

    const copyToClipboard = (text: string) => {
        const textToCopy = typeof text === 'string' ? text : JSON.stringify(text, null, 2);
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full px-[4%] lg:px-[6%] py-10 space-y-12">

            <div className="space-y-3">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">Nasıl Kullanılır?</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-5xl">
                    Mizan analiz platformunu hem web arayüzü üzerinden hem de API entegrasyonu ile kurumsal sistemlerinize dahil ederek kullanabilirsiniz.
                    Gelişmiş yapay zeka modellerimizle metin analizi ve çeviri kontrolü süreçlerinizi otomatize edin.
                </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {USAGE_STEPS.map((step, idx) => {
                    const Icon = iconMap[step.iconName as keyof typeof iconMap];
                    return (
                        <div key={idx} className="mini-card p-8 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm bg-white dark:bg-[#111] hover:shadow-md transition-all">
                            <div className="w-14 h-14 bg-trt-red/10 rounded-xl flex items-center justify-center mb-6 text-trt-red">
                                <Icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                            <p className="text-[16px] text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                        </div>
                    );
                })}
            </div>


            <div className="section-card w-full p-10 bg-white dark:bg-[#0b0d11] rounded-3xl border border-gray-100 dark:border-gray-800">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div className="flex items-center gap-5">
                        <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-500">
                            <Server size={28} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">API Entegrasyonu</h2>
                            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">v1 Analysis Engine — Endpoint: {API_EXAMPLES.main.endpoint}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 px-5 py-2.5 rounded-full border border-border">
                        <Key size={16} className="text-yellow-500" />
                        <span className="text-xs font-bold text-gray-700 dark:text-gray-200 tracking-widest">X-API-KEY: GEREKLİ</span>
                    </div>
                </div>

                <RequestResponseExample />
                <div className="mt-8 max-w-2xl space-y-4">

                    <h4 className="text-lg font-bold flex items-center gap-3 text-gray-900 dark:text-white">
                        <Database size={20} className="text-trt-red" />
                        İstek Yapısı (Request)
                    </h4>

                    <p className="text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
                        Analiz isteklerinizi <strong>POST</strong> metodu ile iletebilirsiniz.
                        API anahtarınızı profil sayfanızdaki "Erişim" sekmesinden temin edebilirsiniz.
                    </p>

                    <div className="p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                        <p className="text-sm text-blue-800 dark:text-blue-300">
                            <strong>Response Format:</strong> Başarılı istekler {API_EXAMPLES.main.response.status} koduyla döner.
                        </p>
                    </div>
                </div>
            </div>

            <div className="section-card w-full p-10 border-blue-100 dark:border-blue-900/30 bg-blue-50/20 dark:bg-blue-950/5 rounded-3xl">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-blue-600/10 rounded-xl text-blue-600">
                        <Layers size={26} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{SYSTEM_PROMPT_EXAMPLE.title}</h2>
                        <p className="text-sm text-gray-500 font-medium">Bağlamsal Analiz Modu</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                    <p className="text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
                        {SYSTEM_PROMPT_EXAMPLE.description} <code>system_instructions</code> parametresi ile yapay zekaya bir kişilik veya uzmanlık alanı atayarak diller arası çeviri kontrolünü o perspektiften yapmasını sağlayabilirsiniz.
                    </p>
                    <div className="code-block text-[14px] bg-[#1a1c23] w-full rounded-2xl p-6 shadow-xl">
                        <div className="text-gray-500 mb-4 font-mono text-xs uppercase tracking-widest">// System Role Payload</div>
                        <pre className="text-blue-200 overflow-x-auto font-mono">
                            {JSON.stringify(SYSTEM_PROMPT_EXAMPLE.payload, null, 2)}
                        </pre>
                    </div>
                </div>
            </div>

            <CodeExampleTabs />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="section-card p-8 space-y-5 bg-white dark:bg-[#0b0d11] rounded-2xl border border-gray-100 dark:border-gray-800">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-3">
                        <Zap size={22} className="text-yellow-500" /> Hızlı Doğrulama (Quick Check)
                    </h3>
                    <div className="code-block text-[13px] w-full rounded-xl p-5">
                        <div className="text-gray-500 mb-3 font-mono">RESPONSE FORMAT</div>
                        <pre className="text-green-300 overflow-x-auto font-mono">{JSON.stringify(API_EXAMPLES.quickCheck.response, null, 2)}</pre>
                    </div>
                </div>

                <div className="section-card p-8 space-y-5 bg-white dark:bg-[#0b0d11] rounded-2xl border border-gray-100 dark:border-gray-800">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-3">
                        <Layers size={22} className="text-blue-500" /> Toplu Analiz (Batch)
                    </h3>
                    <div className="code-block text-[13px] w-full rounded-xl p-5">
                        <div className="text-gray-500 mb-3 font-mono">REQUEST PAYLOAD</div>
                        <pre className="text-blue-300 overflow-x-auto font-mono">{JSON.stringify(API_EXAMPLES.batch.payload, null, 2)}</pre>
                    </div>
                </div>
            </div>


            <div className="section-card p-10 border-red-100 dark:border-red-900/20 bg-red-50/5 rounded-3xl">
                <div className="flex items-center gap-3 mb-6">
                    <ShieldAlert size={24} className="text-red-500" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Hata Yanıt Formatları</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="code-block text-[12px] bg-red-950/10 rounded-xl p-5 border border-red-500/10">
                        <div className="text-red-400 mb-2 font-bold font-mono">// 401 Unauthorized</div>
                        <pre className="text-red-200/80 font-mono">{JSON.stringify(API_EXAMPLES.error401, null, 2)}</pre>
                    </div>
                    <div className="code-block text-[12px] bg-red-950/10 rounded-xl p-5 border border-red-500/10">
                        <div className="text-orange-400 mb-2 font-bold font-mono">// 429 Rate Limit</div>
                        <pre className="text-orange-200/80 font-mono">{JSON.stringify(API_EXAMPLES.error429, null, 2)}</pre>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-5 p-8 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-2xl w-full">
                <AlertCircle className="text-amber-600 flex-shrink-0" size={32} />
                <p className="text-[17px] text-gray-800 dark:text-amber-100 leading-relaxed font-medium">
                    <strong className="text-amber-700 dark:text-amber-400">Önemli Hatırlatma:</strong> Günlük ücretsiz API limitiniz <strong>1000 istektir</strong>.
                    Daha yüksek limit talepleri, kurumsal projeler ve API anahtarı yönetimi hakkında destek almak için Bilgi Teknolojileri Dairesi ile iletişime geçebilirsiniz.
                </p>
            </div>
        </div>


);
}