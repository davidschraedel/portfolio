import type { ImageMetadata } from "astro";

import profileData from "./profile.json";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/portfolio/*.png",
  { eager: true }
);

export interface Project {
  id: string;
  slug: string;
  name: string;
  objective: string;
  tradeOff: string;
  stack: string[];
  featured: boolean;
  demoUrl: string | null;
  githubUrl: string | null;
  previewImage: ImageMetadata;
  previewAlt: string;
  videoUrl: string | null;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const projects: Project[] = profileData.projects.map((p) => {
  const imgModule = images[`../assets/portfolio/${p.previewImageKey}.png`];
  if (!imgModule) {
    throw new Error(
      `No image found for previewImageKey: "${p.previewImageKey}". Add the .png to src/assets/portfolio/.`
    );
  }
  return {
    id: p.id,
    slug: p.slug,
    name: p.name,
    objective: p.objective,
    tradeOff: p.tradeOff,
    stack: p.stack,
    featured: p.featured,
    demoUrl: p.demoUrl,
    githubUrl: p.githubUrl,
    previewImage: imgModule.default,
    previewAlt: p.previewAlt,
    videoUrl: p.videoUrl,
  };
});
