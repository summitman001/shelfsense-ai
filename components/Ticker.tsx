"use client";

const items = [
  "🟢 Stok Güncel",
  "📊 Kampanya Aktif: 24",
  "🎯 Geofence: 500m",
  "⚡ AI Tespit: 1240/dk",
  "📦 Dijital İkiz: CANLI",
  "🔔 Bildirim Gönderildi: 47",
  "✅ Raf Doluluk: %87",
  "🤖 Otonom Sipariş: Aktif",
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div className="border-y border-white/5 py-3 overflow-hidden bg-black/20">
      <div className="flex whitespace-nowrap animate-ticker">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 px-6 text-xs text-slate-500 font-mono">
            {item}
            <span className="text-white/10">|</span>
          </span>
        ))}
      </div>
    </div>
  );
}
