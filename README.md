# AI in Academia - LibGuide

A comprehensive Next.js application that serves as a guide to artificial intelligence applications in academic research and teaching.

## Features

- **Modern UI**: Clean, responsive design with Tailwind CSS
- **Dark Mode**: Support for light and dark themes
- **Content Management**: Markdown-based content for easy updates
- **Search Functionality**: Filter and find relevant topics
- **Dynamic Routing**: Separate pages for each section
- **SEO Optimized**: Meta tags, OpenGraph, and structured data
- **Accessibility**: WCAG-compliant design

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown with gray-matter for frontmatter
- **Rendering**: React Markdown for content display
- **Theming**: next-themes for dark mode support

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ai-libguide-vu.git
cd ai-libguide-vu
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
ai-libguide-vu/
├── public/              # Static assets
├── src/
│   ├── app/             # App Router pages
│   │   ├── about/       # About page
│   │   ├── search/      # Search page
│   │   ├── sections/    # Dynamic section pages
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   ├── components/      # React components
│   ├── content/         # Markdown content
│   │   └── sections/    # Section content files
│   └── lib/             # Utility functions
├── tailwind.config.js   # Tailwind configuration
└── next.config.ts       # Next.js configuration
```

## Content Management

The guide content is stored in Markdown files in the `src/content/sections` directory. Each file includes frontmatter with metadata:

```markdown
---
title: "Section Title"
slug: "section-slug"
description: "Section description"
order: 1
---

# Content goes here
```

To add or update content, simply edit these files or add new ones following the same format.

## Customization

- **Colors**: Edit the color scheme in `tailwind.config.js`
- **Typography**: Modify font settings in `tailwind.config.js` and `src/app/layout.tsx`
- **Layout**: Adjust the layout components in `src/components/`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- VU University for supporting this project
- The Next.js and React communities for their excellent documentation and tools
