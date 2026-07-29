import { contact } from '../data/content';
import { GithubIcon, MailIcon } from './icons';
import Eyebrow from './Eyebrow';
import Section from './Section';

function Contact() {
  return (
    <Section id="contact" style={{ padding: '56px 0 100px' }}>
      <Eyebrow marginBottom={20}>Contact</Eyebrow>
      <p style={{ fontSize: 26, fontWeight: 600, margin: '0 0 20px' }}>
        <a
          href={`mailto:${contact.email}`}
          className="link-accent"
          style={{ display: 'flex', alignItems: 'center', gap: 10 }}
        >
          <MailIcon size={24} />
          {contact.email}
        </a>
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <a href={contact.github} aria-label="GitHub profile" className="link-accent">
          <GithubIcon size={24} />
        </a>
        <a href={contact.linkedin} aria-label="LinkedIn profile">
          <img src={contact.linkedinBadgeSrc} alt="LinkedIn" height={24} />
        </a>
      </div>
    </Section>
  );
}

export default Contact;
