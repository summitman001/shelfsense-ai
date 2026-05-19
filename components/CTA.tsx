"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Zap, Mail, Building2, User } from "lucide-react";
import Image from "next/image";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="cta" className="py-32 relative overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, #39ff1415 0%, transparent 70%)" }}
      />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border border-[#39ff14]/20 text-xs text-[#39ff14] font-mono mb-6 tracking-widest uppercase">
            <Zap size={12} />
            <Image
              src="/a101logo.png"
              alt="A101"
              width={40}
              height={16}
              className="object-contain"
              style={{ mixBlendMode: "screen" }}
            />
            Girişim 101 — 2026
          </div>

          <h2 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
            Mağazanızı{" "}
            <span className="gradient-text">zekileştirin.</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Demo talep edin — 72 saat içinde mevcut kameralarınızla
            ShelfSense AI&apos;yi test edin.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-2xl p-8 border border-[#39ff14]/15 shadow-[0_0_60px_#39ff1410]"
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#39ff14]/15 border border-[#39ff14]/30 flex items-center justify-center mx-auto mb-4 animate-pulse-neon">
                <Zap size={28} className="text-[#39ff14]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Talebiniz Alındı!</h3>
              <p className="text-slate-400">72 saat içinde ekibimiz sizinle iletişime geçecek.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Adınız Soyadınız"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#39ff14]/40 transition-colors"
                  />
                </div>
                <div className="relative">
                  <Building2 size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Mağaza / Şirket Adı"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#39ff14]/40 transition-colors"
                  />
                </div>
              </div>

              <div className="relative">
                <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#39ff14]/40 transition-colors"
                />
              </div>

              <select
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-slate-400 focus:outline-none focus:border-[#39ff14]/40 transition-colors appearance-none"
                defaultValue=""
              >
                <option value="" disabled>Mağaza büyüklüğünüzü seçin</option>
                <option value="small">1-5 Mağaza</option>
                <option value="medium">6-20 Mağaza</option>
                <option value="large">20+ Mağaza / Zincir</option>
              </select>

              <button
                type="submit"
                className="w-full group flex items-center justify-center gap-2 py-4 rounded-xl bg-[#39ff14] text-black font-bold text-base hover:bg-[#39ff14]/90 transition-all duration-200 shadow-[0_0_30px_#39ff1440] hover:shadow-[0_0_50px_#39ff1460]"
              >
                Ücretsiz Demo Talep Et
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-xs text-slate-500">
                Kredi kartı gerekmez. 72 saatte kurulum. Mevcut kameralar yeterli.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
