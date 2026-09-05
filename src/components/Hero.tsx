import { hero } from '../data/content';

function Hero() {
  return (
    <header className="hero band-blue" id="top">
      <div className="wrap">
        <div className="topbar">
          <span>terrancehuang.dev</span>
          <span>2026</span>
        </div>
        <div className="rule topbar-rule is-drawn" />
        <div className="hero-main">
          <div>
            <h1 className="hero-name">
              Terrance
              <br />
              Huang
            </h1>
            <p className="hero-role">
              {hero.role}
              <br />
              {hero.org}
            </p>
            <div className="hero-bio">
              {hero.bioParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="actions">
              <a className="btn btn-fill" href="#work">
                View work
              </a>
              <a className="btn btn-ghost" href="#contact">
                Contact
              </a>
            </div>
          </div>
          <figure className="plate">
            <img
              src={hero.portraitSrc}
              alt={hero.name}
              width={720}
              height={600}
              style={{ aspectRatio: hero.portraitAspectRatio, objectFit: 'cover' }}
            />
            <figcaption>{hero.name}</figcaption>
          </figure>
        </div>
      </div>
    </header>
  );
}

export default Hero;
