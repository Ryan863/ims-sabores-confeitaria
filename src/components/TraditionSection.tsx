import Image from "next/image";
import { Award, Flame, HeartHandshake, Wheat } from "lucide-react";
import { TRADITION_PILLARS, type TraditionPillar } from "@/config/site-data";

const PILLAR_ICONS: Record<TraditionPillar["iconName"], typeof Wheat> = {
  wheat: Wheat,
  "heart-handshake": HeartHandshake,
  flame: Flame,
  award: Award,
};

export function TraditionSection() {
  return (
    <section
      id="sobre"
      className="py-14 sm:py-20 lg:py-28 bg-[#F3EBE1]/60 border-y border-[#4E3226]/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="reveal-section lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#4E3226]/10 bg-[#FAF6F0] shadow-[0_20px_50px_rgba(78,50,38,0.1)]">
                <Image
                  src="/images/tradicao-atelier.jpg"
                  alt="Produção artesanal na cozinha da Ims Sabores Confeitaria com ingredientes frescos"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-5 sm:-right-5 rounded-xl border border-[#4E3226]/10 bg-white/95 px-5 py-3.5 shadow-lg backdrop-blur-sm">
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#C06C4E]">
                  Tradição Familiar
                </p>
                <p className="mt-0.5 font-serif text-lg font-semibold text-[#4E3226] tabular-nums">
                  Desde 2013 • Joaçaba, SC
                </p>
              </div>
            </div>
          </div>

          <div className="reveal-section lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C06C4E]">
              Nossa História &amp; Essência
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-[#4E3226] text-balance">
              Mais de uma década preservando o sabor caseiro no Centro de
              Joaçaba
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#755E53] text-pretty">
              Desde 2013, a Ims Sabores Confeitaria une o carinho de uma empresa
              familiar com o rigor da confeitaria artesanal. Aqui, os bolos são
              preparados com massa de pão de ló pura, sem conservantes ou
              misturas prontas, e os salgados assados saem do forno quentinhos
              com preço justo e atendimento atencioso.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {TRADITION_PILLARS.map((pillar) => {
                const Icon = PILLAR_ICONS[pillar.iconName];
                return (
                  <div
                    key={pillar.title}
                    className="reveal-card rounded-2xl border border-[#4E3226]/10 bg-white/85 p-5 backdrop-blur-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F3EBE1] text-[#C06C4E]">
                      <Icon
                        className="h-5 w-5 stroke-[1.8]"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-3.5 font-serif text-lg font-semibold text-[#4E3226]">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#755E53] text-pretty">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
