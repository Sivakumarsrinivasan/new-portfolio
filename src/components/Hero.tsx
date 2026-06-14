import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center relative z-10">
        {/* Left */}
        <div>
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-400 border border-teal-400/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-400 dot-pulse" />
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white mb-4">
            {profile.name.split(" ")[0]}{" "}
            <span className="text-purple-400">{profile.name.split(" ")[1]}</span>
          </h1>

          <p className="text-lg text-slate-400 mb-4 font-medium">{profile.role}</p>

          <p className="text-sm text-slate-500 leading-relaxed max-w-xl mb-8">
            {profile.summary}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-8 mb-10">
            {[
              { num: "3+", label: "Years experience" },
              { num: "3", label: "Key projects" },
              { num: "10+", label: "Technologies" },
            ].map(({ num, label }, i) => (
              <div key={i} className="flex items-center gap-8">
                {i > 0 && <div className="w-px h-9 bg-white/10" />}
                <div>
                  <span className="block text-2xl font-extrabold text-white tracking-tight">{num}</span>
                  <span className="text-xs text-slate-500">{label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="px-5 py-2.5 bg-purple-500 hover:bg-purple-600 text-white text-sm font-semibold rounded-lg transition-all hover:-translate-y-0.5"
            >
              Get in touch
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-purple-500 text-purple-400 hover:bg-purple-500/10 text-sm font-semibold rounded-lg transition-all hover:-translate-y-0.5"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center gap-5">
          {/* Avatar */}
          <div className="relative">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-purple-900 to-purple-500 flex items-center justify-center text-4xl md:text-5xl font-extrabold text-white z-10 relative">
              SS
            </div>
            <div className="absolute inset-[-10px] rounded-full border border-dashed border-purple-400/30 ring-spin" />
          </div>

          {/* Chips */}
          <div className="flex flex-col gap-2 w-full min-w-[220px]">
            {[
              { icon: "📍", text: profile.location },
              { icon: "📞", text: profile.phone },
              { icon: "✉️", text: profile.email },
            ].map(({ icon, text }, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 bg-surface-2 border border-white/[0.07] rounded-lg px-3.5 py-2 text-sm text-slate-400"
              >
                <span>{icon}</span>
                <span className="truncate">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
