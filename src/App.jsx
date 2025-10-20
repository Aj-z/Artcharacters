
import React, { useState } from "react";
import CharacterCard from "./components/CharacterCard";
import CharacterDisplay from "./components/CharacterDisplay";
import { characters } from "./data/characters";

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-4xl font-bold mb-8 tracking-widest text-red-500">
        TEKKEN CHARACTER SELECT
      </h1>

      <div className="flex flex-col-reverse lg:flex-col-reversegap-10 w-full max-w-6xl">
        {/* Character Grid */}
        <div className="md:grid grid-cols-5 ld:grid-cols-3 gap-2 flex-1 w-[500px] m-auto place-items-center " >
          {characters.map((c) => (
            <CharacterCard
              key={c.name}
              character={c}
              isActive={selected?.name === c.name}
              onSelect={setSelected}
            />
          ))}
        </div>

        {/* Character Display */}
        <div className="flex-1 flex items-center justify-center border-2 border-red-500 rounded-2xl p-4 bg-black bg-opacity-50">
          <CharacterDisplay character={selected} />
        </div>
      </div>
    </div>
  );
}

export default App;