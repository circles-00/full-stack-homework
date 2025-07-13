import { NextRequest, NextResponse } from 'next/server';
import sql from '@/lib/db';

export async function GET() {
  try {
    // Raw SQL query to fetch all grades
    const result = await sql`SELECT * FROM grades ORDER BY created_at DESC`;

    return NextResponse.json({ data: result });
  } catch (error) {
    console.error('Error fetching grades:', error);
    return NextResponse.json(
      { error: 'Failed to fetch grades' },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { class: className, grade } = await request.json();

    if (!className || typeof grade !== 'number') {
      return NextResponse.json(
        { error: 'Class and grade are required' },
        { status: 400 },
      );
    }

    if (grade < 0 || grade > 100) {
      return NextResponse.json(
        { error: 'Grade must be between 0 and 100' },
        { status: 400 },
      );
    }

    if (!['Math', 'Science', 'History'].includes(className)) {
      return NextResponse.json(
        { error: 'Class must be Math, Science, or History' },
        { status: 400 },
      );
    }

    // Raw SQL query to insert new grade
    const result = await sql`
      INSERT INTO grades (class, grade) 
      VALUES (${className}, ${grade}) 
      RETURNING *
    `;

    return NextResponse.json({ data: result[0] }, { status: 201 });
  } catch (error) {
    console.error('Error creating grade:', error);
    return NextResponse.json(
      { error: 'Failed to create grade' },
      { status: 500 },
    );
  }
}
