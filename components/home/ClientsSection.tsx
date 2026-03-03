import Image from "next/image";

const CLIENTS = [
  { src: "/images/clientes/ig.png", alt: "iG" },
  { src: "/images/clientes/uol.png", alt: "UOL" },
  { src: "/images/clientes/pediatra-brasileiro.png", alt: "Pediatra Brasileiro" },
  { src: "/images/clientes/achismos-tv.png", alt: "Achismos TV" },
  { src: "/images/clientes/tiktok.png", alt: "TikTok" },
  { src: "/images/clientes/night-n-day-pediatrics.png", alt: "Night'n Day Pediatrics" },
  { src: "/images/clientes/ansiedade-solucoes.png", alt: "Ansiedade Soluções" },
  { src: "/images/clientes/ser-mamae-miami.png", alt: "Ser Mamãe em Miami" },
  { src: "/images/clientes/selecto.png", alt: "Selecto" },
  { src: "/images/clientes/portal-neurodivergentes.png", alt: "Portal dos Neurodivergentes" },
  { src: "/images/clientes/record.png", alt: "Record" },
];

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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0 items-center justify-items-center">
          {CLIENTS.map((client) => (
            <div
              key={client.alt}
              className="relative w-full h-36 sm:h-44 lg:h-56 flex items-center justify-center transition-all duration-300 cursor-default"
            >
              <Image
                src={client.src}
                alt={client.alt}
                fill
                sizes="(max-width: 640px) 49vw, (max-width: 1024px) 33vw, 25vw"
                className="object-contain object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
