import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Character } from "../data/characters";
import ImageWithFallback from "./ImageWithFallback";
import { Sparkles, Activity, FileText, Compass, ExternalLink, Maximize2, Zap, Share2, Code, Copy, Check, Info } from "lucide-react";

interface CharacterDisplayProps {
  character: Character | null;
  isEmbedded?: boolean;
}

export default function CharacterDisplay({ character, isEmbedded = false }: CharacterDisplayProps) {
  const [isAltImage, setIsAltImage] = useState(false);
  const [activeTab, setActiveTab] = useState<"bio" | "science" | "trivia">("bio");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSharePanel, setShowSharePanel] = useState(false);
  const [copiedType, setCopiedType] = useState<"url" | "embed" | "markdown" | null>(null);

  // Reset tab and image view when selection changes
  useEffect(() => {
    setIsAltImage(false);
    setActiveTab("bio");
  }, [character]);

  if (!character) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center border-2 border-dashed border-zinc-200 rounded-2xl min-h-[450px] w-full bg-white/40 backdrop-blur-sm">
        <Compass className="w-12 h-12 text-zinc-300 stroke-[1] mb-4 animate-spin-slow" />
        <h3 className="font-italiana text-2xl text-zinc-800 font-bold tracking-widest lowercase first-letter:uppercase">
          The Gallery is Awaiting
        </h3>
        <p className="text-sm text-zinc-500 max-w-sm mt-2 font-light leading-relaxed">
          Select a chemical archetype from the catalog below to unlock their bios, molecular profiles, and digital art profiles.
        </p>
      </div>
    );
  }

  // Active theme states
  const activeColorGlow: Record<string, string> = {
    emerald: "shadow-emerald-500/10 border-emerald-100",
    indigo: "shadow-indigo-500/10 border-indigo-100",
    amber: "shadow-amber-500/10 border-amber-100",
    pink: "shadow-pink-500/10 border-pink-100",
    sky: "shadow-sky-500/10 border-sky-100",
    slate: "shadow-slate-500/10 border-slate-100",
    purple: "shadow-purple-500/10 border-purple-100",
    red: "shadow-red-500/10 border-red-100",
    green: "shadow-green-500/10 border-green-100",
    zinc: "shadow-zinc-500/10 border-zinc-100",
  };

  const activeBgMap: Record<string, string> = {
    emerald: "bg-emerald-500",
    indigo: "bg-indigo-500",
    amber: "bg-amber-500",
    pink: "bg-pink-500",
    sky: "bg-sky-500",
    slate: "bg-slate-500",
    purple: "bg-purple-500",
    red: "bg-red-500",
    green: "bg-green-500",
    zinc: "bg-zinc-500",
  };

  const textHexMap: Record<string, string> = {
    emerald: "text-emerald-600",
    indigo: "text-indigo-600",
    amber: "text-amber-600",
    pink: "text-pink-600",
    sky: "text-sky-600",
    slate: "text-slate-600",
    purple: "text-purple-600",
    red: "text-red-600",
    green: "text-green-600",
    zinc: "text-zinc-600",
  };

  const borderClass = activeColorGlow[character.color.primary] || activeColorGlow.zinc;
  const barColor = activeBgMap[character.color.primary] || activeBgMap.zinc;
  const textHex = textHexMap[character.color.primary] || textHexMap.zinc;

  const currentDisplayImage = isAltImage ? (character.altImage || character.image) : character.image;

  return (
    <div key={character.name} className="w-full">
      {/* Background radial atmosphere color glow */}
      <div 
        className="absolute right-0 top-1/4 -z-10 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.06] transition-all duration-1000 select-none pointer-events-none"
        style={{ backgroundColor: character.color.hex }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Art Gallery Picture Frame (Span 5) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className={`relative w-full aspect-[4/5] rounded-3xl overflow-hidden border bg-zinc-50 p-3 shadow-2xl transition-all duration-500 ${borderClass}`}>
            
            {/* Gallery interactive buttons */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-30 pointer-events-none">
              {/* Alternate design switcher with visual cues */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsAltImage(!isAltImage);
                }}
                className="pointer-events-auto h-11 px-4 rounded-full bg-black/60 text-white font-mono text-xs font-semibold flex items-center gap-2 shadow-lg backdrop-blur-md border border-white/20 hover:scale-105 active:scale-95 transition-all"
                title="Swap layout version"
              >
                <span>{isAltImage ? "main art ✦" : "alt version ✦"}</span>
              </button>

              {/* Fullscreen Art Zoom Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFullscreen(true);
                }}
                className="pointer-events-auto w-11 h-11 rounded-full bg-black/60 text-white flex items-center justify-center shadow-lg backdrop-blur-md border border-white/20 hover:scale-105 active:scale-95 transition-all"
                title="View full-resolution artwork"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Main Picture Screen with framer animation */}
            <div 
              className="w-full h-full rounded-2xl overflow-hidden relative cursor-pointer"
              onDoubleClick={() => setIsAltImage(old => !old)}
            >
              <ImageWithFallback
                src={currentDisplayImage}
                fallbackSrcs={[isAltImage ? character.image : character.altImage, "/characters/oxy.png"]}
                characterName={character.cardname}
                formula={character.formula}
                themeColor={character.color}
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.03]"
              />

              {/* Dynamic decorative chemical formula watermark in corners */}
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 text-white/95 font-mono text-[10px] tracking-wider backdrop-blur-sm border border-white/10 z-10">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: character.color.hex }} />
                <span>{character.formula}</span>
              </div>
            </div>
          </div>

          {/* Prompt/Caption beneath art */}
          <span className="text-[11px] font-mono text-zinc-400 mt-3 flex items-center gap-1.5 tracking-wider">
            <span className="animate-pulse w-1 h-1 rounded-full bg-zinc-300" />
            Double click / Click top buttons to toggle alternate visuals or enter zoom view.
          </span>
        </div>

        {/* RIGHT COLUMN: Rich Dossier & Chemistry Profiles (Span 7) */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Main heading and Classification badges */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-100 pb-5 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-zinc-200 text-zinc-500 bg-zinc-50 uppercase tracking-widest`}>
                  {character.category}
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full text-white tracking-wider font-semibold z-10`} style={{ backgroundColor: character.color.hex }}>
                  {character.formula}
                </span>
              </div>
              <h2 className="font-italiana text-3xl md:text-5xl text-zinc-900 leading-none">
                {character.cardname}
              </h2>
              <p className="text-sm italic font-editorial text-zinc-400 mt-2">
                &ldquo;{character.archetype}&rdquo;
              </p>
            </div>

            {/* Share & Embed workshop pill */}
            {!isEmbedded && (
              <div className="shrink-0">
                <button
                  onClick={() => setShowSharePanel(!showSharePanel)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-xs border tracking-wider transition-all select-none shadow-sm ${
                    showSharePanel
                      ? "bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800"
                      : "bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                  }`}
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share ✦</span>
                </button>
              </div>
            )}
          </div>

          {/* Real-time Sharing & Iframe Embed Code Drawer */}
          <AnimatePresence>
            {showSharePanel && !isEmbedded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden border-b border-zinc-100"
              >
                <div className="py-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-800 font-bold flex items-center gap-1.5">
                      <Code className="w-4 h-4 text-zinc-500" /> Share & Embed Workshop
                    </h4>
                    <button 
                      onClick={() => setShowSharePanel(false)}
                      className="text-xs font-mono text-zinc-400 hover:text-zinc-600 underline"
                    >
                      close
                    </button>
                  </div>

                  {/* Options row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* OPTION 1: Direct link sharing */}
                    <div className="bg-zinc-50/50 p-3.5 rounded-xl border border-zinc-200/60 shadow-xs flex flex-col justify-between">
                      <div>
                        <span className="block text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1">Direct Share URL</span>
                        <p className="text-[11px] text-zinc-500 leading-relaxed font-light">Copy custom URL designed to pre-select {character.cardname} when loaded.</p>
                      </div>
                      <button
                        onClick={() => {
                          const url = `${window.location.origin}${window.location.pathname}?char=${encodeURIComponent(character.cardname)}`;
                          navigator.clipboard.writeText(url);
                          setCopiedType("url");
                          setTimeout(() => setCopiedType(null), 2000);
                        }}
                        className="mt-3 inline-flex items-center justify-center gap-1.5 h-8 w-full rounded-lg text-xs font-mono border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors text-zinc-700 font-medium"
                      >
                        {copiedType === "url" ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-emerald-600">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Link</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* OPTION 2: Standard Iframe Responsive embed */}
                    <div className="bg-zinc-50/50 p-3.5 rounded-xl border border-zinc-200/60 shadow-xs flex flex-col justify-between">
                      <div>
                        <span className="block text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1">HTML Iframe Embed</span>
                        <p className="text-[11px] text-zinc-500 leading-relaxed font-light">Embed an interactive standalone {character.cardname} blueprint inside other platforms.</p>
                      </div>
                      <button
                        onClick={() => {
                          const code = `<iframe src="${window.location.origin}${window.location.pathname}?char=${encodeURIComponent(character.cardname)}&embed=true" style="width:100%; max-width:650px; height:520px; border:none; border-radius:16px; box-shadow:0 10px 30px rgba(0,0,0,0.06);" title="AJLORIA - ${character.cardname}"></iframe>`;
                          navigator.clipboard.writeText(code);
                          setCopiedType("embed");
                          setTimeout(() => setCopiedType(null), 2000);
                        }}
                        className="mt-3 inline-flex items-center justify-center gap-1.5 h-8 w-full rounded-lg text-xs font-mono border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors text-zinc-700 font-medium"
                      >
                        {copiedType === "embed" ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-emerald-600">Copied Code!</span>
                          </>
                        ) : (
                          <>
                            <Code className="w-3.5 h-3.5" />
                            <span>Copy Code</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* OPTION 3: Thumbnail & Bio link for markdown */}
                    <div className="bg-zinc-50/50 p-3.5 rounded-xl border border-zinc-200/60 shadow-xs flex flex-col justify-between">
                      <div>
                        <span className="block text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1">Markdown Embed Card</span>
                        <p className="text-[11px] text-zinc-500 leading-relaxed font-light">Perfect copyable format for blogs, forums, or GitHub with artwork preview.</p>
                      </div>
                      <button
                        onClick={() => {
                          const md = `[![${character.cardname} - ${character.archetype}](${character.image})](${window.location.origin}${window.location.pathname}?char=${encodeURIComponent(character.cardname)})`;
                          navigator.clipboard.writeText(md);
                          setCopiedType("markdown");
                          setTimeout(() => setCopiedType(null), 2000);
                        }}
                        className="mt-3 inline-flex items-center justify-center gap-1.5 h-8 w-full rounded-lg text-xs font-mono border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors text-zinc-700 font-medium"
                      >
                        {copiedType === "markdown" ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-emerald-600">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Markdown</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Informative info banner */}
                  <div className="p-3 bg-zinc-100 rounded-xl flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <p className="text-[10px] font-mono text-zinc-500 leading-relaxed">
                      Embedding uses our custom optimized <code className="text-zinc-800 bg-white px-1 rounded font-bold">embed=true</code> frame mode, serving a high-performance interactive single card suited for responsive columns.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Interactive Navigation Tabs */}
          <div className="flex border-b border-zinc-100/80 gap-6 mt-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab("bio")}
              className={`pb-3 text-xs font-mono uppercase tracking-widest border-b-2 transition-all flex items-center gap-1.5 shrink-0 ${
                activeTab === "bio"
                  ? `border-zinc-800 text-zinc-900 font-bold`
                  : "border-transparent text-zinc-400 hover:text-zinc-600"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Biography</span>
            </button>
            <button
              onClick={() => setActiveTab("science")}
              className={`pb-3 text-xs font-mono uppercase tracking-widest border-b-2 transition-all flex items-center gap-1.5 shrink-0 ${
                activeTab === "science"
                  ? `border-zinc-800 text-zinc-900 font-bold`
                  : "border-transparent text-zinc-400 hover:text-zinc-600"
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Chemical Profile</span>
            </button>
            <button
              onClick={() => setActiveTab("trivia")}
              className={`pb-3 text-xs font-mono uppercase tracking-widest border-b-2 transition-all flex items-center gap-1.5 shrink-0 ${
                activeTab === "trivia"
                  ? `border-zinc-800 text-zinc-900 font-bold`
                  : "border-transparent text-zinc-400 hover:text-zinc-600"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Design Insights</span>
            </button>
          </div>

          {/* Tab content area */}
          <div className="py-6 min-h-[220px]">
            <AnimatePresence mode="wait">
              {activeTab === "bio" && (
                <motion.div
                  key="bio-tab"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="space-y-4"
                >
                  <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-light text-justify">
                    {character.description}
                  </p>
                </motion.div>
              )}

              {activeTab === "science" && (
                <motion.div
                  key="science-tab"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="space-y-6"
                >
                  {/* Performance Indicators / Stats */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5" /> Core Psychometric Attributes
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {character.attributes.map((attr) => (
                        <div key={attr.label} className="space-y-1">
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-zinc-500 uppercase tracking-wider">{attr.label}</span>
                            <span className="text-zinc-800 font-bold">{attr.value}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${attr.value}%` }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              className={`h-full ${barColor} rounded-full`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Chemistry Card */}
                  <div className="p-4 rounded-xl border border-zinc-100 bg-zinc-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h5 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Chemical Formula</h5>
                      <span className="font-editorial italic text-2xl text-zinc-800 font-bold">{character.formula}</span>
                    </div>
                    <div className="space-y-1">
                      <h5 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Biological Target</h5>
                      <span className="text-sm font-mono text-zinc-600">{character.category === "Hormone" ? "Endocrine / Blood Stream" : "Synaptic / Neural Receptor"}</span>
                    </div>
                    <a
                      href={`https://en.wikipedia.org/wiki/${character.wiki || character.cardname}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border border-zinc-200 bg-white shadow-sm text-zinc-600 hover:text-zinc-800 hover:border-zinc-300 transition-all self-start md:self-auto"
                    >
                      <span>Wikipedia</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              )}

              {activeTab === "trivia" && (
                <motion.div
                  key="trivia-tab"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="space-y-3"
                >
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-1">Artist Design Insights</h4>
                  <ul className="space-y-2.5">
                    {character.trivia.map((fact, index) => (
                      <motion.li
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        key={index}
                        className="flex items-start gap-2.5 text-zinc-600 text-sm leading-relaxed"
                      >
                        <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center font-mono text-[10px] font-bold border border-zinc-200 text-zinc-400 bg-white select-none mt-0.5">
                          {index + 1}
                        </span>
                        <span>{fact}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* FULLSCREEN ART VIEW MODAL */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFullscreen(false)}
            className="fixed inset-0 bg-black/95 z-[999] flex flex-col items-center justify-center p-4 cursor-zoom-out select-none"
          >
            {/* Alt design info watermark */}
            <div className="absolute top-6 left-6 text-white/50 text-[10.5px] font-mono tracking-widest pointer-events-none uppercase">
              {character.name} &nbsp;//&nbsp; {character.formula}
            </div>

            {/* Back to Gallery Close button */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white font-mono text-xs tracking-wider border border-white/20 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md transition-all uppercase"
            >
              esc / close
            </button>

            {/* Centered Image */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-full max-h-[85vh] overflow-hidden rounded-xl flex items-center justify-center shadow-2xl"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <img
                src={currentDisplayImage}
                alt={character.name}
                className="max-w-full max-h-[85vh] object-contain rounded-xl select-none"
              />
            </motion.div>

            {/* Interactive instructions inside fullscreen */}
            <span className="text-white/40 font-mono text-[10px] mt-4 tracking-widest pointer-events-none uppercase">
              Click anywhere outside the artwork to narrow down back to original layout.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
