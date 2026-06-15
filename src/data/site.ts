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
};
