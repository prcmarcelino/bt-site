import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const INSTAGRAM_ACCOUNTS = [
  { label: "BT Comunicação", href: "https://www.instagram.com/btcomunicacao_?igsh=MTI2Z3N4b3kwMXVh&utm_source=qr" },
  { label: "Eliana Nakakubo", href: "https://www.instagram.com/eliananakakubo?igsh=dXlsMzQzemoyN21t&utm_source=qr" },
  { label: "Sabrina Ishizu", href: "https://www.instagram.com/eusousabrinabello/" },
];

const LINKEDIN_ACCOUNTS = [
  { label: "Eliana Nakakubo", href: "https://www.linkedin.com/in/eliananakakubo" },
];

const YOUTUBE_ACCOUNTS = [
  { label: "Eliana Nakakubo", href: "https://www.youtube.com/@eliananakakubo" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          <div className="md:col-span-7">
            <Link
              href="/"
              className="flex flex-col items-start justify-center leading-none mb-6"
              aria-label="BT Comunicação - Página inicial"
            >
              <Image
                src="/logo_bt.png"
                alt="BT Comunicação"
                width={160}
                height={64}
                className="h-14 w-auto object-contain sm:h-16"
              />
              <span className="mt-1 text-[0.5rem] font-bold tracking-widest uppercase text-slate-400">
                Agência de Propaganda e Publicidade
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Uma agência full service especializada em transformar marcas
              através de criatividade, estratégia e dados. Conectamos seu negócio
              ao futuro.
            </p>
          </div>
          <div className="md:col-span-5 flex justify-start md:justify-end">
            <div className="flex flex-col gap-6">
              <h4 className="font-bold text-sm tracking-wider text-white uppercase mb-2">
                Social
              </h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <Instagram className="w-5 h-5 text-slate-400 shrink-0" aria-hidden />
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {INSTAGRAM_ACCOUNTS.map(({ label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-400 hover:text-[var(--primary)] transition-colors"
                        aria-label={`Instagram ${label}`}
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <Linkedin className="w-5 h-5 text-slate-400 shrink-0" aria-hidden />
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {LINKEDIN_ACCOUNTS.map(({ label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-400 hover:text-[var(--primary)] transition-colors"
                        aria-label={`LinkedIn ${label}`}
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <Youtube className="w-5 h-5 text-slate-400 shrink-0" aria-hidden />
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {YOUTUBE_ACCOUNTS.map(({ label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-400 hover:text-[var(--primary)] transition-colors"
                        aria-label={`YouTube ${label}`}
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
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
