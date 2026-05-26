import { useState, ComponentPropsWithoutRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageWithFallbackProps {
  src?: string;
  fallbackSrcs: string[];
  characterName: string;
  formula?: string;
  themeColor: {
    primary: string;
    hex: string;
    bgGradient: string;
  };
  className?: string;
  alt?: string;
}

export default function ImageWithFallback({
  src,
  fallbackSrcs,
  characterName,
  formula,
  themeColor,
  className,
  alt,
}: ImageWithFallbackProps) {
  const [currentSrcIndex, setCurrentSrcIndex] = useState(-1); // -1 is the initial 'src'
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    const nextIndex = currentSrcIndex + 1;
    if (nextIndex < fallbackSrcs.length) {
      setCurrentSrcIndex(nextIndex);
    } else {
      setIsFailed(true);
      setIsLoaded(true); // stop showing spinner
    }
  };

  const activeSrc = currentSrcIndex === -1 ? src : fallbackSrcs[currentSrcIndex];

  // Colors mapping for Tailwind classes
  const colorMap: Record<string, { border: string, bg: string, text: string, ring: string }> = {
    emerald: { border: "border-emerald-200", bg: "bg-emerald-50", text: "text-emerald-700", ring: "ring-emerald-400/20" },
    indigo: { border: "border-indigo-200", bg: "bg-indigo-50", text: "text-indigo-700", ring: "ring-indigo-400/20" },
    amber: { border: "border-amber-200", bg: "bg-amber-50", text: "text-amber-700", ring: "ring-amber-400/20" },
    pink: { border: "border-pink-200", bg: "bg-pink-50", text: "text-pink-700", ring: "ring-pink-400/20" },
    sky: { border: "border-sky-200", bg: "bg-sky-50", text: "text-sky-700", ring: "ring-sky-400/20" },
    slate: { border: "border-slate-200", bg: "bg-slate-50", text: "text-slate-700", ring: "ring-slate-400/20" },
    purple: { border: "border-purple-200", bg: "bg-purple-50", text: "text-purple-700", ring: "ring-purple-400/20" },
    red: { border: "border-red-200", bg: "bg-red-50", text: "text-red-700", ring: "ring-red-400/20" },
    green: { border: "border-green-200", bg: "bg-green-50", text: "text-green-700", ring: "ring-green-400/20" },
    zinc: { border: "border-zinc-200", bg: "bg-zinc-50", text: "text-zinc-700", ring: "ring-zinc-400/20" },
  };

  const styleSet = colorMap[themeColor.primary] || colorMap.zinc;

  return (
    <div className="relative w-full h-full min-h-0 flex items-center justify-center bg-zinc-50/50 overflow-hidden group">
      {/* Blurred glow in the background */}
      <div 
        className="absolute inset-0 opacity-10 blur-xl scale-95 transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundColor: themeColor.hex }}
      />

      {/* Loading state indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-50/80 z-10">
          <div className="w-8 h-8 rounded-full border-2 border-zinc-200 border-t-zinc-800 animate-spin" />
        </div>
      )}

      <AnimatePresence mode="wait">
        {isFailed ? (
          <motion.div
            key="fallback-vector"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className={`flex flex-col items-center justify-center p-6 w-full h-full text-center border rounded-2xl ${styleSet.border} ${styleSet.bg}`}
          >
            {/* Minimal Chemistry Molecule Diagram Placeholder */}
            <div className="relative mb-4 w-16 h-16 flex items-center justify-center">
              <svg className={`w-12 h-12 ${styleSet.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 16.25a3 3 0 11-6 0c0-1.657 1.343-3 3-3s3 1.343 3 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 10a3 3 0 11-6 0c0-1.657 1.343-3 3-3s3 1.343 3 3z" />
              </svg>
              <span className={`absolute bottom-0 right-0 inline-flex items-center rounded-md px-1.5 py-0.5 text-xs font-mono font-medium ring-1 ring-inset ${styleSet.text} ${styleSet.ring}`}>
                {formula || "N/A"}
              </span>
            </div>
            <h4 className="font-italiana text-xl text-zinc-900 font-semibold tracking-wide lowercase first-letter:uppercase">
              {characterName}
            </h4>
            <span className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-widest bg-white/60 px-2 py-0.5 rounded-full">
              {formula}
            </span>
          </motion.div>
        ) : (
          <motion.img
            key={activeSrc}
            src={activeSrc}
            alt={alt || characterName}
            onLoad={handleLoad}
            onError={handleError}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className={`w-full h-full object-cover transition-all duration-700 select-none ${className}`}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
