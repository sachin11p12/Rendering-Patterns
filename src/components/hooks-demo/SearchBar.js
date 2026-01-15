"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "./ThemeContext";

const SearchBar = ({ onSearch }) => {
  // useState: Manages the text typed by the user.
  // We use this because we want the UI to update every time a character is typed.
  const [query, setQuery] = useState("");

  // useRef: Create a 'reference' to a DOM element (the input field).
  // Analogy: Think of it like a bookmark that lets you jump straight to a specific page.
  const inputRef = useRef(null);

  const { theme } = useTheme();

  // useEffect: Runs a side effect when the component mounts.
  // In this case, we use the 'ref' to focus the input field automatically.
  useEffect(() => {
    // Focus the input element on mount
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // Empty dependency array means this runs only once (on mount).

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Pass the query up to the parent component
  };

  return (
    <div className="my-6">
      <label
        htmlFor="search"
        className="block mb-2 text-sm font-semibold opacity-80"
      >
        Search Users:
      </label>
      <input
        id="search"
        ref={inputRef}
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={handleChange}
        className={`w-full px-4 py-3 rounded-xl border transition-all outline-none text-base
          ${
            theme === "dark"
              ? "bg-zinc-800 border-zinc-700 text-white focus:border-blue-500 shadow-inner"
              : "bg-white border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
          }`}
      />
      <p className="text-xs mt-2 opacity-60 italic">
        (useRef: Automatically focused this input when you arrived!)
      </p>
    </div>
  );
};

export default SearchBar;
