import postgres from 'postgres';
import { IAdjacentNumberPair } from '../../shared';

export interface IFetchAdjacentNumberPairsResponse {
  data: IAdjacentNumberPair[];
}

export interface INumbersService {
  fetchAdjacentNumberPairs: () => Promise<IFetchAdjacentNumberPairsResponse>;
  insertNumber: (value: number) => Promise<postgres.RowList<postgres.Row[]>>;
}
