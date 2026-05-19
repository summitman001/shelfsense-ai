# ShelfSense AI

**AI destekli gerçek zamanlı perakende zekâ sistemi.**

> A101 Girişim 101 Başvuru Projesi — 2026

---

## Proje Hakkında

ShelfSense AI, perakende mağazalarının en büyük sorunlarını — aşırı stok, gıda israfı, verimsiz kampanyalar ve boş raflar — gerçek zamanlı yapay zekâ ile çözen bir otonom perakende platformudur.

Kamera görüntülerini milisaniye gecikmesiyle analiz ederek rafların dijital ikizini oluşturur. Bu veriye dayanarak kişisel kampanyalar üretir, geofencing ile müşterilere anlık bildirim gönderir ve stok hareketlerini tahmin eder.

---

## Özellikler

- **Gerçek Zamanlı Raf Analizi** — Kamera → AI Tespiti → Dijital İkiz akışı
- **Dinamik Fiyatlandırma** — Stok durumuna göre otomatik fiyat optimizasyonu
- **Sepet Zekâsı** — Alışveriş geçmişine göre kişisel kampanya üretimi
- **Geofencing Otomasyonu** — 500m yarıçaplı akıllı bildirim sistemi
- **Canlı Dashboard** — Raf doluluk monitörü, AI tespit logları, sistem uyarıları
- **Otonom Sipariş** *(Yakında)* — Tedarikçi entegrasyonu ile otomatik stok yenileme

---

## Tech Stack

| Katman | Teknoloji |
|--------|-----------|
| Framework | Next.js 16 (App Router) |
| Dil | TypeScript |
| Stil | Tailwind CSS v4 |
| Animasyon | Framer Motion |
| İkonlar | Lucide React |
| Deploy | Vercel |

---

## Kurulum

```bash
# Repoyu klonla
git clone https://github.com/summitman001/shelfsense-ai.git
cd shelfsense-ai

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda aç: [http://localhost:3000](http://localhost:3000)

---

## Proje Yapısı

```
shelfsense-ai/
├── app/
│   ├── layout.tsx          # Root layout, meta bilgileri
│   ├── page.tsx            # Ana sayfa
│   └── globals.css         # Global stiller, animasyonlar
├── components/
│   ├── Navbar.tsx           # Sticky navbar
│   ├── Hero.tsx             # Hero section + metrik kartlar
│   ├── DashboardMockup.tsx  # Canlı animasyonlu dashboard UI
│   ├── Ticker.tsx           # Canlı durum şeridi
│   ├── Problem.tsx          # Problem section
│   ├── CoreSystem.tsx       # Kamera→AI→Dijital İkiz akışı
│   ├── Pricing.tsx          # Dinamik fiyatlandırma & sepet zekâsı
│   ├── Geofencing.tsx       # Geofencing & telefon mockup
│   ├── Benefits.tsx         # Faydalar
│   ├── Vision.tsx           # Vizyon & roadmap
│   ├── CTA.tsx              # Demo talep formu
│   └── Footer.tsx           # Footer
└── public/
    └── a101logo.png         # A101 Girişim 101 logosu
```

---

## Sayfa Akışı

```
Hero  →  Problem  →  Temel Sistem  →  Dinamik Fiyatlandırma
→  Geofencing  →  Faydalar  →  Vizyon  →  Demo CTA
```

---

## Tasarım Sistemi

- **Tema:** Dark, `#030712` arka plan
- **Accent:** Neon yeşil `#39ff14`
- **İkincil:** Cyan `#00d4ff`, Mor `#a78bfa`
- **Efektler:** Glassmorphism, neon glow, scan-line animasyonu
- **His:** Apple Keynote × Futuristic AI Startup × YC Demo Day

---

## Deploy

Vercel üzerinde otomatik CI/CD ile yayında. `main` branch'e her push otomatik deploy tetikler.

```bash
# Değişiklikleri yolla
git add .
git commit -m "feat: ..."
git push origin main
```

---

## Lisans

Bu proje A101 Girişim 101 başvurusu kapsamında geliştirilmiştir.
