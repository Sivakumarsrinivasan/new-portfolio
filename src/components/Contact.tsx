import { useState } from "react";
import { profile, contactItems } from "../data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">
            Get in touch
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Contact
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* CTA */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
              Open to new opportunities
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              I'm currently looking for new roles in React / full-stack development.
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>
            <button
              onClick={copyEmail}
              className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white text-sm font-semibold rounded-lg transition-all hover:-translate-y-0.5"
            >
              {copied ? "✓ Copied!" : "Copy email address"}
            </button>
          </div>

          {/* Cards */}
          <div className="space-y-2.5">
            {contactItems.map(({ icon, label, value, href }, i) =>
              href ? (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-surface-2 border border-white/[0.07] rounded-xl px-4 py-3.5 text-slate-400 hover:text-white hover:border-purple-500/40 hover:translate-x-1 transition-all duration-200"
                >
                  <span className="text-lg">{icon}</span>
                  <div className="min-w-0">
                    <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm truncate">{value}</p>
                  </div>
                  <span className="ml-auto text-slate-600 text-sm">↗</span>
                </a>
              ) : (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-surface-2 border border-white/[0.07] rounded-xl px-4 py-3.5 text-slate-400"
                >
                  <span className="text-lg">{icon}</span>
                  <div>
                    <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm">{value}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
