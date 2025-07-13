/* eslint-disable @typescript-eslint/no-explicit-any */
import { NumbersService } from '../NumbersService';
import { INumbersRepository } from '../../repositories/types';
import { IAdjacentNumberPair } from '../../shared';

describe('NumbersService', () => {
  let service: NumbersService;
  let mockRepository: jest.Mocked<INumbersRepository>;

  beforeEach(() => {
    mockRepository = {
      getAdjacentNumberPairs: jest.fn(),
      insertNumber: jest.fn(),
    };
    service = new NumbersService(mockRepository);
  });

  describe('fetchAdjacentNumberPairs', () => {
    it('should return formatted response with data', async () => {
      const mockPairs: IAdjacentNumberPair[] = [
        { id1: 1, number1: 3, id2: 2, number2: 5, sum: 8 },
        { id1: 2, number1: 5, id2: 3, number2: 7, sum: 12 },
      ];

      mockRepository.getAdjacentNumberPairs.mockResolvedValue(mockPairs);

      const result = await service.fetchAdjacentNumberPairs();

      expect(result).toEqual({ data: mockPairs });
      expect(mockRepository.getAdjacentNumberPairs).toHaveBeenCalledTimes(1);
    });

    it('should return empty data when no pairs exist', async () => {
      mockRepository.getAdjacentNumberPairs.mockResolvedValue([]);

      const result = await service.fetchAdjacentNumberPairs();

      expect(result).toEqual({ data: [] });
    });

    it('should propagate repository errors', async () => {
      const error = new Error('Database error');
      mockRepository.getAdjacentNumberPairs.mockRejectedValue(error);

      await expect(service.fetchAdjacentNumberPairs()).rejects.toThrow(
        'Database error',
      );
    });
  });

  describe('insertNumber', () => {
    it('should call repository with correct value', async () => {
      const mockResult = [{ id: 1, value: 42 }] as any;
      mockRepository.insertNumber.mockResolvedValue(mockResult);

      const result = await service.insertNumber(42);

      expect(mockRepository.insertNumber).toHaveBeenCalledWith(42);
      expect(result).toBe(mockResult);
    });

    it('should handle negative numbers', async () => {
      const mockResult = [{ id: 2, value: -15 }] as any;
      mockRepository.insertNumber.mockResolvedValue(mockResult);

      await service.insertNumber(-15);

      expect(mockRepository.insertNumber).toHaveBeenCalledWith(-15);
    });

    it('should handle zero', async () => {
      const mockResult = [{ id: 3, value: 0 }] as any;
      mockRepository.insertNumber.mockResolvedValue(mockResult);

      await service.insertNumber(0);

      expect(mockRepository.insertNumber).toHaveBeenCalledWith(0);
    });

    it('should propagate repository errors', async () => {
      const error = new Error('Insert failed');
      mockRepository.insertNumber.mockRejectedValue(error);

      await expect(service.insertNumber(42)).rejects.toThrow('Insert failed');
    });
  });
});
