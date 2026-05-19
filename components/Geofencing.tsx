"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { MapPin, Bell, Smartphone, Wifi } from "lucide-react";

const notifications = [
  { emoji: "🧀", title: "Kaşar Fırsatı!", msg: "Mağazaya 200m yakınsınız. Kaşar 200g %15 indirimli!", time: "Şimdi" },
  { emoji: "🥛", title: "Süt Ürünleri Günü", msg: "Bugün aldığınız süte özel %10 ek indirim sizi bekliyor.", time: "2 dk" },
  { emoji: "🛒", title: "Kişisel Sepet", msg: "Geçen hafta aldıklarınız hazır — hızlı alışveriş listesi.", time: "5 dk" },
];

const pulseRings = [
  { size: 200, duration: 2.5, delay: 0 },
  { size: 300, duration: 2.5, delay: 0.8 },
  { size: 400, duration: 2.5, delay: 1.6 },
];

export default function Geofencing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeNotif, setActiveNotif] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const t = setInterval(() => setActiveNotif((v) => (v + 1) % notifications.length), 3000);
    return () => clearInterval(t);
  }, [inView]);

  return (
    <section id="geofencing" className="py-32 relative overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 20% 50%, #00d4ff08 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs text-[#00d4ff] font-mono uppercase tracking-widest mb-4">Geofencing Otomasyonu</p>
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Müşteri mağazaya yaklaşsın,{" "}
            <span className="text-[#00d4ff]" style={{ textShadow: "0 0 20px #00d4ff60" }}>
              sistem konuşsun.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            500 metrelik geofence alanı içine giren müşteriye, o anki stok durumuna
            göre kişiselleştirilmiş anlık bildirim gönderiliyor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80 flex items-center justify-center">
              {pulseRings.map((ring, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-[#00d4ff]/20"
                  style={{ width: ring.size, height: ring.size }}
                  animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.4, 0.1, 0.4] }}
                  transition={{ duration: ring.duration, delay: ring.delay, repeat: Infinity }}
                />
              ))}

              <div className="relative z-10 glass rounded-3xl border border-[#00d4ff]/30 shadow-[0_0_40px_#00d4ff20] w-52">
                <div className="bg-black/40 rounded-t-3xl px-4 py-3 flex items-center justify-between border-b border-white/5">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <div className="w-6 h-1.5 rounded-full bg-white/20" />
                  </div>
                  <Wifi size={12} className="text-[#00d4ff]" />
                </div>

                <div className="p-4 space-y-2">
                  {notifications.map((n, i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: i === activeNotif ? 1 : 0.3, scale: i === activeNotif ? 1 : 0.97 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-xl p-3 bg-white/5 border border-white/5"
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-lg leading-none">{n.emoji}</span>
                        <div>
                          <p className="text-[11px] font-semibold text-white leading-none mb-1">{n.title}</p>
                          <p className="text-[10px] text-slate-400 leading-relaxed">{n.msg}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="px-4 pb-4">
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-1/3 rounded-full bg-[#00d4ff]" style={{ boxShadow: "0 0 8px #00d4ff" }} />
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#00d4ff]/20 border border-[#00d4ff]/50 flex items-center justify-center"
                style={{ boxShadow: "0 0 20px #00d4ff40" }}
              >
                <MapPin size={18} className="text-[#00d4ff]" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {[
              {
                icon: MapPin,
                color: "#00d4ff",
                title: "500m Geofence Alanı",
                desc: "Mağaza etrafında dinamik bir coğrafi sınır tanımlanır. Müşteri bu alana girdiği anda sistem devreye girer.",
              },
              {
                icon: Bell,
                color: "#39ff14",
                title: "Stok-Bağlı Bildirim",
                desc: "Gönderilen bildirim; o anki stok durumu, kişinin alışveriş geçmişi ve davranışsal veriye göre özelleştirilir.",
              },
              {
                icon: Smartphone,
                color: "#a78bfa",
                title: "Çok Kanal Desteği",
                desc: "Push bildirimi, SMS ve mağaza uygulaması üzerinden eş zamanlı iletişim. Müşteriyi nerede olursa olsun yakala.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                >
                  <item.icon size={20} style={{ color: item.color }} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
