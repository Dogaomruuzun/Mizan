import React, { useState } from "react";
import { ShieldAlert, Lock } from "lucide-react";
import { AUTH_CODE_SAMPLES, MIZAN_BASE_URL } from "../../../core/constants/docs-content";
import { DocsCodeBlock } from "../../components/docs/DocsCodeBlock";

const TAB_ORDER = ["curl", "python", "typescript", "java"] as const;

export function AuthenticationSection() {
    const [activeTab, setActiveTab] = useState<string>("curl");

    return (
        <div className="docs-section space-y-10">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                    Kimlik Doğrulama
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
                    Mizan API'si, istekleri doğrulamak için API anahtarları kullanır.
                </p>
            </div>

            {/* API Key info */}
            <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0d0f14]">
                    <Lock size={20} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div className="space-y-3">
                        <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                            API anahtarlarınızı <strong>Mizan yönetim panelinde</strong> görüntüleyebilir
                            ve yönetebilirsiniz. Kimlik doğrulama, <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-[13px] font-mono">x-api-key</code> başlığı
                            (header) aracılığıyla sağlanır.
                        </p>
                        <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                            API anahtarlarınız birçok ayrıcalık içerir, bu nedenle onları güvende
                            tuttuğunuzdan emin olun! <strong>Gizli API anahtarlarınızı herkese açık alanlarda paylaşmayın.</strong>
                        </p>
                    </div>
                </div>
            </div>

            {/* HTTPS warning */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30">
                <ShieldAlert size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed space-y-1">
                    <p>Tüm API istekleri <strong>HTTPS</strong> üzerinden yapılmalıdır. Düz HTTP üzerinden yapılan çağrılar başarısız olur.</p>
                    <p>Kimlik doğrulaması yapılmayan API istekleri de başarısız olur.</p>
                </div>
            </div>

            {/* Auth header format */}
            <div className="space-y-3">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Kimlik Doğrulama Başlığı
                </h2>
                <p className="text-[15px] text-gray-600 dark:text-gray-300">
                    Her API isteğinde aşağıdaki başlığı eklemeniz gerekmektedir:
                </p>
                <DocsCodeBlock
                    code={`x-api-key: MIZAN_API_KEY`}
                    title="HTTP Header"
                />
            </div>

            {/* Code examples with tabs */}
            <div className="space-y-3">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Kullanım Örnekleri
                </h2>
                <p className="text-[15px] text-gray-600 dark:text-gray-300">
                    Aşağıdaki örneklerde <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-[13px] font-mono">MIZAN_API_KEY</code> ortam
                    değişkeni kullanılmıştır. API anahtarınızı doğrudan kod içine yazmak yerine ortam
                    değişkeni olarak tanımlamanızı öneriyoruz.
                </p>

                {/* Tabs */}
                <div className="rounded-xl overflow-hidden border border-gray-800 bg-[#0f1117]">
                    {/* Tab bar */}
                    <div className="flex border-b border-gray-800 bg-[#161822]">
                        {TAB_ORDER.map((key) => {
                            const sample = AUTH_CODE_SAMPLES[key];
                            const isActive = activeTab === key;
                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`
                                        px-5 py-3 text-[13px] font-medium transition-colors relative
                                        ${isActive
                                            ? "text-white"
                                            : "text-gray-500 hover:text-gray-300"
                                        }
                                    `}
                                >
                                    {sample.label}
                                    {isActive && (
                                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-trt-red" />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Code content */}
                    <pre className="p-5 text-[13px] font-mono text-gray-200 leading-relaxed overflow-x-auto">
                        {AUTH_CODE_SAMPLES[activeTab].code}
                    </pre>
                </div>
            </div>

            {/* Example response */}
            <div className="space-y-3">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Örnek Yanıt</h2>
                <p className="text-[15px] text-gray-600 dark:text-gray-300">
                    Başarılı bir kimlik doğrulama sonrasında API, istenen kaynağa ait yanıtı döndürür:
                </p>
                <DocsCodeBlock
                    code={JSON.stringify({
                        id: "msg_01XFDUDYJgAACzvnptvVoYEL",
                        type: "message",
                        role: "assistant",
                        content: [{ type: "text", text: "Hello!" }],
                        model: "mizan model-1",
                        stop_reason: "end_turn",
                    }, null, 2)}
                    title="200 OK"
                    variant="success"
                />
            </div>
        </div>
    );
}
