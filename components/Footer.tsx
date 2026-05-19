"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-sky-100 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/a101logo.png"
              alt="A101"
              width={52}
              height={22}
              className="object-contain"
              style={{ mixBlendMode: "multiply" }}
            />
            <div className="w-px h-5 bg-slate-200" />
            <span className="font-bold text-sm text-[#0c172a]">
              Shelf<span className="neon-text">Sense</span> AI
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <p className="text-xs text-slate-400">
              Girişim 101 Başvuru Projesi &mdash; 2026
            </p>
            <p className="text-xs text-slate-300">
              AI destekli gerçek zamanlı perakende zekâ sistemi
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse" />
            Sistem Aktif
          </div>
        </div>
      </div>
    </footer>
  );
}
