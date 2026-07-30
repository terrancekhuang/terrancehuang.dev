import type { CSSProperties, ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Section({
  id,
  style,
  divider = false,
  reveal = false,
  children,
}: {
  id: string;
  style?: CSSProperties;
  divider?: boolean;
  reveal?: boolean;
  children: ReactNode;
}) {
  const { ref, visible } = useScrollReveal<HTMLElement>(reveal);

  const classes = [
    'section-pad',
    divider && 'section-divider',
    reveal && 'scroll-reveal',
    reveal && visible && 'is-visible',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} ref={ref} className={classes} style={style}>
      {children}
    </section>
  );
}

export default Section;
