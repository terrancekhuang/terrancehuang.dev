import { contact } from '../data/content';

function Contact() {
  return (
    <section id="contact" className="section-pad" style={{ padding: '56px 0 100px' }}>
      <h2
        style={{
          fontSize: 14,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--text-faint)',
          margin: '0 0 20px',
        }}
      >
        Contact
      </h2>
      <p style={{ fontSize: 26, fontWeight: 600, margin: '0 0 20px' }}>
        <a href={`mailto:${contact.email}`} style={{ color: 'var(--accent)' }}>
          {contact.email}
        </a>
      </p>
      <div style={{ display: 'flex', gap: 20, fontSize: 15, fontWeight: 500 }}>
        <a href={contact.github.url} aria-label="GitHub profile" style={{ color: 'var(--accent)' }}>
          {contact.github.label}
        </a>
        <a
          href={contact.linkedin.url}
          aria-label="LinkedIn profile"
          style={{ color: 'var(--accent)' }}
        >
          {contact.linkedin.label}
        </a>
      </div>
    </section>
  );
}

export default Contact;
