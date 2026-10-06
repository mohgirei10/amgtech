import CodeWindow from "./CodeWindow";
import SectionHead from "./SectionHead";
import SkillBars from "./SkillBars";
import Reveal from "./Reveal";

type SkillIconProps = {
  children: React.ReactNode;
  className?: string;
};

function SkillIcon({ children, className = "" }: SkillIconProps) {
  return (
    <div
      aria-hidden="true"
      className={`flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] font-mono text-sm font-bold ${className}`}
    >
      {children}
    </div>
  );
}

const cards = [
  {
    title: "HTML5",
    text: "Semantic and accessible markup.",
    icon: "HTML",
    color: "text-orange-400",
  },
  {
    title: "CSS3",
    text: "Responsive layouts and animations.",
    icon: "CSS",
    color: "text-blue-400",
  },
  {
    title: "JavaScript",
    text: "Interactive and dynamic applications.",
    icon: "JS",
    color: "text-yellow-400",
  },
  {
    title: "Tailwind CSS",
    text: "Utility-first responsive design.",
    icon: "TW",
    color: "text-cyan-400",
  },
  {
    title: "React",
    text: "Reusable and interactive UI components.",
    icon: "R",
    color: "text-sky-400",
  },
  {
    title: "Git & GitHub",
    text: "Version control and collaboration.",
    icon: "GIT",
    color: "text-white",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl overflow-x-clip px-5 py-24"
    >
      <SectionHead
        file="skills.css"
        title="Tools I use to build."
        sub="A practical stack focused on modern frontend development and polished user experiences."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal>
          <CodeWindow file="Explorer">
            <p className="mb-6 font-mono font-bold text-blue-400">
              Web development
            </p>

            <SkillBars />
          </CodeWindow>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <Reveal
              key={card.title}
              from={index % 2 === 0 ? "left" : "right"}
              delay={index * 50}
            >
              <article className="group h-full rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.045]">
                <SkillIcon className={card.color}>
                  {card.icon}
                </SkillIcon>

                <h3 className="mt-5 font-semibold text-white">
                  {card.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
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