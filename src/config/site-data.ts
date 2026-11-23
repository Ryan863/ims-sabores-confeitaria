export interface SpecialtyItem {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  whatsappMessage: string;
}

export interface OrderModality {
  title: string;
  description: string;
  highlight: string;
  iconName: "store" | "shopping-bag" | "truck" | "sparkles";
}

export interface TraditionPillar {
  title: string;
  description: string;
  iconName: "wheat" | "heart-handshake" | "flame" | "award";
}

export interface TestimonialItem {
  author: string;
  context: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

const WHATSAPP_NUMBER = "554935220882";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SITE_CONFIG = {
  name: "Ims Sabores Confeitaria",
  shortBrandFirst: "ims",
  shortBrandSecond: "Sabores",
  tagline: "CONFEITARIA ARTESANAL • DESDE 2013",
  since: "2013",
  phoneDisplay: "(49) 3522-0882",
  phoneHref: "tel:+554935220882",
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappDefaultUrl:
    "https://wa.me/554935220882?text=Ol%C3%A1%2C+Ims+Sabores%21+Vim+pelo+site+e+gostaria+de+fazer+um+pedido+ou+encomenda.",
  instagramHandle: "@ims_sabores",
  instagramUrl: "https://www.instagram.com/ims_sabores/",
  addressShort: "R. Duque de Caxias, 850 (Sala 1 / Sala T2) – Centro, Joaçaba - SC",
  addressFull:
    "R. Duque de Caxias, 850 (Sala 1 / Sala T2) – Centro, Joaçaba - SC, CEP 89600-000",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=R.+Duque+de+Caxias,+850,+Centro,+Joa%C3%A7aba+-+SC,+89600-000",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=R.+Duque+de+Caxias,+850,+Centro,+Joa%C3%A7aba+-+SC,+89600-000&output=embed",
  ratingScore: "4.8",
  reviewCount: "12",
  hours: [
    { days: "Segunda a Sexta", time: "07h30 às 18h30" },
    { days: "Sábado", time: "07h30 às 12h00" },
    { days: "Domingo", time: "Fechado" },
  ],
} as const;

export const NAV_LINKS = [
  { label: "Especialidades", href: "#especialidades" },
  { label: "Encomendas", href: "#encomendas" },
  { label: "Nossa História", href: "#sobre" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
] as const;

export const SPECIALTIES: SpecialtyItem[] = [
  {
    number: "01",
    id: "bolos-caseiros",
    title: "Bolos Caseiros Artesanais",
    subtitle: "Massa de Pão de Ló Pura",
    description:
      "Preparados diariamente com massa de pão de ló artesanal e zero produtos artificiais. Maciez de verdade para o café da manhã ou da tarde, incluindo sabores clássicos como bolo caseiro de cenoura com cobertura de chocolate.",
    tags: ["Sem conservantes", "Pão de ló puro", "Fornada diária"],
    image: "/images/bolo-caseiro.jpg",
    imageAlt:
      "Fatia de bolo caseiro artesanal com massa fofinha de pão de ló servida em prato de cerâmica",
    whatsappMessage:
      "Olá, Ims Sabores! Gostaria de encomendar ou saber os sabores disponíveis de Bolos Caseiros Artesanais.",
  },
  {
    number: "02",
    id: "tortas-confeitadas",
    title: "Tortas Confeitadas & Festas",
    subtitle: "Sob Medida para Celebrar",
    description:
      "Tortas e bolos decorados artesanalmente com recheios equilibrados, massa leve e acabamento cuidadoso para aniversários, encontros em família e datas especiais em Joaçaba e região.",
    tags: ["Aniversários", "Massa artesanal", "Personalização"],
    image: "/images/torta-confeitada.jpg",
    imageAlt:
      "Torta confeitada artesanal com cobertura de chocolate e acabamento delicado sobre boleira",
    whatsappMessage:
      "Olá, Ims Sabores! Gostaria de consultar sabores, tamanhos e valores de Tortas Confeitadas para festa.",
  },
  {
    number: "03",
    id: "coffee-breaks",
    title: "Coffee-Breaks & Kits Corporativos",
    subtitle: "Reuniões & Eventos",
    description:
      "Kits completos e sob medida reunindo bolos caseiros fatiados, salgados assados quentinhos, sanduíches e doces para empresas, treinamentos, consultórios e eventos corporativos em Joaçaba.",
    tags: ["Sob medida", "Para empresas", "Entrega combinada"],
    image: "/images/coffee-break.jpg",
    imageAlt:
      "Mesa de coffee-break corporativo com cafés especiais e acompanhamentos artesanais",
    whatsappMessage:
      "Olá, Ims Sabores! Gostaria de solicitar um orçamento de Coffee-Break / Kit Corporativo.",
  },
  {
    number: "04",
    id: "salgados-assados",
    title: "Salgados Assados Quentinhos",
    subtitle: "Esfirras, Pão de Batata & Hamburgão",
    description:
      "Massa dourada, macia e recheios generosos servidos sempre quentinhos no balcão ou por encomenda: esfirras abertas, pão de batata, hamburgão e salgados assados preparados na hora.",
    tags: ["Esfirras abertas", "Pão de batata", "Sempre quentinhos"],
    image: "/images/salgados-assados.jpg",
    imageAlt:
      "Salgados assados dourados e folhados fresquinhos recém-saídos do forno",
    whatsappMessage:
      "Olá, Ims Sabores! Gostaria de fazer um pedido ou encomenda de Salgados Assados.",
  },
  {
    number: "05",
    id: "brownies-cookies",
    title: "Brownies, Cookies & Doces Finos",
    subtitle: "Chocolate de Verdade",
    description:
      "Brownies intensos de casquinha crocante e interior úmido, cookies macios com gotas de chocolate e docinhos artesanais feitos com ingredientes selecionados para adoçar o seu dia ou evento.",
    tags: ["Brownie úmido", "Cookies artesanais", "Doces de festa"],
    image: "/images/brownies-cookies.jpg",
    imageAlt:
      "Brownies artesanais de chocolate intenso com calda cremosa empilhados",
    whatsappMessage:
      "Olá, Ims Sabores! Gostaria de saber valores e disponibilidade de Brownies, Cookies e Doces.",
  },
  {
    number: "06",
    id: "cucas-congelados",
    title: "Cucas, Pães & Congelados Práticos",
    subtitle: "Da Confeitaria para a Sua Casa",
    description:
      "Cucas tradicionais com farofa crocante, pães caseiros macios, sanduíches frescos e linha prática de congelados para assar ou aquecer em casa com o mesmo sabor artesanal do nosso balcão.",
    tags: ["Cucas tradicionais", "Sanduíches", "Linha congelados"],
    image: "/images/cucas-congelados.jpg",
    imageAlt:
      "Pães artesanais rústicos e cucas frescas polvilhadas sobre mesa de madeira",
    whatsappMessage:
      "Olá, Ims Sabores! Gostaria de informações sobre Cucas, Pães e opções de Congelados.",
  },
];

export const ORDER_MODALITIES: OrderModality[] = [
  {
    title: "Consumo no Local",
    description:
      "Espaço acolhedor no Centro de Joaçaba para fazer uma pausa com salgados quentinhos, fatias de bolo fresco e café.",
    highlight: "Centro de Joaçaba",
    iconName: "store",
  },
  {
    title: "Retirada Rápida no Balcão",
    description:
      "Peça pelo WhatsApp e passe na R. Duque de Caxias, 850 para retirar seu pedido ou encomenda sem espera.",
    highlight: "R. Duque de Caxias, 850",
    iconName: "shopping-bag",
  },
  {
    title: "Delivery na Cidade",
    description:
      "Receba nossos bolos, salgados assados e doces fresquinhos no conforto da sua casa ou escritório.",
    highlight: "Entrega ágil",
    iconName: "truck",
  },
  {
    title: "Festas & Coffee-Breaks",
    description:
      "Planejamento personalizado de quantidades, sabores doces e salgados para eventos familiares e corporativos na região.",
    highlight: "Orçamento via WhatsApp",
    iconName: "sparkles",
  },
];

export const TRADITION_PILLARS: TraditionPillar[] = [
  {
    title: "Massa de Pão de Ló Sem Artificiais",
    description:
      "Nada de misturas prontas ou conservantes industriais. Nossos bolos caseiros nascem de receitas puras e ingredientes frescos.",
    iconName: "wheat",
  },
  {
    title: "Empresa Familiar Desde 2013",
    description:
      "Mais de uma década de história em Joaçaba unindo atendimento próximo, cuidado genuíno e padrão artesanal consistente.",
    iconName: "heart-handshake",
  },
  {
    title: "Salgados Sempre Quentinhos",
    description:
      "Fornadas frequentes ao longo do dia para garantir esfirras, pães de batata e hamburgões macios e saborosos a qualquer hora.",
    iconName: "flame",
  },
  {
    title: "Preços Justos & Cardápio Completo",
    description:
      "Do lanche rápido da manhã ao coffee-break completo da empresa, com transparência, variedade e excelente custo-benefício.",
    iconName: "award",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    author: "Fernanda M.",
    context: "Cliente no Centro de Joaçaba • Google",
    quote:
      "Os salgados estão sempre quentinhos e a massa dos bolos caseiros tem sabor de casa de verdade, sem gosto artificial. Atendimento muito atencioso e preço justo.",
    rating: 5,
  },
  {
    author: "Ricardo S.",
    context: "Encomenda de Coffee-Break • Google",
    quote:
      "Contratamos para uma reunião na empresa e foi impecável. Pontualidade na entrega, variedade excelente entre doces e salgados e todo mundo elogiou a qualidade artesanal.",
    rating: 5,
  },
  {
    author: "Camila T.",
    context: "Torta Confeitada • Google",
    quote:
      "Confeitaria familiar que faz toda a diferença pelo carinho em cada detalhe. Encomendamos uma torta de aniversário e superou as expectativas, leve e muito bem recheada.",
    rating: 5,
  },
  {
    author: "Eduardo L.",
    context: "Lanche da Tarde • Google",
    quote:
      "Esfirra aberta, pão de batata e o brownie são sensacionais. Passo toda semana no Centro para buscar um bolo caseiro para a família — nunca decepciona.",
    rating: 5,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Os bolos caseiros possuem conservantes ou misturas prontas?",
    answer:
      "Não. Nossos bolos caseiros são preparados artesanalmente com massa de pão de ló pura e sem produtos artificiais, preservando a textura leve e o sabor caseiro de verdade.",
  },
  {
    question: "Vocês montam coffee-breaks para empresas e eventos na região?",
    answer:
      "Sim. Preparamos encomendas sob medida de coffee-breaks, kits corporativos, bolos e salgados assados para reuniões, eventos e festas em Joaçaba e região.",
  },
  {
    question: "Quais são as opções de entrega e retirada?",
    answer:
      "Você pode consumir no local, fazer retirada rápida no balcão na R. Duque de Caxias, 850 (Sala 1 / Sala T2 – Centro, Joaçaba) ou solicitar entrega via delivery.",
  },
  {
    question:
      "Com quanto tempo de antecedência devo encomendar tortas confeitadas ou kits de festa?",
    answer:
      "Recomendamos entrar em contato pelo WhatsApp (49) 3522-0882 com antecedência para verificarmos a disponibilidade da agenda e personalizarmos sabores, tamanhos e quantidades para o seu evento.",
  },
  {
    question: "Quais são os horários de funcionamento da confeitaria?",
    answer:
      "Atendemos de segunda a sexta-feira das 07h30 às 18h30, e aos sábados das 07h30 às 12h00. Aos domingos a confeitaria permanece fechada.",
  },
];
