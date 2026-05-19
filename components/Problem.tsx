"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { PackageX, Trash2, Megaphone, AlertOctagon } from "lucide-react";

const problems = [
  {
    icon: PackageX,
    title: "Aşırı Stok",
    stat: "₺340B",
    desc: "Türkiye perakende sektöründe her yıl aşırı stoktan kaynaklanan kayıp.",
    color: "#ef4444",
  },
  {
    icon: Trash2,
    title: "Gıda İsrafı",
    stat: "%35",
    desc: "Mağazalardaki gıda ürünlerinin son kullanma tarihinden önce raflarda bozulması.",
    color: "#f59e0b",
  },
  {
    icon: Megaphone,
    title: "Verimsiz Kampanyalar",
    stat: "%67",
    desc: "Genel kampanyaların hedef kitleye ulaşmadan boşa harcanan bütçe oranı.",
    color: "#a78bfa",
  },
  {
    icon: AlertOctagon,
    title: "Boş Raflar",
    stat: "%8",
    desc: "Ortalama mağazalarda her an boş olan raf yüzdesi — direkt satış kaybı.",
    color: "#00d4ff",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs text-[#39ff14] font-mono uppercase tracking-widest mb-4">Problem</p>
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Perakende <span className="gradient-text">körleşiyor.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Geleneksel mağazalar; veri eksikliği, gecikmeli kararlar ve kör kampanyalarla
            her gün milyonlarca lira kaybediyor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass rounded-2xl p-6 relative glow-card group hover:border-white/15 transition-all duration-300"
              style={{ borderColor: `${p.color}20` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}
              >
                <p.icon size={22} style={{ color: p.color }} />
              </div>

              <div className="text-4xl font-black mb-2" style={{ color: p.color }}>
                {p.stat}
              </div>

              <h3 className="text-white font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>

              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 glass rounded-2xl p-8 border border-[#39ff14]/10 text-center"
        >
          <p className="text-slate-400 text-base max-w-3xl mx-auto">
            Bu kayıpların <span className="text-white font-semibold">tamamı önlenebilir.</span>{" "}
            Tek yapmanız gereken mağazanıza{" "}
            <span className="neon-text font-semibold">gerçek zamanlı görüş</span> kazandırmak.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
