import { insertGradeSchema } from '../validation';

describe('insertGradeSchema', () => {
  it('should validate valid grade and class', () => {
    const result = insertGradeSchema.safeParse({
      grade: 85,
      class: 'Math',
    });
    expect(result.success).toBe(true);
  });

  it('should validate minimum and maximum grades', () => {
    const minResult = insertGradeSchema.safeParse({
      grade: 0,
      class: 'Math',
    });
    const maxResult = insertGradeSchema.safeParse({
      grade: 100,
      class: 'Math',
    });

    expect(minResult.success).toBe(true);
    expect(maxResult.success).toBe(true);
  });

  it('should reject invalid grade ranges', () => {
    const belowMin = insertGradeSchema.safeParse({
      grade: -1,
      class: 'Math',
    });
    const aboveMax = insertGradeSchema.safeParse({
      grade: 101,
      class: 'Math',
    });

    expect(belowMin.success).toBe(false);
    expect(aboveMax.success).toBe(false);
  });

  it('should validate all allowed classes', () => {
    const classes = ['Math', 'Science', 'History'];

    classes.forEach((className) => {
      const result = insertGradeSchema.safeParse({
        grade: 85,
        class: className,
      });
      expect(result.success).toBe(true);
    });
  });

  it('should reject invalid classes', () => {
    const result = insertGradeSchema.safeParse({
      grade: 85,
      class: 'InvalidClass',
    });
    expect(result.success).toBe(false);
  });

  it('should reject decimal grades', () => {
    const result = insertGradeSchema.safeParse({
      grade: 85.5,
      class: 'Math',
    });
    expect(result.success).toBe(false);
  });

  it('should reject missing fields', () => {
    const missingGrade = insertGradeSchema.safeParse({
      class: 'Math',
    });
    const missingClass = insertGradeSchema.safeParse({
      grade: 85,
    });

    expect(missingGrade.success).toBe(false);
    expect(missingClass.success).toBe(false);
  });
});
