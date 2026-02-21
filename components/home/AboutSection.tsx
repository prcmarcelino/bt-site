import Image from "next/image";

const SABRINA_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAZRKdgQQ2US6vvZ0PATSA6w2dZpnvx_frWhXcTGNAZmto2nliU-sqDBifAPtn3OyRBeo2cM5BXVqg4S0NLMMboUyKoL9wS0cWvTER0EhjMuKKqt1QmPLJ_EOlVS4a0lK0wOgEls-P8mS0PKbLT3tfcVDJrmN4t_0NKhtbKtLfp4i0G2jCVnI2UiKUTcFtq-X8ey8ctr092Qz-8nvaopEDY_ekamE1iYBbQmJ-frDSN6fJdEjCemfaL1Y-4jn_OaJbPT_j9uYZ5ZRio";
const ELIANA_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC4DERR7PIPGYeCgCby6qvAGCnZ_M1LmHkuUh6ys_yu6dg8DqUZzicXku7pCWGi3FIWpcCZWXQSovjizAEHETuc56qfFku3faNTuiYfX3xwtMYrJ9frCRyqK5o4DiG-WkK-rf8E7_rU9ENGQqucQJzC7bX3WjtNxBFmhsyHo3p4thIzVsB1BqXd4oxPztGdDbijAPdSlNtEiJdguMwQV7a0gS18wVquomMD05ywE7AAGuGt1g1NfOeIO3Mkqu2312ob7cAPgotKaM_A";

const STATS = [
  { value: "15+", label: "Anos de Mercado" },
  { value: "200+", label: "Projetos Entregues" },
  { value: "2", label: "Países Atuantes" },
];

export function AboutSection() {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="absolute right-0 bottom-0 w-1/3 h-full bg-slate-100 -z-10 skew-x-12 translate-x-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative h-[550px] w-full max-w-lg mx-auto flex items-center justify-center gap-4">
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-[var(--accent)] rounded-full opacity-10 z-0" />
              <div className="absolute bottom-10 -right-4 w-48 h-48 bg-[var(--primary)] rounded-full opacity-10 z-0" />
              <div className="relative w-1/2 z-10 transform -rotate-2 hover:rotate-0 hover:z-30 hover:scale-105 transition-all duration-500">
                <Image
                  src={SABRINA_IMG}
                  alt="Sabrina Ishizu - sócia BT Comunicação"
                  width={280}
                  height={373}
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-500 border-4 border-white"
                />
                <div className="absolute -bottom-1 -left-10 z-40 transform -rotate-3">
                  <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm border-l-4 border-[var(--primary)]">
                    <p className="text-2xl font-extrabold text-[var(--primary)] tracking-tight">
                      Sabrina <span className="text-slate-800 font-light">Ishizu</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-1/2 z-20 transform rotate-2 -ml-8 hover:rotate-0 hover:z-30 hover:scale-105 transition-all duration-500 translate-y-6">
                <Image
                  src={ELIANA_IMG}
                  alt="Eliana Nakakubo - sócia BT Comunicação"
                  width={280}
                  height={373}
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-500 border-4 border-white"
                />
                <div className="absolute -top-2 -right-10 z-40 transform rotate-3">
                  <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm border-r-4 border-[var(--secondary)]">
                    <p className="text-2xl font-extrabold text-[var(--secondary)] tracking-tight">
                      Eliana <span className="text-[var(--primary)] font-light">Nakakubo</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-[var(--primary)] text-sm font-bold uppercase tracking-widest mb-3">
              Sobre Nós
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Conectando mercados através de narrativas{" "}
              <span className="text-[var(--primary)] italic">estratégicas.</span>
            </h3>
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                Com mais de 15 anos de experiência em jornalismo e comunicação
                corporativa, fundamos a BT Comunicação com um propósito claro:
                eliminar as fronteiras para marcas de excelência.
              </p>
              <p>
                Entendemos que o mercado americano exige uma abordagem diferente
                do brasileiro. Nossa expertise bicultural nos permite traduzir
                não apenas a língua, mas a cultura de negócios, garantindo que
                sua marca seja respeitada onde quer que esteja.
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-slate-200 flex gap-8">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <span className="block text-3xl font-bold text-slate-900">
                    {value}
                  </span>
                  <span className="text-sm text-slate-500">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
