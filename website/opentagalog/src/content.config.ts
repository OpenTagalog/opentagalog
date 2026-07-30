import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const lessons = defineCollection({
    loader: glob({
        pattern: "**/*.mdx",
        base: "./src/content/lessons",
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        level: z.string(),
    }),
});

export const collections = {
    lessons,
};