"use client";

import RotatingText from "@/components/ui/RotatingText";
import Particles from "@/components/ui/Particles";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-start justify-center p-8 md:p-24 bg-zinc-950 overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-start gap-1">
        
        <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none">
          Prameswara Edo Aditama
        </h1>
        
        <div className="flex items-center mt-1 md:mt-2">
          <span className="text-zinc-500 mr-3 text-lg md:text-xl font-medium uppercase tracking-wider">
            I'm a
          </span>
          <RotatingText
            texts={["Front End Developer", "Data Administrator", "IT Support"]}
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
    </main>
  );
}
