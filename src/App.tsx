import { useState } from 'react';
import { AboutAndServices } from './components/AboutAndServices';
import { FaqAndContact } from './components/FaqAndContact';
import { FooterAndOverlays } from './components/FooterAndOverlays';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { IndustriesAndProcess } from './components/IndustriesAndProcess';
import { TeamModelAndValue } from './components/TeamModelAndValue';
import type { ServiceCategory } from './data/siteContent';

export default function App() {
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceCategory | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [preselectedNote, setPreselectedNote] = useState<string>('');

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestServiceQuote = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    setPreselectedNote(`Interested in learning more about ${serviceTitle} staffing options.`);
    scrollToSection('#contact');
  };

  const handleApplyCareerTrack = (trackTitle: string) => {
    setPreselectedService('Careers / Talent Inquiry');
    setPreselectedNote(`Career / Talent Network inquiry for: ${trackTitle}.`);
    scrollToSection('#contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#243447]">
      <Header onConsultationClick={() => scrollToSection('#contact')} />

      <main className="flex-1">
        <HeroSection
          onConsultationClick={() => scrollToSection('#contact')}
          onExploreServicesClick={() => scrollToSection('#services')}
        />

        <AboutAndServices
          onDiscoverApproach={() => scrollToSection('#process')}
          onSelectServiceDetail={(service) => setSelectedServiceDetail(service)}
          onRequestServiceQuote={handleRequestServiceQuote}
        />

        <IndustriesAndProcess onConsultationClick={() => scrollToSection('#contact')} />

        <TeamModelAndValue
          onConsultationClick={() => scrollToSection('#contact')}
          onApplyCareerTrack={handleApplyCareerTrack}
        />

        <FaqAndContact
          preselectedService={preselectedService}
          preselectedNote={preselectedNote}
        />
      </main>

      <FooterAndOverlays
        selectedService={selectedServiceDetail}
        onCloseService={() => setSelectedServiceDetail(null)}
        onRequestServiceQuote={handleRequestServiceQuote}
      />
    </div>
  );
}
