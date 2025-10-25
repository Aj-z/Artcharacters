import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CharacterDisplay({ character }) {
  const [toggled, setToggled] = useState(false);

  if (!character)
    return (
      <div className="flex items-center justify-center text-gray-400 text-lg">
        No Character Selected
      </div>
    );

  return (
    <motion.div
      key={character.name}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="flex flex-col mt-[10px] md:flex-row md:items-start gap-6 w-full"
    >
      {/*  Image container */}
      <div className="relative w-[90%] h-full rounded-lg overflow-hidden flex items-center justify-center">
        {/* Floating circle button (not part of the image itself) */}
        <button
          onClick={() => setToggled(!toggled)}
          className="absolute top-4 left-4 z-30 w-12 h-12 rounded-full bg-black/10 text-white text-lg font-bold 
                     flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/30 
                     hover:scale-110 hover:bg-black/10 transition-all duration-300"
        >
          {toggled ? "←" : "→"}
        </button>

        {/*  Image with animation */}
        <motion.img
          key={toggled ? "alt" : "main"}
          src={toggled ? character.altImage || character.image : character.image}
          alt={character.name}
          initial={{ opacity: 0, x: -20, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover rounded-lg drop-shadow-[0_0_10px_rgba(255,255,0,0.5)]"
        />
      </div>

      {/* Right-side info */}
      <div className="flex flex-col justify-start w-full">
        <div className="text-center">
          <h2 className="mt:auto font-italiana text-4xl text-black md:mt-[-3rem]">
            {character.name}
          </h2>
        </div>

        {/* Rounded Border Box */}
        <div
          style={{
            border: "1px solid #C3C3C3",
            width: "100%",
            height: "10px",
            borderRadius: "100px",
            background: "none",
          }}
          className="flex items-center justify-center mb-4 bg-gray-100"
        ></div>

        <div className="text-gray-900">{character.description}</div>
      </div>
    </motion.div>
  );
}
