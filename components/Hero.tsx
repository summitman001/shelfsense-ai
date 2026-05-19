"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, TrendingUp, Shield, MapPin } from "lucide-react";
import Image from "next/image";
import DashboardMockup from "./DashboardMockup";

const metrics = [
  { icon: Activity, label: "Canlı Stok", value: "98.4%", color: "#39ff14" },
  { icon: TrendingUp, label: "Dönüşüm", value: "+34%", color: "#00d4ff" },
  { icon: Shield, label: "İsraf Azaltma", value: "-61%", color: "#a78bfa" },
  { icon: MapPin, label: "Geofence Kapsama", value: "500m", color: "#f59e0b" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-grid pt-24 pb-16">
      <div className="absolute inset-0 bg-radial-dark pointer-events-none" />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #39ff1412 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border border-[#39ff14]/20 text-xs text-[#39ff14] font-medium mb-8 tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse" />
            <Image
              src="/a101logo.png"
              alt="A101"
              width={40}
              height={16}
              className="object-contain"
              style={{ mixBlendMode: "screen" }}
            />
            Girişim 101 — 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6"
          >
            <span className="gradient-text">ShelfSense</span>
            <br />
            <span className="text-white">AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed mb-4"
          >
            Gerçek zamanlı düşünen perakende mağazaları.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base text-slate-500 max-w-xl mb-10"
          >
            Kamera görüntülerini yapay zekâ ile analiz ederek raflarınızı gerçek zamanlı dijitalleştiriyor,
            akıllı kampanya ve uyarı sistemi ile dönüşümünüzü katlıyoruz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#39ff14] text-black font-bold text-sm hover:bg-[#39ff14]/90 transition-all duration-200 shadow-[0_0_30px_#39ff1440]"
            >
              Demo Talep Et
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#system"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass border border-white/10 text-sm text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200"
            >
              Sistemi Keşfet
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16"
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="glass rounded-2xl p-4 flex items-center gap-3 glow-card relative"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${m.color}15`, border: `1px solid ${m.color}30` }}
              >
                <m.icon size={18} style={{ color: m.color }} />
              </div>
              <div>
                <p className="text-xs text-slate-500 leading-none mb-1">{m.label}</p>
                <p className="text-lg font-bold" style={{ color: m.color }}>{m.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="animate-float"
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
