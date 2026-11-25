import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Cpu,
  HardHat,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Store,
  Truck,
  Wrench,
} from 'lucide-react';
import {
  INDUSTRIES,
  PROCESS_STEPS,
  SITE_MEDIA,
  WHY_CHOOSE_ITEMS,
  type IndustryItem,
} from '../data/siteContent';

interface IndustriesAndProcessProps {
  onConsultationClick: () => void;
}

const industryIconMap: Record<IndustryItem['iconName'], typeof Building2> = {
  HeartPulse,
  Building2,
  ShoppingBag,
  Landmark,
  BriefcaseBusiness,
  HardHat,
  Cpu,
  Store,
  Truck,
  Wrench,
};

export function IndustriesAndProcess({ onConsultationClick }: IndustriesAndProcessProps) {
  return (
    <>
      {/* SECTION 9: INDUSTRIES WE SUPPORT */}
      <section id="industries" className="bg-white py-20 lg:py-24 border-t border-slate-100">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-wide text-[#1769AA] mb-2">
                Industries We Support
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102A43] mb-4">
                Tailored Operational Support Across Specialized Sectors.
              </h2>
              <p className="text-base text-[#65758B] max-w-2xl">
                Every industry carries distinct compliance expectations, software stacks, and
                customer workflows. Our staffing framework adapts to how your sector actually
                operates.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 h-44 sm:h-52">
                <img
                  src={SITE_MEDIA.industryEnterpriseHub}
                  alt="Corporate strategy and financial operations team reviewing workflow diagrams"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {INDUSTRIES.map((industry) => {
              const Icon = industryIconMap[industry.iconName];
              return (
                <article
                  key={industry.id}
                  className="flex flex-col justify-between rounded-xl border border-slate-200 bg-[#F5F8FC]/65 p-5 hover:bg-white hover:border-[#2589E8]/50 hover:shadow-[0_8px_24px_rgba(16,42,67,0.06)] transition-all duration-150"
                >
                  <div>
                    <div className="mb-3.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#1769AA] border border-slate-200">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-base font-bold text-[#102A43] mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#65758B] mb-4">
                      {industry.description}
                    </p>
                  </div>
                  <p className="text-[11px] font-medium text-[#1769AA] border-t border-slate-200/80 pt-3">
                    {industry.typicalFunctions}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 10: WHY CHOOSE VIRTUALWORKSYSTEM? (Alternating Editorial Layout) */}
      <section className="bg-[#0B1F33] text-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Sticky Editorial Intro */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <p className="text-xs font-semibold tracking-wide text-[#2589E8] mb-2">
                Why Choose VirtualWorkSystem
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.2rem] font-bold leading-tight text-white mb-4">
                Smarter Workforce Solutions. Stronger Business Performance.
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300 mb-7">
                We replace fragmented freelancer sourcing with structured global recruitment,
                role-specific onboarding, and dependable day-to-day alignment.
              </p>
              <button
                type="button"
                onClick={onConsultationClick}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#2589E8] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1769AA] transition-colors whitespace-nowrap cursor-pointer"
              >
                Discuss Your Team Needs
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Alternating Structured Advantage Rows */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_CHOOSE_ITEMS.map((item, idx) => {
                const isWide = idx === 0 || idx === 5;
                return (
                  <div
                    key={item.number}
                    className={`rounded-2xl border p-6 sm:p-7 transition-colors ${
                      isWide
                        ? 'sm:col-span-2 bg-[#102A43] border-white/15'
                        : 'bg-[#102A43]/65 border-white/10 hover:border-[#2589E8]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="font-mono text-xs font-semibold text-[#2589E8] tabular-nums">
                        {item.number}
                      </span>
                      <span className="text-xs font-medium text-slate-300">{item.highlight}</span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-300 max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: HOW OUR PROCESS WORKS */}
      <section id="process" className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-wide text-[#1769AA] mb-2">
              How Our Process Works
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102A43] mb-3">
              A Clear Four-Stage Path from Discovery to Scalable Execution.
            </h2>
            <p className="text-base text-[#65758B]">
              Every engagement follows a disciplined implementation roadmap so your internal
              managers stay informed without carrying the recruitment burden.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.step}
                className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#F5F8FC]/60 p-6 sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#102A43] font-mono text-sm font-semibold text-white tabular-nums">
                      {step.step}
                    </span>
                    <span className="text-xs font-semibold text-[#1769AA]">
                      Step {index + 1} of 4
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#102A43] mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#243447]/90 mb-5">
                    {step.description}
                  </p>
                </div>

                <div className="border-t border-slate-200/80 pt-3.5 text-xs font-medium text-[#65758B]">
                  {step.deliverable}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
