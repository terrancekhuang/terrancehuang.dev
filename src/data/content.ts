export const hero = {
  name: 'Terrance Huang',
  bio: "Junior Developer joining Citco Fund Services this August, fresh off graduating from the Rochester Institute of Technology with a B.S. in Computer Science. I like building complete, working software end to end — from backend infrastructure to small tools people actually use, like the Bible reading tracker below.",
};

export const selectedWork = {
  title: 'Bible Books Tracker',
  diagramLabel: 'bible-books-tracker — architecture diagram',
  subtitle: 'A simple way to track your reading progress through all 66 books of the Bible.',
  description:
    "A full-stack web app for logging chapters read and visualizing progress across the Old and New Testaments. Built with React and TypeScript on the frontend and a Node.js/Express API backed by PostgreSQL for persistence, deployed as a static build behind nginx on my own VPS.",
  impact: 'Tracks reading progress across all 66 books, with per-book and per-testament completion views.',
  liveDemoUrl: 'https://bible.terrancehuang.dev',
  githubUrl: 'https://github.com/terrancekhuang/bible-books-tracker',
};

export type ExperienceEntry = {
  role: string;
  org: string;
  dates: string;
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: 'Junior Developer',
    org: 'Citco Fund Services (USA) Inc.',
    dates: 'August 2026 – Present',
    description:
      'Joining full-time on the team I interned with, continuing work on backend infrastructure and internal developer tooling.',
  },
  {
    role: 'Software Engineering Intern',
    org: 'ElevatEd School',
    dates: 'January 2025 – August 2025',
    description:
      'Built full-stack Retool applications that automated essay competition workflows for 100+ students, cutting assignment turnaround by 99%.',
  },
  {
    role: 'Software Engineer Intern',
    org: 'Citco Fund Services (USA) Inc.',
    dates: 'June 2024 – August 2024',
    description:
      'Automated CI/CD pipelines with Jenkins and Terraform, and built an AI-powered README summarization tool using Amazon Bedrock.',
  },
];

export const extracurriculars: ExperienceEntry[] = [
  {
    role: 'Cadet',
    org: 'Army ROTC, Rochester Institute of Technology',
    dates: 'August 2024 – May 2026',
    description:
      "Oversaw daily training records for 40+ cadets and streamlined event sign-up and leave-pass forms to 95%+ same-day submission compliance.",
  },
];

export const contact = {
  email: 'terrancehuang@proton.me',
  github: { label: 'GitHub', url: 'https://github.com/terrancekhuang' },
  linkedin: { label: 'LinkedIn', url: 'https://linkedin.com/in/terrancehuang' },
};
