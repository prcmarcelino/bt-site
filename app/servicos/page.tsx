import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Nossos Serviços - BT Comunicação",
  description:
    "Branding, Assessoria de Imprensa, Estratégia Médica, Propaganda e Internacionalização Brasil-EUA. Estratégia única para cada marca.",
};
import {
  Gem,
  Megaphone,
  Stethoscope,
  MousePointerClick,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Brain,
  TrendingUp,
  Shield,
  ShieldCheck,
  Calendar,
  CreditCard,
  Eye,
  Handshake,
  PlaneTakeoff,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511995060544";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const services = [
  {
    id: "branding",
    accent: "gold",
    icon: Gem,
    title: "Branding & Posicionamento",
    description:
      "Arquitetura de marcas de alto valor. Criamos narrativas visuais e verbais que traduzem a essência do negócio, gerando percepção de autoridade e conexão emocional imediata com stakeholders.",
    paraQuem: ["Novas Marcas", "Rebranding Corporativo"],
    resultados: [
      { label: "Brand Equity", icon: Star },
      { label: "Reconhecimento", icon: Brain },
    ],
    buttonText: "Conhecer Branding",
    buttonHref: "#",
  },
  {
    id: "pr",
    accent: "primary",
    icon: Megaphone,
    title: "Assessoria de Imprensa & PR",
    description:
      "Inserção estratégica nos principais veículos de comunicação. Gerenciamos sua reputação com inteligência, conectando sua marca aos jornalistas e formadores de opinião mais influentes do mercado.",
    paraQuem: ["CEOs & Executivos", "Empresas Consolidadas"],
    resultados: [
      { label: "Autoridade Setorial", icon: TrendingUp },
      { label: "Gestão de Crise", icon: Shield },
    ],
    buttonText: "Saiba mais sobre PR",
    buttonHref: "#",
  },
  {
    id: "medica",
    accent: "emerald",
    icon: Stethoscope,
    title: "Estratégia Médica & Saúde",
    description:
      "Posicionamento ético, seguro e altamente rentável para clínicas e profissionais da saúde. Respeitamos as normas do setor enquanto construímos uma presença digital de referência e confiança.",
    paraQuem: ["Médicos & Dentistas", "Clínicas Premium"],
    resultados: [
      { label: "Credibilidade", icon: ShieldCheck },
      { label: "Agenda Qualificada", icon: Calendar },
    ],
    buttonText: "Conhecer Estratégia Médica",
    buttonHref: "#",
  },
  {
    id: "propaganda",
    accent: "purple",
    icon: MousePointerClick,
    title: "Propaganda & Publicidade",
    description:
      "Campanhas inteligentes orientadas por análise estratégica. Unimos criatividade publicitária com performance digital para maximizar o ROI e garantir que sua mensagem chegue ao público certo.",
    paraQuem: ["Varejo & Serviços", "Lançamentos"],
    resultados: [
      { label: "Vendas Diretas", icon: CreditCard },
      { label: "Alcance Massivo", icon: Eye },
    ],
    buttonText: "Ver soluções de Propaganda",
    buttonHref: "#",
  },
];

const accentStyles = {
  gold: {
    iconBg: "bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] group-hover:bg-[var(--accent-gold)] group-hover:text-white",
    cardHover: "hover:border-[var(--accent-gold)]/40 hover:shadow-[var(--accent-gold)]/5",
    listIcon: "text-[var(--accent-gold)]",
    button:
      "hover:border-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-white dark:hover:border-[var(--accent-gold)]",
  },
  primary: {
    iconBg: "bg-[var(--primary)]/10 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white",
    cardHover: "hover:border-[var(--primary)]/30 hover:shadow-[var(--primary)]/5",
    listIcon: "text-[var(--primary)]",
    button:
      "hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white dark:hover:border-[var(--primary)] dark:hover:bg-[var(--primary)]",
  },
  emerald: {
    iconBg: "bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white",
    cardHover: "hover:border-emerald-500/30 hover:shadow-emerald-500/5",
    listIcon: "text-emerald-500",
    button:
      "hover:border-emerald-500 hover:bg-emerald-500 hover:text-white dark:hover:border-emerald-500 dark:hover:bg-emerald-500",
  },
  purple: {
    iconBg: "bg-purple-500/10 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
    cardHover: "hover:border-purple-500/30 hover:shadow-purple-500/5",
    listIcon: "text-purple-500",
    button:
      "hover:border-purple-600 hover:bg-purple-600 hover:text-white dark:hover:border-purple-600 dark:hover:bg-purple-600",
  },
};

export default function ServicosPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main id="main" className="flex-1">
        {/* Hero */}
        <section className="relative px-6 py-20 lg:py-32">
          <div
            className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
            style={{ backgroundSize: "16px 16px" }}
          />
          <div className="mx-auto max-w-[960px] text-center">
            <p className="mb-6 text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
              • Estratégia
            </p>
            <h1 className="mb-6 text-4xl font-black leading-[1.1] tracking-tighter text-slate-900 md:text-6xl lg:text-7xl">
              Cada marca precisa de uma{" "}
              <span className="bg-gradient-to-r from-[var(--primary)] to-purple-600 bg-clip-text text-transparent">
                estratégia única.
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-slate-600 md:text-xl">
              Não acreditamos em fórmulas prontas. Combinamos inteligência de
              dados, criatividade e relacionamento para construir reputação
              sólida e gerar negócios reais em dois continentes.
            </p>
          </div>
        </section>

        {/* Services grid */}
        <div className="bg-[#f8f9fa] pb-24">
          <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => {
              const style = accentStyles[service.accent as keyof typeof accentStyles];
              const Icon = service.icon;
              return (
                <article
                  key={service.id}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all ${style.cardHover} hover:shadow-xl`}
                >
                  <div
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg transition-colors ${style.iconBg}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mb-8 flex-1 text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                        PARA QUEM É:
                      </h4>
                      <ul className="space-y-1">
                        {service.paraQuem.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm font-medium text-gray-800"
                          >
                            <CheckCircle className={`h-4 w-4 shrink-0 ${style.listIcon}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                        RESULTADOS:
                      </h4>
                      <ul className="space-y-1">
                        {service.resultados.map(({ label, icon: ResultIcon }) => (
                          <li
                            key={label}
                            className="flex items-center gap-2 text-sm font-medium text-gray-800"
                          >
                            <ResultIcon className={`h-4 w-4 shrink-0 ${style.listIcon}`} />
                            {label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Link
                    href={service.buttonHref}
                    className={`mt-auto flex w-full items-center justify-center gap-2 rounded-xl border-2 border-slate-800 bg-slate-800 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg ${style.button}`}
                  >
                    {service.buttonText}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </article>
              );
            })}

            {/* Featured: Internacionalização */}
            <article className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-[var(--accent-gold)]/40 bg-gradient-to-b from-[var(--accent-gold)]/5 via-white to-white p-8 shadow-md transition-all hover:border-[var(--accent-gold)] hover:shadow-2xl hover:shadow-[var(--accent-gold)]/15 lg:col-span-2 lg:mx-auto lg:max-w-4xl lg:w-full">
              <div className="flex flex-col md:flex-row md:gap-8">
                <div className="flex-1">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[var(--accent-gold)] text-white shadow-lg shadow-[var(--accent-gold)]/30">
                    <Globe className="h-8 w-8" />
                  </div>
                  <h3 className="mb-3 text-3xl font-bold text-slate-900">
                    Internacionalização Brasil–EUA
                  </h3>
                  <p className="mb-6 text-lg text-slate-700 leading-relaxed">
                    A ponte estratégica para expansão internacional. Oferecemos
                    suporte completo de comunicação, RP e marketing para
                    empresas brasileiras entrando nos EUA e vice-versa,
                    garantindo adaptação cultural e sucesso comercial.
                  </p>
                  <Link
                    href="#"
                    className="hidden md:inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-[var(--accent-gold)] hover:shadow-[var(--accent-gold)]/40"
                  >
                    Expandir internacionalmente
                    <PlaneTakeoff className="h-5 w-5" />
                  </Link>
                </div>
                <div className="flex-1 border-t border-slate-200 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                  <div className="grid gap-6">
                    <div>
                      <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                        Para quem é:
                      </h4>
                      <ul className="space-y-2">
                        {["Empresas em expansão", "Marcas globais", "Tech & Saúde"].map(
                          (item) => (
                            <li
                              key={item}
                              className="flex items-center gap-2 text-base font-medium text-slate-800"
                            >
                              <CheckCircle className="h-5 w-5 shrink-0 text-[var(--accent-gold)]" />
                              {item}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                        Resultados:
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-base font-medium text-slate-800">
                          <Globe className="h-5 w-5 shrink-0 text-[var(--accent-gold)]" />
                          Presença Global Sólida
                        </li>
                        <li className="flex items-center gap-2 text-base font-medium text-slate-800">
                          <Handshake className="h-5 w-5 shrink-0 text-[var(--accent-gold)]" />
                          Networking Internacional
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link
                    href="#"
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-[var(--accent-gold)] hover:shadow-[var(--accent-gold)]/40 md:hidden"
                  >
                    Expandir internacionalmente
                    <PlaneTakeoff className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
          </div>
        </div>

        {/* CTA */}
        <section className="border-t border-slate-200 bg-white py-16">
          <div className="mx-auto flex max-w-[960px] flex-col items-center px-6 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Pronto para elevar o nível da sua comunicação?
            </h2>
            <p className="mb-8 max-w-lg text-slate-600">
              Agende uma conversa com nossos estrategistas e descubra como
              podemos desenhar o futuro da sua marca hoje.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-[200px] items-center justify-center gap-2 rounded-lg bg-slate-900 px-6 py-4 text-base font-bold text-white transition-transform hover:scale-105 hover:shadow-lg"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Falar com um Consultor
              </a>
              <Link
                href="/#clientes"
                className="flex min-w-[200px] items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-4 text-base font-bold text-slate-900 transition-colors hover:bg-slate-50"
              >
                Ver nossos Cases
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
