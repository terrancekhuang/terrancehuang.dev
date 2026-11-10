export const hero = {
  name: "Terrance Huang",
  role: "Full-stack software engineer",
  org: "Citco Technology Management, Inc.",
  portraitSrc: "/images/terrance-portrait.jpg",
  portraitAspectRatio: "720 / 600",
  bioParagraphs: [
    "I'm a full-stack software engineer at Citco, and I’ve always been the kind of person who loves tinkering and figuring out how things work. The best part of the job is when that curiosity turns into something that actually helps someone else.",
    "Outside of work you’ll usually find me at the gym, out on a weekend hike with a camera, or just hanging out with friends.",
  ],
};

export type WorkEntry = {
  title: string;
  images?: { src: string; alt: string; aspectRatio: string }[];
  subtitle: string;
  description: string;
  impact: string;
  liveDemoUrl?: string;
  githubUrl?: string;
};

export const selectedWork: WorkEntry[] = [
  {
    title: "Bible Books Tracker",
    images: [
      {
        src: "/images/bible-tracker-dashboard.jpg",
        alt: "Bible Books Tracker — dashboard",
        aspectRatio: "1200 / 815",
      },
      {
        src: "/images/bible-tracker-tracker.jpg",
        alt: "Bible Books Tracker — tracker",
        aspectRatio: "1200 / 1095",
      },
    ],
    subtitle:
      "A simple way to track your reading progress through all 66 books of the Bible.",
    description:
      "A full-stack web app for logging chapters read and visualizing progress across the Old and New Testaments. Built with React and TypeScript on the frontend and a Node.js/Express API backed by PostgreSQL for persistence, deployed as a static build behind nginx on my own VPS.",
    impact:
      "Tracks reading progress across all 66 books, with per-book and per-testament completion views.",
    liveDemoUrl: "https://bible.terrancehuang.dev",
    githubUrl: "https://github.com/terrancekhuang/bible-books-tracker",
  },
  {
    title: "Algorithmic Trading Strategy",
    subtitle:
      "A daily-rebalancing S&P 500 equity strategy with a protective SPY put hedge.",
    description:
      "A Python bot that scores every S&P 500 stock on fundamental quality and 12-month momentum, holds the top 10, and rolls an at-the-money SPY put to cushion market drawdowns. Factor weights come from a Random Forest, gradient boosting, and decision tree ensemble trained on quarterly fundamentals, and shift between value and growth regimes based on the 10-year Treasury yield. Orders execute through the Alpaca API.",
    impact:
      "10-year backtest: ~21% CAGR vs. ~15% for SPY, with a ~-25% max drawdown vs. ~-34%.",
  },
  {
    title: "ESV Verse CLI",
    subtitle: "Fetch ESV Bible passages without leaving the terminal.",
    description:
      "A Bash script built on curl and jq that pulls passages from the ESV API. References can be passed as arguments or piped in line by line, with configurable verse numbers, headings, footnotes, and line wrapping.",
    impact: "Looks up multiple passages in one call, from arguments or stdin.",
    githubUrl: "https://github.com/terrancekhuang/esv-cli",
  },
  {
    title: "wheregoes",
    subtitle:
      "Trace a URL through every HTTP redirect to its final destination.",
    description:
      "A Go CLI that turns off the HTTP client's automatic redirect following and walks each 3xx response itself, printing every hop's status and destination. Colorized output that respects NO_COLOR, a verbose mode with per-hop timing, headers, and bodies, clipboard copy of the final URL, and distinct exit codes for scripting.",
    impact:
      "Shows the full redirect chain, hop count, and total time for any URL.",
    githubUrl: "https://github.com/terrancekhuang/wheregoes-cli",
  },
];

export type ExperienceEntry = {
  role: string;
  org: string;
  dates: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: "Full Stack Engineer",
    org: "Citco Technology Management, Inc.",
    dates: "August 2026 – Present",
  },
  {
    role: "Software Engineer, Co-op",
    org: "ElevatEd School",
    dates: "January 2025 – August 2025",
  },
  {
    role: "Software Engineer, Co-op",
    org: "Citco Technology Management, Inc.",
    dates: "June 2024 – August 2024",
  },
];

export const extracurriculars: ExperienceEntry[] = [
  {
    role: "Cadet",
    org: "Army ROTC, Rochester Institute of Technology",
    dates: "August 2024 – May 2026",
  },
  {
    role: "President",
    org: "Brothers and Sisters in Christ (BASIC) at RIT",
    dates: "January 2026 – May 2026",
  },
];

export const contact = {
  email: "terrancehuang@proton.me",
  github: "https://github.com/terrancekhuang",
  linkedin: "https://linkedin.com/in/terrancehuang",
  linkedinBadgeSrc: "/images/linkedin-badge.png",
  pgpKeySrc: "/pgp.asc",
  pgpFingerprint: "2F4E A234 06E7 5E5B D51D  0D36 6FA9 5BEA C10C 242B",
};
