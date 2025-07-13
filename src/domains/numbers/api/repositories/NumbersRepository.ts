import { sql } from '@/db';
import { INumbersRepository } from './types';
import { IAdjacentNumberPair } from '../shared';
import postgres from 'postgres';

export class NumbersRepository implements INumbersRepository {
  getAdjacentNumberPairs = async (): Promise<IAdjacentNumberPair[]> => {
    return sql`WITH numbered_pairs AS (
      SELECT
      id AS id1,
      value AS number1,
      LEAD(id) OVER (ORDER BY value) AS id2,
      LEAD(value) OVER (ORDER BY value) AS number2,
      (value + LEAD(value) OVER (ORDER BY value)) AS sum
      FROM
      numbers
    )
    SELECT *
      FROM
    numbered_pairs
    WHERE
    id2 IS NOT NULL
    ORDER BY
    number1;`;
  };

  insertNumber = async (
    value: number,
  ): Promise<postgres.RowList<postgres.Row[]>> => {
    return sql`
      INSERT INTO numbers (value)
      VALUES (${value})
      ON CONFLICT (value) DO NOTHING
      RETURNING *;
    `;
  };
}
