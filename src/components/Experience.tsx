import type { CSSProperties } from 'react';
import { experience, extracurriculars, type ExperienceEntry } from '../data/content';
import Section from './Section';
import SectionHead from './SectionHead';

function Group({
  label,
  keyColor,
  entries,
}: {
  label: string;
  keyColor: string;
  entries: ExperienceEntry[];
}) {
  return (
    <div className="group" style={{ '--key': keyColor } as CSSProperties}>
      <h3>{label}</h3>
      <div className="group-rule" />
      {entries.map((entry) => (
        <div className="entry" key={`${entry.role}-${entry.org}`}>
          <span className="entry-role">{entry.role}</span>
          <span className="entry-dates">{entry.dates}</span>
          <span className="entry-org">{entry.org}</span>
        </div>
      ))}
    </div>
  );
}

function Experience() {
  return (
    <Section id="experience" band="blue">
      <SectionHead>Experience</SectionHead>
      <div className="groups">
        <Group label="Work" keyColor="var(--yellow)" entries={experience} />
        <Group label="Extracurriculars" keyColor="var(--green)" entries={extracurriculars} />
      </div>
    </Section>
  );
}

export default Experience;
