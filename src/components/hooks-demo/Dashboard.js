"use client";

import React, { useState } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import SearchBar from "./SearchBar";
import UserList from "./UserList";
import Link from "next/link";

const DashboardContent = () => {
  // useState: Manages the search text at the Dashboard level.
  // We keep it here so that both SearchBar (the writer) and UserList (the reader) can access it.
  const [searchQuery, setSearchQuery] = useState("");

  // useTheme (useContext): Access the global theme state and the toggle function.
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 px-4 py-10 
      ${theme === "dark" ? "bg-black text-white" : "bg-white text-slate-900"}`}
    >
      <div
        className={`max-w-2xl mx-auto rounded-2xl shadow-2xl overflow-hidden p-10 transition-all border ${
          theme === "dark"
            ? "bg-zinc-900 border-zinc-800 shadow-none"
            : "bg-white border-slate-100 shadow-slate-200/50"
        }`}
      >
        <header
          className={`flex justify-between items-center mb-8 pb-4 border-b ${
            theme === "dark" ? "border-zinc-800" : "border-slate-100"
          }`}
        >
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <button
            onClick={toggleTheme}
            className="px-5 py-2 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 
              bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20"
            title="Toggle Light/Dark Mode (useContext)"
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </header>
        <div
          className={`p-4 rounded-r-lg mb-8 border-l-4 ${
            theme === "dark"
              ? "bg-blue-900/20 border-blue-400"
              : "bg-blue-50 border-blue-500"
          }`}
        >
          <h3
            className={`font-bold mb-2 text-sm uppercase tracking-wider ${
              theme === "dark" ? "text-blue-400" : "text-blue-700"
            }`}
          >
            Hooks Interaction Guide:
          </h3>
          <ul
            className={`space-y-2 text-sm leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <li>
              <span
                className={`font-bold ${
                  theme === "dark" ? "text-blue-400" : "text-blue-600"
                }`}
              >
                useState:
              </span>{" "}
              Tracks the current Search Query as you type.
            </li>
            <li>
              <span
                className={`font-bold ${
                  theme === "dark" ? "text-blue-400" : "text-blue-600"
                }`}
              >
                useRef:
              </span>{" "}
              Instantly focused the Search Bar when you loaded this page.
            </li>
            <li>
              <span
                className={`font-bold ${
                  theme === "dark" ? "text-blue-400" : "text-blue-600"
                }`}
              >
                useEffect:
              </span>{" "}
              Fetched the mock user data and filters the list as you type.
            </li>
            <li>
              <span
                className={`font-bold ${
                  theme === "dark" ? "text-blue-400" : "text-blue-600"
                }`}
              >
                useContext:
              </span>{" "}
              Shared the "{theme}" theme across all components.
            </li>
          </ul>
        </div>

        <SearchBar onSearch={(query) => setSearchQuery(query)} />

        <UserList searchQuery={searchQuery} />

        {/* New Deep Dive Section */}
        <div
          className={`mt-12 pt-8 border-t ${
            theme === "dark" ? "border-zinc-800" : "border-slate-100"
          }`}
        >
          <h3 className="text-xl font-bold mb-6">Explore Deep Dives</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <Link
              href="/hooks-demo/use-effect"
              className={`group p-6 rounded-2xl border transition-all hover:scale-[1.02] active:scale-[0.98] ${
                theme === "dark"
                  ? "bg-zinc-800/50 border-zinc-700 hover:border-blue-500/50 hover:bg-zinc-800"
                  : "bg-slate-50 border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-blue-500/5"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="p-2 bg-blue-500/10 text-blue-500 rounded-lg text-lg">
                  ⚡
                </span>
                <span className="text-xs font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                  Full Demo
                </span>
              </div>
              <h4 className="font-bold text-lg mb-1">useEffect Hook</h4>
              <p className="text-sm opacity-60 leading-relaxed">
                API fetching, title updates, clocks, and window events with
                clear explanation.
              </p>
            </Link>

            <div
              className={`p-6 rounded-2xl border opacity-40 cursor-not-allowed ${
                theme === "dark"
                  ? "bg-zinc-800/50 border-zinc-700"
                  : "bg-slate-50 border-slate-100"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="p-2 bg-gray-500/10 text-gray-500 rounded-lg text-lg">
                  💾
                </span>
                <span className="text-xs font-bold uppercase tracking-widest opacity-40 text-gray-500 text-left">
                  Coming Soon
                </span>
              </div>
              <h4 className="font-bold text-lg mb-1">useState Hook</h4>
              <p className="text-sm opacity-60 leading-relaxed">
                Complex state objects, functional updates, and state
                persistence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// We wrap the entire dashboard in the ThemeProvider so children can access the context.
const Dashboard = () => {
  return (
    <ThemeProvider>
      <DashboardContent />
    </ThemeProvider>
  );
};

export default Dashboard;
