import { numbersValidationSchema } from '../validation';

describe('numbersValidationSchema', () => {
  it('should validate positive integers', () => {
    const result = numbersValidationSchema.safeParse({ number: 42 });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.number).toBe(42);
    }
  });

  it('should validate negative integers', () => {
    const result = numbersValidationSchema.safeParse({ number: -15 });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.number).toBe(-15);
    }
  });

  it('should validate zero', () => {
    const result = numbersValidationSchema.safeParse({ number: 0 });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.number).toBe(0);
    }
  });

  it('should reject decimal numbers', () => {
    const result = numbersValidationSchema.safeParse({ number: 42.5 });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe(
        'Please enter a valid integer.',
      );
    }
  });

  it('should reject non-numeric values', () => {
    const result = numbersValidationSchema.safeParse({
      number: 'not a number',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe(
        'Please enter a valid integer.',
      );
    }
  });

  it('should reject missing number field', () => {
    const result = numbersValidationSchema.safeParse({});
    expect(result.success).toBe(false);
  });

  it('should reject null values', () => {
    const result = numbersValidationSchema.safeParse({ number: null });
    expect(result.success).toBe(false);
  });

  it('should reject undefined values', () => {
    const result = numbersValidationSchema.safeParse({ number: undefined });
    expect(result.success).toBe(false);
  });
});
