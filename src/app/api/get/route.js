import { NextResponse } from 'next/server';
import connectToDatabase from 'src/app/config/db'; // Adjust the path as necessary

export async function GET(req) {
  try {
    const connection = await connectToDatabase();
    const [result] = await connection.query('SELECT 1');
    connection.release();
    
    return NextResponse.json(
      { status: 'success', message: 'Database connection is working!', result }
    );
  } catch (error) {
    console.error('Error checking database connection:', error);
    return NextResponse.json(
      { status: 'error', message: 'Database connection failed.', error }
    );
  }
}
