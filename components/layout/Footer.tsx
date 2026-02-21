import Link from "next/link";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

const FOOTER_NAV = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Cases", href: "/#clientes" },
  { label: "Blog", href: "#" },
];

const SOCIAL = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "X (Twitter)", href: "#", icon: Twitter },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Facebook", href: "#", icon: Facebook },
];

export function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="flex flex-col items-start justify-center leading-none mb-6"
            >
              <span className="text-4xl font-extrabold tracking-tight drop-shadow-sm text-gold-gradient">
                BT
              </span>
              <span className="mt-1 ml-1 text-[0.5rem] font-bold tracking-widest uppercase text-slate-400">
                Agência de Propaganda e Publicidade
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Uma agência full service especializada em transformar marcas
              através de criatividade, estratégia e dados. Conectamos seu negócio
              ao futuro.
            </p>
          </div>
          <div className="md:col-span-3 flex justify-start md:justify-center">
            <div className="flex flex-col">
              <h4 className="font-bold text-sm tracking-wider text-white uppercase mb-6">
                Navegação
              </h4>
              <ul className="space-y-3">
                {FOOTER_NAV.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-4 flex justify-start md:justify-end">
            <div className="flex flex-col">
              <h4 className="font-bold text-sm tracking-wider text-white uppercase mb-6">
                Social
              </h4>
              <div className="flex gap-3">
                {SOCIAL.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-slate-700 rounded-full flex items-center justify-center hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all text-white"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-slate-500 text-xs">
            © 2026 BT Comunicação. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
