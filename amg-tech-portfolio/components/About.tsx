import CodeWindow from "./CodeWindow";
import CodeObj from "./CodeObj";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { about, aboutCards } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl overflow-x-clip px-5 py-24"
    >
      <SectionHead
        file="about.js"
        title="A developer who cares about the details."
        sub="I enjoy taking an idea from a rough concept to a responsive interface that feels considered on every screen."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
        <Reveal>
          <CodeWindow file="about.js">
            <CodeObj name="aboutMe" data={about} />
          </CodeWindow>
        </Reveal>

        <div className="space-y-4">
          {aboutCards.map((card, index) => (
            <Reveal
              key={card.title}
              from={card.from}
              delay={index * 80}
            >
              <article className="glow-border rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition-colors hover:bg-white/[0.045]">
                <h3 className={`text-lg font-bold ${card.color}`}>
                  {card.title}
                </h3>

                <p className="mt-2 leading-7 text-slate-400">
                  {card.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}