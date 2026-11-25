import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data/siteContent';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onConsultationClick: () => void;
}

export function Header({ onConsultationClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md border-b border-slate-200/90 shadow-[0_4px_24px_rgba(16,42,67,0.06)]'
          : 'bg-[#F5F8FC]/90 backdrop-blur-sm border-b border-slate-200/50'
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            aria-label="VirtualWorkSystem Home"
            className="whitespace-nowrap shrink-0 focus-visible:rounded-md"
          >
            <BrandLogo variant="dark" />
          </a>

          {/* Zone 2: Primary Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-5 xl:gap-7"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-sm font-medium text-[#243447] hover:text-[#1769AA] transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#2589E8]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Single Primary Action + Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onConsultationClick}
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#102A43] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1769AA] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
            >
              Get a Free Consultation
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#102A43] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden border-t border-slate-200 bg-white shadow-lg"
        >
          <nav aria-label="Mobile Navigation" className="mx-auto max-w-[1280px] px-4 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-[#243447] hover:bg-[#F5F8FC] hover:text-[#1769AA] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onConsultationClick();
                }}
                className="w-full min-h-[44px] rounded-lg bg-[#102A43] px-4 py-3 text-sm font-semibold text-white hover:bg-[#1769AA] transition-colors cursor-pointer"
              >
                Get a Free Consultation
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
