"use client";

import ReactMarkdown from "react-markdown";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-blue dark:prose-invert max-w-none">
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </div>
  );
} 