import heroGlobalTeamImg from '../assets/images/hero_global_team_1795637593213.jpg';
import aboutCollaborationImg from '../assets/images/about_collaboration_1795637594175.jpg';
import dedicatedTeamOpsImg from '../assets/images/dedicated_team_ops_1795637594633.jpg';
import industryEnterpriseHubImg from '../assets/images/industry_enterprise_hub_1795637595559.jpg';
import serviceOperationsDeskImg from '../assets/images/service_operations_desk_1795637596092.jpg';

export const SITE_MEDIA = {
  heroGlobalTeam: heroGlobalTeamImg,
  aboutCollaboration: aboutCollaborationImg,
  dedicatedTeamOps: dedicatedTeamOpsImg,
  industryEnterpriseHub: industryEnterpriseHubImg,
  serviceOperationsDesk: serviceOperationsDeskImg,
};

/**
 * Configurable third-party static form endpoint (e.g., Formspree, Web3Forms, Basin).
 * Leave as an empty string '' to route consultation inquiries seamlessly via WhatsApp
 * with a copyable structured summary fallback—ideal for static GitHub Pages hosting.
 */
export const CONSULTATION_FORM_ENDPOINT = '';

export const CONTACT_INFO = {
  companyName: 'VirtualWorkSystem',
  domain: 'https://virtualworksystem.com',
  usPhoneDisplay: '+1 (248) 686-2761',
  usPhoneHref: 'tel:+12486862761',
  pkPhoneDisplay: '+92 (321) 8890949',
  pkPhoneHref: 'tel:+923218890949',
  whatsappHref: 'https://wa.me/923218890949',
};

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'How It Works', href: '#process' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  iconName: 'Globe' | 'SlidersHorizontal' | 'Layers' | 'TrendingUp';
}

export const VALUE_PROPOSITIONS: ValueProp[] = [
  {
    id: 'talent',
    title: 'Skilled Global Talent',
    description:
      'Access vetted professionals across administrative, customer-facing, technical, and back-office functions.',
    iconName: 'Globe',
  },
  {
    id: 'flexible',
    title: 'Flexible Workforce Solutions',
    description:
      'Structure engagements around single dedicated specialists or multi-role operational units.',
    iconName: 'SlidersHorizontal',
  },
  {
    id: 'overhead',
    title: 'Reduced Operational Overhead',
    description:
      'Avoid local recruitment bottlenecks, facility expansion, and lengthy administrative onboarding cycles.',
    iconName: 'Layers',
  },
  {
    id: 'scalable',
    title: 'Scalable Business Operations',
    description:
      'Expand or adjust team capacity smoothly as seasonal volume, client demand, and business goals shift.',
    iconName: 'TrendingUp',
  },
];

export interface ServiceCategory {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  summary: string;
  operationalNote: string;
  iconName:
    | 'Briefcase'
    | 'Headphones'
    | 'Target'
    | 'Megaphone'
    | 'Calculator'
    | 'MonitorCog'
    | 'Users';
  roles: string[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'virtual-assistance',
    code: '01',
    title: 'Virtual Assistance & Administrative Support',
    shortTitle: 'Virtual Assistance',
    summary:
      'Structured executive coordination, calendar governance, document handling, and daily administrative execution.',
    operationalNote:
      'Proposed capability framework tailored to your internal SOPs and communication tools.',
    iconName: 'Briefcase',
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
  {
    id: 'customer-service',
    code: '02',
    title: 'Customer Service & Call Center',
    shortTitle: 'Customer Support',
    summary:
      'Responsive multi-channel client care spanning inbound inquiries, outbound follow-ups, live chat, and ticket resolution.',
    operationalNote:
      'Configured around your service-level expectations, CRM workflows, and brand tone.',
    iconName: 'Headphones',
    roles: [
      'Inbound Customer Support',
      'Outbound Calling',
      'Email Support',
      'Live Chat Support',
      'Technical Support',
      'Customer Relationship Management',
    ],
  },
  {
    id: 'sales-lead-gen',
    code: '03',
    title: 'Sales & Lead Generation',
    shortTitle: 'Sales & Leads',
    summary:
      'Consistent pipeline development covering prospect research, outbound outreach, appointment setting, and CRM hygiene.',
    operationalNote:
      'Aligned with your target buyer profiles, messaging guidelines, and sales leadership.',
    iconName: 'Target',
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
  {
    id: 'digital-marketing',
    code: '04',
    title: 'Digital Marketing',
    shortTitle: 'Digital Marketing',
    summary:
      'Dedicated execution support for search visibility, social publishing, content production, campaign assets, and coordination.',
    operationalNote:
      'Designed to integrate directly with your internal marketing leads or brand calendar.',
    iconName: 'Megaphone',
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
  {
    id: 'accounting-back-office',
    code: '05',
    title: 'Accounting & Back-Office Support',
    shortTitle: 'Accounting & Back-Office',
    summary:
      'Disciplined bookkeeping assistance, receivables and payables coordination, invoicing, and structured back-office processing.',
    operationalNote:
      'Operates within your accounting software permissions and financial review controls.',
    iconName: 'Calculator',
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
  {
    id: 'it-technical-support',
    code: '06',
    title: 'IT & Technical Support',
    shortTitle: 'IT & Technical',
    summary:
      'Dependable website maintenance, technical helpdesk coverage, software administration, and structured data management.',
    operationalNote:
      'Scoped to your infrastructure stack, ticketing system, and security permissions.',
    iconName: 'MonitorCog',
    roles: [
      'Website Maintenance',
      'WordPress Support',
      'Technical Helpdesk',
      'Software Support',
      'Data Management',
      'IT Administration',
    ],
  },
  {
    id: 'hr-recruitment',
    code: '07',
    title: 'Human Resources & Recruitment',
    shortTitle: 'HR & Recruitment',
    summary:
      'End-to-end hiring coordination including candidate sourcing, resume screening, interview scheduling, and records upkeep.',
    operationalNote:
      'Supports internal HR leaders with structured talent pipelines and documentation.',
    iconName: 'Users',
    roles: [
      'Recruitment Assistance',
      'Candidate Sourcing',
      'Resume Screening',
      'HR Administration',
      'Employee Records Management',
      'Recruitment Coordination',
    ],
  },
];

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  typicalFunctions: string;
  iconName:
    | 'HeartPulse'
    | 'Building2'
    | 'ShoppingBag'
    | 'Landmark'
    | 'BriefcaseBusiness'
    | 'HardHat'
    | 'Cpu'
    | 'Store'
    | 'Truck'
    | 'Wrench';
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    description:
      'Non-clinical patient scheduling, intake documentation, billing administration, and referral coordination.',
    typicalFunctions: 'Scheduling · Back-Office · Admin Support',
    iconName: 'HeartPulse',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description:
      'Listing coordination, tenant communication, CRM lead follow-up, and transaction file administration.',
    typicalFunctions: 'CRM Updates · Lead Follow-Up · Admin',
    iconName: 'Building2',
  },
  {
    id: 'e-commerce',
    name: 'E-commerce',
    description:
      'Catalog management, order tracking, multi-channel customer care, returns coordination, and digital marketing.',
    typicalFunctions: 'Order Support · Catalog · Live Chat',
    iconName: 'ShoppingBag',
  },
  {
    id: 'financial-services',
    name: 'Financial Services',
    description:
      'Structured data entry, client onboarding administration, invoice reconciliation, and document verification.',
    typicalFunctions: 'Bookkeeping Support · Data Processing',
    iconName: 'Landmark',
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    description:
      'Executive support, proposal formatting, research assistance, and client calendar management for advisory firms.',
    typicalFunctions: 'Executive Assistance · Research · Billing',
    iconName: 'BriefcaseBusiness',
  },
  {
    id: 'construction',
    name: 'Construction',
    description:
      'Subcontractor coordination, bid document organization, invoice tracking, and vendor schedule administration.',
    typicalFunctions: 'Project Admin · AP/AR · Documentation',
    iconName: 'HardHat',
  },
  {
    id: 'technology-saas',
    name: 'Technology & SaaS',
    description:
      'Tier-1 technical helpdesk, SDR outbound prospecting, customer onboarding, and QA documentation.',
    typicalFunctions: 'Helpdesk · SDR Outreach · Onboarding',
    iconName: 'Cpu',
  },
  {
    id: 'retail',
    name: 'Retail',
    description:
      'Inventory data updates, supplier communication, loyalty support, and promotional campaign administration.',
    typicalFunctions: 'Inventory Admin · Customer Care · Marketing',
    iconName: 'Store',
  },
  {
    id: 'logistics',
    name: 'Logistics',
    description:
      'Shipment tracking, dispatch coordination, carrier documentation, and freight billing reconciliation.',
    typicalFunctions: 'Dispatch Support · Tracking · Back-Office',
    iconName: 'Truck',
  },
  {
    id: 'home-services',
    name: 'Home Services',
    description:
      'Inbound call handling, technician dispatch scheduling, quote follow-ups, and customer review outreach.',
    typicalFunctions: 'Inbound Calls · Dispatch · Scheduling',
    iconName: 'Wrench',
  },
];

export interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    number: '01',
    title: 'Access to Global Talent',
    description:
      'Tap into skilled professionals across international time zones without limiting your search to a single local hiring market.',
    highlight: 'International Reach',
  },
  {
    number: '02',
    title: 'Cost-Effective Workforce',
    description:
      'Reduce fixed facility, equipment, and local recruitment expenses while maintaining dependable operational coverage.',
    highlight: 'Predictable Structure',
  },
  {
    number: '03',
    title: 'Flexible Staffing Models',
    description:
      'Start with a single dedicated specialist or configure a coordinated multi-role team aligned with your operational cadence.',
    highlight: 'Tailored Engagement',
  },
  {
    number: '04',
    title: 'Dedicated Team Support',
    description:
      'Your remote professionals work exclusively on your account—learning your tools, standards, and business priorities.',
    highlight: 'Embedded Alignment',
  },
  {
    number: '05',
    title: 'Streamlined Business Processes',
    description:
      'Clear role definitions, documented workflows, and structured communication keep daily execution consistent.',
    highlight: 'Process Clarity',
  },
  {
    number: '06',
    title: 'Scalable Operations',
    description:
      'Expand capacity into new departments or regions without restarting lengthy internal hiring infrastructure from scratch.',
    highlight: 'Built for Growth',
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We understand your business, operational challenges, staffing requirements, and desired outcomes.',
    deliverable: 'Operational Scope Review',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'We develop a workforce solution based on your requirements, including the appropriate roles, responsibilities, and processes.',
    deliverable: 'Role & Workflow Blueprint',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'We identify suitable talent and establish the necessary onboarding and operational workflows.',
    deliverable: 'Talent Selection & Onboarding',
  },
  {
    step: '04',
    title: 'Scale',
    description:
      'We support ongoing operations and help your business expand its workforce as requirements evolve.',
    deliverable: 'Continuous Alignment & Growth',
  },
];

export const DEDICATED_MODEL_HIGHLIGHTS = [
  {
    title: 'Employees aligned with client requirements',
    detail:
      'Every candidate is selected against your specific role brief, communication standards, and time-zone preferences.',
  },
  {
    title: 'Defined responsibilities',
    detail:
      'Clear daily duties, reporting lines, and measurable operational handoffs prevent ambiguity from day one.',
  },
  {
    title: 'Communication and collaboration',
    detail:
      'Direct integration into your Slack, Microsoft Teams, email, and project-management cadence.',
  },
  {
    title: 'Integration with existing workflows',
    detail:
      'Remote professionals operate inside your existing CRM, ERP, ticketing, and documentation environments.',
  },
  {
    title: 'Flexible team expansion',
    detail:
      'Add complementary roles across support, administration, finance, or sales as operational demand grows.',
  },
];

export interface ComparisonRow {
  dimension: string;
  traditional: string;
  managedRemote: string;
}

export const VALUE_COMPARISON_ROWS: ComparisonRow[] = [
  {
    dimension: 'Recruitment & Screening Overhead',
    traditional:
      'Internal leadership spends weeks sourcing, screening, and coordinating interviews.',
    managedRemote:
      'Structured pre-screening and role matching guided by your defined criteria.',
  },
  {
    dimension: 'Talent Pool Geography',
    traditional:
      'Constrained by local commuting radius and regional labor availability.',
    managedRemote:
      'Broad access to skilled professionals across international markets.',
  },
  {
    dimension: 'Workspace & Infrastructure Setup',
    traditional:
      'Requires office lease expansion, desks, hardware procurement, and local admin.',
    managedRemote:
      'Streamlined remote readiness without expanding physical office footprint.',
  },
  {
    dimension: 'Operational Flexibility',
    traditional:
      'Longer lead times when adjusting headcount for seasonal or project shifts.',
    managedRemote:
      'Adaptable workforce structure that scales alongside business demand.',
  },
  {
    dimension: 'Leadership Focus',
    traditional:
      'Core managers frequently pulled into routine administrative troubleshooting.',
    managedRemote:
      'Frees internal executives to focus on strategy, product, and client growth.',
  },
];

export interface SampleTestimonial {
  id: string;
  label: string;
  quote: string;
  attributionRole: string;
  attributionRegion: string;
  focusArea: string;
}

export const TESTIMONIALS: SampleTestimonial[] = [
  {
    id: 'sample-1',
    label: 'Sample Client Testimonial · Replace with Verified Review',
    quote:
      'Placeholder client quote: Integrating dedicated remote operations staff allowed our leadership team to regain hours each week while maintaining consistent client follow-up and back-office accuracy.',
    attributionRole: '[Verified Client Name & Title Placeholder]',
    attributionRegion: '[Company Name · United States]',
    focusArea: 'Back-Office & Administrative Operations',
  },
  {
    id: 'sample-2',
    label: 'Sample Client Testimonial · Replace with Verified Review',
    quote:
      'Placeholder client quote: Having a structured onboarding workflow meant our customer support specialists integrated cleanly into our ticketing tools and time-zone schedule without disrupting daily service.',
    attributionRole: '[Verified Client Name & Title Placeholder]',
    attributionRegion: '[Company Name · United Kingdom]',
    focusArea: 'Customer Support Operations',
  },
  {
    id: 'sample-3',
    label: 'Sample Client Testimonial · Replace with Verified Review',
    quote:
      'Placeholder client quote: As our inbound volume grew, expanding our remote team through a single structured partner made scaling far simpler than running repeated local hiring cycles.',
    attributionRole: '[Verified Client Name & Title Placeholder]',
    attributionRegion: '[Company Name · Australia]',
    focusArea: 'Dedicated Multi-Role Team',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is business process outsourcing?',
    answer:
      'Business process outsourcing (BPO) is the practice of partnering with an external workforce provider to handle dedicated operational functions—such as administration, customer care, lead generation, bookkeeping support, or technical helpdesk—so internal teams can focus on core strategy.',
  },
  {
    question: 'How does VirtualWorkSystem help businesses?',
    answer:
      'VirtualWorkSystem works with companies to design, source, and support dedicated remote professionals and managed outsourcing operations tailored to each client’s workflows, tools, and growth goals.',
  },
  {
    question: 'What types of remote professionals can we hire?',
    answer:
      'Proposed service tracks cover Virtual Assistance & Administration, Customer Service & Call Center, Sales & Lead Generation, Digital Marketing, Accounting & Back-Office Support, IT & Technical Support, and HR & Recruitment coordination. Exact role availability is confirmed during consultation.',
  },
  {
    question: 'Can we build a dedicated remote team?',
    answer:
      'Yes. Rather than sharing pooled agents across unrelated accounts, our dedicated workforce model aligns remote professionals directly with your company’s processes, reporting lines, and business priorities.',
  },
  {
    question: 'How does the onboarding process work?',
    answer:
      'We follow a four-stage framework: Discover your requirements, Design the role structure and workflows, Build by selecting suitable candidates and setting up onboarding, and Scale as your operational needs expand.',
  },
  {
    question: 'Can outsourced employees work with our existing systems?',
    answer:
      'Yes. Dedicated team members operate within your preferred communication channels, CRM platforms, accounting suites, helpdesk tools, and project management software according to your access policies.',
  },
  {
    question: 'Which industries can benefit from outsourcing?',
    answer:
      'Organizations across Healthcare, Real Estate, E-commerce, Financial Services, Professional Services, Construction, Technology & SaaS, Retail, Logistics, and Home Services leverage dedicated remote operations to increase capacity.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Use the consultation form on this page, call our United States or Pakistan office numbers, or message our team directly on WhatsApp to schedule an initial operational discovery call.',
  },
  {
    question: 'Can we scale our team as our business grows?',
    answer:
      'Yes. You can begin with a single specialist to validate workflows and add additional roles across departments as operational demand increases.',
  },
  {
    question: 'How do we arrange a consultation?',
    answer:
      'Click "Book a Free Consultation" anywhere on the website, complete the inquiry form with your target roles and team size, or reach us directly via phone or WhatsApp.',
  },
];

export interface CareerTrack {
  title: string;
  department: string;
  workModel: string;
  summary: string;
}

export const CAREER_TRACKS: CareerTrack[] = [
  {
    title: 'Executive & Virtual Administration',
    department: 'Operations Support',
    workModel: 'Remote · International Client Shifts',
    summary:
      'Calendar governance, executive coordination, documentation, and operational reporting for international teams.',
  },
  {
    title: 'Customer Support & Technical Helpdesk',
    department: 'Client Experience',
    workModel: 'Remote · Voice, Email & Live Chat',
    summary:
      'Clear English communication, ticket resolution, CRM updates, and responsive multi-channel client care.',
  },
  {
    title: 'Sales Development & Back-Office Finance',
    department: 'Growth & Accounting',
    workModel: 'Remote · Dedicated Client Placement',
    summary:
      'B2B prospect research, outbound appointment setting, bookkeeping assistance, and invoice administration.',
  },
];
