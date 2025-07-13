import { NextRequest } from 'next/server';
import {
  INumbersController,
  INumbersService,
  NumbersController,
  NumbersRepository,
  NumbersService,
} from '@/domains/numbers/api';
import { INumbersRepository } from '@/domains/numbers/api/repositories/types';

const repository: INumbersRepository = new NumbersRepository();
const service: INumbersService = new NumbersService(repository);
const controller: INumbersController = new NumbersController(service);

export async function GET(request: NextRequest) {
  return controller.fetchAdjacentNumberPairs(request);
}

export async function POST(request: NextRequest) {
  return controller.insertNumber(request);
}
