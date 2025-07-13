import { INumbersController } from './types';
import { INumbersService } from '../services/types';
import { NextResponse } from 'next/server';
import { validateRequest } from '@/api';
import { insertNumberSchema } from './utils';

export class NumbersController implements INumbersController {
  private readonly numbersService: INumbersService;

  constructor(numbersService: INumbersService) {
    this.numbersService = numbersService;
  }

  async fetchAdjacentNumberPairs() {
    try {
      const data = await this.numbersService.fetchAdjacentNumberPairs();

      return NextResponse.json(data);
    } catch (error) {
      console.error('Error fetching adjacent number pairs:', error);
      return NextResponse.json(undefined, { status: 400 });
    }
  }

  async insertNumber(request: Request) {
    try {
      const payload = await request.json();

      const params = validateRequest(payload, insertNumberSchema);

      if (params.error) {
        return NextResponse.json(
          { error: params.error.message },
          { status: 400 },
        );
      }

      const result = await this.numbersService.insertNumber(params.data.value);

      if (result.length === 0) {
        return NextResponse.json(
          { message: 'Number already exists' },
          { status: 409 },
        );
      }

      return NextResponse.json(
        { message: 'Number inserted successfully' },
        { status: 201 },
      );
    } catch (error) {
      console.error('Error inserting number:', error);
      return NextResponse.json(
        { error: 'Failed to insert number' },
        { status: 500 },
      );
    }
  }
}
