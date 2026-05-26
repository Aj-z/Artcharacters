import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50/40 relative antialiased selección-emerald">
      {/* Visual background atmospheric shapes */}
      <div className="absolute top-0 left-1/4 -z-10 w-[400px] h-[400px] rounded-full bg-zinc-100/40 blur-[100px] pointer-events-none select-none" />
      <div className="absolute bottom-0 right-1/4 -z-10 w-[500px] h-[500px] rounded-full bg-zinc-200/20 blur-[120px] pointer-events-none select-none" />

      {/* Primary Page Canvas */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 z-0">
        {children}
      </main>

      {/* Premium Minimal Footer */}
      <footer className="w-full border-t border-zinc-100 bg-white/50 backdrop-blur-md py-6 md:py-8 mt-12 text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10.5px]">
          <div className="flex items-center gap-1.5 text-zinc-500">
            <span>&copy; {new Date().getFullYear()} AJLORIA.</span>
            <span>All artistic conceptual assets and visual designs are reserved property.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-zinc-700 cursor-help transition-colors">Digital Art Platform v1.2</span>
            <span>&bull;</span>
            <a 
              href="https://github.com/Aj-z/Artcharacters" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-zinc-700 underline underline-offset-2 transition-colors"
            >
              Source Repository
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
