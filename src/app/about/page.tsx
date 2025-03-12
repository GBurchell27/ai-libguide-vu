import { Metadata } from "next";
import { getAllSections } from "@/lib/mdx";
import { MainLayout } from "@/components/MainLayout";

export const metadata: Metadata = {
  title: "About - AI in Academia",
  description: "Learn about the purpose and creators of the AI in Academia guide",
};

export default function AboutPage() {
  const sections = getAllSections();
  
  return (
    <MainLayout sections={sections} showSidebar={false}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          About This Guide
        </h1>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Purpose
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            The "AI in Academia" guide was created to provide researchers, educators, and students with a comprehensive resource on how artificial intelligence is transforming higher education and academic research. As AI technologies continue to evolve rapidly, this guide aims to help academic professionals understand and leverage these tools effectively in their work.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Our goal is to demystify AI for academics who may not have a technical background while providing practical guidance on implementing AI tools in research and teaching contexts.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Who This Guide Is For
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
            <li>Researchers looking to incorporate AI tools into their methodologies</li>
            <li>Educators interested in using AI to enhance teaching and learning</li>
            <li>Students wanting to understand how AI can support their academic work</li>
            <li>Academic administrators considering AI implementation at an institutional level</li>
            <li>Librarians and information professionals supporting AI literacy</li>
          </ul>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            How to Use This Guide
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This guide is organized into thematic sections, each focusing on a different aspect of AI in academia. You can read the guide sequentially or jump to specific sections that interest you most. The search functionality allows you to find specific topics quickly.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            We encourage you to provide feedback on each section to help us improve the content and make it more relevant to your needs.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            About the Authors
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This guide was developed by the AI in Education Research Group at VU University, a multidisciplinary team of researchers, educators, and technologists dedicated to exploring the intersection of artificial intelligence and higher education.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            For questions, suggestions, or collaborations, please contact us at ai-support@vu.edu.
          </p>
        </section>
      </div>
    </MainLayout>
  );
} 