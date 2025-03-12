import { NextResponse } from 'next/server';
import { getAllSections } from '@/lib/mdx';

export async function GET() {
  try {
    const sections = getAllSections();
    return NextResponse.json(sections);
  } catch (error) {
    console.error('Error fetching sections:', error);
    return NextResponse.json(
      { error: 'Failed to fetch sections' },
      { status: 500 }
    );
  }
} 