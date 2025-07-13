import postgres from 'postgres';
import { IFetchGradesResponse, IInsertGradePayload } from '../shared/types';
import { IGradesRepository } from './types';
import { sql } from '@/db';

export class GradesRepository implements IGradesRepository {
  async insertGrade(
    payload: IInsertGradePayload,
  ): Promise<postgres.RowList<postgres.Row[]>> {
    return sql`
      INSERT INTO grades (class, grade)
      VALUES (${payload.class}, ${payload.grade})
      RETURNING *;
    `;
  }

  async getGrades(): Promise<IFetchGradesResponse[]> {
    return sql`
      SELECT * FROM grades;
    `;
  }
}
