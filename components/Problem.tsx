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
    color: "#6366f1",
  },
  {
    icon: AlertOctagon,
    title: "Boş Raflar",
    stat: "%8",
    desc: "Ortalama mağazalarda her an boş olan raf yüzdesi — direkt satış kaybı.",
    color: "#0ea5e9",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="py-32 relative overflow-hidden bg-white" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs text-[#0ea5e9] font-mono uppercase tracking-widest mb-4 font-semibold">Problem</p>
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-[#0c172a]">
            Perakende <span className="gradient-text">körleşiyor.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
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
              className="bg-white rounded-2xl p-6 relative group hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-sky-100"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${p.color}12`, border: `1px solid ${p.color}25` }}
              >
                <p.icon size={22} style={{ color: p.color }} />
              </div>

              <div className="text-4xl font-black mb-2" style={{ color: p.color }}>
                {p.stat}
              </div>

              <h3 className="text-[#0c172a] font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>

              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-sky-50 to-cyan-50 rounded-2xl p-8 border border-sky-100 text-center"
        >
          <p className="text-slate-500 text-base max-w-3xl mx-auto">
            Bu kayıpların <span className="text-[#0c172a] font-semibold">tamamı önlenebilir.</span>{" "}
            Tek yapmanız gereken mağazanıza{" "}
            <span className="text-[#0ea5e9] font-semibold">gerçek zamanlı görüş</span> kazandırmak.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
