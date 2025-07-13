import { IFetchGradesResponse, IInsertGradePayload } from '../../shared/types';

export interface IGradesService {
  insertGrade(payload: IInsertGradePayload): Promise<void>;
  getGrades(): Promise<IFetchGradesResponse[]>;
}
