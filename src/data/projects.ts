import type { ImageMetadata } from "astro";

import iamPreview from "../assets/portfolio/iam-demo-video.png";
import soundwatchPreview from "../assets/portfolio/soundwatch.png";
import transcriptPreview from "../assets/portfolio/youtube-transcript-pipeline.png";

/** CLI/Streamlit walkthrough URL — set before Phase 2 deploy; distinct from githubUrl. */
export const transcriptPipelineDemoVideoUrl: string | null = null;

export interface Project {
  id: string;
  name: string;
  problem: string;
  keyDecision: string;
  outcome: string;
  stack: string[];
  demoUrl: string | null;
  githubUrl: string | null;
  previewImage: ImageMetadata;
  previewAlt: string;
  videoUrl?: string;
  featured: boolean;
  isFlagship: boolean;
  slug: string;
  skillsFor: string[];
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const projects: Project[] = [
  {
    id: "soundwatch",
    name: "Soundwatch",
    problem:
      "Morning routines with multiple timed activities require constantly starting timers or watching a clock.",
    keyDecision:
      "I built an interval timer that tracks elapsed time with optional audio cues, so focus can stay on the activity, not the clock.",
    outcome: "Deployed and used on Netlify.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    demoUrl: "https://soundwatch.netlify.app/",
    githubUrl: "https://github.com/davidschraedel/stopwatch",
    previewImage: soundwatchPreview,
    previewAlt: "Soundwatch interval timer running in the browser",
    featured: true,
    isFlagship: true,
    slug: "soundwatch",
    skillsFor: ["React", "TypeScript", "front-end deployment"],
  },
  {
    id: "iam",
    name: "I AM",
    problem:
      "Content creators with a large audience struggle to connect with the whole of their audience on an individual level, and current solutions to this are robotic and impersonal.",
    keyDecision:
      "I integrated and optimized Amazon Bedrock models and knowledge base tools to match a creator's voice and brand.",
    outcome:
      "Live user-facing flows with a positive UX; demo shows end-to-end interactions for one feature.",
    stack: ["React", "TypeScript", "Node.js", "Amazon Bedrock", "AWS"],
    demoUrl: "https://www.youtube.com/watch?v=__7cEyDlhgk",
    githubUrl: null,
    previewImage: iamPreview,
    previewAlt: "I AM product demo video thumbnail on YouTube",
    videoUrl: "https://www.youtube.com/watch?v=__7cEyDlhgk",
    featured: true,
    isFlagship: false,
    slug: "iam",
    skillsFor: ["React", "TypeScript", "Agentic development"],
  },
  {
    id: "youtube-transcript-pipeline",
    name: "YouTube Transcript Pipeline",
    problem:
      "Hours of spoken content in YouTube playlists are locked in the UI;not queryable, exportable, or usable for analysis.",
    keyDecision: "Ingest captions into local DuckDB database",
    outcome:
      "Full playlist ingested to searchable SQL; bronze/silver layers with per-video fetch status and idempotent transforms",
    stack: ["Python", "DuckDB", "SQL"],
    demoUrl: "",
    githubUrl: "https://github.com/davidschraedel/youtube-transcript-pipeline",
    previewImage: transcriptPreview,
    previewAlt:
      "YouTube Transcript Pipeline CLI and DuckDB workflow — screenshot pending Streamlit/CLI capture",
    featured: true,
    isFlagship: false,
    slug: "youtube-transcript-pipeline",
    skillsFor: ["Python", "data pipelines", "SQL"],
  },
];
