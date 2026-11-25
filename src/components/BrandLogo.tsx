interface BrandLogoProps {
  variant?: 'light' | 'dark';
}

export function BrandLogo({ variant = 'dark' }: BrandLogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-[#102A43]';
  const markPrimary = variant === 'light' ? '#FFFFFF' : '#102A43';
  const markAccent = '#2589E8';

  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0">
      <svg
        width="32"
        height="32"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="1.5"
          y="1.5"
          width="33"
          height="33"
          rx="8"
          stroke={variant === 'light' ? 'rgba(255,255,255,0.22)' : 'rgba(16,42,67,0.14)'}
          strokeWidth="1.2"
          fill={variant === 'light' ? 'rgba(255,255,255,0.06)' : '#F5F8FC'}
        />
        <path
          d="M9.5 11.5L15.2 24.5L18.5 16.8L21.8 24.5L26.8 11.5"
          stroke={markPrimary}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9.5" cy="11.5" r="2.1" fill={markAccent} />
        <circle cx="18.5" cy="16.8" r="2.0" fill={markAccent} />
        <circle cx="26.8" cy="11.5" r="2.1" fill={markAccent} />
      </svg>
      <span className={`font-display text-[17px] font-bold tracking-tight ${textColor}`}>
        Virtual<span className="text-[#2589E8]">Work</span>System
      </span>
    </span>
  );
}
