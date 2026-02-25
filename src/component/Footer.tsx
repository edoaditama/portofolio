import React from "react";

function Footer() {
  return (
    <footer className="relative z-10 pb-12 px-6">
      <div className="flex flex-col items-center gap-6">
        <div className="h-px w-full max-w-6xl bg-linear-to-r from-transparent via-zinc-800 to-transparent" />
        <p className="font-bold text-zinc-600 text-[10px] md:text-xs tracking-[0.2em] uppercase text-center">
          &copy; {new Date().getFullYear()} Prameswara Edo Aditama. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
