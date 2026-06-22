export interface SiteConfig {
  name: string;
  email: string;
  linkedInUrl: string;
  githubUrl: string;
  resumePath: string;
  hero: {
    roleHeadline: string;
    outcomeStatement: string;
    positioningLine: string;
  };
  about: string[];
}

export const site: SiteConfig = {
  name: "David Schraedel",
  email: "davidschraedel@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/david-schraedel/",
  githubUrl: "https://github.com/davidschraedel",
  resumePath: `${import.meta.env.BASE_URL}resume.pdf`,
  hero: {
    roleHeadline:
      "Full-stack engineer · TypeScript, React, Python · shipping data pipelines and deployed web apps",
    outcomeStatement:
      "I build tools that turn messy real-world inputs—timers, transcripts, product workflows—into software recruiters can click through in under a minute.",
    positioningLine:
      "Each featured project is a working demo with a clear problem, decision, and outcome—not a repo dump.",
  },
  about: [
    "I build software to solve problems I actually hit—interval timers for morning routines, pipelines for YouTube content I couldn't search, structured flows for AI coaching products.",
    "I'm a full-stack engineer based in Utah, focused on React and TypeScript web apps plus Python data tooling. I care about shipping deployed demos with clear tradeoffs, not tutorial clones.",
    "Before engineering, I worked in communication and creative production—that background shows up in how I write case studies and explain technical decisions to non-specialists.",
    "I'm looking for product-focused teams building data tooling, internal platforms, or AI-assisted workflows where I can own features end-to-end.",
  ],
};
