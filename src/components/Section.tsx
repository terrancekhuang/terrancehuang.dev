import type { ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type Band = 'blue' | 'sheet' | 'yellow';

function Section({
  id,
  band,
  className,
  children,
}: {
  id: string;
  band: Band;
  className?: string;
  children: ReactNode;
}) {
  const { ref, visible } = useScrollReveal<HTMLElement>(true);

  const classes = [`band-${band}`, 'band-pad', 'reveal', visible && 'is-visible', className]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} ref={ref} className={classes}>
      <div className="wrap">{children}</div>
    </section>
  );
}

export default Section;
