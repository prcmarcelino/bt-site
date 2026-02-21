"use client";

import Link from "next/link";
import { MessageCircle, X, Menu } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Cases", href: "#clientes" },
  { label: "Blog", href: "#" },
];

interface HeaderProps {
  /** Tagline abaixo do logo. Se não informado, usa o padrão da home. */
  tagline?: string;
  /** Se true, logo BT em preto (página de serviços). Se false, logo em dourado. */
  logoBlack?: boolean;
}

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const DEFAULT_TAGLINE = "Agência de Propaganda e Publicidade";

export function Header({ tagline = DEFAULT_TAGLINE, logoBlack = false }: HeaderProps = {}) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fecha menu ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Bloqueia scroll do body quando menu está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md"
        aria-label="Navegação principal"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-start justify-center leading-none">
              <span
                className={`text-4xl font-extrabold tracking-tight drop-shadow-sm ${
                  logoBlack ? "text-slate-900" : "text-gold-gradient"
                }`}
              >
                BT
              </span>
              <span className="mt-0.5 text-[0.5rem] font-bold tracking-widest uppercase text-slate-500">
                {tagline}
              </span>
            </Link>

            {/* Nav desktop */}
            <div className="hidden md:flex flex-grow justify-center items-center space-x-8">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm font-semibold text-slate-600 hover:text-[var(--primary)] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Botão WhatsApp desktop */}
            <div className="hidden md:block flex-grow-0">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-8 py-3 text-sm font-bold transition-all shadow-md"
              >
                <MessageCircle className="text-lg" aria-hidden />
                Falar no WhatsApp
              </a>
            </div>

            {/* Botão hamburger mobile */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-600 hover:text-[var(--primary)] hover:bg-slate-100 transition-colors"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay escuro */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden
      />

      {/* Drawer mobile */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Cabeçalho do drawer */}
        <div className="flex items-center justify-between px-6 h-24 border-b border-slate-100">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex flex-col items-start leading-none"
          >
            <span className={`text-3xl font-extrabold tracking-tight ${logoBlack ? "text-slate-900" : "text-gold-gradient"}`}>
              BT
            </span>
            <span className="mt-0.5 text-[0.45rem] font-bold tracking-widest uppercase text-slate-400">
              {tagline}
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center w-9 h-9 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            aria-label="Fechar menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links de navegação */}
        <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:text-[var(--primary)] hover:bg-slate-50 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Botão WhatsApp */}
        <div className="px-6 pb-8">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full rounded-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-6 py-4 text-sm font-bold transition-all shadow-md"
          >
            <MessageCircle className="w-5 h-5" aria-hidden />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
