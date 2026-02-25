import LogoLoop from "@/src/component/ui/LogoLoop";

import { SiGithub, SiInstagram, SiWhatsapp } from "react-icons/si";

const SOCIAL_LOGOS = [
  {
    node: <SiGithub size={30} />,
    title: "GitHub",
    href: "https://github.com/edoaditama",
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

function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 py-20 md:py-32 px-4 md:px-6 max-w-5xl mx-auto scroll-mt-20"
    >
      <div className="bg-zinc-900/30 border border-cyan-400/50 rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-20 backdrop-blur-md shadow-3xl text-center">
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-3xl md:text-7xl font-black tracking-tighter uppercase leading-none">
            LET&apos;S CONNECT
          </h2>
          <p className="text-zinc-400 text-base md:text-xl font-light italic">
            Have a project idea or a job opportunity? Let&apos;s talk.
          </p>
          <div className="pt-8">
            <LogoLoop
              logos={SOCIAL_LOGOS}
              speed={25}
              fadeOut
              fadeOutColor="#09090b"
            />
          </div>
          <div className=" pt-2  text-base md:text-xl text-zinc-200  ">
            <p>Email : edoaditama66@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
