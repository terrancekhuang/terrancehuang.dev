import type { ReactNode } from 'react';

const baseStyle = {
  fontSize: 14,
  fontWeight: 600,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  color: 'var(--text-faint)',
};

function Eyebrow({ marginBottom = 24, children }: { marginBottom?: number; children: ReactNode }) {
  return <h2 style={{ ...baseStyle, margin: `0 0 ${marginBottom}px` }}>{children}</h2>;
}

export default Eyebrow;
