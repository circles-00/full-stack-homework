import { IGradesRepository } from '../repositories/types';
import { IFetchGradesResponse, IInsertGradePayload } from '../shared/types';
import { IGradesService } from './types';

export class GradesService implements IGradesService {
  private readonly gradesRepository: IGradesRepository;

  constructor(gradesRepository: IGradesRepository) {
    this.gradesRepository = gradesRepository;
  }

  async insertGrade(payload: IInsertGradePayload): Promise<void> {
    await this.gradesRepository.insertGrade(payload);
  }

  async getGrades(): Promise<IFetchGradesResponse[]> {
    return this.gradesRepository.getGrades();
  }
}
