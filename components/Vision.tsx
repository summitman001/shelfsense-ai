"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Globe, Sparkles } from "lucide-react";

const roadmap = [
  { phase: "Faz 1", title: "Mağaza Dijitalleştirme", desc: "Kamera entegrasyonu, AI tespiti, dijital ikiz oluşturma.", status: "active", color: "#39ff14" },
  { phase: "Faz 2", title: "Kampanya Otomasyonu", desc: "Kişisel teklifler, geofencing, push bildirimi.", status: "active", color: "#00d4ff" },
  { phase: "Faz 3", title: "Otonom Sipariş", desc: "Tedarikçi entegrasyonu, otomatik sipariş, dinamik tedarik zinciri.", status: "soon", color: "#a78bfa" },
  { phase: "Faz 4", title: "Küresel Ağ", desc: "Zincir mağaza yönetimi, merkezi analitik, sektörel kıyaslama.", status: "future", color: "#f59e0b" },
];

export default function Vision() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="py-32 relative overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, #39ff1410 0%, transparent 60%)" }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #a78bfa40, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs text-[#a78bfa] font-mono uppercase tracking-widest mb-4">Vizyon</p>
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Otonom Perakende&apos;nin{" "}
            <span className="gradient-text">Geleceği.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Bugünün zincir marketleri, yarın tam otonom çalışacak. ShelfSense AI,
            bu dönüşümün omurgasını oluşturuyor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3"
          >
            {roadmap.map((r, i) => (
              <motion.div
                key={r.phase}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="glass rounded-xl p-5 flex items-start gap-4"
                style={{ borderColor: `${r.color}20`, opacity: r.status === "future" ? 0.6 : 1 }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 font-mono text-xs font-bold"
                  style={{ background: `${r.color}15`, border: `1px solid ${r.color}30`, color: r.color }}
                >
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-slate-500">{r.phase}</span>
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full font-mono"
                      style={{
                        background: `${r.color}15`,
                        color: r.color,
                        border: `1px solid ${r.color}30`,
                      }}
                    >
                      {r.status === "active" ? "aktif" : r.status === "soon" ? "yakında" : "gelecek"}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white mb-1">{r.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <div className="glass rounded-2xl p-8 border border-[#39ff14]/10 flex-1 flex flex-col justify-center">
              <Sparkles size={32} className="text-[#39ff14] mb-6" />
              <blockquote className="text-2xl font-bold text-white leading-relaxed mb-6">
                &ldquo;Bir raf boşalacağını, sistem siz anlamadan{" "}
                <span className="neon-text">4 dakika önce biliyor.</span>&rdquo;
              </blockquote>
              <p className="text-sm text-slate-400">
                Tahminsel stok modelleri, geçmiş satış verisi ve anlık kamera
                akışını birleştirerek proaktif kararlar alır.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-xl p-5 border border-[#00d4ff]/10">
                <Globe size={22} className="text-[#00d4ff] mb-3" />
                <p className="font-bold text-white mb-1">Çok Mağazalı</p>
                <p className="text-xs text-slate-400">Tüm zinciri tek panelden yönet.</p>
              </div>
              <div className="glass rounded-xl p-5 border border-[#a78bfa]/10">
                <Rocket size={22} className="text-[#a78bfa] mb-3" />
                <p className="font-bold text-white mb-1">Hızlı Kurulum</p>
                <p className="text-xs text-slate-400">72 saatte canlıya geç, mevcut kameralarla.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
