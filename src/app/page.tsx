import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import WorkProcessSection from '@/components/WorkProcessSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import PlayerSection from '@/components/PlayerSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <section className="scroll-section section-full">
          <PlayerSection />
        </section>
        <section className="scroll-section section-full">
          <AboutSection />
        </section>
        <section className="scroll-section section-full">
          <ServicesSection />
        </section>
        <section>
          <AdvantagesSection />
        </section>
        <section className="scroll-section section-full">
          <WorkProcessSection />
        </section>
        <section className="scroll-section section-full">
          <PortfolioSection />
        </section>
        <section className="scroll-section section-full">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
