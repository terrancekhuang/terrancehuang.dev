import { contact } from '../data/content';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons';
import Eyebrow from './Eyebrow';
import Section from './Section';

const socialLinks = [
  { href: contact.github, label: 'GitHub profile', Icon: GithubIcon },
  { href: contact.linkedin, label: 'LinkedIn profile', Icon: LinkedinIcon },
];

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
      <div style={{ display: 'flex', gap: 20 }}>
        {socialLinks.map(({ href, label, Icon }) => (
          <a key={label} href={href} aria-label={label} className="link-accent">
            <Icon size={24} />
          </a>
        ))}
      </div>
    </Section>
  );
}

export default Contact;
