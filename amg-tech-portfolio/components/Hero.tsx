import Link from "next/link";
import { FiArrowDown, FiArrowUpRight, FiDownload } from "react-icons/fi";
import CodeWindow from "./CodeWindow";
import CodeObj from "./CodeObj";
import PhotoFrame from "./PhotoFrame";
import Reveal from "./Reveal";
import { dev } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[calc(100svh-65px)] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.1fr_.9fr] lg:gap-20"
    >
      <div>
        <Reveal>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/5 px-3 py-1.5 font-mono text-xs text-emerald-300">
            <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_currentColor]" />
            Available for selected projects
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="font-mono text-sm text-blue-400">
            {"// turning ideas into interfaces"}
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            I build modern web experiences people{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              enjoy using.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m Muhammed Adamu Girei, a Nigerian web developer focused on
            responsive interfaces, polished interactions and practical digital
            products.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#projects" className="btn-primary">
              View my work
              <FiArrowUpRight aria-hidden />
            </Link>

            <a
              href="/assets/Resume.pdf"
              download
              className="btn-secondary"
            >
              Download CV
              <FiDownload aria-hidden />
            </a>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10">
            <CodeWindow file="developer.js">
              <CodeObj name="developer" data={dev} />
            </CodeWindow>
          </div>
        </Reveal>
      </div>

      <Reveal from="right" delay={120}>
        <PhotoFrame />
      </Reveal>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-500 transition-colors hover:text-white md:block"
      >
        <FiArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}