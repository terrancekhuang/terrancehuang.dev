import { selectedWork } from '../data/content';
import Eyebrow from './Eyebrow';
import Section from './Section';
import FramedImage from './FramedImage';

function SelectedWork() {
  return (
    <Section id="work" style={{ padding: '48px 0 64px' }}>
      <Eyebrow marginBottom={28}>Selected work</Eyebrow>
      <article>
        <FramedImage
          src={selectedWork.imageSrc}
          alt={selectedWork.diagramLabel}
          aspectRatio={selectedWork.imageAspectRatio}
          borderRadius={6}
          style={{ marginBottom: 24 }}
        />
        <h3 style={{ fontSize: 26, fontWeight: 600, margin: '0 0 8px' }}>{selectedWork.title}</h3>
        <p style={{ fontSize: 15, color: 'var(--text-subtle)', margin: '0 0 16px' }}>
          {selectedWork.subtitle}
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.65, margin: '0 0 16px', maxWidth: 620 }}>
          {selectedWork.description}
        </p>
        <p style={{ fontSize: 15, fontWeight: 500, margin: '0 0 20px' }}>{selectedWork.impact}</p>
        <div style={{ display: 'flex', gap: 16, fontSize: 14, fontWeight: 500 }}>
          <a href={selectedWork.liveDemoUrl} className="link-accent">
            Live demo
          </a>
          <a href={selectedWork.githubUrl} className="link-accent">
            GitHub
          </a>
        </div>
      </article>
    </Section>
  );
}

export default SelectedWork;
