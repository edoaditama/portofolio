import React from "react";
import GooeyNav from "@/src/component/ui/GooeyNav";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className="relative z-100">
      <div className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 scale-75 md:scale-100 w-full flex justify-center">
        <GooeyNav items={NAV_ITEMS} particleCount={12} animationTime={600} />
      </div>
    </header>
  );
}

export default Navbar;
