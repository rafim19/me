import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		category: z.enum(["Development", "Design", "Life"]).default("Development"),
	}),
});

const projects = defineCollection({
	loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		category: z.enum(["side-project", "production"]),
		heroImage: z.string().optional(),
		problem: z.string(),
		solution: z.string(),
		role: z.string(),
		techStack: z.array(z.string()),
		achievements: z.array(
			z.object({
				title: z.string(),
				description: z.string(),
			}),
		),
		gallery: z.array(z.string()).optional(),
		featured: z.boolean().default(false),
		order: z.number().default(0),
	}),
});

export const collections = { blog, projects };
