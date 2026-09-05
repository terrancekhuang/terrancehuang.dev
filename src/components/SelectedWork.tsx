import { selectedWork } from '../data/content';
import { CodeIcon, ExternalLinkIcon } from './icons';
import Section from './Section';
import SectionHead from './SectionHead';

function SelectedWork() {
  return (
    <Section id="work" band="sheet">
      <SectionHead>Selected work</SectionHead>
      <article className="work">
        <figure className="shot">
          <img
            src={selectedWork.imageSrc}
            alt={selectedWork.diagramLabel}
            width={1280}
            height={800}
            style={{ aspectRatio: selectedWork.imageAspectRatio }}
          />
        </figure>
        <div>
          <h3>{selectedWork.title}</h3>
          <p className="work-sub">{selectedWork.subtitle}</p>
          <p className="work-desc">{selectedWork.description}</p>
          <p className="work-impact">
            <span>{selectedWork.impact}</span>
          </p>
          <div className="work-links">
            <a href={selectedWork.liveDemoUrl}>
              <ExternalLinkIcon />
              Live demo
            </a>
            <a href={selectedWork.githubUrl}>
              <CodeIcon />
              GitHub
            </a>
          </div>
        </div>
      </article>
    </Section>
  );
}

export default SelectedWork;
