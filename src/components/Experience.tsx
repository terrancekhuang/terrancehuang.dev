import { experience, extracurriculars, type ExperienceEntry } from '../data/content';

const eyebrowStyle = {
  fontSize: 14,
  fontWeight: 600,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  color: 'var(--text-faint)',
  margin: '0 0 24px',
};

function EntryList({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
      {entries.map((entry) => (
        <div key={`${entry.role}-${entry.org}`}>
          <p style={{ fontWeight: 600, fontSize: 15, margin: 0 }}>{entry.role}</p>
          <p style={{ fontSize: 14, color: 'var(--text-faint)', margin: '2px 0 0' }}>
            {entry.org} · {entry.dates}
          </p>
        </div>
      ))}
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-pad" style={{ padding: '48px 0' }}>
      <div
        className="cols-row"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}
      >
        <div>
          <h2 style={eyebrowStyle}>Experience</h2>
          <EntryList entries={experience} />
        </div>
        <div>
          <h2 style={eyebrowStyle}>Extracurriculars</h2>
          <EntryList entries={extracurriculars} />
        </div>
      </div>
    </section>
  );
}

export default Experience;
