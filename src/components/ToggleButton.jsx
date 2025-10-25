import React from "react";

function ToggleButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-6 h-6 rounded-full bg-gray-300 hover:bg-gray-500 transition"
    />
  );
}

export default ToggleButton;
