import {
  MessageCircle,
  Phone,
  ShoppingBag,
  Sparkles,
  Store,
  Truck,
} from "lucide-react";
import {
  ORDER_MODALITIES,
  SITE_CONFIG,
  buildWhatsAppUrl,
  type OrderModality,
} from "@/config/site-data";

const MODALITY_ICONS: Record<OrderModality["iconName"], typeof Store> = {
  store: Store,
  "shopping-bag": ShoppingBag,
  truck: Truck,
  sparkles: Sparkles,
};

export function OrdersSection() {
  const quoteUrl = buildWhatsAppUrl(
    "Olá, Ims Sabores! Gostaria de solicitar um orçamento de encomenda para festa ou coffee-break."
  );

  return (
    <section
      id="encomendas"
      className="relative bg-[#4E3226] py-16 sm:py-24 lg:py-28 text-[#FAF6F0]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-section grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C06C4E]">
              Festas, Reuniões &amp; Praticidade
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-[#FAF6F0] text-balance">
              Vai receber amigos, fazer aniversário ou organizar uma reunião?
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base leading-relaxed text-[#FAF6F0]/80 text-pretty">
              Atendemos em Joaçaba e região com flexibilidade total: do lanche
              rápido no balcão ao coffee-break completo para a sua empresa,
              sempre com receitas artesanais e pontualidade.
            </p>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ORDER_MODALITIES.map((modality) => {
            const Icon = MODALITY_ICONS[modality.iconName];
            return (
              <div
                key={modality.title}
                className="reveal-card flex flex-col rounded-2xl border border-[#FAF6F0]/12 bg-[#FAF6F0]/[0.04] p-6 backdrop-blur-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C06C4E]/20 text-[#C06C4E]">
                  <Icon className="h-5 w-5 stroke-[1.8]" aria-hidden="true" />
                </div>
                <p className="mt-4 text-[11px] font-semibold tracking-[0.16em] uppercase text-[#C06C4E]">
                  {modality.highlight}
                </p>
                <h3 className="mt-1.5 font-serif text-xl font-semibold text-[#FAF6F0]">
                  {modality.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#FAF6F0]/75 text-pretty">
                  {modality.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="reveal-section mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-2xl border border-[#FAF6F0]/12 bg-[#FAF6F0]/[0.06] p-6 sm:p-8">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#FAF6F0]">
              Monte sua encomenda ou coffee-break sob medida
            </h3>
            <p className="mt-1 text-sm text-[#FAF6F0]/75">
              Fale diretamente com nossa equipe para escolher sabores,
              quantidades e horário de retirada ou entrega.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#C06C4E] px-6 py-3 text-sm font-semibold text-white hover:bg-[#A3563B] active:scale-[0.98] transition-all"
            >
              <MessageCircle className="h-4 w-4 stroke-[2]" aria-hidden="true" />
              <span>Solicitar Orçamento</span>
            </a>
            <a
              href={SITE_CONFIG.phoneHref}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[#FAF6F0]/25 px-5 py-3 text-sm font-semibold text-[#FAF6F0] hover:bg-[#FAF6F0]/10 transition-colors tabular-nums"
            >
              <Phone className="h-4 w-4 stroke-[1.8]" aria-hidden="true" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
