import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShelfSense AI — Gerçek Zamanlı Perakende Zekâsı",
  description: "AI destekli gerçek zamanlı perakende zekâ sistemi. Rafları dijitalleştir, israfı azalt, dönüşümü artır.",
  keywords: "AI, perakende, stok yönetimi, gerçek zamanlı analiz, yapay zeka",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="h-full">
      <body className={`${inter.className} min-h-full bg-[#030712] text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
