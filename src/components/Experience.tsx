import type { ReactNode } from 'react';
import { experience, extracurriculars, type ExperienceEntry } from '../data/content';
import { CalendarIcon, MapPinIcon } from './icons';
import Eyebrow from './Eyebrow';
import Section from './Section';

function MetaRow({ icon, marginBottom = 0, children }: { icon: ReactNode; marginBottom?: number; children: ReactNode }) {
  return (
    <p
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--text-faint)',
        margin: `0 0 ${marginBottom}px`,
      }}
    >
      {icon}
      {children}
    </p>
  );
}

function ColumnLabel({ children }: { children: ReactNode }) {
  return (
    <h3
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        color: 'var(--text-faint)',
        margin: '0 0 24px',
      }}
    >
      {children}
    </h3>
  );
}

function EntryList({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
      {entries.map((entry) => (
        <div key={`${entry.role}-${entry.org}`}>
          <p style={{ fontWeight: 600, fontSize: 15, margin: '0 0 4px' }}>{entry.role}</p>
          <MetaRow icon={<MapPinIcon />} marginBottom={2}>
            {entry.org}
          </MetaRow>
          <MetaRow icon={<CalendarIcon />}>{entry.dates}</MetaRow>
        </div>
      ))}
    </div>
  );
}

function Experience() {
  return (
    <Section id="experience" divider reveal style={{ padding: '48px 0' }}>
      <Eyebrow index="02" marginBottom={28}>
        Experience
      </Eyebrow>
      <div
        className="cols-row"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}
      >
        <div>
          <ColumnLabel>Work</ColumnLabel>
          <EntryList entries={experience} />
        </div>
        <div>
          <ColumnLabel>Extracurriculars</ColumnLabel>
          <EntryList entries={extracurriculars} />
        </div>
      </div>
    </Section>
  );
}

export default Experience;
