export default function Footer() {
  return (
    <footer className="bg-surface-1 border-t border-white/[0.06] py-6 px-6">
      <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-2">
        <p className="text-sm text-slate-500">
          Designed &amp; built by{" "}
          <span className="text-purple-400 font-semibold">S. Sivakumar</span>
        </p>
        <p className="text-xs text-slate-600">Built with Vite + React + TypeScript + Tailwind CSS</p>
      </div>
    </footer>
  );
}
