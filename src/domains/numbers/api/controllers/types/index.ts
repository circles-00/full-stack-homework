import { NextRequest, NextResponse } from 'next/server';
import { IFetchAdjacentNumberPairsResponse } from '../../services';

export interface INumbersController {
  fetchAdjacentNumberPairs: (
    request: NextRequest,
  ) => Promise<NextResponse<IFetchAdjacentNumberPairsResponse | undefined>>;

  insertNumber: (request: NextRequest) => Promise<NextResponse>;
}
