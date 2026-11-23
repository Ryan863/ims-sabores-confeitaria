import { Navbar } from "@/components/Navbar";
import { LandingPageShell } from "@/components/LandingPageShell";
import { HeroSection } from "@/components/HeroSection";
import { SpecialtiesSection } from "@/components/SpecialtiesSection";
import { OrdersSection } from "@/components/OrdersSection";
import { TraditionSection } from "@/components/TraditionSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactLocationSection } from "@/components/ContactLocationSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <LandingPageShell>
        <HeroSection />
        <SpecialtiesSection />
        <OrdersSection />
        <TraditionSection />
        <ReviewsSection />
        <FaqSection />
        <ContactLocationSection />
      </LandingPageShell>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
