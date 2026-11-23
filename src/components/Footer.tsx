import { Camera, MapPin, MessageCircle, Phone } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/config/site-data";
import { BrandMark } from "./BrandMark";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4E3226] text-[#FAF6F0]">
      {/* Final Conversion Band */}
      <div className="border-b border-[#FAF6F0]/12">
        <div className="mx-auto flex max-w-7xl flex-col md:flex-row items-start md:items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C06C4E]">
              Pronto para o seu pedido?
            </p>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-[#FAF6F0] text-balance">
              Garanta seu bolo caseiro, salgado quentinho ou coffee-break hoje
              mesmo.
            </h2>
          </div>

          <a
            href={SITE_CONFIG.whatsappDefaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full bg-[#C06C4E] px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-[#A3563B] active:scale-[0.98] transition-all shrink-0"
          >
            <MessageCircle className="h-5 w-5 stroke-[2]" aria-hidden="true" />
            <span>Fazer Pedido pelo WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Footer Info Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 space-y-4">
            <BrandMark variant="dark" />
            <p className="max-w-sm text-sm leading-relaxed text-[#FAF6F0]/75 text-pretty">
              Confeitaria artesanal familiar em Joaçaba - SC desde 2013. Bolos
              caseiros com massa de pão de ló pura, tortas confeitadas, salgados
              assados e coffee-breaks sob medida.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#C06C4E]">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#FAF6F0]/80 hover:text-[#FAF6F0] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3 text-sm">
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#C06C4E]">
              Contato &amp; Endereço
            </h3>
            <p className="flex items-start gap-2.5 text-[#FAF6F0]/80">
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-[#C06C4E] stroke-[1.8]"
                aria-hidden="true"
              />
              <span>{SITE_CONFIG.addressFull}</span>
            </p>
            <p className="flex items-center gap-2.5 text-[#FAF6F0]/80 tabular-nums">
              <Phone
                className="h-4 w-4 shrink-0 text-[#C06C4E] stroke-[1.8]"
                aria-hidden="true"
              />
              <a
                href={SITE_CONFIG.phoneHref}
                className="hover:text-[#FAF6F0] transition-colors"
              >
                {SITE_CONFIG.phoneDisplay}
              </a>
            </p>
            <p className="flex items-center gap-2.5 text-[#FAF6F0]/80">
              <Camera
                className="h-4 w-4 shrink-0 text-[#C06C4E] stroke-[1.8]"
                aria-hidden="true"
              />
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FAF6F0] transition-colors"
              >
                {SITE_CONFIG.instagramHandle}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#FAF6F0]/12 pt-6 text-xs text-[#FAF6F0]/60 tabular-nums">
          <p>
            © {currentYear} {SITE_CONFIG.name}. Todos os direitos reservados.
          </p>
          <p>Joaçaba - Santa Catarina • Desde {SITE_CONFIG.since}</p>
        </div>
      </div>
    </footer>
  );
}
