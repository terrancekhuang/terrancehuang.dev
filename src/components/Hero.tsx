import { hero } from '../data/content';

function Hero() {
  return (
    <section
      id="top"
      className="section-pad"
      style={{
        minHeight: '72vh',
        display: 'flex',
        alignItems: 'center',
        padding: '40px 0',
      }}
    >
      <div style={{ width: '100%' }}>
        <h1
          className="hero-title"
          style={{
            fontSize: 88,
            lineHeight: 1,
            fontWeight: 600,
            margin: '0 0 24px',
            letterSpacing: '-0.03em',
          }}
        >
          {hero.name}
        </h1>
        <div
          className="hero-row"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 340px',
            gap: 40,
            alignItems: 'start',
          }}
        >
          <div>
            {hero.bioParagraphs.map((paragraph, i) => (
              <p
                key={paragraph}
                style={{
                  fontSize: 19,
                  lineHeight: 1.6,
                  color: 'var(--text-muted)',
                  margin: i === hero.bioParagraphs.length - 1 ? '0 0 32px' : '0 0 16px',
                  maxWidth: 580,
                }}
              >
                {paragraph}
              </p>
            ))}
            <div className="hero-actions" style={{ display: 'flex', gap: 12 }}>
              <a
                href="#work"
                style={{
                  background: 'var(--text)',
                  color: 'var(--bg)',
                  padding: '12px 22px',
                  borderRadius: 4,
                  fontWeight: 500,
                  fontSize: 15,
                }}
              >
                View work
              </a>
              <a
                href="#contact"
                style={{
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  padding: '12px 22px',
                  borderRadius: 4,
                  fontWeight: 500,
                  fontSize: 15,
                }}
              >
                Contact
              </a>
            </div>
          </div>
          <img
            src="/images/terrance-portrait.jpg"
            alt={hero.name}
            className="hero-portrait"
            style={{
              width: '100%',
              aspectRatio: '720 / 600',
              objectFit: 'cover',
              borderRadius: 8,
              border: '1px solid var(--border)',
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
