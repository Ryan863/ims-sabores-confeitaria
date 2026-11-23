import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { SITE_CONFIG } from "@/config/site-data";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ims-sabores-confeitaria.vercel.app"),
  title:
    "Ims Sabores Confeitaria | Bolos Caseiros, Salgados e Coffee-Break em Joaçaba - SC",
  description:
    "Tradição artesanal desde 2013 no Centro de Joaçaba - SC. Bolos caseiros feitos com massa de pão de ló sem produtos artificiais, tortas confeitadas, brownies, cookies, salgados quentinhos e coffee-breaks sob medida.",
  keywords: [
    "Ims Sabores Confeitaria",
    "confeitaria em Joaçaba",
    "bolos caseiros Joaçaba",
    "tortas confeitadas Joaçaba",
    "coffee break Joaçaba SC",
    "salgados assados Joaçaba",
    "esfirras pão de batata Joaçaba",
    "encomenda de bolos Joaçaba",
  ],
  openGraph: {
    title:
      "Ims Sabores Confeitaria | Bolos Caseiros, Salgados e Coffee-Break em Joaçaba - SC",
    description:
      "Tradição artesanal desde 2013: bolos caseiros com massa de pão de ló sem produtos artificiais, tortas confeitadas, salgados quentinhos e coffee-breaks sob medida.",
    url: "/",
    siteName: SITE_CONFIG.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero-desktop.jpg",
        width: 1920,
        height: 1080,
        alt: "Ims Sabores Confeitaria - Bolos Caseiros e Confeitaria Artesanal em Joaçaba - SC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ims Sabores Confeitaria | Desde 2013 em Joaçaba - SC",
    description:
      "Bolos caseiros sem conservantes, tortas confeitadas, salgados quentinhos e coffee-breaks sob medida no Centro de Joaçaba.",
    images: ["/images/hero-desktop.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Bakery", "LocalBusiness"],
  name: SITE_CONFIG.name,
  image: "https://ims-sabores-confeitaria.vercel.app/images/hero-desktop.jpg",
  url: "https://ims-sabores-confeitaria.vercel.app",
  telephone: "+554935220882",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Duque de Caxias, 850 (Sala 1 / Sala T2) - Centro",
    addressLocality: "Joaçaba",
    addressRegion: "SC",
    postalCode: "89600-000",
    addressCountry: "BR",
  },
  openingHours: ["Mo-Fr 07:30-18:30", "Sa 07:30-12:00"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "07:30",
      closes: "12:00",
    },
  ],
  sameAs: [SITE_CONFIG.instagramUrl],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "12",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${jakarta.variable}`}
    >
      <body className="bg-[#FAF6F0] text-[#4E3226] antialiased selection:bg-[#F3EBE1] selection:text-[#4E3226]">
        {/* Granulação cinematográfica editorial sutil */}
        <svg
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[60] h-full w-full opacity-[0.025]"
        >
          <filter id="editorial-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#editorial-grain)" />
        </svg>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {children}
      </body>
    </html>
  );
}
