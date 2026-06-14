import { skills } from "../data/portfolio";
import type { SkillGroup } from "../types";

const colorMap: Record<SkillGroup["color"], { card: string; tag: string }> = {
  purple: {
    card: "hover:border-purple-500/50",
    tag: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
  },
  teal: {
    card: "hover:border-teal-500/50",
    tag: "bg-teal-500/10 text-teal-300 border border-teal-500/20",
  },
  blue: {
    card: "hover:border-blue-500/50",
    tag: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
  },
  amber: {
    card: "hover:border-amber-400/50",
    tag: "bg-amber-400/10 text-amber-300 border border-amber-400/20",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">
            What I work with
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map((group, i) => (
            <div
              key={i}
              className={`bg-surface-2 border border-white/[0.07] rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 ${colorMap[group.color].card}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-sm font-semibold text-white">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <span
                    key={j}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${colorMap[group.color].tag}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
