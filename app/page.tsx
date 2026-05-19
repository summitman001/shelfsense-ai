import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Problem from "@/components/Problem";
import CoreSystem from "@/components/CoreSystem";
import Pricing from "@/components/Pricing";
import Geofencing from "@/components/Geofencing";
import Benefits from "@/components/Benefits";
import Vision from "@/components/Vision";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712]">
      <Navbar />
      <Hero />
      <Ticker />
      <Problem />
      <CoreSystem />
      <Pricing />
      <Geofencing />
      <Benefits />
      <Vision />
      <CTA />
      <Footer />
    </main>
  );
}
