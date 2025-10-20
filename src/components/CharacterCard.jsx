import React from "react";
import { motion } from "framer-motion";

export default function CharacterCard({ character, isActive, onSelect }) {
  return (
    <motion.div
      onClick={() => onSelect(character)}
      whileHover={{ scale: 1.05 }}
      className={`relative rounded-xl overflow-hidden border-2 cursor-pointer 
        h-[100px] ${isActive ? "border-red-500 shadow-red-500 shadow-lg" : "border-gray-600"}`}
    >
      <img
        src={character.portrait}
        alt={character.name}
        className="w-full h-48 object-cover"
      />
      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-center py-2 font-semibold">
        {character.name}
      </div>
    </motion.div>
  );
}
