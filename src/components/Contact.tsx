import { contact } from '../data/content';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons';

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
      <p
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          fontSize: 26,
          fontWeight: 600,
          margin: '0 0 20px',
        }}
      >
        <a
          href={`mailto:${contact.email}`}
          style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--accent)' }}
        >
          <MailIcon size={24} />
          {contact.email}
        </a>
      </p>
      <div style={{ display: 'flex', gap: 20 }}>
        <a href={contact.github.url} aria-label="GitHub profile" style={{ color: 'var(--accent)' }}>
          <GithubIcon size={24} />
        </a>
        <a
          href={contact.linkedin.url}
          aria-label="LinkedIn profile"
          style={{ color: 'var(--accent)' }}
        >
          <LinkedinIcon size={24} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
