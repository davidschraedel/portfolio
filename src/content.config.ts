import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    problem: z.string(),
    keyDecision: z.string(),
    outcome: z.string(),
    productionThinking: z.object({
      tests: z.string(),
      errorHandling: z.string(),
      deployment: z.string(),
      monitoring: z.string().optional(),
    }),
    myRole: z
      .object({
        contributions: z.array(z.string()),
        notMyWork: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };
