import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import WorkProcessSection from '@/components/WorkProcessSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative pt-15 lg:pt-0">
        {/* Hero Section - Full Screen */}
        <section className="scroll-section">
          <Hero />
        </section>

        {/* About Section - Full Screen */}
        <section className="scroll-section section-full">
          <AboutSection />
        </section>

        {/* Services Section - Full Screen */}
        <section className="scroll-section section-full">
          <ServicesSection />
        </section>

        {/* Advantages Section - Full Screen */}
        <section className="scroll-section section-full">
          <AdvantagesSection />
        </section>

        {/* Work Process Section - Full Screen */}
        <section className="scroll-section section-full">
          <WorkProcessSection />
        </section>

        {/* Portfolio Section - Full Screen */}
        <section className="scroll-section section-full">
          <PortfolioSection />
        </section>

        {/* Contact Section - Full Screen */}
        <section className="scroll-section section-full">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
