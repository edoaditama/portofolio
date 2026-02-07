"use client";

import Image from "next/image";
import RotatingText from "@/src/component/ui/RotatingText";
import Particles from "@/src/component/ui/Particles";
import BlurText from "@/src/component/ui/BlurText";
import GooeyNav from "@/src/component/ui/GooeyNav";
import { SiGmail, SiInstagram, SiGithub } from "react-icons/si";
import LogoLoop from "@/src/component/ui/LogoLoop";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

{
  /* Navigation Items */
}
const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Contact", href: "#" },
];

/* Logo  di footer */
const techLogos = [
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
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20 md:p-24 bg-zinc-950 overflow-x-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#360185", "#8F0177"]}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={150}
          moveParticlesOnHover
          alphaParticles
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Brand - Responsif*/}
      <div className="fixed top-6 left- md:top-8 md:left-8 z-60 font-black text-xl text-cyan-400 tracking-tighter">
        Port.
      </div>

      {/* Navigation */}
      <div className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-50 scale-90 md:scale-100">
        <GooeyNav
          items={items}
          particleCount={12}
          particleDistances={[80, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 3, 2, 1, 2, 3, 1, 4]}
        />
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center md:items-start w-full max-w-6xl mt-12 md:mt-0">
        <div className="flex flex-col items-center md:items-start justify-between w-full gap-6">
          {/* Headline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] md:leading-none">
              Prameswara <br className="hidden md:block" /> Edo Aditama
            </h1>

            {/* Rotating Text Area */}
            <div className="flex flex-col md:flex-row items-center mt-6 md:mt-4 gap-2 md:gap-3">
              <span className="text-zinc-500 text-sm md:text-xl font-medium ">
                I'm a
              </span>
              <div className="h-10 md:h-14 flex items-center">
                <RotatingText
                  texts={[
                    "Front End Developer",
                    "Data Administrator",
                    "IT Support",
                  ]}
                  mainClassName="text-lg md:text-3xl font-bold text-cyan-400 bg-cyan-400/10 px-4 py-1 md:px-5 md:py-2 rounded-full border border-cyan-400/20"
                  staggerFrom="last"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  rotationInterval={2500}
                />
              </div>
            </div>
          </div>
        </div>

        {/*blurtext  */}
        <div className="mt-10 md:mt-12 max-w-3xl text-center md:text-left">
          <BlurText
            text="Lulusan S1 Sistem Informasi Universitas Amikom Purwokerto, memiliki minat bekerja dalam bidang teknologi informasi, administrasi, dan pengembangan web. Berpengalaman dalam pengolahan data dan antusias berkontribusi dalam proyek teknologi yang berkembang."
            delay={40}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-zinc-400 text-base md:text-xl leading-relaxed opacity-80"
          />
        </div>
      </div>

      {/* Footer*/}
      <div className="mt-20 md:absolute md:bottom-10 left-0 w-full z-20 flex flex-col gap-6">
        <div className="w-full">
          <LogoLoop
            logos={techLogos}
            speed={25}
            direction="left"
            logoHeight={40}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut={true}
            fadeOutColor="#09090b"
            ariaLabel="Social Links"
          />
        </div>
        <p className="text-center font-bold text-zinc-600 text-xs md:text-sm ">
          {" "}
          Prameswara Edo Aditama<span> &copy; 2026 All rights reserved.</span>
        </p>
      </div>
    </main>
  );
}
