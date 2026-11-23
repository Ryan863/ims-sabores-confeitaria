"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site-data";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 420);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside
      aria-label="Atendimento rápido via WhatsApp"
      className={`fixed bottom-5 right-5 z-50 transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href={SITE_CONFIG.whatsappDefaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fazer pedido ou encomenda pelo WhatsApp"
        className="group relative inline-flex min-h-[52px] min-w-[52px] items-center justify-center gap-2.5 rounded-full border border-[#FAF6F0]/25 bg-[#C06C4E] px-3.5 sm:px-5 text-white shadow-[0_12px_32px_rgba(78,50,38,0.28)] hover:bg-[#A3563B] active:scale-95 transition-all"
      >
        <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FAF6F0] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#4E3226] border-2 border-[#FAF6F0]" />
        </span>

        <MessageCircle className="h-5 w-5 stroke-[2]" aria-hidden="true" />
        <span className="hidden sm:inline text-sm font-semibold tracking-wide">
          Pedir no WhatsApp
        </span>
      </a>
    </aside>
  );
}
