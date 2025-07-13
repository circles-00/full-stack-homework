import { sql } from '@/db';
import fs from 'fs';
import path from 'path';

async function seedDatabase() {
  try {
    console.log('Initializing database...');

    const schemaPath = path.join(process.cwd(), './src/db', 'seed.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');

    await sql.unsafe(schema);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    await sql.end();
  }
}

seedDatabase();
