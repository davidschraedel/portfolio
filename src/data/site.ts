export interface SkillMapEntry {
  hiringFor: string;
  startWith: string;
}

export interface SiteConfig {
  name: string;
  email: string;
  linkedInUrl: string;
  githubUrl: string;
  location: string;
  timezone: string;
  rolesSought: string;
  contactPreference: string;
  responseTime: string;
  resumePath: string;
  hero: {
    roleHeadline: string;
    outcomeStatement: string;
    positioningLine: string;
  };
  skillMap: SkillMapEntry[];
}

export const site: SiteConfig = {
  name: "David Schraedel",
  email: "davidschraedel@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/david-schraedel/",
  githubUrl: "https://github.com/davidschraedel",
  location: "Utah, US",
  timezone: "Mountain Time (MST/MDT)",
  rolesSought:
    "Full-stack or backend-leaning roles at product-focused companies—especially teams building data tooling, internal platforms, or AI-assisted workflows.",
  contactPreference: "Email first",
  responseTime: "Within 2 business days",
  resumePath: `${import.meta.env.BASE_URL}resume.pdf`,
  hero: {
    roleHeadline:
      "Full-stack engineer · TypeScript, React, Python · shipping data pipelines and deployed web apps",
    outcomeStatement:
      "I build tools that turn messy real-world inputs—timers, transcripts, product workflows—into software recruiters can click through in under a minute.",
    positioningLine:
      "Each featured project is a working demo with a clear problem, decision, and outcome—not a repo dump.",
  },
  skillMap: [
    {
      hiringFor: "React + TypeScript front-end",
      startWith: "soundwatch",
    },
    {
      hiringFor: "Full-stack web + AI product work",
      startWith: "iam",
    },
    {
      hiringFor: "Python data pipelines + SQL",
      startWith: "youtube-transcript-pipeline",
    },
    {
      hiringFor: "Someone who ships deployed demos",
      startWith: "soundwatch",
    },
  ],
};
