import { gradesValidationSchema } from '../validation';

describe('gradesValidationSchema', () => {
  it('should validate valid grade and class', () => {
    const result = gradesValidationSchema.safeParse({
      grade: 85,
      class: 'Math',
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.grade).toBe(85);
      expect(result.data.class).toBe('Math');
    }
  });

  it('should validate minimum grade (0)', () => {
    const result = gradesValidationSchema.safeParse({
      grade: 0,
      class: 'Science',
    });
    expect(result.success).toBe(true);
  });

  it('should validate maximum grade (100)', () => {
    const result = gradesValidationSchema.safeParse({
      grade: 100,
      class: 'History',
    });
    expect(result.success).toBe(true);
  });

  it('should reject grade below 0', () => {
    const result = gradesValidationSchema.safeParse({
      grade: -1,
      class: 'Math',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe(
        'Number cannot be less than 0',
      );
    }
  });

  it('should reject grade above 100', () => {
    const result = gradesValidationSchema.safeParse({
      grade: 101,
      class: 'Math',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe(
        'Number cannot be greater than 100',
      );
    }
  });

  it('should reject decimal grades', () => {
    const result = gradesValidationSchema.safeParse({
      grade: 85.5,
      class: 'Math',
    });
    expect(result.success).toBe(false);
  });

  it('should reject invalid class', () => {
    const result = gradesValidationSchema.safeParse({
      grade: 85,
      class: 'InvalidClass',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe(
        'Please select a valid class.',
      );
    }
  });

  it('should validate all valid classes', () => {
    const validClasses = ['Math', 'Science', 'History'];

    validClasses.forEach((className) => {
      const result = gradesValidationSchema.safeParse({
        grade: 85,
        class: className,
      });
      expect(result.success).toBe(true);
    });
  });

  it('should reject missing grade field', () => {
    const result = gradesValidationSchema.safeParse({
      class: 'Math',
    });
    expect(result.success).toBe(false);
  });

  it('should reject missing class field', () => {
    const result = gradesValidationSchema.safeParse({
      grade: 85,
    });
    expect(result.success).toBe(false);
  });
});
