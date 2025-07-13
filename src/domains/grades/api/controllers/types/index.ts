import { NextResponse } from 'next/server';

export interface IGradesController {
  insertGrade(request: Request): Promise<NextResponse>;
  getGrades(request: Request): Promise<NextResponse>;
}
