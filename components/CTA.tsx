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
    <section id="cta" className="py-32 relative overflow-hidden bg-white" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(14,165,233,0.06) 0%, transparent 70%)" }}
      />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs text-[#0ea5e9] font-semibold mb-6 tracking-widest uppercase">
            <Zap size={12} />
            <Image
              src="/a101logo.png"
              alt="A101"
              width={40}
              height={16}
              className="object-contain"
              style={{ mixBlendMode: "multiply" }}
            />
            Girişim 101 — 2026
          </div>

          <h2 className="text-4xl sm:text-6xl font-black mb-6 leading-tight text-[#0c172a]">
            Mağazanızı{" "}
            <span className="gradient-text">zekileştirin.</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Demo talep edin — 72 saat içinde mevcut kameralarınızla
            ShelfSense AI&apos;yi test edin.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 border border-sky-100 shadow-xl shadow-sky-50"
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center mx-auto mb-4">
                <Zap size={28} className="text-[#0ea5e9]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0c172a] mb-2">Talebiniz Alındı!</h3>
              <p className="text-slate-400">72 saat içinde ekibimiz sizinle iletişime geçecek.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300" />
                  <input
                    type="text"
                    placeholder="Adınız Soyadınız"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3.5 text-sm text-[#0c172a] placeholder-slate-300 focus:outline-none focus:border-[#0ea5e9] transition-colors"
                  />
                </div>
                <div className="relative">
                  <Building2 size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300" />
                  <input
                    type="text"
                    placeholder="Mağaza / Şirket Adı"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3.5 text-sm text-[#0c172a] placeholder-slate-300 focus:outline-none focus:border-[#0ea5e9] transition-colors"
                  />
                </div>
              </div>

              <div className="relative">
                <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300" />
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3.5 text-sm text-[#0c172a] placeholder-slate-300 focus:outline-none focus:border-[#0ea5e9] transition-colors"
                />
              </div>

              <select
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-400 focus:outline-none focus:border-[#0ea5e9] transition-colors appearance-none"
                defaultValue=""
              >
                <option value="" disabled>Mağaza büyüklüğünüzü seçin</option>
                <option value="small">1-5 Mağaza</option>
                <option value="medium">6-20 Mağaza</option>
                <option value="large">20+ Mağaza / Zincir</option>
              </select>

              <button
                type="submit"
                className="w-full group flex items-center justify-center gap-2 py-4 rounded-xl bg-[#0ea5e9] text-white font-bold text-base hover:bg-[#0284c7] transition-all duration-200 shadow-lg shadow-sky-200"
              >
                Ücretsiz Demo Talep Et
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-xs text-slate-400">
                Kredi kartı gerekmez. 72 saatte kurulum. Mevcut kameralar yeterli.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
