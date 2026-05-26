import { useState, useMemo, useEffect } from "react";
import MainLayout from "./Layouts/MainLayout";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";
import CharacterDisplay from "./components/CharacterDisplay";
import { characters, Character } from "./data/characters";
import { SearchX, BookOpen, Compass, Award } from "lucide-react";

export default function App() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    characters.length > 0 ? characters[0] : null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isEmbedded, setIsEmbedded] = useState(false);

  // Sync URL state to initial state on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isEmbedQuery = params.get("embed") === "true";
    setIsEmbedded(isEmbedQuery);

    const charQuery = params.get("char");
    if (charQuery) {
      const found = characters.find(
        (c) => c.cardname.toLowerCase() === charQuery.toLowerCase()
      );
      if (found) {
        setSelectedCharacter(found);
      }
    }
  }, []);

  // Update URL search parameters when selecting a character
  const handleSelectCharacter = (char: Character | null) => {
    setSelectedCharacter(char);
    if (char) {
      const params = new URLSearchParams(window.location.search);
      params.set("char", char.cardname);
      const nextUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState({ path: nextUrl }, "", nextUrl);
    }
  };

  // Filter logic for character blueprints
  const filteredCharacters = useMemo(() => {
    return characters.filter((char) => {
      const matchesSearch =
        char.cardname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.archetype.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.formula.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || char.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Clean, high-performance embed viewport specifically styled for iframe targets
  if (isEmbedded) {
    return (
      <div className="min-h-screen bg-white p-4 md:p-6 flex flex-col justify-between">
        <div className="flex-1 flex items-center justify-center">
          <CharacterDisplay character={selectedCharacter} isEmbedded={true} />
        </div>
        {/* Compact elegant attribution watermark for embed viewers */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-zinc-100 text-[10px] font-mono text-zinc-400">
          <span className="uppercase tracking-widest">AJLORIA Conceptual Design Portfolio</span>
          <a
            href={`${window.location.origin}${window.location.pathname}?char=${selectedCharacter ? encodeURIComponent(selectedCharacter.cardname) : ""}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-900 transition-colors uppercase font-bold tracking-wider flex items-center gap-1 hover:underline"
          >
            <span>View Interactive Deck</span>
            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col">
      {/* Universal header navigation */}
      <Header
        onSearch={setSearchQuery}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <MainLayout>
        {/* Banner/Introduction */}
        <section className="mb-12 text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-orange-200/60 bg-orange-50 text-orange-700 text-[10px] font-mono uppercase tracking-widest font-semibold">
            <Award className="w-3.5 h-3.5" /> Character Portfolio Showcase
          </div>
          <h2 className="font-italiana text-3xl md:text-5xl text-zinc-900 font-bold tracking-wide">
            Character Designs
          </h2>
          <p className="text-zinc-500 text-sm font-light leading-relaxed font-mono uppercase tracking-wider">
            A collection of personifications of scientific concepts, theories, and phenomena, visualized as character archetypes. 
          </p>
        </section>

        <div className="space-y-16">
          {/* Active Character Interactive Showcase Room */}
          <section className="bg-white rounded-[32px] border border-zinc-100/80 p-5 md:p-8 shadow-2xl relative overflow-hidden">
            <CharacterDisplay character={selectedCharacter} />
          </section>

          {/* Selector Exhibit Catalog Section */}
          <section className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200/60 pb-4 gap-3">
              <div>
                <h3 className="font-italiana text-2xl md:text-3xl font-bold tracking-wider text-zinc-900 uppercase">
                  blueprints deck
                </h3>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1.5">
                  Showing {filteredCharacters.length} of {characters.length} character archetypes
                </p>
              </div>

              {/* Mini breadcrumb details */}
              {selectedCharacter && (
                <div className="hidden md:flex items-center gap-2 font-mono text-[10.5px] text-zinc-400 bg-zinc-100/50 px-3.5 py-1.5 rounded-full border border-zinc-200/25">
                  <span className="uppercase">Focus:</span>
                  <span className="font-bold text-zinc-700 uppercase">{selectedCharacter.cardname}</span>
                  <span>&bull;</span>
                  <span className="font-semibold text-zinc-500 uppercase">{selectedCharacter.formula}</span>
                </div>
              )}
            </div>

            {/* Grid of Exhibit Cards / empty handle */}
            {filteredCharacters.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                {filteredCharacters.map((char) => (
                  <CharacterCard
                    key={char.name}
                    character={char}
                    isActive={selectedCharacter?.name === char.name}
                    onSelect={(selectedChar) => handleSelectCharacter(selectedChar)}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center border-2 border-dashed border-zinc-200 rounded-3xl bg-zinc-50/50 h-[300px]">
                <SearchX className="w-10 h-10 text-zinc-300 stroke-[1.5] mb-3" />
                <h4 className="text-sm font-mono text-zinc-700 uppercase tracking-widest font-bold">
                  No matching designs
                </h4>
                <p className="text-xs text-zinc-400 max-w-xs mt-1.5 leading-relaxed font-light">
                  We couldn't find any molecular blueprints matching your search terms. Try searching for a formula or a different tag instead.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="mt-4 font-mono text-[11px] uppercase tracking-widest px-4 py-2 border border-zinc-200 rounded-full hover:bg-zinc-100 transition-colors bg-white text-zinc-700 font-semibold"
                >
                  Reset Active Filters
                </button>
              </div>
            )}
          </section>
        </div>
      </MainLayout>
    </div>
  );
}
