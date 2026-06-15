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
  skillsFor: string[];
}

export const projects: Project[] = [
  {
    id: "soundwatch",
    name: "Soundwatch",
    problem:
      "Morning routines with multiple timed activities meant constantly starting timers instead of staying present.",
    keyDecision:
      "Built an interval timer that tracks elapsed time (not countdown) with optional audio cues—so focus stays on the activity, not the clock.",
    outcome: "Deployed on Netlify.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    demoUrl: "https://soundwatch.netlify.app/",
    githubUrl: "https://github.com/davidschraedel/stopwatch",
    previewImage: soundwatchPreview,
    previewAlt: "Soundwatch interval timer running in the browser",
    featured: true,
    isFlagship: true,
    skillsFor: ["React", "TypeScript", "front-end deployment"],
  },
  {
    id: "iam",
    name: "I AM",
    problem:
      "People struggle to articulate identity and goals in a way AI coaching products can act on consistently.",
    keyDecision:
      "Structured identity and goal capture upfront instead of open-ended chat—so coaching prompts stay consistent across sessions.",
    outcome:
      "Shipped product with live user-facing flows; demo shows end-to-end coaching interaction.",
    stack: ["React", "TypeScript", "Node.js", "Amazon Bedrock", "AWS"],
    demoUrl: "https://www.youtube.com/watch?v=__7cEyDlhgk",
    githubUrl: null,
    previewImage: iamPreview,
    previewAlt: "I AM product demo video thumbnail on YouTube",
    videoUrl: "https://www.youtube.com/watch?v=__7cEyDlhgk",
    featured: true,
    isFlagship: false,
    skillsFor: ["React", "TypeScript", "Agentic development"],
  },
  {
    id: "youtube-transcript-pipeline",
    name: "YouTube Transcript Pipeline",
    problem:
      "Hours of spoken content in YouTube playlists are locked in the UI—not queryable, exportable, or usable for analysis.",
    keyDecision: "Ingest captions into local DuckDB (Bronze → Silver).",
    outcome:
      "Full playlist ingested to searchable SQL; bronze/silver layers with per-video fetch status and idempotent transforms",
    stack: ["Python", "DuckDB", "SQL"],
    demoUrl: transcriptPipelineDemoVideoUrl,
    githubUrl: "https://github.com/davidschraedel/youtube-transcript-pipeline",
    previewImage: transcriptPreview,
    previewAlt:
      "YouTube Transcript Pipeline CLI and DuckDB workflow — screenshot pending Streamlit/CLI capture",
    featured: true,
    isFlagship: false,
    skillsFor: ["Python", "data pipelines", "SQL"],
  },
];
