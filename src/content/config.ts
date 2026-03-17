import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    type: z.enum(['post', 'interview']).default('post'),
    guest: z.string().optional(),
    draft: z.boolean().default(false),
    hashtag: z.string().optional(),
  }),
});

const interviews = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    guest: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    description: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, interviews };
