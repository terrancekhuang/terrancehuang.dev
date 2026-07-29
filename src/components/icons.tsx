type IconProps = {
  size?: number;
};

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function MapPinIcon({ size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function CalendarIcon({ size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}

export function MailIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </svg>
  );
}

export function GithubIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12c0 4.66 3.02 8.6 7.22 10 .53.1.72-.23.72-.51 0-.25-.01-1.08-.01-1.96-2.94.64-3.56-1.25-3.56-1.25-.48-1.22-1.17-1.55-1.17-1.55-.96-.65.07-.64.07-.64 1.06.07 1.62 1.09 1.62 1.09.94 1.61 2.47 1.15 3.07.88.1-.68.37-1.15.67-1.41-2.35-.27-4.82-1.17-4.82-5.22 0-1.15.41-2.09 1.09-2.83-.11-.27-.47-1.36.1-2.83 0 0 .89-.28 2.91 1.08a10.1 10.1 0 0 1 5.3 0c2.02-1.36 2.91-1.08 2.91-1.08.57 1.47.21 2.56.1 2.83.68.74 1.09 1.68 1.09 2.83 0 4.06-2.47 4.95-4.83 5.21.38.33.72.97.72 1.96 0 1.41-.01 2.55-.01 2.9 0 .28.19.62.73.51A10.51 10.51 0 0 0 22.5 12c0-5.8-4.7-10.5-10.5-10.5Z" />
    </svg>
  );
}
