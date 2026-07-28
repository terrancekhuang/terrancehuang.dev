import { selectedWork } from '../data/content';

function SelectedWork() {
  return (
    <section id="work" className="section-pad" style={{ padding: '48px 0 64px' }}>
      <h2
        style={{
          fontSize: 14,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--text-faint)',
          margin: '0 0 28px',
        }}
      >
        Selected work
      </h2>
      <article>
        <img
          src="/images/bible-tracker-demo.jpg"
          alt={selectedWork.diagramLabel}
          style={{
            width: '100%',
            aspectRatio: '1280 / 800',
            objectFit: 'cover',
            borderRadius: 6,
            border: '1px solid var(--border)',
            marginBottom: 24,
          }}
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
          <a href={selectedWork.liveDemoUrl} style={{ color: 'var(--accent)' }}>
            Live demo
          </a>
          <a href={selectedWork.githubUrl} style={{ color: 'var(--accent)' }}>
            GitHub
          </a>
        </div>
      </article>
    </section>
  );
}

export default SelectedWork;
