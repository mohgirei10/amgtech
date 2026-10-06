"use client";

import { SiNextdotjs, SiNodedotjs, SiTailwindcss, SiTypescript, SiReact, SiSupabase } from "react-icons/si";
import { useInView } from "./Reveal";

const bars = [
  ["JavaScript", 90],
  ["React", 88],
  ["Next.js", 85],
  ["Tailwind CSS", 92],
  ["Git & GitHub", 78],
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
              className="h-full rounded-full bg-linear-to-r from-blue-500 to-cyan-300 transition-[width] duration-1000 ease-out"
              style={{
                width: seen ? `${percentage}%` : "0%",
              }}
            />
          </div>
        </div>
      ))}<section id="tools" className="py-16">
  <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-200 mb-4 tracking-wider">TECH STACK</h2>
  <hr className="w-25 md:w-50 border-white border-2 mb-12 rounded-full" />

  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
    {[
      { icon: SiNextdotjs, label: "Next.js" },
      { icon: SiNodedotjs, label: "Node.js" },
      { icon: SiTailwindcss, label: "Tailwind" },
      { icon: SiTypescript, label: "TypeScript" },
      { icon: SiReact, label: "React" },
      { icon: SiSupabase, label: "supabase" },

    ].map((item, index) => (
      <div 
        key={index} 
        className="bg-white/4 p-8 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-900 flex flex-col justify-center items-center group cursor-pointer transition-all hover:border-amber-500/50"
      >
        <item.icon 
          className="text-5xl md:text-6xl text-zinc-400 group-hover:text-amber-500 group-hover:scale-110 transition-all duration-300" 
        />
        <span className="mt-4 text-sm font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
          {item.label}
        </span>
      </div>
    ))}
  </div>
</section>

    </div>
  );
}