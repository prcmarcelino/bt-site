import { Gem } from "lucide-react";

export function ClientsSection() {
  return (
    <section
      id="clientes"
      className="py-20 bg-white border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 font-medium mb-10">
          Empresas que confiam na nossa estratégia
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70">
          <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
            <span className="text-2xl font-black text-slate-800">NEXUS</span>
          </div>
          <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
            <span className="text-2xl font-bold text-slate-800 italic">Vanguard</span>
          </div>
          <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
            <span className="text-xl font-bold text-slate-800 tracking-widest border-2 border-slate-800 px-2">
              ELEVATE
            </span>
          </div>
          <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
            <div className="flex items-center gap-1 font-bold text-slate-800">
              <Gem className="w-5 h-5" /> LUXO
            </div>
          </div>
          <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
            <span className="text-2xl font-bold text-slate-800 font-mono">
              Global<span className="text-[var(--primary)]">.io</span>
            </span>
          </div>
          <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
            <span className="text-xl font-semibold text-slate-800">
              Strate<span className="font-light">gy</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
