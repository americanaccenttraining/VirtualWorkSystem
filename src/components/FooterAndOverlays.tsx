import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUp, MessageCircle, Phone, X } from 'lucide-react';
import {
  CONTACT_INFO,
  NAV_ITEMS,
  SERVICE_CATEGORIES,
  type ServiceCategory,
} from '../data/siteContent';
import { BrandLogo } from './BrandLogo';

interface FooterAndOverlaysProps {
  selectedService: ServiceCategory | null;
  onCloseService: () => void;
  onRequestServiceQuote: (serviceTitle: string) => void;
}

type LegalDoc = 'privacy' | 'terms' | null;

export function FooterAndOverlays({
  selectedService,
  onCloseService,
  onRequestServiceQuote,
}: FooterAndOverlaysProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDoc>(null);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 520);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedService) onCloseService();
        if (activeLegalDoc) setActiveLegalDoc(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedService, activeLegalDoc, onCloseService]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* SECTION 18: SOPHISTICATED DARK NAVY FOOTER */}
      <footer className="bg-[#0B1F33] text-slate-300 border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Brand & Summary */}
            <div className="lg:col-span-4">
              <a href="#home" aria-label="VirtualWorkSystem Home" className="inline-block mb-4">
                <BrandLogo variant="light" />
              </a>
              <p className="text-sm leading-relaxed text-slate-300 max-w-sm mb-6">
                VirtualWorkSystem helps international organizations build dedicated remote
                workforce solutions, streamline business operations, and scale sustainably.
              </p>
              <div className="space-y-2 text-sm">
                <a
                  href={CONTACT_INFO.usPhoneHref}
                  className="flex items-center gap-2 text-slate-200 hover:text-white transition-colors tabular-nums"
                >
                  <Phone className="h-4 w-4 text-[#2589E8]" aria-hidden="true" />
                  US: {CONTACT_INFO.usPhoneDisplay}
                </a>
                <a
                  href={CONTACT_INFO.pkPhoneHref}
                  className="flex items-center gap-2 text-slate-200 hover:text-white transition-colors tabular-nums"
                >
                  <Phone className="h-4 w-4 text-[#2589E8]" aria-hidden="true" />
                  PK: {CONTACT_INFO.pkPhoneDisplay}
                </a>
                <a
                  href={CONTACT_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#2589E8] hover:text-white transition-colors font-medium pt-1"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp Direct Consultation
                </a>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="lg:col-span-3">
              <h3 className="font-display text-sm font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2.5 text-sm">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Categories */}
            <div className="lg:col-span-3">
              <h3 className="font-display text-sm font-bold text-white mb-4">
                Service Categories
              </h3>
              <ul className="space-y-2.5 text-sm">
                {SERVICE_CATEGORIES.map((category) => (
                  <li key={category.id}>
                    <a
                      href="#services"
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {category.shortTitle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Governance & Social Placeholders */}
            <div className="lg:col-span-2">
              <h3 className="font-display text-sm font-bold text-white mb-4">
                Legal &amp; Channels
              </h3>
              <ul className="space-y-2.5 text-sm mb-6">
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveLegalDoc('privacy')}
                    className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveLegalDoc('terms')}
                    className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Terms &amp; Conditions
                  </button>
                </li>
              </ul>

              <p className="text-xs font-semibold text-slate-400 mb-2">
                Social Channels (Pending Setup)
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                LinkedIn · X · Facebook placeholders ready to link in site configuration.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>© 2026 VirtualWorkSystem. All Rights Reserved.</p>
            <p>virtualworksystem.com</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP & BACK TO TOP CONTROLS (Respecting <= 15% mobile height budget) */}
      <div className="fixed bottom-4 right-4 z-30 flex items-center gap-2.5">
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#102A43] shadow-md hover:bg-[#F5F8FC] transition-colors cursor-pointer"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        )}

        <a
          href={CONTACT_INFO.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-[#102A43] px-4 text-xs sm:text-sm font-semibold text-white shadow-lg border border-white/15 hover:bg-[#1769AA] transition-colors whitespace-nowrap"
        >
          <MessageCircle className="h-4 w-4 text-[#2589E8]" aria-hidden="true" />
          <span>WhatsApp Us</span>
        </a>
      </div>

      {/* SERVICE CAPABILITY DETAIL MODAL */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1F33]/70 p-4 backdrop-blur-xs"
          onClick={onCloseService}
        >
          <div
            className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="font-mono text-xs font-semibold text-[#1769AA] mb-1">
                  Capability Track {selectedService.code}
                </p>
                <h3
                  id="service-modal-title"
                  className="font-display text-xl sm:text-2xl font-bold text-[#102A43]"
                >
                  {selectedService.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onCloseService}
                aria-label="Close service details"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-[#65758B] hover:text-[#102A43] cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="text-sm sm:text-base text-[#243447] leading-relaxed mb-5">
              {selectedService.summary}
            </p>

            <div className="rounded-xl border border-slate-200 bg-[#F5F8FC] p-4 mb-5">
              <p className="text-xs font-bold text-[#102A43] mb-2.5">
                Proposed Role Profiles in This Category
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#243447]">
                {selectedService.roles.map((role) => (
                  <li key={role} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2589E8]" aria-hidden="true" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-[#65758B] mb-6">{selectedService.operationalNote}</p>

            <div className="flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={onCloseService}
                className="min-h-[42px] rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-[#243447] hover:bg-slate-50 cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = selectedService.title;
                  onCloseService();
                  onRequestServiceQuote(title);
                }}
                className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#102A43] px-5 py-2 text-sm font-semibold text-white hover:bg-[#1769AA] transition-colors cursor-pointer"
              >
                Consult on This Category
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LEGAL POLICY MODAL (PRIVACY / TERMS) */}
      {activeLegalDoc && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1F33]/70 p-4 backdrop-blur-xs"
          onClick={() => setActiveLegalDoc(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <h3 id="legal-modal-title" className="font-display text-xl font-bold text-[#102A43]">
                {activeLegalDoc === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <button
                type="button"
                onClick={() => setActiveLegalDoc(null)}
                aria-label="Close legal notice"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-[#65758B] hover:text-[#102A43] cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {activeLegalDoc === 'privacy' ? (
              <div className="space-y-3 text-sm text-[#243447] leading-relaxed">
                <p>
                  VirtualWorkSystem respects client confidentiality. Contact details submitted
                  through consultation forms or direct phone/WhatsApp inquiries are used strictly to
                  evaluate staffing requirements and respond to business requests.
                </p>
                <p>
                  This static website does not sell visitor data or run third-party advertising
                  trackers. For privacy inquiries, contact our team via the official phone numbers
                  listed on virtualworksystem.com.
                </p>
              </div>
            ) : (
              <div className="space-y-3 text-sm text-[#243447] leading-relaxed">
                <p>
                  Service categories presented on VirtualWorkSystem.com represent proposed
                  workforce capabilities that are scoped, confirmed, and governed by written client
                  service agreements prior to team onboarding.
                </p>
                <p>
                  All sample testimonial placeholders displayed during site staging are clearly
                  labeled and do not represent live endorsements until replaced with verified client
                  statements.
                </p>
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveLegalDoc(null)}
                className="min-h-[40px] rounded-lg bg-[#102A43] px-5 py-2 text-sm font-semibold text-white hover:bg-[#1769AA] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
