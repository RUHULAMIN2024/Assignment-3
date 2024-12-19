import { z } from 'zod';

// Zod schema for blog post validation
export const BlogSchemaZod = z.object({
  title: z
    .string()
    .min(3, 'Title must be at least 3 characters long')
    .max(200, 'Title must be at most 200 characters long'),
  content: z.string().min(1, 'Content cannot be empty'),
  author: z.string().regex(/^[a-fA-F0-9]{24}$/, 'Invalid ObjectId format'),
  isPublished: z.boolean().default(true),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});
