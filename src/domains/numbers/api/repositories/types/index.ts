import postgres from 'postgres';
import { IAdjacentNumberPair } from '../../shared';

export interface INumbersRepository {
  getAdjacentNumberPairs: () => Promise<IAdjacentNumberPair[]>;
  insertNumber: (value: number) => Promise<postgres.RowList<postgres.Row[]>>;
}
