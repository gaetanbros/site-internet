import { defineCollection, z } from "astro:content";
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date().optional(),
    author: z.string().optional(),
    authImage: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    summary: z.string(),
    type: z.enum(["Article", "Tutorial"]).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
