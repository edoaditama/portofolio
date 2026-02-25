import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiMysql,
  SiLaravel,
  SiBootstrap,
  SiGithub,
  SiInstagram,
  SiWhatsapp,
} from "react-icons/si";

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

function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 py-20 md:py-32 px-6 max-w-6xl mx-auto scroll-mt-20"
    >
      <div className="flex flex-col items-center mb-12 md:mb-16 space-y-2">
        <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase italic text-center">
          Featured Projects
        </h2>
        <div className="h-1.5 w-20 md:w-24 bg-cyan-400 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className="group relative bg-zinc-900/40 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-500 hover:bg-zinc-900/60"
          >
            <h3 className="text-xl md:text-2xl font-black mb-3 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-2.5 py-1.5 bg-zinc-800/80 rounded-lg text-zinc-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors"
                >
                  <span className="text-xs md:text-sm">{t.icon}</span>
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
