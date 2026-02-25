"use client";

import Footer from "@/src/component/Footer";
import Hero from "@/src/component/Hero";
import Navbar from "@/src/component/Navbar";
import Projects from "@/src/component/Projects";
import Particles from "@/src/component/ui/Particles";
import Contact from "@/src/component/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-white overflow-x-hidden selection:bg-cyan-400 selection:text-black">
      {/* 1. Background Particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#360185", "#8F0177"]}
          particleCount={100} //
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles
        />
      </div>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
