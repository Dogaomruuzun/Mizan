import React from "react";
import { ArrowRight } from "lucide-react";
import {
    METADATA_REQUEST,
    METADATA_RESPONSE,
    REQUEST_PARAMS,
    RESPONSE_PARAMS,
    MIZAN_BASE_URL,
} from "../../../core/constants/docs-content";
import { DocsCodeBlock } from "../../components/docs/DocsCodeBlock";

interface Param {
    name: string;
    type: string;
    description: string;
    required?: boolean;
}

function ParamsTable({ params, showRequired = false }: { params: Param[]; showRequired?: boolean }) {
    return (
        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
            <table className="w-full text-sm">
                <thead>
                    <tr className="bg-gray-50 dark:bg-[#0d0f14] border-b border-gray-200 dark:border-gray-800">
                        <th className="text-left px-5 py-3 font-semibold text-gray-700 dark:text-gray-300">Parametre</th>
                        <th className="text-left px-5 py-3 font-semibold text-gray-700 dark:text-gray-300 w-[100px]">Tür</th>
                        {showRequired && (
                            <th className="text-left px-5 py-3 font-semibold text-gray-700 dark:text-gray-300 w-[80px]">Zorunlu</th>
                        )}
                        <th className="text-left px-5 py-3 font-semibold text-gray-700 dark:text-gray-300">Açıklama</th>
                    </tr>
                </thead>
                <tbody>
                    {params.map((p, idx) => (
                        <tr
                            key={p.name}
                            className={`border-b border-gray-100 dark:border-gray-800/50 ${
                                idx % 2 === 0
                                    ? "bg-white dark:bg-transparent"
                                    : "bg-gray-50/50 dark:bg-[#0d0f14]/50"
                            }`}
                        >
                            <td className="px-5 py-3.5">
                                <code className="text-[13px] font-mono font-semibold text-gray-800 dark:text-gray-200">
                                    {p.name}
                                </code>
                            </td>
                            <td className="px-5 py-3.5">
                                <span className="text-xs font-mono px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                    {p.type}
                                </span>
                            </td>
                            {showRequired && (
                                <td className="px-5 py-3.5 text-center">
                                    {p.required ? (
                                        <span className="text-xs font-bold text-trt-red">Evet</span>
                                    ) : (
                                        <span className="text-xs text-gray-400">Hayır</span>
                                    )}
                                </td>
                            )}
                            <td className="px-5 py-3.5 text-gray-600 dark:text-gray-400">
                                {p.description}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export function MetadataSection() {
    return (
        <div className="docs-section space-y-10">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                    Meta Veriler
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
                    Mizan API ile mesaj oluşturmak için kullanılan istek ve yanıt yapıları aşağıda detaylı
                    olarak açıklanmıştır.
                </p>
            </div>

            {/* Endpoint */}
            <div className="space-y-3">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Endpoint</h2>
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-[#0f1117] border border-gray-800">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-green-500/20 text-green-400">POST</span>
                    <span className="text-sm font-mono text-gray-300">{MIZAN_BASE_URL}/v1/messages</span>
                </div>
            </div>

            {/* Request / Response side by side */}
            <div className="space-y-3">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">İstek ve Yanıt</h2>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">İstek (Request)</span>
                            <ArrowRight size={14} className="text-gray-400" />
                        </div>
                        <DocsCodeBlock
                            code={JSON.stringify(METADATA_REQUEST, null, 2)}
                            title="POST /v1/messages"
                            variant="blue"
                        />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Yanıt (Response)</span>
                        </div>
                        <DocsCodeBlock
                            code={JSON.stringify(METADATA_RESPONSE, null, 2)}
                            title="200 OK"
                            variant="success"
                        />
                    </div>
                </div>
            </div>

            {/* Request parameters */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">İstek Parametreleri</h2>
                <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    Aşağıdaki parametreler <code className="px-1.5 py-0.5 text-[13px] font-mono rounded bg-gray-200 dark:bg-gray-700">POST</code> isteğinin
                    JSON gövdesinde gönderilmelidir.
                </p>
                <ParamsTable params={REQUEST_PARAMS} showRequired />
            </div>

            {/* Response parameters */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Yanıt Alanları</h2>
                <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    Başarılı bir istek sonrasında döndürülen JSON yanıtındaki alanlar:
                </p>
                <ParamsTable params={RESPONSE_PARAMS} />
            </div>

            {/* Usage info */}
            <div className="flex items-start gap-3 p-5 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900/30">
                <div className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                    <strong>Token Kullanımı:</strong> Yanıttaki <code className="px-1 py-0.5 text-[12px] font-mono rounded bg-blue-100 dark:bg-blue-900/30">usage</code> alanı,
                    giriş ve çıkış token sayılarını içerir. Bu bilgiyi API kullanımınızı izlemek ve
                    maliyetlerinizi yönetmek için kullanabilirsiniz.
                </div>
            </div>
        </div>
    );
}
