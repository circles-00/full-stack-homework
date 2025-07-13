import { GradesService } from '../GradesService';
import { IGradesRepository } from '../../repositories/types';
import { IFetchGradesResponse, IInsertGradePayload } from '../../shared/types';

describe('GradesService', () => {
  let service: GradesService;
  let mockRepository: jest.Mocked<IGradesRepository>;

  beforeEach(() => {
    mockRepository = {
      insertGrade: jest.fn(),
      getGrades: jest.fn(),
    };
    service = new GradesService(mockRepository);
  });

  describe('insertGrade', () => {
    it('should call repository with correct payload', async () => {
      const payload: IInsertGradePayload = { grade: 85, class: 'Math' };
      const mockResult = [{ id: 1, ...payload }];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mockRepository.insertGrade.mockResolvedValue(mockResult as any);

      await service.insertGrade(payload);

      expect(mockRepository.insertGrade).toHaveBeenCalledWith(payload);
    });

    it('should handle all valid classes', async () => {
      const classes = ['Math', 'Science', 'History'] as const;

      for (const className of classes) {
        const payload: IInsertGradePayload = { grade: 85, class: className };
        await service.insertGrade(payload);

        expect(mockRepository.insertGrade).toHaveBeenCalledWith(payload);
      }
    });

    it('should handle edge case grades', async () => {
      const payloads = [
        { grade: 0, class: 'Math' as const },
        { grade: 100, class: 'Science' as const },
      ];

      for (const payload of payloads) {
        await service.insertGrade(payload);
        expect(mockRepository.insertGrade).toHaveBeenCalledWith(payload);
      }
    });

    it('should propagate repository errors', async () => {
      const payload: IInsertGradePayload = { grade: 85, class: 'Math' };
      const error = new Error('Insert failed');

      mockRepository.insertGrade.mockRejectedValue(error);

      await expect(service.insertGrade(payload)).rejects.toThrow(
        'Insert failed',
      );
    });
  });

  describe('getGrades', () => {
    it('should return grades from repository', async () => {
      const mockGrades: IFetchGradesResponse[] = [
        { id: 1, grade: 85, class: 'Math' },
        { id: 2, grade: 92, class: 'Science' },
      ];

      mockRepository.getGrades.mockResolvedValue(mockGrades);

      const result = await service.getGrades();

      expect(result).toEqual(mockGrades);
      expect(mockRepository.getGrades).toHaveBeenCalledTimes(1);
    });

    it('should return empty array when no grades exist', async () => {
      mockRepository.getGrades.mockResolvedValue([]);

      const result = await service.getGrades();

      expect(result).toEqual([]);
    });

    it('should propagate repository errors', async () => {
      const error = new Error('Database error');
      mockRepository.getGrades.mockRejectedValue(error);

      await expect(service.getGrades()).rejects.toThrow('Database error');
    });

    it('should handle multiple grades with same class', async () => {
      const mockGrades: IFetchGradesResponse[] = [
        { id: 1, grade: 85, class: 'Math' },
        { id: 2, grade: 92, class: 'Math' },
        { id: 3, grade: 78, class: 'Math' },
      ];

      mockRepository.getGrades.mockResolvedValue(mockGrades);

      const result = await service.getGrades();

      expect(result).toEqual(mockGrades);
      expect(result).toHaveLength(3);
    });
  });
});
