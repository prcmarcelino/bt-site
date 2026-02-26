import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ExpertSection } from "@/components/home/ExpertSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="pt-24">
        <HeroSection />
        <ExpertSection />
        <ServicesSection />
        <AboutSection />
        <ClientsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
