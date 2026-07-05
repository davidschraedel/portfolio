import profile from "./profile.json";

export interface SiteConfig {
  name: string;
  email: string;
  linkedInUrl: string;
  githubUrl: string;
  substackUrl: string | null;
  resumePath: string;
  hero: {
    contrastLead: string[];
  };
  home: {
    tldr: string;
    skills: string[];
  };
  handshakeLine: string;
  connect: {
    heading: string;
    paragraphs: string[];
  };
}

export const site: SiteConfig = {
  name: profile.person.name,
  email: profile.person.email,
  linkedInUrl: profile.presence.linkedin,
  githubUrl: profile.presence.github,
  substackUrl: profile.presence.substack,
  resumePath: `${import.meta.env.BASE_URL}${profile.person.resume}`,
  hero: {
    contrastLead: profile.hero.contrastLead,
  },
  home: {
    tldr: profile.home.tldr,
    skills: profile.home.skills,
  },
  handshakeLine: profile.handshakeLine,
  connect: {
    heading: profile.connect.heading,
    paragraphs: profile.connect.paragraphs,
  },
};
