import { ArrowRight, Globe, Layers, SlidersHorizontal, TrendingUp } from 'lucide-react';
import { SITE_MEDIA, VALUE_PROPOSITIONS, type ValueProp } from '../data/siteContent';

interface HeroSectionProps {
  onConsultationClick: () => void;
  onExploreServicesClick: () => void;
}

const iconMap: Record<ValueProp['iconName'], typeof Globe> = {
  Globe,
  SlidersHorizontal,
  Layers,
  TrendingUp,
};

export function HeroSection({
  onConsultationClick,
  onExploreServicesClick,
}: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#F5F8FC] via-[#F5F8FC] to-white pt-[104px] pb-16 lg:pt-[124px] lg:pb-24"
    >
      {/* Subtle architectural background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#102a4308_1px,transparent_1px),linear-gradient(to_bottom,#102a4308_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Main Two-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Core Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-sm font-semibold tracking-wide text-[#1769AA] mb-4">
              Global BPO · Dedicated Offshore Staffing · Managed Operations
            </p>

            <h1 className="font-display text-[clamp(2.25rem,4vw,3.65rem)] font-bold leading-[1.1] tracking-tight text-[#102A43] mb-6 max-w-2xl">
              Build Your Global Workforce. Scale Without Limits.
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#243447]/90 max-w-xl mb-8">
              Equip your organization with dedicated remote professionals and managed outsourcing
              operations. We help businesses access skilled global talent, streamline daily
              execution, and grow without the overhead of traditional local hiring.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                type="button"
                onClick={onConsultationClick}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#102A43] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-[#1769AA] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                Book a Free Consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onExploreServicesClick}
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm sm:text-base font-semibold text-[#102A43] hover:border-[#1769AA] hover:text-[#1769AA] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                Explore Our Services
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-[#65758B] border-t border-slate-200/80 pt-5">
              <span>Serving US, Canada, UK &amp; Australia</span>
              <span aria-hidden="true">·</span>
              <span>Dedicated Client Alignment</span>
              <span aria-hidden="true">·</span>
              <span>Structured Workflow Onboarding</span>
            </div>
          </div>

          {/* Right Column: Editorial Global Team Visual & Operations Overview */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_12px_40px_rgba(16,42,67,0.08)] flex flex-col">
              <div className="relative flex-1 min-h-[280px] sm:min-h-[340px] overflow-hidden rounded-xl bg-slate-100">
                <img
                  src={SITE_MEDIA.heroGlobalTeam}
                  alt="Diverse international professionals collaborating in a modern corporate office"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1F33]/55 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div className="rounded-lg bg-white/95 backdrop-blur-sm px-4 py-3 border border-slate-200/80 shadow-sm max-w-xs">
                    <p className="text-xs font-semibold text-[#1769AA]">
                      Dedicated Workforce Architecture
                    </p>
                    <p className="text-xs text-[#243447] mt-0.5 leading-snug">
                      Remote specialists integrated into your systems, schedules, and reporting structure.
                    </p>
                  </div>
                  <div className="rounded-lg bg-[#102A43]/95 backdrop-blur-sm px-4 py-3 text-white border border-white/10 shadow-sm">
                    <p className="text-xs font-medium text-slate-300">Operational Coverage</p>
                    <p className="text-xs font-semibold text-white mt-0.5">
                      Admin · Support · Sales · Finance · IT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Trust & Value Proposition Row Below Hero Split */}
        <div className="mt-14 lg:mt-16 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_6px_28px_rgba(16,42,67,0.04)]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <p className="text-xs font-semibold tracking-wide text-[#1769AA] mb-1.5">
                Why Dedicated Outsourcing Works
              </p>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#102A43]">
                Your Business Deserves More Than Outsourcing. It Deserves a Dedicated Team.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {VALUE_PROPOSITIONS.map((item) => {
              const Icon = iconMap[item.iconName];
              return (
                <div key={item.id} className="flex flex-col">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#F5F8FC] text-[#1769AA] border border-slate-200/70">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-base font-bold text-[#102A43] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#65758B]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
