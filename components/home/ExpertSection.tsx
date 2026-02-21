import Image from "next/image";
import { EyeOff, BadgeCheck, RefreshCw, Globe } from "lucide-react";

const MICROPHONE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD-V1jljx5r7p3j6FRRlebKDUmbUaKfld5oLHDL2YOCd2_20pLz8_Dox45rSbtE90LoQeOBcO91zSPOFpZAj9iUy6ou54YnXh2RMppQZ2ZNw9dnRtQuCrMObsHy58FXoVN26B6fhWewyly9HBAV713mQeLk_Ocl3V1YSvtTnxwFpKOpcWiMrpbCuDpJ8rpg-mUPO0XV0yuzo9ZzHjR6oHUGIe0Og2Ap4-z2DljGvVa2bvDRWIhXCwP2V_nZRL-UwKkQuVBmeCfZGolt";

const ITEMS = [
  {
    icon: EyeOff,
    title: "Baixa presença na mídia",
    description: "Invisibilidade nos grandes veículos.",
  },
  {
    icon: BadgeCheck,
    title: "Falta de autoridade digital",
    description: "Ausência de prova social relevante.",
  },
  {
    icon: RefreshCw,
    title: "Comunicação inconsistente",
    description: "Mensagens que não geram impacto.",
  },
  {
    icon: Globe,
    title: "Dificuldade de expansão internacional",
    description: "Barreiras para o mercado global.",
  },
];

export function ExpertSection() {
  return (
    <section className="bg-[var(--secondary)] py-32 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/20 rounded-full blur-[120px] pointer-events-none translate-x-1/3" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="lg:pr-12">
            <h2 className="text-[var(--accent)] text-sm font-bold uppercase tracking-widest mb-3">
              O Desafio
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              Você é especialista, mas ainda não é reconhecido como referência?
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              Mesmo com domínio técnico, a falta de projeção impede que sua
              autoridade alcance o topo do mercado.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
              {ITEMS.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="bg-[var(--primary)]/20 p-3 rounded-lg h-min shrink-0">
                    <Icon className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{title}</h4>
                    <p className="text-slate-400 text-sm">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[600px] flex items-center justify-center lg:justify-end">
            <div className="absolute top-10 right-20 w-32 h-32 border-2 border-[var(--primary)]/20 rounded-full animate-pulse" />
            <div className="absolute bottom-20 left-10 w-24 h-24 border border-white/10 rounded-full" />
            <div
              className="relative z-20 w-full max-w-lg flex items-center justify-center lg:justify-end"
              style={{ perspective: "1000px" }}
            >
              <Image
                src={MICROPHONE_IMG}
                alt="Microfone vintage com iluminação magenta, simbolizando comunicação global poderosa."
                width={480}
                height={480}
                className="object-contain drop-shadow-[0_20px_50px_rgba(242,13,166,0.3)] scale-110 lg:scale-125 lg:translate-x-12 -rotate-[5deg] w-full max-w-lg"
              />
            </div>
            <div
              className="absolute bottom-12 left-0 lg:-left-8 z-30 bg-[var(--surface-dark)]/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl max-w-xs animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--primary)]" />
                </span>
                <span className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider">
                  Resultado Comprovado
                </span>
              </div>
              <div className="text-4xl font-bold text-white mb-1">40%</div>
              <p className="text-slate-300 text-sm leading-snug">
                Aumento médio de visibilidade no primeiro trimestre de atuação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
