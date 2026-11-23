import Image from "next/image";
import { ArrowDownRight, Coffee, MessageCircle, Star, Wheat } from "lucide-react";
import { SITE_CONFIG } from "@/config/site-data";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[88dvh] sm:min-h-[95dvh] items-end md:items-center pt-24 pb-14 sm:pt-28 sm:pb-20 overflow-hidden"
    >
      {/* Background editorial photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-desktop.jpg"
          alt="Bolo artesanal em camadas com massa fofinha e cobertura cremosa da Ims Sabores Confeitaria"
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover object-center"
        />
        <Image
          src="/images/hero-mobile.jpg"
          alt="Doces e bolos artesanais da Ims Sabores Confeitaria em Joaçaba"
          fill
          priority
          sizes="100vw"
          className="block md:hidden object-cover object-top"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#FAF6F0] via-[#FAF6F0]/88 to-[#FAF6F0]/25 md:bg-gradient-to-r md:from-[#FAF6F0] md:via-[#FAF6F0]/88 md:to-transparent"
        />
      </div>

      {/* Editorial foreground content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="hero-reveal inline-flex items-center gap-2 rounded-full border border-[#4E3226]/12 bg-white/80 px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#C06C4E] backdrop-blur-sm">
            Confeitaria Artesanal Desde 2013 • Centro, Joaçaba - SC
          </p>

          <h1 className="hero-reveal mt-5 font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] text-[#4E3226] text-balance">
            Sabor caseiro de verdade, feito de forma artesanal desde 2013.
          </h1>

          <p className="hero-reveal mt-5 text-base sm:text-lg leading-relaxed text-[#755E53] text-pretty max-w-xl">
            Bolos caseiros com massa de pão de ló sem produtos artificiais,
            tortas confeitadas, brownies, cookies, salgados assados quentinhos e
            coffee-breaks sob medida no Centro de Joaçaba.
          </p>

          <div className="hero-reveal mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <a
              href={SITE_CONFIG.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full bg-[#C06C4E] px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-[0_10px_28px_rgba(192,108,78,0.28)] hover:bg-[#A3563B] active:scale-[0.98] transition-all"
            >
              <MessageCircle className="h-5 w-5 stroke-[2]" aria-hidden="true" />
              <span>Fazer Pedido ou Encomenda</span>
            </a>

            <a
              href="#especialidades"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[#4E3226]/20 bg-white/85 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#4E3226] backdrop-blur-sm hover:bg-[#F3EBE1] transition-colors"
            >
              <span>Explorar Especialidades</span>
              <ArrowDownRight
                className="h-4 w-4 text-[#C06C4E] stroke-[2]"
                aria-hidden="true"
              />
            </a>
          </div>

          <ul className="hero-reveal mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#4E3226]/12 pt-5 text-xs sm:text-sm font-medium text-[#4E3226]/90">
            <li className="inline-flex items-center gap-2 tabular-nums">
              <Star
                className="h-4 w-4 fill-[#C06C4E] text-[#C06C4E]"
                aria-hidden="true"
              />
              <span>
                {SITE_CONFIG.ratingScore} no Google ({SITE_CONFIG.reviewCount}{" "}
                avaliações reais)
              </span>
            </li>
            <li className="inline-flex items-center gap-2">
              <Wheat
                className="h-4 w-4 text-[#C06C4E] stroke-[1.8]"
                aria-hidden="true"
              />
              <span>Pão de Ló Artesanal Sem Artificiais</span>
            </li>
            <li className="inline-flex items-center gap-2">
              <Coffee
                className="h-4 w-4 text-[#C06C4E] stroke-[1.8]"
                aria-hidden="true"
              />
              <span>Local, Balcão, Delivery &amp; Eventos</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
