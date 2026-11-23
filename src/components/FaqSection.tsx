"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { FAQ_ITEMS, buildWhatsAppUrl } from "@/config/site-data";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqWhatsappUrl = buildWhatsAppUrl(
    "Olá, Ims Sabores! Tenho uma dúvida sobre encomendas e gostaria de falar com vocês."
  );

  return (
    <section
      id="duvidas"
      className="py-14 sm:py-20 lg:py-28 bg-[#F3EBE1]/55 border-t border-[#4E3226]/10"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-section text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C06C4E]">
            Dúvidas Frequentes
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-[#4E3226] text-balance">
            Tudo o que você precisa saber antes de encomendar
          </h2>
        </div>

        <div className="mt-10 sm:mt-12 space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <div
                key={item.question}
                className="reveal-card overflow-hidden rounded-2xl border border-[#4E3226]/12 bg-white/90 backdrop-blur-sm transition-shadow hover:shadow-sm"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left"
                  >
                    <span className="font-serif text-lg sm:text-xl font-semibold text-[#4E3226] text-balance">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#C06C4E] stroke-[2] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-[#4E3226]/8 px-5 sm:px-6 py-4 text-sm sm:text-base leading-relaxed text-[#755E53] text-pretty">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal-section mt-10 text-center">
          <p className="text-sm text-[#755E53]">
            Ficou com alguma dúvida sobre sabores ou prazos?
          </p>
          <a
            href={faqWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#4E3226] px-6 py-3 text-sm font-semibold text-[#FAF6F0] hover:bg-[#C06C4E] transition-colors"
          >
            <MessageCircle className="h-4 w-4 stroke-[2]" aria-hidden="true" />
            <span>Conversar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
