import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";
import { type Section } from "@/lib/mdx";

interface MainLayoutProps {
  children: React.ReactNode;
  sections: Section[];
  showSidebar?: boolean;
}

export function MainLayout({ children, sections, showSidebar = true }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row">
            {showSidebar && <Sidebar sections={sections} />}
            
            <main className="flex-1 py-6 px-4">
              {children}
            </main>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 