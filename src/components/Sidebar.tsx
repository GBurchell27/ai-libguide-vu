"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Section } from "@/lib/mdx";

interface SidebarProps {
  sections: Section[];
}

export function Sidebar({ sections }: SidebarProps) {
  const pathname = usePathname();
  
  return (
    <div className="w-full md:w-64 lg:w-72 shrink-0 border-r border-gray-200 dark:border-gray-800 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto py-6 px-4">
      <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">Guide Sections</h3>
      <nav className="space-y-1">
        {sections.map((section) => (
          <Link
            key={section.slug}
            href={`/sections/${section.slug}`}
            className={`block px-3 py-2 text-sm rounded-md transition-colors ${
              pathname === `/sections/${section.slug}`
                ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {section.title}
          </Link>
        ))}
      </nav>
    </div>
  );
} 