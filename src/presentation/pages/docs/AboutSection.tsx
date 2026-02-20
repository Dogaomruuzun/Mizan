import React from "react";
import { BookOpen, Globe, ShieldCheck, Code2, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { MIZAN_BASE_URL } from "../../../core/constants/docs-content";

export function AboutSection() {
    return (
        <div className="docs-section space-y-10">
            {/* Hero */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                    Mizan Servisi Hakkında
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
                    Mizan, TRT (Türkiye Radyo ve Televizyon Kurumu) Bilgi Teknolojileri Dairesi Başkanlığı tarafından geliştirilen yapay zeka destekli bir metin düzeltme servisidir. İngilizce metinlerin yüksek doğrulukla düzeltilmesi için tasarlanmıştır; orijinal anlamı veya yapıyı değiştirmeden hataları düzeltir. Bu sayfada servis bilgisi ve amacı yer almaktadır.
                </p>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111]">
                    <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-500 flex-shrink-0">
                        <Globe size={22} />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">REST Mimarisi</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            Öngörülebilir kaynak odaklı URL'ler, JSON kodlu yanıtlar ve standart HTTP fiilleri.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111]">
                    <div className="p-2.5 bg-green-500/10 rounded-lg text-green-500 flex-shrink-0">
                        <ShieldCheck size={22} />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Güvenli İletişim</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            Tüm istekler HTTPS üzerinden, API anahtarı doğrulaması ile gerçekleştirilir.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111]">
                    <div className="p-2.5 bg-purple-500/10 rounded-lg text-purple-500 flex-shrink-0">
                        <Code2 size={22} />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Kolay Entegrasyon</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            cURL, Python, TypeScript ve Java için hazır kod örnekleri ile hızlı başlangıç.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111]">
                    <div className="p-2.5 bg-amber-500/10 rounded-lg text-amber-500 flex-shrink-0">
                        <BookOpen size={22} />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Standart HTTP Kodları</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            Standart HTTP yanıt kodları, kimlik doğrulama ve hata yönetimi.
                        </p>
                    </div>
                </div>
            </div>

            {/* API Reference */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">API Referansı</h2>
                <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0d0f14] space-y-4">
                    <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                        Mizan API'si <strong>REST mimarisi</strong> üzerine kuruludur. API'miz öngörülebilir
                        kaynak odaklı URL'lere sahiptir, form kodlu istek gövdelerini kabul eder,
                        JSON kodlu yanıtlar döndürür ve standart HTTP yanıt kodlarını, kimlik doğrulamasını
                        ve fiillerini kullanır.
                    </p>
                    <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                        Mizan API'si, yeni sürümler yayınladıkça ve işlevselliği özelleştirdikçe
                        her hesap için farklılık gösterebilir. Test anahtarınız ve verilerinizle
                        giriş yaparak belgelere ulaşabilirsiniz.
                    </p>
                </div>
            </div>

            {/* Base URL */}
            <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Temel URL</h3>
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-[#0f1117] border border-gray-800">
                    <span className="text-sm font-mono text-green-400">{MIZAN_BASE_URL}</span>
                </div>
            </div>

            {/* Quick links */}
            <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Hızlı Başlangıç</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Link
                        to="/how-to-use/authentication"
                        className="flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] hover:border-trt-red/50 transition-colors group"
                    >
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Kimlik Doğrulama</span>
                        <ArrowRight size={16} className="text-gray-400 group-hover:text-trt-red transition-colors" />
                    </Link>
                    <Link
                        to="/how-to-use/metadata"
                        className="flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] hover:border-trt-red/50 transition-colors group"
                    >
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">İlk API İsteği</span>
                        <ArrowRight size={16} className="text-gray-400 group-hover:text-trt-red transition-colors" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
