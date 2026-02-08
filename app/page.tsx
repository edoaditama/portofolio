"use client";

import { useState } from "react";
import Image from "next/image";
import RotatingText from "@/src/component/ui/RotatingText";
import Particles from "@/src/component/ui/Particles";
import BlurText from "@/src/component/ui/BlurText";
import GooeyNav from "@/src/component/ui/GooeyNav";
import LogoLoop from "@/src/component/ui/LogoLoop";
import { SiGmail, SiInstagram, SiGithub, SiWhatsapp } from "react-icons/si";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiReact,
  SiExpress,
  SiMysql,
  SiLaravel,
  SiBootstrap,
} from "react-icons/si";

// --- Configuration & Data ---
const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

{
  /* Sample project data */
}
const PROJECTS = [
  {
    title: "E-Commerce System",
    description:
      "Sistem informasi penjualan berbasis web dengan integrasi pembayaran.",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
    link: "#",
  },
  {
    title: "Data Management App",
    description:
      "Aplikasi pengolahan data administrasi untuk efisiensi workflow.",
    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
    link: "#",
  },
  {
    title: "IT Support Dashboard",
    description: "Monitoring sistem dan ticketing untuk penanganan kendala IT.",
    tech: [
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
    link: "#",
  },
];
{
  /* Social logos for footer */
}
const SOCIAL_LOGOS = [
  {
    node: <SiGithub size={30} />,
    title: "GitHub",
    href: "https://github.com/edoaditama",
  },
  {
    node: <SiGmail size={30} />,
    title: "Gmail",
    href: "mailto:edoaditama66@gmail.com",
  },
  {
    node: <SiInstagram size={30} />,
    title: "Instagram",
    href: "https://www.instagram.com/edoaditamma/",
  },
  {
    node: <SiWhatsapp size={30} />,
    title: "WhatsApp",
    href: "https://wa.me/62895619910461",
  },
];

export default function Home() {
  const [isAboutFinished, setIsAboutFinished] = useState(false);

  return (
    <main className="relative min-h-screen bg-zinc-950 text-white overflow-x-hidden selection:bg-cyan-400 selection:text-black">
      {/* 1. Background Particles (Fixed) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#360185", "#8F0177"]}
          particleCount={200}
          speed={0.1}
          particleBaseSize={150}
          moveParticlesOnHover
          alphaParticles
        />
      </div>

      {/* 2. Navigation & Branding */}
      <header>
        <div className="fixed top-6 left-6 md:top-8 md:left-8 z-70 flex items-center gap-4 group">
          {/* TEKS  */}
          <div className="font-black text-2xl md:text-3xl text-cyan-400 tracking-tighter drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
            Port<span className="text-white">.</span>
          </div>
        </div>

        {/* NAVIGASI - Tetap sama agar tidak menutupi logo yang membesar */}
        <div className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-60 scale-90 md:scale-100">
          <GooeyNav items={NAV_ITEMS} particleCount={12} animationTime={600} />
        </div>
      </header>

      {/* 3. Hero Section */}
      <section
        id="home"
        className="relative z-10 flex flex-col items-center scroll-mt-40 justify-center px-6 min-h-screen max-w-6xl mx-auto pt-20 scrole-smooth"
      >
        <div className="w-full space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-center md:text-left">
            Prameswara <br className="hidden md:block" /> Edo Aditama
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
            <span className="text-zinc-500 text-lg md:text-2xl font-medium tracking-tight">
              I&apos;m a
            </span>
            <div className="h-12 md:h-14 flex items-center">
              <RotatingText
                texts={[
                  "Front End Developer",
                  "Data Administrator",
                  "IT Support",
                ]}
                mainClassName="text-lg md:text-3xl font-bold text-cyan-400 bg-cyan-400/10 px-6 py-1.5 rounded-full border border-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.1)]"
                rotationInterval={2800}
              />
            </div>
          </div>
        </div>

        {/* About Card */}
        <div
          id="about"
          className="relative z-20 mt-24 w-full scroll-mt-32 scrole-smooth"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 bg-zinc-900/40 p-8 md:p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-xl shadow-2xl group transition-all duration-500 hover:border-cyan-400/30">
            {/* FOTO PROFIL */}
            <div className="relative shrink-0">
              <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-[2rem] overflow-hidden border-2 border-cyan-400/30 group-hover:border-cyan-400 transition-all duration-500 shadow-2xl">
                <Image
                  src="/Edo.png"
                  alt="Prameswara Edo Aditama"
                  fill
                  priority
                  sizes="(max-width: 768px) 160px, 208px"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-cyan-400/10 rounded-[2rem] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:bg-cyan-400/5 transition-all duration-500" />
            </div>

            {/* KONTEN TEKS & TOMBOL */}
            <div className="flex-1 flex flex-col items-center md:items-start gap-8">
              <div className="max-w-2xl">
                <BlurText
                  text="Information Systems graduate from Amikom University Purwokerto, with a strong interest in Information Technology, administration, and web development. Experienced in data processing and enthusiastic about contributing to evolving technology projects."
                  delay={30}
                  animateBy="words"
                  onAnimationComplete={() => setIsAboutFinished(true)}
                  className="text-zinc-300 text-base md:text-xl leading-relaxed font-medium"
                />
              </div>

              <div
                className={`transition-all duration-1000 ease-out transform ${isAboutFinished ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <a
                  href="/CV Edo Aditama.pdf"
                  download="CV_Prameswara_Edo_Aditama.pdf"
                  className="group/btn relative inline-block"
                >
                  <div className="absolute inset-0 bg-cyan-400 blur-2xl opacity-0 group-hover/btn:opacity-20 transition-opacity" />
                  <button className="relative whitespace-nowrap px-10 py-4 bg-cyan-400 text-black font-black rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-cyan-400/20 tracking-wide uppercase text-sm">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Projects Section */}
      <section
        id="projects"
        className="relative z-10 py-32 px-6 max-w-6xl mx-auto scroll-mt-20 scrole-smooth"
      >
        <div className="flex flex-col items-center mb-16 space-y-2">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
            Featured Projects
          </h2>
          <div className="h-1.5 w-24 bg-cyan-400 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-zinc-900/40 p-8 rounded-2xl border border-white/10 backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-500 hover:bg-zinc-900/60"
            >
              <h3 className="text-2xl font-black mb-4 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-zinc-800/80 rounded-lg text-zinc-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors"
                  >
                    <span className="text-sm">{t.icon}</span>
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Contact Section */}
      <section
        id="contact"
        className="relative z-10 py-32 px-6 max-w-5xl mx-auto scroll-mt-20 scrole-smooth"
      >
        <div className="bg-zinc-900/30 border border-cyan-400 rounded-[3.5rem] p-8 md:p-20 backdrop-blur-md shadow-3xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              LET&apos;S CONNECT
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl font-light italic">
              Have a project idea or a job opportunity? Let&apos;s talk.
            </p>
            <LogoLoop
              className="mt-30"
              logos={SOCIAL_LOGOS}
              speed={25}
              fadeOut
              fadeOutColor="#0f172a"
            />
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="relative z-10 pt-20 pb-12 flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4">
          <div className="h-px w-full max-w-6xl bg-linear-to-r from-transparent via-zinc-800 to-transparent" />
          <p className="font-bold text-zinc-600 text-xs md:text-sm tracking-[0.2em] uppercase">
            Prameswara Edo Aditama &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </main>
  );
}
