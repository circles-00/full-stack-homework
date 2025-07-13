import { insertNumberSchema } from '../validation';

describe('insertNumberSchema', () => {
  it('should validate positive integers', () => {
    const result = insertNumberSchema.safeParse({ value: 42 });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.value).toBe(42);
    }
  });

  it('should validate negative integers', () => {
    const result = insertNumberSchema.safeParse({ value: -15 });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.value).toBe(-15);
    }
  });

  it('should validate zero', () => {
    const result = insertNumberSchema.safeParse({ value: 0 });
    expect(result.success).toBe(true);
  });

  it('should reject decimal numbers', () => {
    const result = insertNumberSchema.safeParse({ value: 42.5 });
    expect(result.success).toBe(false);
  });

  it('should reject string values', () => {
    const result = insertNumberSchema.safeParse({ value: '42' });
    expect(result.success).toBe(false);
  });

  it('should reject missing value', () => {
    const result = insertNumberSchema.safeParse({});
    expect(result.success).toBe(false);
  });

  it('should reject null values', () => {
    const result = insertNumberSchema.safeParse({ value: null });
    expect(result.success).toBe(false);
  });

  it('should reject boolean values', () => {
    const result = insertNumberSchema.safeParse({ value: true });
    expect(result.success).toBe(false);
  });
});
