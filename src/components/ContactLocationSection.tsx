import {
  Camera,
  Clock,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site-data";

export function ContactLocationSection() {
  return (
    <section
      id="contato"
      className="py-14 sm:py-20 lg:py-28 bg-[#FAF6F0] border-t border-[#4E3226]/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-section max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C06C4E]">
            Localização &amp; Atendimento
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-[#4E3226] text-balance">
            Visite nossa confeitaria no Centro de Joaçaba ou peça sem sair de
            casa
          </h2>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="reveal-card lg:col-span-5 flex flex-col justify-between rounded-2xl border border-[#4E3226]/[0.10] bg-white/90 p-6 sm:p-8 shadow-[0_12px_32px_rgba(78,50,38,0.05)]">
            <div className="space-y-6">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F3EBE1] text-[#C06C4E]">
                  <MapPin className="h-5 w-5 stroke-[1.8]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#4E3226]">
                    Endereço
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#755E53]">
                    {SITE_CONFIG.addressFull}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F3EBE1] text-[#C06C4E]">
                  <Clock className="h-5 w-5 stroke-[1.8]" aria-hidden="true" />
                </div>
                <div className="w-full">
                  <h3 className="font-serif text-lg font-semibold text-[#4E3226]">
                    Horário de Atendimento
                  </h3>
                  <dl className="mt-2 space-y-1.5 text-sm">
                    {SITE_CONFIG.hours.map((row) => (
                      <div
                        key={row.days}
                        className="flex items-center justify-between gap-4 border-b border-[#4E3226]/8 pb-1.5 last:border-0 last:pb-0"
                      >
                        <dt className="text-[#755E53]">{row.days}</dt>
                        <dd className="font-semibold text-[#4E3226] tabular-nums">
                          {row.time}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F3EBE1] text-[#C06C4E]">
                  <Phone className="h-5 w-5 stroke-[1.8]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#4E3226]">
                    WhatsApp &amp; Telefone
                  </h3>
                  <a
                    href={SITE_CONFIG.phoneHref}
                    className="mt-1 inline-block text-sm font-semibold text-[#4E3226] hover:text-[#C06C4E] transition-colors tabular-nums"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                  <p className="text-xs text-[#755E53]">
                    Atendimento via WhatsApp e ligações
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F3EBE1] text-[#C06C4E]">
                  <Camera
                    className="h-5 w-5 stroke-[1.8]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#4E3226]">
                    Instagram Oficial
                  </h3>
                  <a
                    href={SITE_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-semibold text-[#C06C4E] hover:text-[#A3563B] transition-colors"
                  >
                    {SITE_CONFIG.instagramHandle}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={SITE_CONFIG.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-full bg-[#C06C4E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#A3563B] active:scale-[0.98] transition-all"
              >
                <MessageCircle
                  className="h-4 w-4 stroke-[2]"
                  aria-hidden="true"
                />
                <span>Chamar no WhatsApp</span>
              </a>

              <a
                href={SITE_CONFIG.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-[#4E3226]/20 bg-[#FAF6F0] px-5 py-3 text-sm font-semibold text-[#4E3226] hover:bg-[#F3EBE1] transition-colors"
              >
                <Navigation
                  className="h-4 w-4 text-[#C06C4E] stroke-[1.9]"
                  aria-hidden="true"
                />
                <span>Abrir Rota no Maps</span>
              </a>
            </div>
          </div>

          <div className="reveal-card lg:col-span-7 overflow-hidden rounded-2xl border border-[#4E3226]/12 bg-[#F3EBE1] min-h-[340px] lg:min-h-[460px] shadow-[0_12px_32px_rgba(78,50,38,0.05)]">
            <iframe
              title="Mapa de localização da Ims Sabores Confeitaria em Joaçaba - SC"
              src={SITE_CONFIG.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full min-h-[340px] lg:min-h-[460px] border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
