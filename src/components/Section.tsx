import type { CSSProperties, ReactNode } from 'react';

function Section({ id, style, children }: { id: string; style?: CSSProperties; children: ReactNode }) {
  return (
    <section id={id} className="section-pad" style={style}>
      {children}
    </section>
  );
}

export default Section;
