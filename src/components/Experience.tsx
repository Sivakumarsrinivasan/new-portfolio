import { useState } from "react";
import { experience } from "../data/portfolio";

export default function Experience() {
  const [active, setActive] = useState(0);
  const job = experience[active];

  return (
    <section id="experience" className="py-24 px-6 bg-surface-1">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">
            Where I've worked
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Experience
          </h2>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-[220px_1fr] gap-6 md:gap-8">
          {/* Tab list */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {experience.map((e, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 md:flex-shrink text-left px-4 py-3 rounded-lg md:rounded-r-lg md:rounded-l-none border-b-2 md:border-b-0 md:border-l-2 transition-all duration-200 ${
                  active === i
                    ? "border-purple-500 bg-purple-500/10"
                    : "border-white/10 hover:border-purple-500/40 hover:bg-white/[0.03]"
                }`}
              >
                <span className="block text-sm font-semibold text-white whitespace-nowrap">
                  {e.company}
                </span>
                <span className="block text-xs text-slate-500 mt-0.5">{e.period}</span>
                {e.current && (
                  <span className="inline-block mt-1.5 bg-teal-500/10 text-teal-400 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                    Current
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="bg-surface-2 border border-white/[0.07] rounded-xl p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{job.role}</h3>
                <p className="text-sm text-purple-400">@ {job.company}</p>
              </div>
              <span className="text-xs text-slate-400 bg-white/[0.05] rounded-md px-3 py-1.5 self-start whitespace-nowrap">
                {job.period}
              </span>
            </div>

            <ul className="space-y-4">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                  <span className="text-purple-400 mt-0.5 flex-shrink-0">▹</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
