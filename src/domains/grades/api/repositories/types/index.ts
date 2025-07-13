import postgres from 'postgres';
import { IFetchGradesResponse, IInsertGradePayload } from '../../shared/types';

export interface IGradesRepository {
  insertGrade(
    payload: IInsertGradePayload,
  ): Promise<postgres.RowList<postgres.Row[]>>;
  getGrades(): Promise<IFetchGradesResponse[]>;
}
