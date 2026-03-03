import type { Metadata } from "next";
import Script from "next/script";
import { Manrope } from "next/font/google";
import "./globals.css";

const GA_MEASUREMENT_ID = "AW-17989717072";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BT Comunicação - Estratégia Brasil e EUA",
  description:
    "Comunicação estratégica para posicionar sua marca sem fronteiras. Sua parceira de confiança para assessoria de imprensa e marketing internacional.",
  openGraph: {
    title: "BT Comunicação - Estratégia Brasil e EUA",
    description:
      "Comunicação estratégica para posicionar sua marca sem fronteiras.",
    url: "https://btcomunicacao.com",
    siteName: "BT Comunicação",
    images: [
      {
        url: "https://btcomunicacao.com/logo_bt.png",
        width: 512,
        height: 512,
        alt: "BT Comunicação - Logo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BT Comunicação - Estratégia Brasil e EUA",
    description: "Comunicação estratégica para posicionar sua marca sem fronteiras.",
    images: ["https://btcomunicacao.com/logo_bt.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${manrope.variable} font-sans antialiased overflow-x-hidden`}
      >
        <Script
          id="gtag-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-[var(--primary)] focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
