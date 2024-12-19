import { z } from 'zod';

// Zod schema for user validation
export const userSchemaZod = z.object({
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters long')
    .max(50, 'Name must be at most 50 characters long'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  role: z.enum(['admin', 'user']).default('user'),
  isBlocked: z.boolean().default(false),
});
