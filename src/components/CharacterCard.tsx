import React from "react";
import { motion } from "framer-motion";
import { Character } from "../data/characters";
import ImageWithFallback from "./ImageWithFallback";

interface CharacterCardProps {
  key?: React.Key;
  character: Character;
  isActive: boolean;
  onSelect: (character: Character) => void;
}

export default function CharacterCard({ character, isActive, onSelect }: CharacterCardProps) {
  // Color configuration based on theme
  const borderActiveColors: Record<string, string> = {
    emerald: "border-emerald-500 shadow-emerald-500/10 ring-emerald-500/20",
    indigo: "border-indigo-500 shadow-indigo-500/10 ring-indigo-500/20",
    amber: "border-amber-500 shadow-amber-500/10 ring-amber-500/20",
    pink: "border-pink-500 shadow-pink-500/10 ring-pink-500/20",
    sky: "border-sky-500 shadow-sky-500/10 ring-sky-500/20",
    slate: "border-slate-500 shadow-slate-500/10 ring-slate-500/20",
    purple: "border-purple-500 shadow-purple-500/10 ring-purple-500/20",
    red: "border-red-500 shadow-red-500/10 ring-red-500/20",
    green: "border-green-500 shadow-green-500/10 ring-green-500/20",
    zinc: "border-zinc-500 shadow-zinc-500/10 ring-zinc-500/20",
  };

  const activeBorderClass = borderActiveColors[character.color.primary] || borderActiveColors.zinc;

  return (
    <motion.div
      onClick={() => onSelect(character)}
      whileHover={{ scale: 1.03, y: -4, boxShadow: "0 12px 20px -8px rgba(0,0,0,0.15), 0 4px 6px -4px rgba(0,0,0,0.1)" }}
      whileTap={{ scale: 0.98 }}
      className={`relative rounded-xl overflow-hidden cursor-pointer select-none border transition-all duration-300 flex flex-col w-full aspect-[3/4] bg-white group
        ${isActive 
          ? `shadow-md ring-2 ${activeBorderClass}` 
          : "border-zinc-200/60 hover:border-zinc-300 shadow-sm"
        }
      `}
    >
      {/* Thumbnail Area - Flexible height to preserve 3:4 overall proportions */}
      <div className="relative w-full flex-1 min-h-0 overflow-hidden bg-zinc-50">
        <ImageWithFallback
          src={character.portrait}
          fallbackSrcs={[character.image, character.altImage]}
          characterName={character.cardname}
          formula={character.formula}
          themeColor={character.color}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Absolute category tag inside image */}
        <span className="absolute top-2 right-2 text-[8px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-md backdrop-blur-md text-white font-medium bg-black/40 z-10 border border-white/5">
          {character.category}
        </span>
      </div>

      {/* Info Area - Fixed height to ensure perfect alignment in grid columns */}
      <div className="p-3 flex flex-col justify-between shrink-0 bg-zinc-50/70 border-t border-zinc-100 h-18">
        <div className="flex items-start justify-between gap-1.5 w-full">
          <h3 className="font-italiana font-bold text-xs sm:text-sm text-zinc-900 leading-tight truncate uppercase tracking-wider">
            {character.cardname}
          </h3>
          <span className="text-[8px] font-mono text-zinc-400 font-semibold shrink-0 bg-white shadow-3xs px-1.5 py-0.5 rounded border border-zinc-100">
            {character.formula}
          </span>
        </div>
        
        <p className="text-[10px] text-zinc-500 font-mono text-[9px] uppercase tracking-wider truncate leading-relaxed">
          {character.archetype}
        </p>
      </div>

      {/* Miniature line at top of Active Card */}
      {isActive && (
        <div 
          className="absolute top-0 left-0 right-0 h-1 z-20"
          style={{ backgroundColor: character.color.hex }}
        />
      )}
    </motion.div>
  );
}
