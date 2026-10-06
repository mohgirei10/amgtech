import Image from "next/image";
import { FiArrowUpRight, FiCode } from "react-icons/fi";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

const tags = [
  "bg-blue-400/10 text-blue-300",
  "bg-violet-400/10 text-violet-300",
  "bg-cyan-400/10 text-cyan-300",
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl overflow-x-clip px-5 py-24"
    >
      <SectionHead
        file="projects.jsx"
        title="Selected work."
        sub="A few interfaces and products I've built while learning, experimenting and solving real problems."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 80}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.045]">
              <div className="flex items-center justify-between border-b border-white/[0.06] bg-black/20 px-4 py-3 font-mono text-[11px]">
                <span className="flex items-center gap-2 text-slate-500">
                  <FiCode aria-hidden />
                  {project.file}
                </span>

                <span className="text-emerald-400">
                  ● PROJECT
                </span>
              </div>

              <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-950/70 to-slate-950 font-mono text-lg text-blue-300/70">
                    {project.title}
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {project.text}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <li
                      key={tech}
                      className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                        tags[index % tags.length]
                      }`}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex gap-3 pt-6">
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary min-h-10 px-4 text-xs"
                    >
                      Live site
                      <FiArrowUpRight aria-hidden />
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary min-h-10 px-4 text-xs"
                  >
                    Source
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}