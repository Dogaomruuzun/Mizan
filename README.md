#  Mizan - Metin Analiz Platformu

**Mizan**, gelişmiş yazılım mimarisi prensipleriyle (Clean Architecture) inşa edilmiş, metin doğruluk analizi ve bilgi kontrolü sağlayan modern bir web platformudur. TRT Bilgi Teknolojileri standartları göz önünde bulundurularak, performanslı ve ölçeklenebilir bir yapıda tasarlanmıştır.

---

## Yazılım Mimarisi (Clean Architecture)

Bu proje, kodun sürdürülebilirliğini ve test edilebilirliğini en üst düzeye çıkarmak için **Clean Architecture** prensiplerine göre yapılandırılmıştır. Katmanlar arası bağımlılıklar "içeriye doğru" (Domain'e doğru) tasarlanarak UI değişimlerinden etkilenmeyen bir çekirdek oluşturulmuştur:

* **Domain Katmanı:** Uygulamanın kalbidir. İş mantığının ve kurallarının bulunduğu, dış dünyadan (React, API, vb.) bağımsız saf TypeScript alanıdır (`entities`, `usecases`).
* **Presentation Katmanı:** Kullanıcı arayüzü ve etkileşim yönetimidir. Veriyi kullanıcıya sunar ve kullanıcı aksiyonlarını yakalar (`components`, `pages`, `hooks`).
* **Core Katmanı:** Uygulama genelinde paylaşılan, değişmeyen altyapı servisleridir (`contexts`, `styles`, `constants`).

---

## Öne Çıkan Özellikler

* **Gelişmiş Metin Analizi:** Metinleri hızlı ve etkili bir şekilde analiz eden modüler yapı.
* **Karanlık Mod Desteği:** `ThemeContext` ile yönetilen, sistem tercihlerine duyarlı arayüz.
* **Modern Teknoloji Yığını:** En güncel React 19 ve Tailwind CSS v4 mimarisi.
* **Responsive Tasarım:** Mobil, tablet ve masaüstü cihazlar için optimize edilmiş "Split-Layout" arayüzü.

---

##  Teknoloji 

* **Framework:** React 19 (Vite)
* **Dil:** TypeScript
* **Stil:** Tailwind CSS v4 (Modern CSS Variables & `@theme` support)
* **İkon Seti:** Lucide React
* **Yönlendirme:** React Router

---

##  Proje Yapısı


src/
├── core/           # Tema yönetimi, global stiller ve sabitler
│   ├── contexts/   # ThemeContext (Dark/Light mode)
│   ├── styles/     # Tailwind v4 & Component stilleri
│   └── constants/  # Navigasyon ve API sabitleri
├── domain/         # İş mantığı (Business Logic)
│   ├── entities/   # Analiz veri modelleri
│   └── usecases/   # AnalyzeText fonksiyonel kuralları
├── presentation/   # UI Katmanı
│   ├── components/ # Ortak bileşenler (Layout, Footer)
│   ├── hooks/      # useAnalyzer (Logic-UI köprüsü)
│   └── pages/      # AnalyzerPage, HowToUsePage
└── App.tsx         # Uygulama ana giriş noktası


Gemini şunu dedi:
Aşağıdaki bloğu kopyalayıp doğrudan README.md dosyanın içine yapıştırabilirsin. Tüm teknik detayları ve mimari derinliği profesyonel bir formatta hazırladım:

Markdown
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
├── core/           # Tema yönetimi, global stiller ve sabitler
│   ├── contexts/   # ThemeContext (Dark/Light mode)
│   ├── styles/     # Tailwind v4 & Component stilleri
│   └── constants/  # Navigasyon ve API sabitleri
├── domain/         # İş mantığı (Business Logic)
│   ├── entities/   # Analiz veri modelleri
│   └── usecases/   # AnalyzeText fonksiyonel kuralları
├── presentation/   # UI Katmanı
│   ├── components/ # Ortak bileşenler (Layout, Footer)
│   ├── hooks/      # useAnalyzer (Logic-UI köprüsü)
│   └── pages/      # AnalyzerPage, HowToUsePage
└── App.tsx         # Uygulama ana giriş noktası

---
## Kurulum ve Çalıştırma
Repoyu klonlayın:

git clone [https://github.com/Dogaomruuzun/Mizan.git](https://github.com/Dogaomruuzun/Mizan.git)
Bağımlılıkları yükleyin:

npm install
Geliştirme sunucusunu başlatın:

npm run dev
