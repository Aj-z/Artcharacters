import React, { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import CharacterCard from "./components/CharacterCard";
import CharacterDisplay from "./components/CharacterDisplay";
import { characters } from "./data/characters";

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <MainLayout>
      <div className="mt-[5em] md:mt-auto min-h-screen bg-gradient-to-br from-gray via-gray-100 to-white flex flex-col items-center justify-center text-white p-4">
        <div className="w-full max-w-[90rem] grid grid-cols-2 items-end justify-between">
          <div>
            <h1 className="font-italiana text-4xl font-bold tracking-widest text-black leading-tight">
              Character <br /> Designs
            </h1>
          </div>
          <div className="text-center">
            <h2 className="text-lg text-gray-400">
              {selected ? "" : ""}
            </h2>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-col-reverse w-full max-w-[90rem]">
          <div className="grid grid-cols-2 gap-2 w-auto md:grid md:grid-cols-5 lg:grid-cols-5 md:w-[500px] m-auto place-items-center flex-1">
            {characters.map((c) => (
              <CharacterCard
                key={c.name}
                character={c}
                isActive={selected?.name === c.name}
                onSelect={setSelected}
              />
            ))}
          </div>

          <div
            style={{
              border: "solid",
              borderWidth: "1px",
              borderColor: "#C3C3C3",
              width: "100%",
              height: "10px",
              borderRadius: "100px",
              background: "none",
            }}
            className="flex items-center justify-center mb-4 bg-gray-100"
          ></div>

          <div className="flex-1 flex items-center bg-white bg-opacity-50 max-w-[90rem]">
            <CharacterDisplay character={selected} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
