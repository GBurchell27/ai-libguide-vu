"use client";

import { useState, useEffect } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  initialValue?: string;
}

export function SearchBar({ onSearch, placeholder = "Search...", initialValue = "" }: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);
  
  // Update query state when initialValue prop changes
  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white dark:bg-gray-900 dark:border-gray-700 dark:text-white focus:ring-primary-500 focus:border-primary-500"
          placeholder={placeholder}
        />
        <button
          type="submit"
          className="absolute right-2 bottom-2 top-2 flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800"
        >
          Search
        </button>
      </div>
    </form>
  );
} 