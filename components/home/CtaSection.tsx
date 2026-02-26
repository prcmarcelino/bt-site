import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511995060544";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function CtaSection() {
  return (
    <section
      id="contato"
      className="bg-[var(--footer-bg)] text-white py-24 mt-0 relative overflow-hidden rounded-t-[3rem]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-0">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Vamos conversar?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mb-8">
            Pronto para expandir sua influência? Agende uma consultoria inicial
            e descubra como podemos elevar sua marca.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-[var(--primary)] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)] hover:bg-[var(--primary-dark)]"
          >
            <WhatsAppIcon className="mr-2 h-5 w-5" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
