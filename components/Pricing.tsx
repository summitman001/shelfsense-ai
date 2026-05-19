"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart, Tag, Users, ArrowRight, TrendingDown } from "lucide-react";

const scenario = {
  trigger: { icon: TrendingDown, label: "Tetikleyici", desc: "Kaşar peyniri raf doluluk oranı %20'nin altına düşüyor.", color: "#ef4444" },
  detect: { icon: Users, label: "Kullanıcı Tespiti", desc: "AI, son 7 günde süt ürünü satın alan müşterileri tespit ediyor.", color: "#00d4ff" },
  campaign: { icon: Tag, label: "Kampanya", desc: "Kişiye özel: \"Kaşar 200g → %15 indirim\" bildirimi gönderiliyor.", color: "#39ff14" },
  result: { icon: ShoppingCart, label: "Sonuç", desc: "+%34 dönüşüm artışı. Ürün raflarda tükenmeden satılıyor.", color: "#a78bfa" },
};

const stats = [
  { value: "+%34", label: "Sepet Dönüşümü", color: "#39ff14" },
  { value: "-%61", label: "Gıda İsrafı", color: "#00d4ff" },
  { value: "x2.8", label: "Kampanya ROI", color: "#a78bfa" },
  { value: "4sn", label: "Tepki Süresi", color: "#f59e0b" },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const items = Object.values(scenario);

  return (
    <section id="pricing" className="py-32 relative overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 50%, #39ff1408 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs text-[#39ff14] font-mono uppercase tracking-widest mb-4">Dinamik Fiyatlandırma & Sepet Zekâsı</p>
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Doğru ürün, doğru kişi,{" "}
            <span className="gradient-text">doğru an.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Gerçek zamanlı stok verisiyle tetiklenen kişisel kampanyalar,
            hem israfı önler hem de dönüşümü katlayarak artırır.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-2xl p-6 border border-[#39ff14]/10"
          >
            <p className="text-sm font-semibold text-slate-300 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse" />
              Örnek Senaryo — Kaşar Peyniri
            </p>

            <div className="space-y-4">
              {items.map((item, i) => (
                <div key={item.label}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                    >
                      <item.icon size={18} style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="text-xs font-mono mb-1" style={{ color: item.color }}>{item.label}</p>
                      <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  {i < items.length - 1 && (
                    <div className="ml-5 mt-2 flex items-center">
                      <div className="w-px h-4 bg-white/10" />
                      <ArrowRight size={10} className="text-slate-600 ml-1" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <div className="glass rounded-2xl p-6 border border-white/5 flex-1">
              <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-4">Genel Akış</p>
              <div className="space-y-3">
                {[
                  "Stok eşiği aşıldı → Tetikleme",
                  "Alışveriş geçmişi segmentasyonu",
                  "Kişisel teklif oluşturma (GPT-4)",
                  "Push bildirimi / SMS / uygulama",
                  "Satış + stok güncelleme",
                ].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border border-[#39ff14]/30 flex items-center justify-center text-[10px] font-mono text-[#39ff14]">
                      {i + 1}
                    </div>
                    <span className="text-sm text-slate-300">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-xl p-4 border border-white/5">
                  <p className="text-2xl font-black mb-1" style={{ color: s.color }}>{s.value}</p>
                  <p className="text-xs text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
