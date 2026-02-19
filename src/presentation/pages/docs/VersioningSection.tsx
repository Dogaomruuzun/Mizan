import React from "react";
import { ArrowUpRight } from "lucide-react";
import { VERSION_COMPARISON, MIZAN_BASE_URL } from "../../../core/constants/docs-content";
import { DocsCodeBlock } from "../../components/docs/DocsCodeBlock";

export function VersioningSection() {
    const { v1, v2 } = VERSION_COMPARISON;

    return (
        <div className="docs-section space-y-10">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                    Sürümleme
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
                    Mizan API farklı sürümler sunmaktadır. Her sürüm, farklı özellikler ve limitler
                    içerir. Aşağıda V1 ve V2 sürümleri arasındaki temel farklar açıklanmıştır.
                </p>
            </div>

            {/* Version comparison cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* V1 */}
                <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] space-y-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">V1</span>
                            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                                {v1.status}
                            </span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {v1.description}
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Endpoint</span>
                            <code className="text-[12px] font-mono text-gray-700 dark:text-gray-300">/v1/messages</code>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Maks. Karakter</span>
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">{v1.maxChars.toLocaleString("tr-TR")}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Tam URL</span>
                            <code className="text-[11px] font-mono text-gray-500 dark:text-gray-400">{v1.baseUrl}</code>
                        </div>
                    </div>
                </div>

                {/* V2 */}
                <div className="p-6 rounded-xl border-2 border-trt-red/30 bg-white dark:bg-[#111] space-y-5 relative">
                    <div className="absolute -top-3 right-4">
                        <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-trt-red text-white uppercase tracking-wider">
                            Önerilen
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">V2</span>
                            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                {v2.status}
                            </span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {v2.description}
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Endpoint</span>
                            <code className="text-[12px] font-mono text-gray-700 dark:text-gray-300">/v2/messages</code>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Maks. Karakter</span>
                            <span className="text-sm font-semibold text-trt-red">{v2.maxChars.toLocaleString("tr-TR")}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Tam URL</span>
                            <code className="text-[11px] font-mono text-gray-500 dark:text-gray-400">{v2.baseUrl}</code>
                        </div>
                    </div>
                </div>
            </div>

            {/* Comparison table */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Karşılaştırma Tablosu</h2>
                <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-[#0d0f14] border-b border-gray-200 dark:border-gray-800">
                                <th className="text-left px-5 py-3 font-semibold text-gray-700 dark:text-gray-300">Özellik</th>
                                <th className="text-center px-5 py-3 font-semibold text-gray-700 dark:text-gray-300">V1</th>
                                <th className="text-center px-5 py-3 font-semibold text-gray-700 dark:text-gray-300">V2</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-100 dark:border-gray-800/50">
                                <td className="px-5 py-3.5 text-gray-700 dark:text-gray-300 font-medium">Endpoint Adresi</td>
                                <td className="px-5 py-3.5 text-center font-mono text-[12px] text-gray-600 dark:text-gray-400">/v1/messages</td>
                                <td className="px-5 py-3.5 text-center font-mono text-[12px] text-gray-600 dark:text-gray-400">/v2/messages</td>
                            </tr>
                            <tr className="border-b border-gray-100 dark:border-gray-800/50 bg-gray-50/50 dark:bg-[#0d0f14]/50">
                                <td className="px-5 py-3.5 text-gray-700 dark:text-gray-300 font-medium">Maksimum Karakter Sayısı</td>
                                <td className="px-5 py-3.5 text-center font-semibold text-gray-700 dark:text-gray-300">4.096</td>
                                <td className="px-5 py-3.5 text-center font-semibold text-trt-red">8.192</td>
                            </tr>
                            <tr className="border-b border-gray-100 dark:border-gray-800/50">
                                <td className="px-5 py-3.5 text-gray-700 dark:text-gray-300 font-medium">Durum</td>
                                <td className="px-5 py-3.5 text-center">
                                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Aktif</span>
                                </td>
                                <td className="px-5 py-3.5 text-center">
                                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Aktif</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Usage examples */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Kullanım Örnekleri</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">V1 İsteği</p>
                        <DocsCodeBlock
                            code={`curl ${MIZAN_BASE_URL}/v1/messages \\
     --header "x-api-key: $MIZAN_API_KEY" \\
     --header "content-type: application/json" \\
     --data '{
        "model": "mizan model-1",
        "max_tokens": 1024,
        "messages": [
            {"role": "user", "content": "Merhaba"}
        ]
     }'`}
                            title="V1 — maks. 4.096 karakter"
                        />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">V2 İsteği</p>
                        <DocsCodeBlock
                            code={`curl ${MIZAN_BASE_URL}/v2/messages \\
     --header "x-api-key: $MIZAN_API_KEY" \\
     --header "content-type: application/json" \\
     --data '{
        "model": "mizan model-1",
        "max_tokens": 1024,
        "messages": [
            {"role": "user", "content": "Merhaba"}
        ]
     }'`}
                            title="V2 — maks. 8.192 karakter"
                        />
                    </div>
                </div>
            </div>

            {/* Migration tip */}
            <div className="flex items-start gap-3 p-5 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900/30">
                <ArrowUpRight size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-green-800 dark:text-green-200 leading-relaxed">
                    <strong>V2'ye Geçiş:</strong> Mevcut V1 entegrasyonunuzu V2'ye taşımak için sadece
                    endpoint URL'inizdeki <code className="px-1 py-0.5 text-[12px] font-mono rounded bg-green-100 dark:bg-green-900/30">/v1/</code> kısmını <code className="px-1 py-0.5 text-[12px] font-mono rounded bg-green-100 dark:bg-green-900/30">/v2/</code> olarak
                    değiştirmeniz yeterlidir. İstek ve yanıt yapıları aynıdır.
                </div>
            </div>
        </div>
    );
}
