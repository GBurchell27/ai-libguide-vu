"use client";

import { SearchBar } from "@/components/SearchBar";

export function SearchSection() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Search the Guide
          </h2>
          <SearchBar 
            onSearch={(query) => {
              window.location.href = `/search?q=${encodeURIComponent(query)}`;
            }}
            placeholder="Search for AI tools, techniques, or concepts..."
          />
        </div>
      </div>
    </section>
  );
} 