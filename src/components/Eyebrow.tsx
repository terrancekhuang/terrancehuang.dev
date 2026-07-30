import type { ReactNode } from 'react';

const baseStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: 13,
  fontWeight: 500,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.06em',
  color: 'var(--text-faint)',
};

const indexStyle = {
  fontWeight: 400,
  color: 'var(--text-faint)',
};

function Eyebrow({
  index,
  marginBottom = 24,
  children,
}: {
  index?: string;
  marginBottom?: number;
  children: ReactNode;
}) {
  return (
    <h2 style={{ ...baseStyle, margin: `0 0 ${marginBottom}px` }}>
      {index && (
        <span aria-hidden="true" style={indexStyle}>
          {index} —{' '}
        </span>
      )}
      {children}
    </h2>
  );
}

export default Eyebrow;
