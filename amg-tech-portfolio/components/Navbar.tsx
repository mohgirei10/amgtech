"use client";

import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#070a10]/75 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5"
      >
        <a
          href="#home"
          className="font-mono text-sm font-semibold tracking-tight text-white"
        >
          <span className="text-blue-400">./</span>amg-tech
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}

          <a href="#contact" className="btn-secondary min-h-9 px-4 text-xs">
            Let&apos;s talk
            <FiArrowUpRight aria-hidden />
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex size-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/[0.06] bg-[#090d15] px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-white/[0.06] py-4 text-sm text-slate-300"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}