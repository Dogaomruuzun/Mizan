import React from "react";
import { AlertTriangle } from "lucide-react";
import {
    HTTP_STATUS_CODES,
    API_ERROR_TYPES,
    ERROR_RESPONSE_EXAMPLE,
} from "../../../core/constants/docs-content";
import { DocsCodeBlock } from "../../components/docs/DocsCodeBlock";

function StatusBadge({ code }: { code: number }) {
    let color = "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    if (code >= 400 && code < 500) {
        color = "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
    } else if (code >= 500) {
        color = "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
    }
    return (
        <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold ${color}`}>
            {code}
        </span>
    );
}

export function ErrorsSection() {
    return (
        <div className="docs-section space-y-10">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                    Hatalar
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
                    Mizan API, geleneksel HTTP yanıt kodlarını kullanarak bir isteğin başarılı
                    ya da başarısız olduğunu bildirir. Genel olarak: <code className="px-1.5 py-0.5 text-[13px] font-mono rounded bg-gray-200 dark:bg-gray-700">2xx</code> aralığı
                    başarıyı, <code className="px-1.5 py-0.5 text-[13px] font-mono rounded bg-gray-200 dark:bg-gray-700">4xx</code> aralığı
                    istemci kaynaklı hatayı, <code className="px-1.5 py-0.5 text-[13px] font-mono rounded bg-gray-200 dark:bg-gray-700">5xx</code> aralığı
                    ise sunucu kaynaklı hatayı belirtir.
                </p>
            </div>

            {/* Error response format */}
            <div className="space-y-3">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Hata Yanıt Formatı</h2>
                <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    Hata durumlarında API, aşağıdaki formatta bir JSON nesnesi döndürür.
                    Detaylar <code className="px-1.5 py-0.5 text-[13px] font-mono rounded bg-gray-200 dark:bg-gray-700">error</code> nesnesi
                    içinde yer alır.
                </p>
                <DocsCodeBlock
                    code={JSON.stringify(ERROR_RESPONSE_EXAMPLE, null, 2)}
                    title="Hata Yanıtı"
                    variant="error"
                />
            </div>

            {/* HTTP Status Codes */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">HTTP Durum Kodları</h2>
                <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-[#0d0f14] border-b border-gray-200 dark:border-gray-800">
                                <th className="text-left px-5 py-3 font-semibold text-gray-700 dark:text-gray-300 w-[100px]">Kod</th>
                                <th className="text-left px-5 py-3 font-semibold text-gray-700 dark:text-gray-300 w-[180px]">Durum</th>
                                <th className="text-left px-5 py-3 font-semibold text-gray-700 dark:text-gray-300">Açıklama</th>
                            </tr>
                        </thead>
                        <tbody>
                            {HTTP_STATUS_CODES.map((item, idx) => (
                                <tr
                                    key={item.code}
                                    className={`border-b border-gray-100 dark:border-gray-800/50 ${
                                        idx % 2 === 0
                                            ? "bg-white dark:bg-transparent"
                                            : "bg-gray-50/50 dark:bg-[#0d0f14]/50"
                                    }`}
                                >
                                    <td className="px-5 py-3.5">
                                        <StatusBadge code={item.code} />
                                    </td>
                                    <td className="px-5 py-3.5 font-mono text-[13px] text-gray-700 dark:text-gray-300">
                                        {item.label}
                                    </td>
                                    <td className="px-5 py-3.5 text-gray-600 dark:text-gray-400">
                                        {item.description}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Error Types */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Hata Türleri</h2>
                <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    Aşağıdaki tablo, <code className="px-1.5 py-0.5 text-[13px] font-mono rounded bg-gray-200 dark:bg-gray-700">error.type</code> alanında
                    döndürülebilecek hata türlerini listelemektedir.
                </p>
                <div className="space-y-3">
                    {API_ERROR_TYPES.map((error) => (
                        <div
                            key={error.type}
                            className="flex flex-col sm:flex-row sm:items-start gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111]"
                        >
                            <div className="flex items-center gap-2 flex-shrink-0 sm:w-[240px]">
                                <AlertTriangle size={14} className="text-amber-500" />
                                <code className="text-[13px] font-mono font-semibold text-gray-800 dark:text-gray-200">
                                    {error.type}
                                </code>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <StatusBadge code={parseInt(error.statusCodes)} />
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {error.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Error handling tip */}
            <div className="flex items-start gap-3 p-5 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900/30">
                <AlertTriangle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                    <strong>İpucu:</strong> Hata yönetiminde <code className="px-1 py-0.5 text-[12px] font-mono rounded bg-blue-100 dark:bg-blue-900/30">error.type</code> alanını
                    kontrol ederek programatik olarak farklı hata türlerine göre işlem yapabilirsiniz.
                    Özellikle <code className="px-1 py-0.5 text-[12px] font-mono rounded bg-blue-100 dark:bg-blue-900/30">rate_limit_error</code> durumunda
                    üstel geri çekilme (exponential backoff) stratejisi uygulamanızı öneririz.
                </div>
            </div>
        </div>
    );
}
