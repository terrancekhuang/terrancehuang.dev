import { contact } from '../data/content';
import { GithubIcon, MailIcon } from './icons';
import Section from './Section';
import SectionHead from './SectionHead';

function Contact() {
  return (
    <Section id="contact" band="yellow" className="contact">
      <SectionHead>Contact</SectionHead>
      <a className="mailto" href={`mailto:${contact.email}`}>
        <MailIcon />
        {contact.email}
      </a>
      <div className="socials">
        <a href={contact.github} aria-label="GitHub profile">
          <GithubIcon />
        </a>
        <a className="socials-chip" href={contact.linkedin} aria-label="LinkedIn profile">
          <img src={contact.linkedinBadgeSrc} alt="" width={24} height={20} />
        </a>
      </div>
    </Section>
  );
}

export default Contact;
