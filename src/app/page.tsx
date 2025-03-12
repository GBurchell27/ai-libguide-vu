import Link from "next/link";
import { getAllSections } from "@/lib/mdx";
import { MainLayout } from "@/components/MainLayout";
import { SearchSection } from "@/components/SearchSection";

export default function Home() {
  const sections = getAllSections();
  
  return (
    <MainLayout sections={sections} showSidebar={false}>
      {/* Hero Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              AI in Academia
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              A comprehensive guide to artificial intelligence applications in academic research and teaching
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/sections/introduction" 
                className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
              >
                Start Reading
              </Link>
              <Link 
                href="/about" 
                className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                About This Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Search Section */}
      <SearchSection />
      
      {/* Table of Contents */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <div 
                key={section.slug}
                className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {section.description}
                </p>
                <Link 
                  href={`/sections/${section.slug}`}
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Read more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
