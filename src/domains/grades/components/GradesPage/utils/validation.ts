import z from 'zod';

export const gradesValidationSchema = z.object({
  grade: z
    .number({ error: 'Please enter a valid integer.' })
    .int({ error: 'Please enter a valid integer.' })
    .min(0, { error: 'Number cannot be less than 0' })
    .max(100, { error: 'Number cannot be greater than 100' }),
  class: z.enum(['Math', 'Science', 'History'], {
    error: 'Please select a valid class.',
  }),
});

export type TGradesValidationSchema = z.infer<typeof gradesValidationSchema>;
