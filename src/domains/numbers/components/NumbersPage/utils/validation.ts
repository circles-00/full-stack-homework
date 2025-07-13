import { z } from 'zod';

export const numbersValidationSchema = z.object({
  number: z
    .number({ error: 'Please enter a valid integer.' })
    .int({ error: 'Please enter a valid integer.' }),
});

export type TNumbersValidationSchema = z.infer<typeof numbersValidationSchema>;
