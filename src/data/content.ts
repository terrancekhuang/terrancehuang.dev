export const hero = {
  name: "Terrance Huang",
  bioParagraphs: [
    "I'm a full-stack software engineer at Citco, and I’ve always been the kind of person who loves tinkering and figuring out how things work. The best part of the job is when that curiosity turns into something that actually helps someone else.",
    "Outside of work you’ll usually find me at the gym, out on a weekend hike with a camera, or just hanging out with friends.",
  ],
};

export const selectedWork = {
  title: "Bible Books Tracker",
  diagramLabel: "bible-books-tracker — architecture diagram",
  subtitle:
    "A simple way to track your reading progress through all 66 books of the Bible.",
  description:
    "A full-stack web app for logging chapters read and visualizing progress across the Old and New Testaments. Built with React and TypeScript on the frontend and a Node.js/Express API backed by PostgreSQL for persistence, deployed as a static build behind nginx on my own VPS.",
  impact:
    "Tracks reading progress across all 66 books, with per-book and per-testament completion views.",
  liveDemoUrl: "https://bible.terrancehuang.dev",
  githubUrl: "https://github.com/terrancekhuang/bible-books-tracker",
};

export type ExperienceEntry = {
  role: string;
  org: string;
  dates: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: "Full Stack Engineer",
    org: "Citco Fund Services (USA) Inc.",
    dates: "August 2026 – Present",
  },
  {
    role: "Software Engineering, Co-op",
    org: "ElevatEd School",
    dates: "January 2025 – August 2025",
  },
  {
    role: "Software Engineer, Co-op",
    org: "Citco Fund Services (USA) Inc.",
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
  github: { label: "GitHub", url: "https://github.com/terrancekhuang" },
  linkedin: { label: "LinkedIn", url: "https://linkedin.com/in/terrancehuang" },
};
