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
        
        {/* Media Placeholders */}
        <div className="mt-8 space-y-8">
          {/* Image Gallery Placeholder */}
          <section className="border border-dashed border-gray-300 dark:border-gray-700 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Image Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div 
                  key={item} 
                  className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center"
                >
                  <span className="text-gray-400 dark:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          </section>
          
          {/* Video Content Placeholder */}
          <section className="border border-dashed border-gray-300 dark:border-gray-700 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Video Content
            </h2>
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 dark:text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-500 dark:text-gray-400">Video placeholder - Click to play</p>
            </div>
          </section>
          
          {/* Interactive Content Placeholder */}
          <section className="border border-dashed border-gray-300 dark:border-gray-700 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Interactive Elements
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 dark:text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <p className="text-gray-500 dark:text-gray-400">Interactive content will be displayed here</p>
            </div>
          </section>
        </div>
        
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