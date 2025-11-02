import React from "react";
import ToggleButton from "./ToggleButton";

function Header({ onToggleHeader, onToggleSidebar, showHeaderContent, showSidebar }) {
  return (
    <header className="absolute top-6 left-8 text-black z-50">
      <div className="flex flex-col items-start">
        {/* Top Row */}
        <div className="flex items-center space-x-2">
          <h1 className="font-italiana text-2xl font-bold tracking-widest">
            <a href="https://github.com/Aj-z">AJLORIA</a>
          </h1>

          {/* Header toggle button (dot beside AJLORIA) */}
          <ToggleButton onClick={onToggleHeader} />

          {/* Header content beside the dot */}
          <div
            className={`ml-3 text-gray-600 transition-all duration-500 ease-in-out ${
              showHeaderContent
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-5 pointer-events-none"
            }`}
          >
             <p className="hover:text-black transition" href=""><a href="/">Home</a> / <a href="https://github.com/Aj-z/Artcharacters">About</a></p>
          </div>
        </div>

        {/* Bottom dot + animated vertical sidebar */}
        <div className="flex flex-col items-center ml-[3rem] mt-2 relative">
          {/* Sidebar toggle button */}
          <ToggleButton onClick={onToggleSidebar} />

          {/* Animated vertical line grows down */}
          <div
            className={`
            absolute text-gray-700 overflow-hidden transition-all duration-500 ease-in-out
            ${showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"}
            
            /* Position */
            md:left-3 md:top-[2.2rem] lg:border-t-0 md:border-l-2  md:border-gray-300 md:pl-4 
            left-[2.8rem] top-[0.5rem] border-t-2 border-gray-300 pt-2
            
            /* Size animation */
            ${showSidebar 
              ? "md:max-h-40 max-w-[12rem]" 
              : "md:max-h-0 max-w-0"
            }
          `}
        >
          <div className="flex md:flex-col flex-row md:space-y-2 space-x-3 md:space-x-0">
            
            <p className="hover:text-black transition" href=""><a href="https://www.instagram.com/ajloria/">Insta</a></p>
            <p className="hover:text-black transition" href=""><a href="https://www.facebook.com/AAjloria/">Facebook</a></p>
            <p className="hover:text-black transition" href=""><a href="https://cara.app/ajloria/portfolio">Cara</a></p>
            
          </div>
        </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
