import {
  GradesController,
  GradesRepository,
  GradesService,
} from '@/domains/grades/api';
import { NextRequest } from 'next/server';

const repository = new GradesRepository();

const service = new GradesService(repository);
const controller = new GradesController(service);

export async function GET() {
  return controller.getGrades();
}

export async function POST(request: NextRequest) {
  return controller.insertGrade(request);
}
