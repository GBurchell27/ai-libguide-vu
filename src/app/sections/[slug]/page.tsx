import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAllSections, getSectionBySlug, getAllSectionSlugs } from "@/lib/mdx";
import { MainLayout } from "@/components/MainLayout";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

interface SectionPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: SectionPageProps): Promise<Metadata> {
  const section = getSectionBySlug(params.slug);
  
  if (!section) {
    return {
      title: "Section Not Found",
    };
  }
  
  return {
    title: `${section.title} - AI in Academia`,
    description: section.description,
    openGraph: {
      title: `${section.title} - AI in Academia`,
      description: section.description,
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllSectionSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function SectionPage({ params }: SectionPageProps) {
  const section = getSectionBySlug(params.slug);
  const allSections = getAllSections();
  
  if (!section) {
    notFound();
  }
  
  return (
    <MainLayout sections={allSections}>
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {section.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {section.description}
        </p>
        
        <MarkdownRenderer content={section.content} />
        
        {/* Feedback Form */}
        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Provide Feedback
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Was this section helpful? Let us know your thoughts.
          </p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
              Helpful
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
              Not Helpful
            </button>
          </div>
        </div>
      </article>
    </MainLayout>
  );
} 