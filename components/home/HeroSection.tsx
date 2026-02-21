import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[var(--accent)]/10 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-bold uppercase tracking-wide mb-6 border border-[var(--primary)]/20">
            <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
            Brasil & USA
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
            Comunicação estratégica para posicionar sua marca{" "}
            <span className="text-gradient">sem fronteiras.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-10">
            Sua parceira de confiança para assessoria de imprensa e marketing
            internacional. Conectamos narrativas poderosas aos mercados que
            importam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/servicos"
              className="inline-flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-8 py-4 rounded-lg text-base font-bold transition-all shadow-xl shadow-[var(--primary)]/20"
            >
              Todos os serviços
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
