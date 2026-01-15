"use client";

import React, { createContext, useState, useContext } from "react";

// 1. Create the Context object
// Think of this as a 'global room' where we store information that everyone needs.
const ThemeContext = createContext();

// 2. Create the Provider component
// This component will wrap our app and provide the theme data to all children.
export const ThemeProvider = ({ children }) => {
  // useState is used here to manage the current theme state ('light' or 'dark')
  const [theme, setTheme] = useState("light");

  // A simple function to toggle between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // The 'value' prop is what the children components will be able to access
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* We apply the theme class here so Tailwind can use it if needed, 
          but primarily we'll use the theme' state to conditionally apply classes. */}
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

// 3. Create a custom hook for easy access
// This makes it easier for other components to use the context 
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider.");
  }
  return context;
};
