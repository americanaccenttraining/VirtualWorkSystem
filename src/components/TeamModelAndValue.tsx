import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Quote,
} from 'lucide-react';
import {
  CAREER_TRACKS,
  CONTACT_INFO,
  DEDICATED_MODEL_HIGHLIGHTS,
  SITE_MEDIA,
  TESTIMONIALS,
  VALUE_COMPARISON_ROWS,
} from '../data/siteContent';

interface TeamModelAndValueProps {
  onConsultationClick: () => void;
  onApplyCareerTrack: (trackTitle: string) => void;
}

export function TeamModelAndValue({
  onConsultationClick,
  onApplyCareerTrack,
}: TeamModelAndValueProps) {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS[testimonialIndex];

  return (
    <>
      {/* SECTION 12: DEDICATED TEAM MODEL */}
      <section className="bg-[#F5F8FC] py-20 lg:py-24 border-t border-slate-200/70">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-semibold tracking-wide text-[#1769AA] mb-2">
              Dedicated Team Model
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102A43] mb-4">
              Your Remote Team. Your Processes. Your Business Goals.
            </h2>
            <p className="text-base leading-relaxed text-[#243447]/90">
              Instead of routing work through impersonal ticket pools, our dedicated model gives
              your company remote professionals who operate as an integrated extension of your
              existing department.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            <div className="lg:col-span-7 flex">
              <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-2.5 shadow-[0_10px_30px_rgba(16,42,67,0.06)]">
                <img
                  src={SITE_MEDIA.dedicatedTeamOps}
                  alt="Modern international remote operations center with dedicated workstations"
                  referrerPolicy="no-referrer"
                  className="h-full w-full min-h-[280px] lg:min-h-[420px] rounded-xl object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <div>
                <h3 className="font-display text-xl font-bold text-[#102A43] mb-5">
                  How Dedicated Alignment Works
                </h3>
                <ul className="space-y-4">
                  {DEDICATED_MODEL_HIGHLIGHTS.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <CheckCircle2
                        className="h-5 w-5 shrink-0 text-[#1769AA] mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-sm font-bold text-[#102A43]">{item.title}</p>
                        <p className="text-xs sm:text-sm text-[#65758B] mt-0.5 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onConsultationClick}
                  className="inline-flex w-full min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#102A43] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1769AA] transition-colors cursor-pointer"
                >
                  Design Your Dedicated Team
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: COST AND BUSINESS VALUE */}
      <section className="bg-white py-20 lg:py-24 border-t border-slate-100">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-wide text-[#1769AA] mb-2">
                Operational Economics
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102A43] mb-4">
                Grow Your Capacity Without Growing Your Overhead.
              </h2>
              <p className="text-base text-[#65758B] leading-relaxed">
                Outsourcing with a structured remote partner helps growing businesses reduce
                traditional recruitment overhead, access a broader international talent pool, improve
                operational flexibility, keep internal leaders focused on core business activities,
                and scale resources according to real demand.
              </p>
            </div>
            <div className="lg:col-span-5 flex lg:justify-end">
              <div className="rounded-xl border border-slate-200 bg-[#F5F8FC] px-5 py-4 text-sm text-[#243447] max-w-md">
                <p className="font-semibold text-[#102A43] mb-1">Transparent Evaluation</p>
                <p className="text-xs sm:text-sm text-[#65758B]">
                  Actual operational cost structures depend on role scope, experience tier, and
                  shift coverage—reviewed transparently during your consultation.
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-[0_6px_24px_rgba(16,42,67,0.04)]">
            <table className="w-full min-w-[640px] text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-[#F5F8FC]">
                  <th scope="col" className="py-4 px-6 text-xs font-bold text-[#102A43] w-[26%]">
                    Operational Dimension
                  </th>
                  <th scope="col" className="py-4 px-6 text-xs font-bold text-[#65758B] w-[37%]">
                    Traditional In-House Hiring
                  </th>
                  <th
                    scope="col"
                    className="py-4 px-6 text-xs font-bold text-white bg-[#102A43] w-[37%]"
                  >
                    Managed Remote Workforce
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {VALUE_COMPARISON_ROWS.map((row) => (
                  <tr key={row.dimension} className="hover:bg-[#F5F8FC]/40 transition-colors">
                    <td className="py-4 px-6 font-semibold text-[#102A43] align-top">
                      {row.dimension}
                    </td>
                    <td className="py-4 px-6 text-[#65758B] align-top leading-relaxed">
                      {row.traditional}
                    </td>
                    <td className="py-4 px-6 text-[#243447] bg-[#F5F8FC]/55 align-top font-medium leading-relaxed">
                      {row.managedRemote}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 14: TESTIMONIAL SECTION (Clearly Marked Sample Slots) */}
      <section className="bg-[#F5F8FC] py-20 lg:py-24 border-t border-slate-200/70">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-semibold tracking-wide text-[#1769AA] mb-2">
                Client Feedback Structure
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#102A43]">
                Verified Partner Stories
              </h2>
              <p className="text-sm text-[#65758B] mt-2 max-w-xl">
                Sample testimonial layout prepared for verified client endorsements. Placeholder
                slots can be updated directly with approved partner quotes.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={prevTestimonial}
                aria-label="Previous testimonial sample"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#102A43] hover:border-[#1769AA] hover:text-[#1769AA] transition-colors cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="font-mono text-xs font-semibold text-[#65758B] px-2 tabular-nums">
                {testimonialIndex + 1} / {TESTIMONIALS.length}
              </span>
              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next testimonial sample"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#102A43] hover:border-[#1769AA] hover:text-[#1769AA] transition-colors cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 shadow-[0_8px_28px_rgba(16,42,67,0.04)]">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-100">
              <span className="text-xs font-semibold text-[#1769AA]">
                {activeTestimonial.label}
              </span>
              <span className="text-xs text-[#65758B]">{activeTestimonial.focusArea}</span>
            </div>

            <div className="flex items-start gap-4 sm:gap-6">
              <Quote
                className="hidden sm:block h-8 w-8 shrink-0 text-[#2589E8]/35 mt-1"
                aria-hidden="true"
              />
              <div>
                <blockquote className="font-display text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed text-[#102A43] mb-6">
                  “{activeTestimonial.quote}”
                </blockquote>
                <div className="text-sm">
                  <p className="font-bold text-[#243447]">{activeTestimonial.attributionRole}</p>
                  <p className="text-[#65758B] mt-0.5">{activeTestimonial.attributionRegion}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS & GLOBAL TALENT NETWORK (#careers) */}
      <section id="careers" className="bg-white py-20 lg:py-24 border-t border-slate-100">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-[#1769AA] mb-2">
                Careers at VirtualWorkSystem
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#102A43] mb-3">
                Join Our Global Remote Talent Network.
              </h2>
              <p className="text-base text-[#65758B]">
                We connect capable administrative, customer care, sales, marketing, finance, and
                technical professionals with growing international businesses.
              </p>
            </div>
            <a
              href={`${CONTACT_INFO.whatsappHref}?text=${encodeURIComponent(
                'Hello VirtualWorkSystem, I would like to inquire about remote career opportunities.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-[#102A43] hover:border-[#1769AA] hover:text-[#1769AA] transition-colors whitespace-nowrap shrink-0"
            >
              <MessageSquare className="h-4 w-4 text-[#1769AA]" aria-hidden="true" />
              Connect on WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAREER_TRACKS.map((track) => (
              <div
                key={track.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#F5F8FC]/60 p-6"
              >
                <div>
                  <div className="text-xs font-medium text-[#65758B] mb-2 flex items-center gap-2">
                    <span>{track.department}</span>
                    <span aria-hidden="true">·</span>
                    <span>{track.workModel}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#102A43] mb-2">
                    {track.title}
                  </h3>
                  <p className="text-sm text-[#65758B] leading-relaxed mb-6">{track.summary}</p>
                </div>

                <button
                  type="button"
                  onClick={() => onApplyCareerTrack(track.title)}
                  className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[#1769AA] hover:text-[#102A43] transition-colors cursor-pointer"
                >
                  Submit Talent Inquiry
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
