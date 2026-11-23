"use client";

import { useEffect, useState } from "react";
import { Menu, MessageCircle, X, MapPin, Clock } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/config/site-data";
import { BrandMark } from "./BrandMark";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [drawerOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-[#FAF6F0]/90 border-b border-[#4E3226]/10 py-3 shadow-[0_6px_24px_rgba(78,50,38,0.05)]"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#inicio"
            aria-label="Ims Sabores Confeitaria - Voltar ao início"
            className="min-h-[44px] inline-flex items-center rounded-lg"
          >
            <BrandMark />
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden lg:flex items-center gap-7"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#4E3226]/85 hover:text-[#C06C4E] transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SITE_CONFIG.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#C06C4E] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#A3563B] active:scale-[0.98] transition-all"
            >
              <MessageCircle className="h-4 w-4 stroke-[2]" aria-hidden="true" />
              <span>Fazer Pedido</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-expanded={drawerOpen}
            aria-controls="mobile-nav-drawer"
            aria-label="Abrir menu de navegação"
            className="lg:hidden inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[#4E3226]/15 bg-[#FAF6F0]/85 text-[#4E3226] backdrop-blur-sm hover:bg-[#F3EBE1] transition-colors"
          >
            <Menu className="h-5 w-5 stroke-[1.8]" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Drawer */}
      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação móvel"
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          drawerOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#4E3226]/40 backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />

        <div
          className={`relative ml-auto flex h-full w-full max-w-sm flex-col justify-between bg-[#FAF6F0] p-6 shadow-2xl transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-[#4E3226]/10 pb-4">
            <BrandMark />
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              aria-label="Fechar menu"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[#4E3226]/15 bg-white text-[#4E3226] hover:bg-[#F3EBE1] transition-colors"
            >
              <X className="h-5 w-5 stroke-[1.8]" aria-hidden="true" />
            </button>
          </div>

          <nav
            aria-label="Links do menu móvel"
            className="my-auto flex flex-col gap-2 py-6"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                className="flex min-h-[48px] items-center justify-between rounded-xl px-3 font-serif text-2xl font-medium text-[#4E3226] hover:bg-[#F3EBE1]/70 hover:text-[#C06C4E] transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-sm font-sans text-[#C06C4E]">→</span>
              </a>
            ))}
          </nav>

          <div className="space-y-4 border-t border-[#4E3226]/10 pt-5">
            <div className="space-y-2 text-xs text-[#755E53]">
              <p className="flex items-start gap-2">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#C06C4E] stroke-[1.8]"
                  aria-hidden="true"
                />
                <span>{SITE_CONFIG.addressShort}</span>
              </p>
              <p className="flex items-center gap-2 tabular-nums">
                <Clock
                  className="h-4 w-4 shrink-0 text-[#C06C4E] stroke-[1.8]"
                  aria-hidden="true"
                />
                <span>Seg a Sex: 07h30–18h30 • Sáb: 07h30–12h00</span>
              </p>
            </div>

            <a
              href={SITE_CONFIG.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setDrawerOpen(false)}
              className="flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-[#C06C4E] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#A3563B] active:scale-[0.98] transition-all"
            >
              <MessageCircle className="h-5 w-5 stroke-[2]" aria-hidden="true" />
              <span>Pedir pelo WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
