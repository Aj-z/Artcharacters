import { useState } from "react";
import { Link, Github, Instagram, Share2, Menu, X, BookOpen, Compass } from "lucide-react";

interface HeaderProps {
  onSearch: (term: string) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function Header({ onSearch, selectedCategory, onSelectCategory }: HeaderProps) {
  const [showSocials, setShowSocials] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (val: string) => {
    setSearchTerm(val);
    onSearch(val);
  };

  const categories = [
    { id: "all", label: "All Works" },
    { id: "Hormone", label: "Hormones" },
    { id: "Neurotransmitter", label: "Neurotransmitters" },
    { id: "Wanderer", label: "Wanderers" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 md:px-8 h-18 flex items-center justify-between">
        {/* LOGO & TITLE */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Aj-z"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col"
          >
            <h1 className="font-italiana text-xl md:text-2xl font-bold tracking-[0.25em] text-zinc-900 group-hover:text-zinc-600 transition-colors uppercase">
              AJLORIA
            </h1>
            <span className="text-[9px] font-mono tracking-[0.18em] text-zinc-400 group-hover:text-zinc-500 uppercase transition-colors">
              Character Portfolio
            </span>
          </a>

          {/* Desktop Categories pills */}
          <nav className="hidden md:flex items-center gap-1.5 ml-4 bg-zinc-50 p-1 rounded-full border border-zinc-200/50">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all uppercase ${
                  selectedCategory === cat.id
                    ? "bg-zinc-900 text-white shadow-sm font-semibold"
                    : "text-zinc-500 hover:text-zinc-800 hover:bg-zinc-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>
        </div>

        {/* RIGHT ACTION ROW */}
        <div className="hidden md:flex items-center gap-4">
          {/* Elegant Search Input */}
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search designs..."
              className="w-48 xl:w-60 h-9 font-mono text-xs pl-8 pr-4 border border-zinc-200 rounded-full focus:outline-none focus:border-zinc-800 transition-colors bg-zinc-50/50"
            />
            <svg
              className="absolute left-3 top-2.5 w-3.5 h-3.5 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* About / Github Link */}
          <a
            href="https://github.com/Aj-z/Artcharacters"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 h-9 px-3.5 rounded-full border border-zinc-200 font-mono text-xs text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 transition-all bg-white"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Repository</span>
          </a>

          {/* Socials Popover Trigger */}
          <div className="relative">
            <button
              onClick={() => setShowSocials(!showSocials)}
              className="flex items-center gap-1.5 h-9 px-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 font-mono text-xs text-white tracking-wider transition-all shadow-sm select-none"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Connect</span>
            </button>

            {showSocials && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setShowSocials(false)} />
                <div className="absolute right-0 mt-2 w-48 bg-white border border-zinc-100 rounded-xl shadow-xl p-2 z-20 font-mono text-xs text-zinc-600 space-y-1">
                  <span className="block px-3 py-1.5 text-[10px] text-zinc-400 uppercase tracking-widest border-b border-zinc-50">Artist Portfolios</span>
                  
                  <a
                    href="https://cara.app/ajloria/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-zinc-50 hover:text-zinc-950 transition-colors"
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>Cara Portfolio</span>
                  </a>

                  <a
                    href="https://www.instagram.com/ajloria/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-zinc-50 hover:text-zinc-950 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href="https://www.facebook.com/AAjloria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-zinc-50 hover:text-zinc-950 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Facebook Page</span>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>

        {/* MOBILE TRIGGER */}
        <div className="flex md:hidden items-center gap-2">
          {/* Search Trigger for Mobile */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-zinc-100 bg-zinc-50"
          >
            {showMobileMenu ? <X className="w-4 h-4 text-zinc-800" /> : <Menu className="w-4 h-4 text-zinc-800" />}
          </button>
        </div>
      </div>

      {/* MOBILE COLLAPSIBLE TRAY */}
      {showMobileMenu && (
        <div className="md:hidden w-full border-t border-zinc-100 bg-white p-4 space-y-4 animate-in fade-in slide-in-from-top duration-300">
          {/* Mobile Search input */}
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search design assets..."
              className="w-full h-10 font-mono text-xs pl-9 pr-4 border border-zinc-200 rounded-full focus:outline-none"
            />
            <svg
              className="absolute left-3.5 top-3 w-4 h-4 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Categories select in Mobile */}
          <div className="space-y-1.5">
            <span className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest pl-1">Categories</span>
            <div className="grid grid-cols-2 gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    onSelectCategory(cat.id);
                    setShowMobileMenu(false);
                  }}
                  className={`py-2 px-3 rounded-xl text-center text-xs font-mono uppercase tracking-wider transition-all border ${
                    selectedCategory === cat.id
                      ? "bg-zinc-900 border-zinc-900 text-white font-semibold"
                      : "bg-zinc-50 text-zinc-600 border-zinc-100"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect & Portfolios in Mobile */}
          <div className="space-y-1.5 pt-2 border-t border-zinc-50">
            <span className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest pl-1">Artist Contacts</span>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://cara.app/ajloria/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-white font-mono text-xs text-zinc-600"
              >
                <Compass className="w-3.5 h-3.5 text-zinc-400" />
                <span>Cara</span>
              </a>
              <a
                href="https://www.instagram.com/ajloria/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-white font-mono text-xs text-zinc-600"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-500" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/AAjloria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-white font-mono text-xs text-zinc-600"
              >
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                <span>Facebook</span>
              </a>
              <a
                href="https://github.com/Aj-z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-white font-mono text-xs text-zinc-600"
              >
                <Github className="w-3.5 h-3.5 text-zinc-800" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
