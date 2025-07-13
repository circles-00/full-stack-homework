import postgres from 'postgres';
import { INumbersRepository } from '../repositories/types';
import { IFetchAdjacentNumberPairsResponse, INumbersService } from './types';

export class NumbersService implements INumbersService {
  private readonly numbersRepository: INumbersRepository;

  constructor(numbersRepository: INumbersRepository) {
    this.numbersRepository = numbersRepository;
  }

  async fetchAdjacentNumberPairs(): Promise<IFetchAdjacentNumberPairsResponse> {
    const data = await this.numbersRepository.getAdjacentNumberPairs();

    return {
      data,
    };
  }

  async insertNumber(value: number): Promise<postgres.RowList<postgres.Row[]>> {
    return this.numbersRepository.insertNumber(value);
  }
}
