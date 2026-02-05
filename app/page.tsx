"use client";

import RotatingText from "@/components/ui/RotatingText";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center p-8 md:p-24 bg-zinc-950">
      <div className="flex flex-col items-start gap-1">
        <h1 className="text-4xl md:text-7xl  text-bold font-black text-white tracking-tighter leading-none">
          Prameswara Edo Aditama
        </h1>
        <div className="flex items-center mt-1 md:mt-2">
          <span className="text-zinc-500 mr-3 text-lg md:text-xl font-medium uppercase tracking-wider">
            I am a
          </span>
          <RotatingText
            texts={["Front End Developer", "Data Administrator", "IT Support"]}
            mainClassName="text-xl md:text-4xl font-bold text-cyan-400 bg-cyan-400/5 px-3 py-1 md:px-5 md:py-2 rounded-lg md:rounded-xl overflow-hidden"
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
