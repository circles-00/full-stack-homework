import { apiClient, createApiHandler } from '../utils';
import { IFetchAdjacentNumberPairsResponse } from './types';

export const fetchAdjacentNumberPairs = createApiHandler(async () => {
  const { data } =
    await apiClient.get<IFetchAdjacentNumberPairsResponse>('/api/numbers');

  return data;
}, ['fetchAdjacentNumberPairs']);

export const insertNumber = createApiHandler(
  async (value: number) => {
    const { data } = await apiClient.post<{ message: string; status: number }>(
      '/api/numbers',
      {
        value,
      },
    );

    return data;
  },
  ['insertNumber'],
);
