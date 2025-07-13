import z from 'zod';

export const insertGradeSchema = z.object({
  grade: z.number().int().min(0).max(100),
  class: z.enum(['Math', 'Science', 'History']),
});
