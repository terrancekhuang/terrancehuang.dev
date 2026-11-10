import { selectedWork } from '../data/content';
import { CodeIcon, ExternalLinkIcon } from './icons';
import Section from './Section';
import SectionHead from './SectionHead';

function SelectedWork() {
  return (
    <Section id="work" band="sheet">
      <SectionHead>Selected work</SectionHead>
      {selectedWork.map((work) => (
        <article className="work" key={work.title}>
          {work.images && (
            <div className="work-shots">
              {work.images.map((image) => (
                <figure className="shot" key={image.src}>
                  <img src={image.src} alt={image.alt} style={{ aspectRatio: image.aspectRatio }} />
                </figure>
              ))}
            </div>
          )}
          <div className="work-body">
            <h3>{work.title}</h3>
            <p className="work-sub">{work.subtitle}</p>
            <p className="work-desc">{work.description}</p>
            <p className="work-impact">
              <span>{work.impact}</span>
            </p>
            {(work.liveDemoUrl || work.githubUrl) && (
              <div className="work-links">
                {work.liveDemoUrl && (
                  <a href={work.liveDemoUrl}>
                    <ExternalLinkIcon />
                    Live demo
                  </a>
                )}
                {work.githubUrl && (
                  <a href={work.githubUrl}>
                    <CodeIcon />
                    GitHub
                  </a>
                )}
              </div>
            )}
          </div>
        </article>
      ))}
    </Section>
  );
}

export default SelectedWork;
