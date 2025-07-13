import { ZodObject, ZodType } from 'zod';

export const validateRequest = <T extends Record<string, ZodType>>(
  parameters: Record<string, unknown>,
  validationSchema: ZodObject<T>,
) => {
  return validationSchema.safeParse(parameters);
};
