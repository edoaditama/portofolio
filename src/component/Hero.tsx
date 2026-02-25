import Image from "next/image";
import RotatingText from "@/src/component/ui/RotatingText";
import BlurText from "@/src/component/ui/BlurText";
import { useState } from "react";

function Hero() {
  const [isAboutFinished, setIsAboutFinished] = useState(false);
  return (
      <section
        id="home"
        className="relative z-10 flex flex-col items-center justify-center px-6 min-h-[90vh] md:min-h-screen max-w-6xl mx-auto pt-24 md:pt-0 scroll-mt-20"
      >
        <div className="w-full space-y-4 md:space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none md:leading-[0.9]">
            Prameswara <br className="hidden md:block" /> Edo Aditama
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
            <span className="text-zinc-500 text-lg md:text-2xl font-medium tracking-tight">
              I&apos;m a
            </span>
            <div className="h-10 md:h-14 flex items-center">
              <RotatingText
                texts={[
                  "Front End Developer",
                  "Data Administrator",
                  "IT Support",
                ]}
                mainClassName="text-sm md:text-2xl font-bold text-cyan-400 bg-cyan-400/10 px-4 md:px-6 py-1 md:py-2 rounded-full border border-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.1)]"
                rotationInterval={2800}
              />
            </div>
          </div>
        </div>

        {/* About Card */}
        <div
          id="about"
          className="relative z-20 mt-16 md:mt-24 w-full scroll-mt-24"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 bg-zinc-900/40 p-6 md:p-12 rounded-4xl md:rounded-[3rem] border border-white/10 backdrop-blur-xl shadow-2xl group transition-all duration-500 hover:border-cyan-400/30">
            {/* PROFILE PHOTO */}
            <div className="relative shrink-0">
              <div className="relative w-32 h-32 md:w-52 md:h-52 rounded-3xl md:rounded-4xl overflow-hidden border-2 border-cyan-400/30 group-hover:border-cyan-400 transition-all duration-500 shadow-2xl">
                <Image
                  src="/Edo.png"
                  alt="Prameswara Edo Aditama"
                  fill
                  priority
                  sizes="(max-width: 768px) 128px, 208px"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-cyan-400/10 rounded-3xl md:rounded-4xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:bg-cyan-400/5 transition-all duration-500" />
            </div>

            {/* CONTENT */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
              <div className="max-w-2xl">
                <BlurText
                  text="Information Systems graduate from Amikom University Purwokerto, with a strong interest in Information Technology, administration, and web development. Experienced in data processing and enthusiastic about contributing to evolving technology projects."
                  delay={30}
                  animateBy="words"
                  onAnimationComplete={() => setIsAboutFinished(true)}
                  className="text-zinc-300 text-sm md:text-lg leading-relaxed font-medium"
                />
              </div>

              <div
                className={`transition-all duration-1000 ease-out transform ${
                  isAboutFinished
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <a
                  href="/CV Edo Aditama.pdf"
                  download="CV_Prameswara_Edo_Aditama.pdf"
                  className="group/btn relative inline-block"
                >
                  <div className="absolute inset-0 bg-cyan-400 blur-2xl opacity-0 group-hover/btn:opacity-20 transition-opacity" />
                  <button className="relative whitespace-nowrap px-8 py-3 md:px-10 md:py-4 bg-cyan-400 text-black font-black rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-cyan-400/20 tracking-wide uppercase text-xs md:text-sm">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero