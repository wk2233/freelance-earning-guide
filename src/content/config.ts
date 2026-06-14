import { defineCollection, z } from 'astro:content';

const articleCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['programming', 'design', 'writing', 'marketing']),
    date: z.date(),
    tags: z.array(z.string()).optional().default([]),
    readingTime: z.number().optional(),
  }),
});

export const collections = {
  articles: articleCollection,
};
