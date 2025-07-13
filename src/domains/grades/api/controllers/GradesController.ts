import { NextResponse } from 'next/server';
import { IGradesService } from '../services';
import { IGradesController } from './types';
import { validateRequest } from '@/api';
import { insertGradeSchema } from './utils';

export class GradesController implements IGradesController {
  private readonly gradesService: IGradesService;

  constructor(gradesService: IGradesService) {
    this.gradesService = gradesService;
  }

  async insertGrade(request: Request): Promise<NextResponse> {
    try {
      const body = await request.json();

      const payload = validateRequest(body, insertGradeSchema);

      if (payload.error) {
        return NextResponse.json(
          { error: payload.error.message },
          { status: 400 },
        );
      }

      await this.gradesService.insertGrade(payload.data);

      return NextResponse.json(
        { message: 'Grade inserted successfully' },
        { status: 201 },
      );
    } catch (error) {
      console.error('Error inserting grade:', error);
      return NextResponse.json(
        { error: 'Failed to insert grade' },
        { status: 500 },
      );
    }
  }

  async getGrades(): Promise<NextResponse> {
    try {
      const grades = await this.gradesService.getGrades();

      return NextResponse.json(grades, { status: 200 });
    } catch (error) {
      console.error('Error fetching grades:', error);
      return NextResponse.json(
        { error: 'Failed to fetch grades' },
        { status: 500 },
      );
    }
  }
}
