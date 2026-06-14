import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-surface-1">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">
            Academic background
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
        </div>

        <div className="space-y-3">
          {education.map((edu, i) => (
            <div
              key={i}
              className="flex items-center gap-5 bg-surface-2 border border-white/[0.07] rounded-xl px-6 py-5 hover:border-purple-500/30 transition-all duration-200"
            >
              <span className="text-2xl font-extrabold text-purple-900 min-w-[36px] tracking-tight">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-white">{edu.degree}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{edu.school}</p>
              </div>
              <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                <span className="text-xs text-slate-500">{edu.year}</span>
                <span className="bg-teal-500/10 text-teal-400 text-xs font-semibold px-3 py-0.5 rounded-full">
                  {edu.gpa}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
