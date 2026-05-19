"use client";

import { Zap } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* ShelfSense markası */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#39ff14]/10 border border-[#39ff14]/30 flex items-center justify-center">
              <Zap size={13} className="text-[#39ff14]" />
            </div>
            <span className="font-bold text-sm">
              Shelf<span className="neon-text">Sense</span> AI
            </span>
          </div>

          {/* Orta: A101 logosu + yıl */}
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/a101logo.png"
              alt="A101 Girişim 101"
              width={64}
              height={26}
              className="object-contain"
              style={{ mixBlendMode: "screen", opacity: 0.7 }}
            />
            <p className="text-xs text-slate-600">
              Girişim 101 Başvuru Projesi &mdash; 2026
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse" />
            Sistem Aktif
          </div>
        </div>
      </div>
    </footer>
  );
}
