"use client";

import { useInView } from "./Reveal";

const bars = [
  ["JavaScript", 90],
  ["React", 88],
  ["Next.js", 85],
  ["Tailwind CSS", 92],
  ["Git", 78],
] as const;

export default function SkillBars() {
  const [ref, seen] = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="space-y-6 font-mono">
      {bars.map(([name, percentage]) => (
        <div key={name}>
          <div className="flex justify-between text-xs text-slate-400">
            <span>{name}</span>
            <span>{percentage}%</span>
          </div>

          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-300 transition-[width] duration-1000 ease-out"
              style={{
                width: seen ? `${percentage}%` : "0%",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}