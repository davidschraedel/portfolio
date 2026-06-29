import profile from "./profile.json";

export interface SiteConfig {
  name: string;
  email: string;
  linkedInUrl: string;
  githubUrl: string;
  resumePath: string;
  hero: {
    contrastLead: string;
    professionalSentence: string;
  };
  handshakeLine: string;
}

export const site: SiteConfig = {
  name: profile.person.name,
  email: profile.person.email,
  linkedInUrl: profile.presence.linkedin,
  githubUrl: profile.presence.github,
  resumePath: `${import.meta.env.BASE_URL}${profile.person.resume}`,
  hero: {
    contrastLead: profile.hero.contrastLead,
    professionalSentence: profile.hero.professionalSentence,
  },
  handshakeLine: profile.handshakeLine,
};
