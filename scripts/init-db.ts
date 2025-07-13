import { sql } from '@/db';
import fs from 'fs';
import path from 'path';

async function initializeDatabase() {
  try {
    console.log('Initializing database...');

    const schemaPath = path.join(process.cwd(), './src/db', 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');

    await sql.unsafe(schema);

    console.log('Database initialized successfully!');
    console.log('Tables created: numbers, grades');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    await sql.end();
  }
}

initializeDatabase();
