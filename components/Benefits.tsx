"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, TrendingUp, Bot, Eye, Clock, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Gıda İsrafını Azalt",
    desc: "Son kullanma tarihi yaklaşan ürünler otomatik tespit edilir, kampanya başlatılır.",
    stat: "-%61",
    statLabel: "israf",
    color: "#39ff14",
  },
  {
    icon: TrendingUp,
    title: "Dönüşümü Artır",
    desc: "Doğru kişiye, doğru anda, doğru teklifle ulaşmak dönüşümü katlar.",
    stat: "+%34",
    statLabel: "satış",
    color: "#00d4ff",
  },
  {
    icon: Bot,
    title: "Otonom Perakende",
    desc: "İnsan müdahalesine gerek kalmadan çalışan, kendi kararlarını üretebilen sistem.",
    stat: "7/24",
    statLabel: "aktif",
    color: "#a78bfa",
  },
  {
    icon: Eye,
    title: "Gerçek Zamanlı Farkındalık",
    desc: "Mağazanızın her rafını, her ürününü saniye başı takip edin.",
    stat: "<1sn",
    statLabel: "gecikme",
    color: "#f59e0b",
  },
  {
    icon: Clock,
    title: "Hızlı Karar",
    desc: "Stok kritik seviyeye düşünce sistem otomatik sipariş sürecini başlatır.",
    stat: "4sn",
    statLabel: "tepki",
    color: "#ec4899",
  },
  {
    icon: BarChart3,
    title: "Derin Analitik",
    desc: "Raf performansı, satış tahminleri, müşteri davranışları — tek panelde.",
    stat: "∞",
    statLabel: "veri",
    color: "#14b8a6",
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
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
          <p className="text-xs text-[#39ff14] font-mono uppercase tracking-widest mb-4">Faydalar</p>
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Neden <span className="gradient-text">ShelfSense AI?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Yalnızca bir analiz aracı değil — mağazanızı baştan aşağı dönüştüren
            bir otonom zekâ platformu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 relative overflow-hidden group hover:border-white/10 transition-all duration-300 glow-card"
              style={{ borderColor: `${b.color}15` }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-5 pointer-events-none" style={{ background: b.color, transform: "translate(30%, -30%)" }} />

              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${b.color}15`, border: `1px solid ${b.color}30` }}
                >
                  <b.icon size={20} style={{ color: b.color }} />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black" style={{ color: b.color }}>{b.stat}</p>
                  <p className="text-xs text-slate-500">{b.statLabel}</p>
                </div>
              </div>

              <h3 className="font-bold text-white mb-2">{b.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{b.desc}</p>

              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${b.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
