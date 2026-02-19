#  Mizan - Metin Analiz Platformu

**Mizan**, gelişmiş yazılım mimarisi prensipleriyle (Clean Architecture) inşa edilmiş, metin doğruluk analizi ve bilgi kontrolü sağlayan modern bir web platformudur. TRT Bilgi Teknolojileri standartları göz önünde bulundurularak, performanslı ve ölçeklenebilir bir yapıda tasarlanmıştır.

---

## Yazılım Mimarisi (Clean Architecture)

Bu proje, kodun sürdürülebilirliğini ve test edilebilirliğini en üst düzeye çıkarmak için **Clean Architecture** prensiplerine göre yapılandırılmıştır. Katmanlar arası bağımlılıklar "içeriye doğru" (Domain'e doğru) tasarlanarak UI değişimlerinden etkilenmeyen bir çekirdek oluşturulmuştur:

* **Domain Katmanı:** Uygulamanın kalbidir. İş mantığının ve kurallarının bulunduğu, dış dünyadan (React, API, vb.) bağımsız saf TypeScript alanıdır (`entities`, `usecases`).
* **Presentation Katmanı:** Kullanıcı arayüzü ve etkileşim yönetimidir. Veriyi kullanıcıya sunar ve kullanıcı aksiyonlarını yakalar (`components`, `pages`, `hooks`).
* **Core Katmanı:** Uygulama genelinde paylaşılan, değişmeyen altyapı servisleridir (`contexts`, `styles`, `constants`).

---

##  Öne Çıkan Özellikler

* **Gelişmiş Metin Analizi:** Metinleri hızlı ve etkili bir şekilde analiz eden modüler yapı.
* **Karanlık Mod Desteği:** `ThemeContext` ile yönetilen, sistem tercihlerine duyarlı arayüz.
* **Modern Teknoloji Yığını:** En güncel React 19 ve Tailwind CSS v4 mimarisi.
* **Responsive Tasarım:** Mobil, tablet ve masaüstü cihazlar için optimize edilmiş "Split-Layout" arayüzü.

---

## Kullanılan Teknolojiler

* **Framework:** React 19 (Vite)
* **Dil:** TypeScript
* **Stil:** Tailwind CSS v4 (Modern CSS Variables & `@theme` support)
* **İkon Seti:** Lucide React
* **Yönlendirme:** React Router

---

## 📂 Proje Yapısı


src/
├── core/                   # Uygulama genelindeki altyapı
│   ├── constants/          # Navigasyon ve API sabitleri
│   ├── contexts/           # Global State (ThemeContext vb.)
│   └── styles/             # Tailwind v4 ve global CSS yapılandırması
│       └── components/     # Bileşen bazlı özel stiller
├── domain/                 # Saf İş Mantığı (React'ten bağımsız)
│   ├── entities/           # Veri modelleri ve tip tanımlamaları
│   └── usecases/           # Uygulama senaryoları (AnalyzeText vb.)
├── presentation/           # Kullanıcı Arayüzü (UI)
│   ├── components/         # Ortak UI bileşenleri (Layout, Footer)
│   ├── hooks/              # UI ve Logic arasındaki köprü (useAnalyzer)
│   └── pages/              # Uygulama sayfaları (Analyzer, HowToUse)
├── App.tsx                 # Uygulama ana giriş noktası
└── main.tsx                # React DOM render başlangıcı

---
## Kurulum ve Çalıştırma
Repoyu klonlayın:

git clone [https://github.com/Dogaomruuzun/Mizan.git](https://github.com/Dogaomruuzun/Mizan.git)
Bağımlılıkları yükleyin:

npm install
Geliştirme sunucusunu başlatın:

npm run dev
