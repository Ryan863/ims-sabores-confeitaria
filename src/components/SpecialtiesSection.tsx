import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { SPECIALTIES, buildWhatsAppUrl } from "@/config/site-data";

export function SpecialtiesSection() {
  return (
    <section
      id="especialidades"
      className="py-14 sm:py-20 lg:py-28 bg-[#FAF6F0]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-section flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#4E3226]/10 pb-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C06C4E]">
              Cardápio &amp; Produção Diária
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-[#4E3226] text-balance">
              Nossas especialidades artesanais para o dia a dia e celebrações
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base leading-relaxed text-[#755E53] text-pretty">
            Cada receita sai do forno com ingredientes selecionados e massa
            feita na casa. Escolha sua categoria e peça direto pelo WhatsApp.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {SPECIALTIES.map((item) => (
            <article
              key={item.id}
              className="reveal-card group flex flex-col overflow-hidden rounded-2xl border border-[#4E3226]/[0.10] bg-white/85 backdrop-blur-sm shadow-[0_8px_30px_rgba(78,50,38,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(78,50,38,0.08)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F3EBE1]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="absolute top-3.5 left-3.5 inline-flex items-center rounded-full border border-[#4E3226]/10 bg-[#FAF6F0]/92 px-3 py-1 text-xs font-semibold tracking-wider text-[#4E3226] tabular-nums backdrop-blur-sm">
                  {item.number}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#C06C4E]">
                  {item.subtitle}
                </p>
                <h3 className="mt-1.5 font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#4E3226] text-balance">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#755E53] text-pretty">
                  {item.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-[#F3EBE1] px-2.5 py-1 text-[11px] font-medium text-[#4E3226]/85"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <a
                    href={buildWhatsAppUrl(item.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] w-full items-center justify-between rounded-xl border border-[#4E3226]/15 bg-[#FAF6F0] px-4 py-2.5 text-sm font-semibold text-[#4E3226] hover:border-[#C06C4E] hover:bg-[#C06C4E] hover:text-white transition-colors"
                  >
                    <span className="inline-flex items-center gap-2">
                      <MessageCircle
                        className="h-4 w-4 stroke-[1.9]"
                        aria-hidden="true"
                      />
                      <span>Encomendar via WhatsApp</span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 stroke-[2]"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
