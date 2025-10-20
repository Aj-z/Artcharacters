import React from "react";
import { motion } from "framer-motion";

export default function CharacterDisplay({ character }) {
  if (!character) return (
    <div className="flex items-center justify-center text-gray-400 text-lg">
      Select a character
    </div>
  );

  return (
    <motion.div
      key={character.name}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="flex flex-col items-center"
    >
      <img
        src={character.image}
        alt={character.name}
        className="w-72 h-[450px] mb-4 drop-shadow-[0_0_15px_red]"
      />
      <h2 className="text-2xl font-bold mb-2">{character.name}</h2>
      <div className="text-gray-300">
        Power: {character.stats.power} | Speed: {character.stats.speed} | Technique: {character.stats.technique}
      </div>
    </motion.div>
  );
}