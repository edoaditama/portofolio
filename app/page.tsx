"use client";

import Image from "next/image";
import RotatingText from "@/components/ui/RotatingText";
import Particles from "@/components/ui/Particles";
import BlurText from "@/components/ui/BlurText";
import GooeyNav from "@/components/ui/GooeyNav";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-start justify-center p-8 md:p-24 bg-zinc-950 overflow-hidden">
      
      {/* Background Particles - Tetap di z-0 agar di belakang */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#360185", "#8F0177"]}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover
          alphaParticles
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Gooey Navigation - Fixed di tengah atas */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-100">
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 3, 2, 1, 2, 3, 1, 4]}
        />
      </div>

      {/* Main Content - z-10 agar di atas partikel */}
      <div className="relative z-10 flex flex-col items-start w-full max-w-6xl mt-16 md:mt-0">

        {/* Container Header: Nama di kiri, Foto di kanan */}
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between w-full gap-8">

          {/* Sisi Kiri: Nama dan Jabatan */}
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none">
              Prameswara Edo Aditama
            </h1>

            <div className="flex items-center mt-2">
              <span className="text-zinc-500 mr-3 text-lg md:text-xl font-medium uppercase tracking-wider">
                I'm a
              </span>
              <RotatingText
                texts={[
                  "Front End Developer",
                  "Data Administrator",
                  "IT Support",
                ]}
                mainClassName="text-xl md:text-4xl font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 md:px-5 md:py-2 rounded-lg md:rounded-xl overflow-hidden"
                staggerFrom="last"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                rotationInterval={2500}
              />
            </div>
          </div>

          {/* Sisi Ranan: Foto Profil */}
          <div className="relative group">
            {/* Efek Glow Tipis di Belakang Foto */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500">
            </div>
            <div className="relative w-32 h-32 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-zinc-800 bg-zinc-900">
              <Image
                src="/next.svg" // Pastikan ganti ke file foto asli kamu nanti
                alt="Prameswara Edo Aditama"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Deskripsi */}
        <div className="mt-12 max-w-4xl">
          <BlurText
            text="Lulusan S1 Sistem Informasi Universitas Amikom Purwokerto, memiliki minat bekerja dalam bidang teknologi informasi, administrasi, dan pengembangan web. Memiliki pengalaman bekerja dalam bidang administrasi dan manajemen data seperti pengolahan dan pengarsipan data. Saya antusias untuk berkontribusi dalam proyek-proyek yang menantang dan terus belajar dalam industri teknologi yang terus berkembang."
            delay={50}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-zinc-400 text-lg md:text-xl leading-relaxed text-left"
          />
        </div>
      </div>
    </main>
  );
}