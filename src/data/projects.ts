import type { ImageMetadata } from "astro";

import profileData from "./profile.json";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/portfolio/*.png",
  { eager: true },
);

export const PROJECT_CATEGORIES = [
  { slug: "data", label: "Data" },
  { slug: "automation", label: "Automation" },
  { slug: "applied-ai", label: "Applied AI" },
  { slug: "apps", label: "Apps" },
  { slug: "vibe-code", label: "Vibe code" },
  { slug: "product-strategy", label: "Product / strategy" },
] as const;

export type ProjectCategorySlug = (typeof PROJECT_CATEGORIES)[number]["slug"];

const PROJECT_CATEGORY_SLUGS = new Set<string>(
  PROJECT_CATEGORIES.map((category) => category.slug),
);

function parseProjectCategories(
  projectId: string,
  raw: string[] | undefined,
): ProjectCategorySlug[] {
  if (!raw?.length) {
    return [];
  }
  for (const slug of raw) {
    if (!PROJECT_CATEGORY_SLUGS.has(slug)) {
      throw new Error(
        `Unknown projectCategories slug "${slug}" on project "${projectId}". Allowed: ${[...PROJECT_CATEGORY_SLUGS].join(", ")}`,
      );
    }
  }
  return raw as ProjectCategorySlug[];
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  objective: string;
  impact: string;
  stack: string[];
  projectCategories: ProjectCategorySlug[];
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

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectCountByCategory(): Record<
  ProjectCategorySlug,
  number
> {
  const counts = Object.fromEntries(
    PROJECT_CATEGORIES.map((category) => [category.slug, 0]),
  ) as Record<ProjectCategorySlug, number>;

  for (const project of projects) {
    for (const slug of project.projectCategories) {
      counts[slug] += 1;
    }
  }

  return counts;
}

export function getTotalProjectCount(): number {
  return projects.length;
}

export const projects: Project[] = profileData.projects.map((p) => {
  const imgModule = images[`../assets/portfolio/${p.previewImageKey}.png`];
  if (!imgModule) {
    throw new Error(
      `No image found for previewImageKey: "${p.previewImageKey}". Add the .png to src/assets/portfolio/.`,
    );
  }
  return {
    id: p.id,
    slug: p.slug,
    name: p.name,
    objective: p.objective,
    impact: p.impact,
    stack: p.stack,
    projectCategories: parseProjectCategories(
      p.id,
      "projectCategories" in p
        ? (p as { projectCategories?: string[] }).projectCategories
        : undefined,
    ),
    featured: p.featured,
    demoUrl: p.demoUrl,
    githubUrl: p.githubUrl,
    previewImage: imgModule.default,
    previewAlt: p.previewAlt,
    videoUrl: p.videoUrl,
  };
});
