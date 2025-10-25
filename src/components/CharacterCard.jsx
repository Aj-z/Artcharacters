import React from "react";
import { motion } from "framer-motion";

export default function CharacterCard({ character, isActive, onSelect }) {
  return (
    <motion.div
      onClick={() => onSelect(character)}
      whileHover={{ scale: 1.05 }}
      className={`relative rounded-xl overflow-hidden border-2 cursor-pointer 
        h-[50px] ${isActive ? "border-green-500 shadow-green-100 shadow-lg" : "border-gray-600"}`}
    >
      <img
        src={character.portrait}
        alt={character.cardname}
        className="w-full h-48 object-cover"
      />
     
    </motion.div>
  );
}
