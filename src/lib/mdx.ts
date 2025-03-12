import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content');

export type Section = {
  title: string;
  slug: string;
  description: string;
  order: number;
  content: string;
};

/**
 * Get all section data from markdown files
 */
export function getAllSections(): Section[] {
  const sectionsDirectory = path.join(contentDirectory, 'sections');
  const filenames = fs.readdirSync(sectionsDirectory);
  
  const sections = filenames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(sectionsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        title: data.title,
        slug: data.slug,
        description: data.description,
        order: data.order,
        content
      } as Section;
    })
    .sort((a, b) => a.order - b.order);
  
  return sections;
}

/**
 * Get section data by slug
 */
export function getSectionBySlug(slug: string): Section | null {
  const sections = getAllSections();
  return sections.find((section) => section.slug === slug) || null;
}

/**
 * Get all section slugs
 */
export function getAllSectionSlugs(): string[] {
  const sections = getAllSections();
  return sections.map((section) => section.slug);
} 