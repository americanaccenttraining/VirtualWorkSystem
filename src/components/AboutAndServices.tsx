import { useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  Calculator,
  Check,
  Headphones,
  Megaphone,
  MonitorCog,
  Target,
  Users,
} from 'lucide-react';
import {
  SERVICE_CATEGORIES,
  SITE_MEDIA,
  type ServiceCategory,
} from '../data/siteContent';

interface AboutAndServicesProps {
  onDiscoverApproach: () => void;
  onSelectServiceDetail: (service: ServiceCategory) => void;
  onRequestServiceQuote: (serviceTitle: string) => void;
}

const serviceIconMap: Record<ServiceCategory['iconName'], typeof Briefcase> = {
  Briefcase,
  Headphones,
  Target,
  Megaphone,
  Calculator,
  MonitorCog,
  Users,
};

export function AboutAndServices({
  onDiscoverApproach,
  onSelectServiceDetail,
  onRequestServiceQuote,
}: AboutAndServicesProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');

  const visibleServices =
    activeCategoryId === 'all'
      ? SERVICE_CATEGORIES
      : SERVICE_CATEGORIES.filter((cat) => cat.id === activeCategoryId);

  return (
    <>
      {/* SECTION 7: ABOUT VIRTUALWORKSYSTEM */}
      <section id="about" className="bg-white py-20 lg:py-24 border-t border-slate-100">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            {/* Left Column: Collaboration Photography */}
            <div className="lg:col-span-6 flex">
              <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_10px_32px_rgba(16,42,67,0.06)]">
                <img
                  src={SITE_MEDIA.aboutCollaboration}
                  alt="Remote operations specialists reviewing workflows on dual-monitor workstations"
                  referrerPolicy="no-referrer"
                  className="h-full w-full min-h-[300px] lg:min-h-[440px] object-cover"
                />
              </div>
            </div>

            {/* Right Column: Company Introduction & 3 Core Benefits */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <p className="text-xs font-semibold tracking-wide text-[#1769AA] mb-2">
                About VirtualWorkSystem
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.15rem] font-bold leading-tight text-[#102A43] mb-5">
                An Extension of Your Business, Not Just Another Outsourcing Provider.
              </h2>
              <p className="text-base leading-relaxed text-[#243447]/90 mb-7">
                VirtualWorkSystem helps businesses build and manage remote workforce solutions
                designed around their operational requirements. Our approach focuses on finding the
                right talent, establishing efficient processes, and creating dependable working
                relationships that support long-term business growth.
              </p>

              <div className="space-y-4 mb-8 border-t border-slate-200/80 pt-6">
                <div className="flex items-start gap-3.5">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#F5F8FC] text-[#1769AA] border border-slate-200">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-[#102A43]">
                      Dedicated Workforce
                    </h3>
                    <p className="text-sm text-[#65758B] mt-0.5">
                      Professionals assigned exclusively to your daily operations and internal
                      standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#F5F8FC] text-[#1769AA] border border-slate-200">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-[#102A43]">
                      Operational Flexibility
                    </h3>
                    <p className="text-sm text-[#65758B] mt-0.5">
                      Adaptable role configurations aligned with your schedules, tools, and changing
                      workloads.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#F5F8FC] text-[#1769AA] border border-slate-200">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-[#102A43]">
                      Long-Term Business Partnership
                    </h3>
                    <p className="text-sm text-[#65758B] mt-0.5">
                      Consistent communication and ongoing support built for sustainable multi-year
                      scaling.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={onDiscoverApproach}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#102A43] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1769AA] transition-colors whitespace-nowrap cursor-pointer"
                >
                  Discover Our Approach
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: OUR SERVICES */}
      <section id="services" className="bg-[#F5F8FC] py-20 lg:py-24 border-t border-slate-200/70">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-[#1769AA] mb-2">
                Our Services · Proposed Workforce Capabilities
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102A43] mb-3">
                Structured Remote Staffing Across Seven Core Disciplines.
              </h2>
              <p className="text-base text-[#65758B]">
                Explore our proposed service categories below. Each role profile is configured and
                confirmed around your operational requirements during consultation.
              </p>
            </div>
          </div>

          {/* Interactive Category Filter Bar */}
          <div
            role="tablist"
            aria-label="Filter service categories"
            className="mb-10 flex flex-wrap items-center gap-1.5 rounded-xl border border-slate-200 bg-white p-1.5"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeCategoryId === 'all'}
              onClick={() => setActiveCategoryId('all')}
              className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                activeCategoryId === 'all'
                  ? 'bg-[#102A43] text-white'
                  : 'text-[#243447] hover:bg-[#F5F8FC] hover:text-[#1769AA]'
              }`}
            >
              All Categories (7)
            </button>
            {SERVICE_CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={activeCategoryId === category.id}
                onClick={() => setActiveCategoryId(category.id)}
                className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategoryId === category.id
                    ? 'bg-[#102A43] text-white'
                    : 'text-[#243447] hover:bg-[#F5F8FC] hover:text-[#1769AA]'
                }`}
              >
                {category.shortTitle}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleServices.map((category) => {
              const Icon = serviceIconMap[category.iconName];
              return (
                <article
                  key={category.id}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2589E8]/50 hover:shadow-[0_12px_32px_rgba(16,42,67,0.07)]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F8FC] text-[#1769AA] border border-slate-200/80 group-hover:bg-[#102A43] group-hover:text-white transition-colors duration-200">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-xs font-semibold text-[#65758B] tabular-nums">
                        {category.code} · Proposed Track
                      </span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#102A43] mb-2.5 leading-snug">
                      {category.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#65758B] mb-5">
                      {category.summary}
                    </p>

                    <div className="border-t border-slate-100 pt-4 mb-6">
                      <p className="text-xs font-semibold text-[#243447] mb-2.5">
                        Configurable Role Functions
                      </p>
                      <ul className="space-y-1.5">
                        {category.roles.map((role) => (
                          <li
                            key={role}
                            className="flex items-start gap-2 text-sm text-[#243447]/90"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#2589E8]"
                            />
                            <span>{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => onSelectServiceDetail(category)}
                      className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[#1769AA] hover:text-[#102A43] transition-colors cursor-pointer"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onRequestServiceQuote(category.title)}
                      className="inline-flex min-h-[40px] items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-[#102A43] hover:border-[#102A43] hover:bg-[#102A43] hover:text-white transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Request Roles
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
