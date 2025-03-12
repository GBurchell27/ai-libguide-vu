import Link from "next/link";
import { getAllSections } from "@/lib/mdx";
import { MainLayout } from "@/components/MainLayout";

export default function NotFound() {
  const sections = getAllSections();
  
  return (
    <MainLayout sections={sections} showSidebar={false}>
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/" 
          className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </MainLayout>
  );
} 