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
    shareDescription: string;
    skills: string[];
  };
  about: {
    shareDescription: string;
  };
  projectsPage: {
    shareDescription: string;
  };
  handshakeLine: string;
  connect: {
    heading: string;
    paragraphs: string[];
  };
  defaultOgImage: {
    path: string;
    width: number;
    height: number;
    alt: string;
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
    shareDescription: profile.home.shareDescription,
    skills: profile.home.skills,
  },
  about: {
    shareDescription: profile.about.shareDescription,
  },
  projectsPage: {
    shareDescription: profile.projectsPage.shareDescription,
  },
  handshakeLine: profile.handshakeLine,
  connect: {
    heading: profile.connect.heading,
    paragraphs: profile.connect.paragraphs,
  },
  defaultOgImage: {
    path: `${import.meta.env.BASE_URL}og-image.png`,
    width: 1292,
    height: 838,
    alt: `${profile.person.name} — ${profile.hero.contrastLead.join(", ")}`,
  },
};

export function absoluteSiteUrl(
  path: string,
  siteOrigin: string | URL | undefined,
): string {
  if (!siteOrigin) {
    throw new Error("astro.config site is required for absolute URLs");
  }
  return new URL(path, siteOrigin).href;
}
