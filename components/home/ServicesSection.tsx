import Link from "next/link";
import { Newspaper, PenLine, Globe, ArrowRight, PlusCircle } from "lucide-react";

const SERVICES = [
  {
    icon: Newspaper,
    title: "Assessoria de Imprensa",
    description:
      "Conectamos sua marca com os principais veículos de comunicação no Brasil e nos EUA, garantindo visibilidade editorial e credibilidade.",
    href: "#",
  },
  {
    icon: PenLine,
    title: "Marketing de Conteúdo",
    description:
      "Produção de conteúdo estratégico para blogs, redes sociais e newsletters que engajam, educam e convertem sua audiência em clientes.",
    href: "#",
  },
  {
    icon: Globe,
    title: "Mercado internacional",
    description:
      "Consultoria completa para marcas brasileiras que desejam entrar no mercado americano com o posicionamento correto.",
    href: "#",
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="py-24 bg-[var(--background-light)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-[var(--primary)] text-sm font-bold uppercase tracking-widest mb-3">
            Nossos Serviços
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Soluções completas de comunicação
          </h3>
          <p className="text-slate-600">
            Do press release ao posicionamento de marca, cobrimos todas as pontas
            da sua estratégia.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-left mb-16">
          {SERVICES.map(({ icon: Icon, title, description, href }) => (
            <div
              key={title}
              className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-[var(--primary)]/50 transition-all hover:shadow-xl hover:shadow-[var(--primary)]/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon className="w-12 h-12 text-[var(--primary)]" />
              </div>
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center text-[var(--primary)] mb-6 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {description}
              </p>
              <Link
                href={href}
                className="inline-flex items-center text-[var(--primary)] font-bold text-sm hover:underline"
              >
                Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-[var(--primary)]/50 text-[var(--primary)] px-8 py-3 rounded-full text-base font-bold transition-all shadow-md"
          >
            Ver todos os serviços
            <PlusCircle className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
