import { apiClient, createApiHandler } from '../utils';
import { IFetchGradesResponse, IInsertGradePayload } from './types';

export const insertGrade = createApiHandler(
  async (payload: IInsertGradePayload) => {
    const { data } = await apiClient.post<{ message: string; status: number }>(
      '/api/grades',
      payload,
    );

    return data;
  },
  ['insertGrade'],
);

export const fetchGrades = createApiHandler(async () => {
  const { data } = await apiClient.get<IFetchGradesResponse[]>('/api/grades');

  return data;
}, ['getGrades']);
