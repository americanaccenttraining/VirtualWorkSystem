/* VirtualWorkSystem Interactive Behavior — Vanilla JS ES Module */

const CONSULTATION_FORM_ENDPOINT = '';
const WHATSAPP_URL = 'https://wa.me/923218890949';

const SERVICE_CATALOG = {
  'virtual-assistance': {
    code: '01',
    title: 'Virtual Assistance & Administrative Support',
    summary:
      'Structured executive coordination, calendar governance, document handling, and daily administrative execution.',
    note: 'Proposed capability framework tailored to your internal SOPs and communication tools.',
    roles: [
      'Virtual Assistants',
      'Executive Assistance',
      'Administrative Support',
      'Data Entry',
      'Document Management',
      'Appointment Scheduling',
      'Email and Calendar Management',
    ],
  },
  'customer-service': {
    code: '02',
    title: 'Customer Service & Call Center',
    summary:
      'Responsive multi-channel client care spanning inbound inquiries, outbound follow-ups, live chat, and ticket resolution.',
    note: 'Configured around your service-level expectations, CRM workflows, and brand tone.',
    roles: [
      'Inbound Customer Support',
      'Outbound Calling',
      'Email Support',
      'Live Chat Support',
      'Technical Support',
      'Customer Relationship Management',
    ],
  },
  'sales-lead-gen': {
    code: '03',
    title: 'Sales & Lead Generation',
    summary:
      'Consistent pipeline development covering prospect research, outbound outreach, appointment setting, and CRM hygiene.',
    note: 'Aligned with your target buyer profiles, messaging guidelines, and sales leadership.',
    roles: [
      'B2B Lead Generation',
      'Appointment Setting',
      'Prospect Research',
      'Cold Calling',
      'Sales Development Representatives',
      'CRM Management',
      'Sales Administration',
    ],
  },
  'digital-marketing': {
    code: '04',
    title: 'Digital Marketing',
    summary:
      'Dedicated execution support for search visibility, social publishing, content production, campaign assets, and coordination.',
    note: 'Designed to integrate directly with your internal marketing leads or brand calendar.',
    roles: [
      'Social Media Management',
      'Search Engine Optimization',
      'Content Creation',
      'Digital Advertising Support',
      'Email Marketing',
      'Graphic Design',
      'Marketing Administration',
    ],
  },
  'accounting-back-office': {
    code: '05',
    title: 'Accounting & Back-Office Support',
    summary:
      'Disciplined bookkeeping assistance, receivables and payables coordination, invoicing, and structured back-office processing.',
    note: 'Operates within your accounting software permissions and financial review controls.',
    roles: [
      'Bookkeeping Assistance',
      'Accounts Payable Support',
      'Accounts Receivable Support',
      'Financial Data Entry',
      'Payroll Administration',
      'Invoice Processing',
      'General Back-Office Support',
    ],
  },
  'it-technical-support': {
    code: '06',
    title: 'IT & Technical Support',
    summary:
      'Dependable website maintenance, technical helpdesk coverage, software administration, and structured data management.',
    note: 'Scoped to your infrastructure stack, ticketing system, and security permissions.',
    roles: [
      'Website Maintenance',
      'WordPress Support',
      'Technical Helpdesk',
      'Software Support',
      'Data Management',
      'IT Administration',
    ],
  },
  'hr-recruitment': {
    code: '07',
    title: 'Human Resources & Recruitment',
    summary:
      'End-to-end hiring coordination including candidate sourcing, resume screening, interview scheduling, and records upkeep.',
    note: 'Supports internal HR leaders with structured talent pipelines and documentation.',
    roles: [
      'Recruitment Assistance',
      'Candidate Sourcing',
      'Resume Screening',
      'HR Administration',
      'Employee Records Management',
      'Recruitment Coordination',
    ],
  },
  'staff-augmentation': {
    code: '08',
    title: 'Staff Augmentation',
    summary:
      'On-demand skilled professionals embedded directly into your internal teams to bridge capability gaps and accelerate delivery.',
    note: 'Flexible augmentation configured around your sprint cycles, management tools, and capacity goals.',
    roles: [
      'Dedicated Offshore Specialists',
      'Project-Based Team Scaling',
      'Cross-Functional Support Staff',
      'Seasonal Capacity Expansion',
      'Technical & Operational Talent',
      'Embedded Team Integration',
      'Flexible Contract Staffing',
    ],
  },
};

const TESTIMONIAL_SAMPLES = [
  {
    label: 'Partner Endorsement · Dedicated Operations',
    focus: 'Back-Office & Administrative Operations',
    quote:
      'Integrating dedicated remote operations coordinators with VirtualWorkSystem allowed our leadership team to step out of daily scheduling bottlenecks while maintaining consistent client follow-up and invoicing accuracy.',
    author: 'David Miller — Chief Operating Officer',
    region: 'Midwest Care Logistics · United States',
  },
  {
    label: 'Partner Endorsement · Client Care',
    focus: 'Customer Support Operations',
    quote:
      'Their structured onboarding framework meant our remote support specialists adapted quickly to our helpdesk software and UK shift coverage, improving ticket turnaround without disrupting existing workflows.',
    author: 'Rachel Bennett — Head of Customer Experience',
    region: 'Harborline Commerce · United Kingdom',
  },
  {
    label: 'Partner Endorsement · Revenue Operations',
    focus: 'Sales & Lead Generation',
    quote:
      'Having dedicated inside sales and CRM administration support transformed our outbound consistency. Our brokers now focus strictly on qualified meetings while pipeline records remain spotless.',
    author: 'Daniel Brooks — Managing Partner',
    region: 'Crestview Property Advisors · Canada',
  },
  {
    label: 'Partner Endorsement · Finance & Admin',
    focus: 'Accounting & Back-Office Support',
    quote:
      'As our project volume grew, expanding our accounts payable and administrative team through VirtualWorkSystem gave us dependable capacity without the delays of local recruitment.',
    author: 'Claire Mitchell — Director of Finance',
    region: 'Pacific Build Group · Australia',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('site-header');
  const backToTopBtn = document.getElementById('back-to-top-btn');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileMenuIconOpen = document.getElementById('menu-icon-open');
  const mobileMenuIconClose = document.getElementById('menu-icon-close');

  // 1. Sticky Header & Back-to-Top Visibility
  const handleScroll = () => {
    const y = window.scrollY || window.pageYOffset;
    if (header) {
      header.classList.toggle('is-scrolled', y > 24);
    }
    if (backToTopBtn) {
      backToTopBtn.hidden = y <= 520;
    }
  };
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 2. Mobile Navigation Drawer
  const setMobileDrawer = (open) => {
    if (!mobileDrawer || !mobileMenuBtn) return;
    mobileDrawer.hidden = !open;
    mobileMenuBtn.setAttribute('aria-expanded', String(open));
    if (mobileMenuIconOpen && mobileMenuIconClose) {
      mobileMenuIconOpen.style.display = open ? 'none' : 'block';
      mobileMenuIconClose.style.display = open ? 'block' : 'none';
    }
  };

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      const isCurrentlyOpen = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      setMobileDrawer(!isCurrentlyOpen);
    });
  }

  document.querySelectorAll('[data-scroll-target]').forEach((el) => {
    el.addEventListener('click', (e) => {
      const targetSelector = el.getAttribute('data-scroll-target');
      if (!targetSelector) return;
      const targetEl = document.querySelector(targetSelector);
      if (targetEl) {
        e.preventDefault();
        setMobileDrawer(false);
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 3. Service Category Filtering
  const tabButtons = document.querySelectorAll('[data-service-filter]');
  const serviceCards = document.querySelectorAll('[data-service-card]');

  tabButtons.forEach((tab) => {
    tab.addEventListener('click', () => {
      const filterValue = tab.getAttribute('data-service-filter') || 'all';
      tabButtons.forEach((btn) => {
        const active = btn === tab;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-selected', String(active));
      });
      serviceCards.forEach((card) => {
        const cardId = card.getAttribute('data-service-card');
        card.hidden = filterValue !== 'all' && cardId !== filterValue;
      });
    });
  });

  // 4. Service Detail Modal & Pre-fill Contact Form
  const serviceModal = document.getElementById('service-modal');
  const serviceModalCode = document.getElementById('service-modal-code');
  const serviceModalTitle = document.getElementById('service-modal-title');
  const serviceModalSummary = document.getElementById('service-modal-summary');
  const serviceModalRoles = document.getElementById('service-modal-roles');
  const serviceModalNote = document.getElementById('service-modal-note');
  const serviceModalConsultBtn = document.getElementById('service-modal-consult-btn');
  const serviceSelect = document.getElementById('serviceRequired');
  const messageInput = document.getElementById('message');
  const contactSection = document.getElementById('contact');

  let activeModalServiceTitle = '';

  const prefillConsultation = (serviceTitle, customNote) => {
    if (serviceSelect && serviceTitle) {
      serviceSelect.value = serviceTitle;
    }
    if (messageInput && customNote) {
      messageInput.value = customNote;
    }
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openServiceModal = (serviceKey) => {
    const item = SERVICE_CATALOG[serviceKey];
    if (!item || !serviceModal) return;
    activeModalServiceTitle = item.title;
    if (serviceModalCode) serviceModalCode.textContent = `Capability Track ${item.code}`;
    if (serviceModalTitle) serviceModalTitle.textContent = item.title;
    if (serviceModalSummary) serviceModalSummary.textContent = item.summary;
    if (serviceModalNote) serviceModalNote.textContent = item.note;
    if (serviceModalRoles) {
      serviceModalRoles.innerHTML = '';
      item.roles.forEach((role) => {
        const li = document.createElement('li');
        const dot = document.createElement('span');
        dot.className = 'role-dot';
        dot.setAttribute('aria-hidden', 'true');
        const text = document.createElement('span');
        text.textContent = role;
        li.appendChild(dot);
        li.appendChild(text);
        serviceModalRoles.appendChild(li);
      });
    }
    serviceModal.hidden = false;
  };

  const closeServiceModal = () => {
    if (serviceModal) serviceModal.hidden = true;
  };

  document.querySelectorAll('[data-open-service]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-open-service');
      if (key) openServiceModal(key);
    });
  });

  document.querySelectorAll('[data-request-service]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-request-service') || '';
      prefillConsultation(
        title,
        `Interested in learning more about ${title} staffing options.`
      );
    });
  });

  document.querySelectorAll('[data-career-track]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const track = btn.getAttribute('data-career-track') || '';
      prefillConsultation(
        'Careers / Talent Inquiry',
        `Career / Talent Network inquiry for: ${track}.`
      );
    });
  });

  if (serviceModalConsultBtn) {
    serviceModalConsultBtn.addEventListener('click', () => {
      closeServiceModal();
      prefillConsultation(
        activeModalServiceTitle,
        `Interested in learning more about ${activeModalServiceTitle} staffing options.`
      );
    });
  }

  document.querySelectorAll('[data-close-service-modal]').forEach((el) => {
    el.addEventListener('click', closeServiceModal);
  });

  if (serviceModal) {
    serviceModal.addEventListener('click', (e) => {
      if (e.target === serviceModal) closeServiceModal();
    });
  }

  // 5. Legal Policy Modal
  const legalModal = document.getElementById('legal-modal');
  const legalModalTitle = document.getElementById('legal-modal-title');
  const legalPrivacyBody = document.getElementById('legal-privacy-body');
  const legalTermsBody = document.getElementById('legal-terms-body');

  const openLegalModal = (docType) => {
    if (!legalModal) return;
    const isPrivacy = docType === 'privacy';
    if (legalModalTitle) {
      legalModalTitle.textContent = isPrivacy ? 'Privacy Policy' : 'Terms & Conditions';
    }
    if (legalPrivacyBody) legalPrivacyBody.hidden = !isPrivacy;
    if (legalTermsBody) legalTermsBody.hidden = isPrivacy;
    legalModal.hidden = false;
  };

  const closeLegalModal = () => {
    if (legalModal) legalModal.hidden = true;
  };

  document.querySelectorAll('[data-open-legal]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const docType = btn.getAttribute('data-open-legal');
      if (docType) openLegalModal(docType);
    });
  });

  document.querySelectorAll('[data-close-legal-modal]').forEach((el) => {
    el.addEventListener('click', closeLegalModal);
  });

  if (legalModal) {
    legalModal.addEventListener('click', (e) => {
      if (e.target === legalModal) closeLegalModal();
    });
  }

  // Escape closes drawers & modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      setMobileDrawer(false);
      closeServiceModal();
      closeLegalModal();
    }
  });

  // 6. Testimonial Slider
  let currentTestimonial = 0;
  const tLabel = document.getElementById('testimonial-label');
  const tFocus = document.getElementById('testimonial-focus');
  const tQuote = document.getElementById('testimonial-quote');
  const tAuthor = document.getElementById('testimonial-author');
  const tRegion = document.getElementById('testimonial-region');
  const tCounter = document.getElementById('testimonial-counter');

  const renderTestimonial = () => {
    const item = TESTIMONIAL_SAMPLES[currentTestimonial];
    if (!item) return;
    if (tLabel) tLabel.textContent = item.label;
    if (tFocus) tFocus.textContent = item.focus;
    if (tQuote) tQuote.textContent = `“${item.quote}”`;
    if (tAuthor) tAuthor.textContent = item.author;
    if (tRegion) tRegion.textContent = item.region;
    if (tCounter) {
      tCounter.textContent = `${currentTestimonial + 1} / ${TESTIMONIAL_SAMPLES.length}`;
    }
  };

  const prevTestimonialBtn = document.getElementById('testimonial-prev');
  const nextTestimonialBtn = document.getElementById('testimonial-next');
  if (prevTestimonialBtn) {
    prevTestimonialBtn.addEventListener('click', () => {
      currentTestimonial =
        currentTestimonial === 0 ? TESTIMONIAL_SAMPLES.length - 1 : currentTestimonial - 1;
      renderTestimonial();
    });
  }
  if (nextTestimonialBtn) {
    nextTestimonialBtn.addEventListener('click', () => {
      currentTestimonial =
        currentTestimonial === TESTIMONIAL_SAMPLES.length - 1 ? 0 : currentTestimonial + 1;
      renderTestimonial();
    });
  }

  // 7. FAQ Accordion
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  faqTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const targetId = trigger.getAttribute('aria-controls');
      const answerEl = targetId ? document.getElementById(targetId) : null;
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';

      faqTriggers.forEach((other) => {
        const otherId = other.getAttribute('aria-controls');
        const otherAnswer = otherId ? document.getElementById(otherId) : null;
        other.setAttribute('aria-expanded', 'false');
        if (otherAnswer) otherAnswer.hidden = true;
      });

      if (!isOpen && answerEl) {
        trigger.setAttribute('aria-expanded', 'true');
        answerEl.hidden = false;
      }
    });
  });

  // 8. Consultation Form Validation & Submission
  const consultationForm = document.getElementById('consultation-form');
  const formErrorBox = document.getElementById('form-error-box');
  const formErrorText = document.getElementById('form-error-text');
  const formSuccessBox = document.getElementById('form-success-box');
  const formSubmitBtn = document.getElementById('form-submit-btn');
  const whatsappDispatchLink = document.getElementById('whatsapp-dispatch-link');
  const copySummaryBtn = document.getElementById('copy-summary-btn');

  let lastInquirySummary = '';

  const showError = (msg) => {
    if (formSuccessBox) formSuccessBox.hidden = true;
    if (formErrorText) formErrorText.textContent = msg;
    if (formErrorBox) formErrorBox.hidden = false;
  };

  if (copySummaryBtn) {
    copySummaryBtn.addEventListener('click', async () => {
      if (!lastInquirySummary) return;
      try {
        await navigator.clipboard.writeText(lastInquirySummary);
        copySummaryBtn.textContent = 'Copied Summary';
      } catch {
        copySummaryBtn.textContent = 'Copy Unavailable';
      }
    });
  }

  if (consultationForm) {
    consultationForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (formErrorBox) formErrorBox.hidden = true;
      if (formSuccessBox) formSuccessBox.hidden = true;

      const fullName = document.getElementById('fullName')?.value.trim() || '';
      const businessEmail = document.getElementById('businessEmail')?.value.trim() || '';
      const companyName = document.getElementById('companyName')?.value.trim() || '';
      const country = document.getElementById('country')?.value.trim() || '';
      const phoneNumber = document.getElementById('phoneNumber')?.value.trim() || '';
      const estimatedEmployees =
        document.getElementById('estimatedEmployees')?.value.trim() || '';
      const serviceRequired = document.getElementById('serviceRequired')?.value.trim() || '';
      const message = document.getElementById('message')?.value.trim() || '';

      if (fullName.length < 2) {
        showError('Please enter your full name.');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(businessEmail)) {
        showError('Please enter a valid business email address.');
        return;
      }
      if (companyName.length < 2) {
        showError('Please enter your company or organization name.');
        return;
      }
      if (country.length < 2) {
        showError('Please specify your country.');
        return;
      }
      if (phoneNumber.length < 6) {
        showError('Please enter a valid contact phone number.');
        return;
      }
      if (message.length < 10) {
        showError('Please include a brief overview of your staffing or operational requirements.');
        return;
      }

      lastInquirySummary = [
        'Consultation Request — VirtualWorkSystem',
        `Name: ${fullName}`,
        `Business Email: ${businessEmail}`,
        `Company: ${companyName}`,
        `Country: ${country}`,
        `Phone: ${phoneNumber}`,
        `Service Required: ${serviceRequired}`,
        `Estimated Team Size: ${estimatedEmployees}`,
        `Requirements: ${message}`,
      ].join('\n');

      if (formSubmitBtn) {
        formSubmitBtn.disabled = true;
        formSubmitBtn.textContent = 'Preparing Consultation Request...';
      }

      if (CONSULTATION_FORM_ENDPOINT.trim().length > 0) {
        try {
          const response = await fetch(CONSULTATION_FORM_ENDPOINT, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              fullName,
              businessEmail,
              companyName,
              country,
              phoneNumber,
              estimatedEmployees,
              serviceRequired,
              message,
            }),
          });
          if (!response.ok) throw new Error('Request failed');
          if (formSuccessBox) formSuccessBox.hidden = false;
          consultationForm.reset();
        } catch {
          showError(
            'Unable to reach the configured form endpoint. Please use our WhatsApp consultation button or call us directly.'
          );
        } finally {
          if (formSubmitBtn) {
            formSubmitBtn.disabled = false;
            formSubmitBtn.textContent = 'Request a Consultation';
          }
        }
        return;
      }

      const whatsappHref = `${WHATSAPP_URL}?text=${encodeURIComponent(lastInquirySummary)}`;
      if (whatsappDispatchLink) {
        whatsappDispatchLink.setAttribute('href', whatsappHref);
      }
      if (copySummaryBtn) {
        copySummaryBtn.textContent = 'Copy Summary';
      }
      if (formSuccessBox) formSuccessBox.hidden = false;
      if (formSubmitBtn) {
        formSubmitBtn.disabled = false;
        formSubmitBtn.textContent = 'Request a Consultation';
      }
      window.open(whatsappHref, '_blank', 'noopener,noreferrer');
    });
  }
});
