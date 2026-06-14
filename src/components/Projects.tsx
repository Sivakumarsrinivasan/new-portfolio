import { useState } from "react";
import { projects } from "../data/portfolio";
import type { Project } from "../types";

const colorMap: Record<Project["color"], { border: string; tag: string; glow: string }> = {
  purple: {
    border: "hover:border-purple-500/50",
    tag: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
    glow: "hover:shadow-[0_0_32px_rgba(139,92,246,0.1)]",
  },
  teal: {
    border: "hover:border-teal-500/50",
    tag: "bg-teal-500/10 text-teal-300 border border-teal-500/20",
    glow: "hover:shadow-[0_0_32px_rgba(52,211,153,0.1)]",
  },
  blue: {
    border: "hover:border-blue-500/50",
    tag: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
    glow: "hover:shadow-[0_0_32px_rgba(96,165,250,0.1)]",
  },
};

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">
            What I've built
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Projects
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const c = colorMap[project.color];
            const isOpen = expanded === i;
            return (
              <div
                key={i}
                onClick={() => setExpanded(isOpen ? null : i)}
                className={`bg-surface-2 border border-white/[0.07] rounded-xl p-6 cursor-pointer transition-all duration-250 hover:-translate-y-1 ${c.border} ${c.glow}`}
              >
                <span className="text-3xl block mb-4">{project.icon}</span>

                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-1 block">
                  {project.company}
                </span>
                <h3 className="text-base font-bold text-white mb-2">{project.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">{project.description}</p>

                {isOpen && (
                  <ul className="mb-4 space-y-2 pl-3 border-l border-white/10">
                    {project.highlights.map((h, j) => (
                      <li key={j} className="text-xs text-slate-400 leading-relaxed">
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, j) => (
                      <span key={j} className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${c.tag}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-600 ml-auto">
                    {isOpen ? "Show less ↑" : "Show more ↓"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
