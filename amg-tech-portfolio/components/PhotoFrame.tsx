"use client";

import Image from "next/image";
import { useState } from "react";

export default function PhotoFrame() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[2rem] bg-blue-500/10 blur-3xl"
      />

      {/* Main frame */}
      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-2 shadow-2xl">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.15rem] bg-slate-900">
          {!loaded && (
            <div
              aria-hidden="true"
              className="absolute inset-0 animate-pulse bg-white/[0.06]"
            />
          )}

          <Image
            src="/images/profile.jpg"
            alt="AMG Tech"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 420px"
            className={`object-cover transition duration-700 ${
              loaded ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
            onLoad={() => setLoaded(true)}
          />

          {/* Bottom gradient */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"
          />
        </div>
      </div>

      {/* Floating code badge */}
      <div className="absolute -bottom-5 -left-4 rounded-2xl border border-white/10 bg-[#0b1020]/90 px-4 py-3 shadow-xl backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg bg-blue-500/10 font-mono text-sm font-bold text-blue-400">
            {"</>"}
          </div>

          <div>
            <p className="font-mono text-xs text-slate-500">status</p>
            <p className="text-sm font-semibold text-white">
              Building & shipping
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}