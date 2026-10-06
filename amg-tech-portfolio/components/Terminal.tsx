"use client";
import { useState } from "react";
import { brand, dev, contact, projects } from "@/lib/data";

const commands: Record<string, string> = {
  help: "Available commands: help, about, skills, projects, contact, clear",
  about: `${dev.name} (${brand}) - ${dev.role}, based in ${dev.location}. ${dev.passion}.`,
  skills: dev.skills.join(", "),
  projects: projects.map((p) => p.title).join(", "),
  contact: `${contact.email} | ${contact.phoneLabel}`,
};

export default function Terminal() {
  const [log, setLog] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const run = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    setInput("");
    if (cmd === "clear") return setLog([]);
    if (!cmd) return;
    setLog([...log, `PS C:\\Users\\Muhammed> ${input}`, commands[cmd] ?? `'${cmd}' is not recognized. Type help.`]);
  };

  return (
    <footer className="mt-10 bg-[#1a1a1c] font-mono text-sm">
      <div className="mx-auto max-w-5xl px-5">
        <div className="flex gap-6 py-3 text-xs">
          <span className="text-blue-400">PROBLEMS</span><span className="text-white">OUTPUT</span><span className="text-white">TERMINAL</span>
          <span className="ml-auto text-zinc-500">bash</span>
        </div>
        <div className="space-y-1 pb-6 pt-4">
          <p className="text-emerald-400">
  amg-tech terminal · ready
</p>

<p className="pt-3 text-slate-500">
  type <span className="text-yellow-400">help</span> to explore commands.
</p>
          {log.map((l, i) => <p key={i} className="whitespace-pre-wrap text-zinc-300">{l}</p>)}
          <form onSubmit={run} className="flex flex-wrap items-center gap-3 pt-6">
            <label htmlFor="term" className="text-blue-400">PS C:\Users\Muhammed&gt;</label>
            <input id="term" value={input} onChange={(e) => setInput(e.target.value)} autoComplete="off" placeholder="type a command ..." className="min-w-0 flex-1 rounded-lg bg-white px-3 py-1.5 text-black outline-none placeholder:text-zinc-500" />
          </form>
        </div>
        <p className="border-t border-line py-4 text-center text-xs text-zinc-500">© 2026 {brand} · Muhammed Adamu Girei</p>
      </div>
    </footer>
  );
}
