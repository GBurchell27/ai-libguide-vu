"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import type { Section } from "@/lib/mdx";
import { MainLayout } from "@/components/MainLayout";
import { SearchBar } from "@/components/SearchBar";

// This function fetches sections from an API route instead of directly using fs module
async function fetchSections(): Promise<Section[]> {
  try {
    const response = await fetch('/api/sections');
    if (!response.ok) {
      throw new Error('Failed to fetch sections');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching sections:', error);
    return [];
  }
}

// This function searches sections using a client-side filter
function searchSections(sections: Section[], query: string): Section[] {
  if (!query) return [];
  
  return sections.filter((section) => {
    const searchableText = `${section.title} ${section.description} ${section.content}`.toLowerCase();
    return searchableText.includes(query.toLowerCase());
  });
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<Section[]>([]);
  const [allSections, setAllSections] = useState<Section[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Fetch sections on component mount
  useEffect(() => {
    async function loadSections() {
      setIsLoading(true);
      const sections = await fetchSections();
      setAllSections(sections);
      setIsLoading(false);
      
      // Run initial search if query exists
      if (initialQuery) {
        setResults(searchSections(sections, initialQuery));
      }
    }
    
    loadSections();
  }, [initialQuery]);
  
  // Handle search queries
  useEffect(() => {
    if (query && allSections.length > 0) {
      setResults(searchSections(allSections, query));
    } else {
      setResults([]);
    }
  }, [query, allSections]);
  
  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    // Update URL without refreshing the page
    const url = new URL(window.location.href);
    url.searchParams.set("q", newQuery);
    window.history.pushState({}, "", url);
  };
  
  return (
    <MainLayout sections={allSections} showSidebar={false}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Search Results
        </h1>
        
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} placeholder="Search the guide..." initialValue={initialQuery} />
        </div>
        
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">Loading...</p>
          </div>
        ) : query ? (
          <>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {results.length === 0
                ? "No results found."
                : `Found ${results.length} result${results.length === 1 ? "" : "s"} for "${query}"`}
            </p>
            
            <div className="space-y-6">
              {results.map((section) => (
                <div 
                  key={section.slug}
                  className="border border-gray-200 dark:border-gray-800 rounded-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {section.description}
                  </p>
                  <Link 
                    href={`/sections/${section.slug}`}
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    View section →
                  </Link>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Enter a search term to find content in the guide.
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
} 