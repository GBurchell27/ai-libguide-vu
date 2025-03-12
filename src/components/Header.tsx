"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
                AI in Academia
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                pathname === "/" ? "text-primary-600 dark:text-primary-400" : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/sections/introduction" 
              className={`text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                pathname.startsWith("/sections") ? "text-primary-600 dark:text-primary-400" : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Guide
            </Link>
            <Link 
              href="/search" 
              className={`text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                pathname === "/search" ? "text-primary-600 dark:text-primary-400" : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Search
            </Link>
            <Link 
              href="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                pathname === "/about" ? "text-primary-600 dark:text-primary-400" : "text-gray-600 dark:text-gray-300"
              }`}
            >
              About
            </Link>
          </nav>
          
          <div className="flex items-center">
            <ThemeToggle />
            <button className="md:hidden ml-2 p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 