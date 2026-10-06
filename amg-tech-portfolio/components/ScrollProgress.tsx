"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const html = document.documentElement;
        const total = html.scrollHeight - html.clientHeight;
        const progress = total > 0 ? html.scrollTop / total : 0;

        if (ref.current) {
          ref.current.style.transform = `scaleX(${progress})`;
        }

        ticking = false;
      });
    };

    update();

    window.addEventListener("scroll", update, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500"
    />
  );
}