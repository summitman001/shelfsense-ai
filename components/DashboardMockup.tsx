"use client";

import { useEffect, useState } from "react";
import { Activity, AlertTriangle, CheckCircle, TrendingUp, Camera, Cpu } from "lucide-react";

const alerts = [
  { type: "warning", msg: "Raf A3 — Ekmek Stoku Kritik (%12)", time: "2sn önce" },
  { type: "success", msg: "Kampanya tetiklendi — Kaşar %15 indirim", time: "8sn önce" },
  { type: "info", msg: "Geofence uyarısı — 47 kullanıcıya bildirim gönderildi", time: "15sn önce" },
  { type: "success", msg: "AI Fiyatlandırma — Süt ürünleri optimize edildi", time: "28sn önce" },
];

const shelfData = [
  { name: "A1 - Süt Ürünleri", stock: 87, status: "ok" },
  { name: "B2 - Ekmek & Fırın", stock: 12, status: "critical" },
  { name: "C4 - Atıştırmalık", stock: 64, status: "ok" },
  { name: "D1 - İçecekler", stock: 43, status: "warn" },
  { name: "E3 - Temizlik", stock: 91, status: "ok" },
];

export default function DashboardMockup() {
  const [tick, setTick] = useState(0);
  const [liveVal, setLiveVal] = useState(2847);

  useEffect(() => {
    const t = setInterval(() => {
      setTick((v) => v + 1);
      setLiveVal((v) => v + Math.floor(Math.random() * 5 - 1));
    }, 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-white rounded-3xl border border-sky-100 overflow-hidden shadow-xl shadow-sky-100">
      <div className="border-b border-sky-50 px-6 py-4 flex items-center justify-between bg-gradient-to-r from-sky-50 to-cyan-50">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-[#0ea5e9]" />
          </div>
          <span className="text-xs text-slate-400 font-mono">shelfsense.ai / dashboard / live</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#0ea5e9] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse" />
          CANLI
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1 space-y-3">
          <p className="text-xs text-slate-400 font-mono uppercase tracking-widest mb-2">Canlı Kamera Akışları</p>
          {[1, 2, 3].map((cam) => (
            <div key={cam} className="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-200" style={{ aspectRatio: "16/9" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-sky-900/20 to-transparent" />
              <div className="scan-line" />
              <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
                <Camera size={10} className="text-[#0ea5e9]" />
                <span className="text-[10px] font-mono text-[#0ea5e9]">CAM-{cam.toString().padStart(2, "0")}</span>
              </div>
              <div className="absolute top-2 right-2 text-[10px] font-mono text-[#0ea5e9]/70">
                {(23 + cam * 7 + tick % 3).toString().padStart(3, "0")} nesne
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-4 gap-1 opacity-40">
                  {[1, 0.2, 1, 1, 0.2, 1, 0.2, 1].map((op, i) => (
                    <div key={i} className="w-4 h-2 rounded-sm bg-[#0ea5e9]" style={{ opacity: op }} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Toplam Ürün", value: liveVal.toLocaleString("tr"), icon: Activity, color: "#0ea5e9" },
              { label: "Aktif Kampanya", value: "24", icon: TrendingUp, color: "#06b6d4" },
              { label: "AI Tespit / dk", value: `${1240 + tick * 3}`, icon: Cpu, color: "#6366f1" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl p-3 border border-slate-100 bg-slate-50">
                <div className="flex items-center gap-1.5 mb-2">
                  <stat.icon size={12} style={{ color: stat.color }} />
                  <span className="text-[10px] text-slate-400">{stat.label}</span>
                </div>
                <p className="text-xl font-bold font-mono" style={{ color: stat.color }}>{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
            <p className="text-xs text-slate-400 font-mono uppercase tracking-widest mb-3">Raf Doluluk Monitörü</p>
            <div className="space-y-2.5">
              {shelfData.map((s) => (
                <div key={s.name} className="flex items-center gap-3">
                  <span className="text-[11px] text-slate-500 w-32 truncate">{s.name}</span>
                  <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${s.stock}%`,
                        background: s.status === "critical" ? "#ef4444" : s.status === "warn" ? "#f59e0b" : "#0ea5e9",
                        boxShadow: s.status === "critical" ? "0 0 8px #ef4444" : s.status === "warn" ? "0 0 8px #f59e0b" : "0 0 8px rgba(14,165,233,0.5)",
                      }}
                    />
                  </div>
                  <span className="text-[11px] font-mono w-8 text-right" style={{ color: s.status === "critical" ? "#ef4444" : s.status === "warn" ? "#f59e0b" : "#0ea5e9" }}>
                    {s.stock}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
            <p className="text-xs text-slate-400 font-mono uppercase tracking-widest mb-3">Sistem Uyarıları</p>
            <div className="space-y-2">
              {alerts.slice(0, 3).map((a, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  {a.type === "warning" ? (
                    <AlertTriangle size={12} className="text-amber-500 mt-0.5 flex-shrink-0" />
                  ) : (
                    <CheckCircle size={12} className="text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                  )}
                  <p className="text-[11px] text-slate-600 leading-relaxed flex-1">{a.msg}</p>
                  <span className="text-[10px] text-slate-400 flex-shrink-0">{a.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
