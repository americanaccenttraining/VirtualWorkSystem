import { useEffect, useState, type FormEvent } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  Copy,
  Loader2,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import {
  CONSULTATION_FORM_ENDPOINT,
  CONTACT_INFO,
  FAQ_ITEMS,
  SERVICE_CATEGORIES,
  SITE_MEDIA,
} from '../data/siteContent';

interface FaqAndContactProps {
  preselectedService: string;
  preselectedNote: string;
}

interface FormState {
  fullName: string;
  businessEmail: string;
  companyName: string;
  country: string;
  phoneNumber: string;
  serviceRequired: string;
  estimatedEmployees: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  fullName: '',
  businessEmail: '',
  companyName: '',
  country: '',
  phoneNumber: '',
  serviceRequired: SERVICE_CATEGORIES[0].title,
  estimatedEmployees: '1–3 Specialists',
  message: '',
};

export function FaqAndContact({ preselectedService, preselectedNote }: FaqAndContactProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedSummary, setSubmittedSummary] = useState('');
  const [copiedSummary, setCopiedSummary] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setForm((prev) => ({
        ...prev,
        serviceRequired: preselectedService,
      }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedNote) {
      setForm((prev) => ({
        ...prev,
        message: preselectedNote,
      }));
    }
  }, [preselectedNote]);

  const validateForm = (): string | null => {
    if (form.fullName.trim().length < 2) {
      return 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.businessEmail.trim())) {
      return 'Please enter a valid business email address.';
    }
    if (form.companyName.trim().length < 2) {
      return 'Please enter your company or organization name.';
    }
    if (form.country.trim().length < 2) {
      return 'Please specify your country.';
    }
    if (form.phoneNumber.trim().length < 6) {
      return 'Please enter a valid contact phone number.';
    }
    if (form.message.trim().length < 10) {
      return 'Please include a brief overview of your staffing or operational requirements.';
    }
    return null;
  };

  const buildInquirySummary = () => {
    return [
      `Consultation Request — VirtualWorkSystem`,
      `Name: ${form.fullName.trim()}`,
      `Business Email: ${form.businessEmail.trim()}`,
      `Company: ${form.companyName.trim()}`,
      `Country: ${form.country.trim()}`,
      `Phone: ${form.phoneNumber.trim()}`,
      `Service Required: ${form.serviceRequired}`,
      `Estimated Team Size: ${form.estimatedEmployees}`,
      `Requirements: ${form.message.trim()}`,
    ].join('\n');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setCopiedSummary(false);

    const validationError = validateForm();
    if (validationError) {
      setStatus('error');
      setErrorMessage(validationError);
      return;
    }

    setStatus('submitting');
    const summaryText = buildInquirySummary();

    if (CONSULTATION_FORM_ENDPOINT.trim().length > 0) {
      try {
        const response = await fetch(CONSULTATION_FORM_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(form),
        });
        if (!response.ok) {
          throw new Error('Submission endpoint returned an error.');
        }
        setSubmittedSummary(summaryText);
        setStatus('success');
        setForm(INITIAL_FORM);
      } catch {
        setStatus('error');
        setErrorMessage(
          'Unable to reach the configured form endpoint. Please use our WhatsApp consultation button or call us directly.'
        );
      }
      return;
    }

    // Static GitHub Pages fallback: brief processing state, then prepare direct WhatsApp handoff + copyable summary
    await new Promise((resolve) => setTimeout(resolve, 350));
    setSubmittedSummary(summaryText);
    setStatus('success');
    const whatsappUrl = `${CONTACT_INFO.whatsappHref}?text=${encodeURIComponent(summaryText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopySummary = async () => {
    if (!submittedSummary) return;
    try {
      await navigator.clipboard.writeText(submittedSummary);
      setCopiedSummary(true);
    } catch {
      setCopiedSummary(false);
    }
  };

  return (
    <>
      {/* SECTION 15: FAQ ACCORDION */}
      <section id="faq" className="bg-[#F5F8FC] py-20 lg:py-24 border-t border-slate-200/70">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold tracking-wide text-[#1769AA] mb-2">
                Frequently Asked Questions
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#102A43] mb-4">
                Clear Answers Before You Build Your Remote Team.
              </h2>
              <p className="text-sm sm:text-base text-[#65758B] leading-relaxed mb-6">
                Everything you need to know about dedicated staffing, system integration, and
                getting started with VirtualWorkSystem.
              </p>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2">
                <img
                  src={SITE_MEDIA.serviceOperationsDesk}
                  alt="Executive operations workstation overlooking city skyline"
                  referrerPolicy="no-referrer"
                  className="h-48 w-full rounded-xl object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-3">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={item.question}
                    className="rounded-xl border border-slate-200 bg-white overflow-hidden"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="flex w-full min-h-[56px] items-center justify-between gap-4 px-5 py-4 text-left hover:bg-[#F5F8FC]/60 transition-colors cursor-pointer"
                    >
                      <span className="font-display text-sm sm:text-base font-bold text-[#102A43]">
                        {idx + 1}. {item.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#1769AA] transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-[#243447]/90">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 16: STRONG FINAL CTA */}
      <section className="bg-[#102A43] py-16 lg:py-20 text-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 rounded-2xl border border-white/15 bg-[#0B1F33] p-8 sm:p-12">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                Ready to Build a Smarter, More Scalable Workforce?
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Let&apos;s discuss your business requirements and discover how a dedicated remote
                workforce can help you move forward.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 shrink-0">
              <a
                href="#contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[#2589E8] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1769AA] transition-colors whitespace-nowrap"
              >
                Schedule a Consultation
              </a>
              <a
                href={CONTACT_INFO.usPhoneHref}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-colors whitespace-nowrap"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 17: CONTACT SECTION */}
      <section id="contact" className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Side: Direct Official Contact Details */}
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-wide text-[#1769AA] mb-2">
                Contact VirtualWorkSystem
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102A43] mb-4">
                Let&apos;s Start Building Your Remote Workforce.
              </h2>
              <p className="text-base text-[#65758B] leading-relaxed mb-8">
                Speak directly with our team regarding dedicated offshore roles, operational
                workflows, and consultation scheduling.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href={CONTACT_INFO.usPhoneHref}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-[#F5F8FC] p-5 hover:border-[#2589E8] transition-colors group"
                >
                  <div>
                    <p className="text-xs font-semibold text-[#65758B] mb-1">
                      United States Office Line
                    </p>
                    <p className="font-display text-lg font-bold text-[#102A43] group-hover:text-[#1769AA] tabular-nums">
                      {CONTACT_INFO.usPhoneDisplay}
                    </p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#1769AA] border border-slate-200">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                </a>

                <a
                  href={CONTACT_INFO.pkPhoneHref}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-[#F5F8FC] p-5 hover:border-[#2589E8] transition-colors group"
                >
                  <div>
                    <p className="text-xs font-semibold text-[#65758B] mb-1">
                      Pakistan Operations Line
                    </p>
                    <p className="font-display text-lg font-bold text-[#102A43] group-hover:text-[#1769AA] tabular-nums">
                      {CONTACT_INFO.pkPhoneDisplay}
                    </p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#1769AA] border border-slate-200">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                </a>
              </div>

              <a
                href={CONTACT_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-[#0B1F33] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1769AA] transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-[#2589E8]" aria-hidden="true" />
                Chat Directly on WhatsApp
              </a>

              <p className="text-xs text-[#65758B] mt-4 leading-relaxed">
                Serving businesses in the United States, Canada, United Kingdom, Australia, and
                global markets.
              </p>
            </div>

            {/* Right Side: Consultation Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-[#F5F8FC]/65 p-6 sm:p-8 lg:p-10 shadow-[0_10px_32px_rgba(16,42,67,0.05)]">
                <h3 className="font-display text-xl font-bold text-[#102A43] mb-1.5">
                  Request a Free Consultation
                </h3>
                <p className="text-sm text-[#65758B] mb-6">
                  Complete your operational brief below. Inquiries validate locally and dispatch
                  via our WhatsApp consultation desk (or configured static form endpoint).
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold text-[#102A43] mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        placeholder="Jane Morgan"
                        className="w-full min-h-[44px] rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#243447] placeholder:text-slate-400 focus:border-[#2589E8] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="businessEmail"
                        className="block text-xs font-semibold text-[#102A43] mb-1.5"
                      >
                        Business Email *
                      </label>
                      <input
                        id="businessEmail"
                        name="businessEmail"
                        type="email"
                        required
                        value={form.businessEmail}
                        onChange={(e) => setForm({ ...form, businessEmail: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full min-h-[44px] rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#243447] placeholder:text-slate-400 focus:border-[#2589E8] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-xs font-semibold text-[#102A43] mb-1.5"
                      >
                        Company Name *
                      </label>
                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        required
                        value={form.companyName}
                        onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                        placeholder="Northstar Logistics Group"
                        className="w-full min-h-[44px] rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#243447] placeholder:text-slate-400 focus:border-[#2589E8] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="country"
                        className="block text-xs font-semibold text-[#102A43] mb-1.5"
                      >
                        Country *
                      </label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        required
                        value={form.country}
                        onChange={(e) => setForm({ ...form, country: e.target.value })}
                        placeholder="United States"
                        className="w-full min-h-[44px] rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#243447] placeholder:text-slate-400 focus:border-[#2589E8] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block text-xs font-semibold text-[#102A43] mb-1.5"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        required
                        value={form.phoneNumber}
                        onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                        placeholder="+1 (555) 019-2834"
                        className="w-full min-h-[44px] rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#243447] placeholder:text-slate-400 focus:border-[#2589E8] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="estimatedEmployees"
                        className="block text-xs font-semibold text-[#102A43] mb-1.5"
                      >
                        Estimated Number of Employees
                      </label>
                      <select
                        id="estimatedEmployees"
                        name="estimatedEmployees"
                        value={form.estimatedEmployees}
                        onChange={(e) => setForm({ ...form, estimatedEmployees: e.target.value })}
                        className="w-full min-h-[44px] rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#243447] focus:border-[#2589E8] focus:outline-none"
                      >
                        <option value="1–3 Specialists">1–3 Specialists</option>
                        <option value="4–10 Team Members">4–10 Team Members</option>
                        <option value="11–25 Team Members">11–25 Team Members</option>
                        <option value="25+ Dedicated Operations Unit">
                          25+ Dedicated Operations Unit
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="serviceRequired"
                      className="block text-xs font-semibold text-[#102A43] mb-1.5"
                    >
                      Service Required
                    </label>
                    <select
                      id="serviceRequired"
                      name="serviceRequired"
                      value={form.serviceRequired}
                      onChange={(e) => setForm({ ...form, serviceRequired: e.target.value })}
                      className="w-full min-h-[44px] rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#243447] focus:border-[#2589E8] focus:outline-none"
                    >
                      {SERVICE_CATEGORIES.map((category) => (
                        <option key={category.id} value={category.title}>
                          {category.title}
                        </option>
                      ))}
                      <option value="Multi-Department Dedicated Team">
                        Multi-Department Dedicated Team
                      </option>
                      <option value="Careers / Talent Inquiry">Careers / Talent Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-[#102A43] mb-1.5"
                    >
                      Message &amp; Operational Requirements *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe the roles, time zones, software tools, or operational outcomes you are looking to establish..."
                      className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#243447] placeholder:text-slate-400 focus:border-[#2589E8] focus:outline-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div
                      role="alert"
                      className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                    >
                      <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {status === 'success' && (
                    <div
                      role="status"
                      className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm text-emerald-900 space-y-3"
                    >
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-700" aria-hidden="true" />
                        <div>
                          <p className="font-semibold">
                            Consultation brief prepared successfully.
                          </p>
                          <p className="text-xs text-emerald-800 mt-0.5">
                            If WhatsApp did not open automatically in a new tab, use the button
                            below or copy your structured summary.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <a
                          href={`${CONTACT_INFO.whatsappHref}?text=${encodeURIComponent(
                            submittedSummary
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-md bg-emerald-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-800 transition-colors"
                        >
                          <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                          Send via WhatsApp
                        </a>
                        <button
                          type="button"
                          onClick={handleCopySummary}
                          className="inline-flex items-center gap-1.5 rounded-md border border-emerald-300 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-900 hover:bg-emerald-100 transition-colors cursor-pointer"
                        >
                          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                          {copiedSummary ? 'Copied Summary' : 'Copy Summary'}
                        </button>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex w-full min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#102A43] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1769AA] disabled:opacity-70 transition-colors cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        Preparing Consultation Request...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" aria-hidden="true" />
                        Request a Consultation
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
