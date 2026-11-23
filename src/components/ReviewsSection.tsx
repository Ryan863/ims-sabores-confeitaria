import { Quote, Star } from "lucide-react";
import { SITE_CONFIG, TESTIMONIALS } from "@/config/site-data";

export function ReviewsSection() {
  return (
    <section id="avaliacoes" className="py-14 sm:py-20 lg:py-28 bg-[#FAF6F0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-section flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#4E3226]/10 pb-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C06C4E]">
              Prova Social Verificada
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-[#4E3226] text-balance">
              O que os clientes de Joaçaba dizem sobre a Ims Sabores
            </h2>
          </div>

          <div className="inline-flex items-center gap-4 self-start md:self-auto rounded-2xl border border-[#4E3226]/12 bg-white/90 px-5 py-3.5 shadow-sm backdrop-blur-sm">
            <div>
              <p className="font-serif text-3xl font-semibold text-[#4E3226] tabular-nums leading-none">
                {SITE_CONFIG.ratingScore}
              </p>
              <p className="mt-1 text-[11px] font-medium text-[#755E53] tabular-nums">
                {SITE_CONFIG.reviewCount} avaliações no Google
              </p>
            </div>
            <div className="flex items-center gap-1" aria-label="4,8 de 5 estrelas">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  className="h-4 w-4 fill-[#C06C4E] text-[#C06C4E]"
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item) => (
            <blockquote
              key={item.author}
              className="reveal-card flex flex-col justify-between rounded-2xl border border-[#4E3226]/[0.10] bg-white/85 p-6 sm:p-7 backdrop-blur-sm shadow-[0_8px_28px_rgba(78,50,38,0.04)]"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1" aria-hidden="true">
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-4 w-4 fill-[#C06C4E] text-[#C06C4E]"
                      />
                    ))}
                  </div>
                  <Quote
                    className="h-5 w-5 text-[#C06C4E]/45 stroke-[1.75]"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-4 text-base leading-relaxed text-[#4E3226]/90 text-pretty">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <footer className="mt-6 border-t border-[#4E3226]/10 pt-4">
                <p className="font-serif text-lg font-semibold text-[#4E3226]">
                  {item.author}
                </p>
                <p className="text-xs font-medium text-[#755E53]">
                  {item.context}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
