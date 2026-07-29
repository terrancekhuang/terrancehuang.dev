import { hero } from '../data/content';
import Section from './Section';
import FramedImage from './FramedImage';

const ctaButtonStyle = {
  padding: '12px 22px',
  borderRadius: 4,
  fontWeight: 500,
  fontSize: 15,
};

function Hero() {
  return (
    <Section
      id="top"
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
                style={{ ...ctaButtonStyle, background: 'var(--text)', color: 'var(--bg)' }}
              >
                View work
              </a>
              <a
                href="#contact"
                style={{
                  ...ctaButtonStyle,
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                }}
              >
                Contact
              </a>
            </div>
          </div>
          <FramedImage
            src={hero.portraitSrc}
            alt={hero.name}
            className="hero-portrait"
            aspectRatio={hero.portraitAspectRatio}
            borderRadius={8}
          />
        </div>
      </div>
    </Section>
  );
}

export default Hero;
