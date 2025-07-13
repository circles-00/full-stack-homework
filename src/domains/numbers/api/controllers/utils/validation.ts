import z from 'zod';

export const insertNumberSchema = z.object({
  value: z.number().int(),
});
