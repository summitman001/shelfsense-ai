"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "Problem", href: "#problem" },
  { label: "Sistem", href: "#system" },
  { label: "Fiyatlandırma", href: "#pricing" },
  { label: "Geofencing", href: "#geofencing" },
  { label: "Vizyon", href: "#vision" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-white/5 py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Sol: A101 logosu + ShelfSense AI yazısı */}
        <a href="#" className="flex items-center gap-3 group">
          <Image
            src="/a101logo.png"
            alt="A101"
            width={52}
            height={22}
            className="object-contain"
            style={{ mixBlendMode: "screen" }}
          />
          <div className="w-px h-5 bg-white/15" />
          <span className="font-bold text-lg tracking-tight">
            Shelf<span className="neon-text">Sense</span> AI
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#cta"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#39ff14]/50 text-[#39ff14] text-sm font-medium hover:bg-[#39ff14]/10 transition-all duration-200"
        >
          Demo Al
        </a>

        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5 mt-2"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-slate-300 hover:text-[#39ff14] py-2 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="mt-2 text-center px-5 py-2 rounded-full border border-[#39ff14]/50 text-[#39ff14] text-sm font-medium"
              >
                Demo Al
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
