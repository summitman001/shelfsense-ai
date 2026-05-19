"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Brain, Layers, ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Kamera Akışı",
    desc: "Mağaza kameraları milisaniye gecikmesiyle ham görüntü akışı sağlar.",
    color: "#00d4ff",
    detail: "RTSP / IP Camera",
  },
  {
    icon: Brain,
    title: "AI Tespiti",
    desc: "ShelfSense modeli her kareyi analiz eder: ürün, adet, konum, doluluk.",
    color: "#39ff14",
    detail: "YOLOv9 + Transformer",
  },
  {
    icon: Layers,
    title: "Dijital İkiz",
    desc: "Rafların tam kopyası saniyeler içinde veri tabanına aktarılır.",
    color: "#a78bfa",
    detail: "Real-time Digital Twin",
  },
];

const features = [
  "Ürün düzeyinde stok sayımı",
  "Yanlış raf yerleştirme tespiti",
  "Son kullanma tarihi uyarısı",
  "Doluluk yüzdesi analizi",
  "Zaman serisi stok tahmini",
  "Çok kameralı senkronizasyon",
];

export default function CoreSystem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="system" className="py-32 relative overflow-hidden" ref={ref}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #39ff1440, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs text-[#39ff14] font-mono uppercase tracking-widest mb-4">Temel Sistem — The Root</p>
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Rafları <span className="gradient-text">gerçek zamanlı</span>
            <br />
            dijitalleştiriyoruz.
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Kamera → AI Tespiti → Dijital İkiz akışı, mağazanızın fiziksel gerçekliğini
            anlık veriye dönüştürür.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-16 relative">
          {steps.map((s, i) => (
            <div key={s.title} className="relative flex items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="glass rounded-2xl p-8 flex-1 relative overflow-hidden group"
                style={{ borderColor: `${s.color}20` }}
              >
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${s.color}60, transparent)` }} />

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}
                >
                  <s.icon size={26} style={{ color: s.color }} />
                </div>

                <div className="text-xs font-mono mb-2 px-2 py-1 rounded-full inline-block" style={{ background: `${s.color}15`, color: s.color }}>
                  {s.detail}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 mt-3">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>

                <div className="text-3xl font-black mt-6 opacity-10" style={{ color: s.color }}>
                  0{i + 1}
                </div>
              </motion.div>

              {i < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center w-8 flex-shrink-0">
                  <ArrowRight size={16} className="text-slate-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="glass rounded-2xl p-8 border border-[#39ff14]/10"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">Neler tespit ediliyor?</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                ShelfSense AI; eğitilmiş bilgisayarlı görme modelleri ile saniyede binlerce
                kareyi işler ve raflarınızdaki her değişimi anında algılar.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <CheckCircle size={14} className="text-[#39ff14] flex-shrink-0" />
                    <span className="text-sm text-slate-300">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-72 rounded-xl overflow-hidden border border-white/5 bg-black/30">
              <div className="p-3 border-b border-white/5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse" />
                <span className="text-xs font-mono text-slate-400">ai_detection.log</span>
              </div>
              <div className="p-4 space-y-1.5 font-mono text-[11px]">
                {[
                  { t: "00:01.204", msg: "Kaşar 250g → stok:14 → DÜŞÜK", c: "#f59e0b" },
                  { t: "00:01.891", msg: "Süt 1L → stok:67 → NORMAL", c: "#39ff14" },
                  { t: "00:02.103", msg: "Ekmek → stok:3 → KRİTİK", c: "#ef4444" },
                  { t: "00:02.440", msg: "Kampanya tetiklendi → Kaşar", c: "#a78bfa" },
                  { t: "00:02.891", msg: "Geofence → 12 kullanıcı tespit", c: "#00d4ff" },
                  { t: "00:03.200", msg: "Fiyat güncellendi → -15%", c: "#39ff14" },
                ].map((l, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-slate-600">{l.t}</span>
                    <span style={{ color: l.c }}>{l.msg}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
