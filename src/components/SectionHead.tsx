import type { ReactNode } from 'react';

/** Section title over a rule that wipes in with the section. */
function SectionHead({ children }: { children: ReactNode }) {
  return (
    <div className="section-head">
      <h2>{children}</h2>
      <div className="rule is-drawn" />
    </div>
  );
}

export default SectionHead;
