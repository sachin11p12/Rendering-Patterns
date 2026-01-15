"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";

const UserList = ({ searchQuery }) => {
  // useState: Manages the data we want to display.
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const { theme } = useTheme();

  // useEffect (Side Effect): Simulate fetching data from an API.
  // This runs only once when the component first appears (mounts).
  useEffect(() => {
    console.log("useEffect: Fetching users...");

    // Simulating an API call with setTimeout
    const timer = setTimeout(() => {
      const mockData = [
        { id: 1, name: "Alice Johnson", email: "alice@example.com" },
        { id: 2, name: "Bob Smith", email: "bob@example.com" },
        { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
        { id: 4, name: "Diana Prince", email: "diana@example.com" },
        { id: 5, name: "Ethan Hunt", email: "ethan@example.com" },
      ];
      setUsers(mockData);
      setFilteredUsers(mockData); // Initialize filtered list
      setLoading(false);
    }, 1500);

    // Cleanup function: This is important for cancelling timers or subscriptions
    return () => clearTimeout(timer);
  }, []); // [] = Run only on mount

  // useEffect (Sync State): Filter the list whenever the search query changes.
  // This demonstrates how useEffect can react to specific data changes.
  useEffect(() => {
    const results = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(results);
  }, [searchQuery, users]); // This runs whenever searchQuery or users changes.

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-12 space-y-4">
        <div className="w-10 h-10 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="text-sm font-medium opacity-70 animate-pulse text-center">
          Loading Users... <br />
          <span className="text-xs opacity-50">
            (useEffect: Initial Data Fetch)
          </span>
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3
        className={`text-lg font-bold mb-4 flex items-center gap-2 ${
          theme === "dark" ? "text-white" : "text-slate-800"
        }`}
      >
        Team Members
        <span
          className={`text-xs px-2 py-0.5 rounded-full font-medium ${
            theme === "dark"
              ? "bg-zinc-800 text-zinc-400"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          {filteredUsers.length}
        </span>
      </h3>

      {filteredUsers.length > 0 ? (
        <div className="grid gap-3">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className={`p-4 rounded-xl border transition-all duration-200 hover:translate-x-1 cursor-default ${
                theme === "dark"
                  ? "bg-zinc-800/50 border-zinc-700 hover:border-blue-500/50 hover:bg-zinc-800"
                  : "bg-slate-50 border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-blue-500/5"
              }`}
            >
              <h4
                className={`font-bold text-base mb-0.5 ${
                  theme === "dark" ? "text-white" : "text-slate-800"
                }`}
              >
                {user.name}
              </h4>
              <p
                className={`text-sm font-medium tracking-tight font-mono ${
                  theme === "dark" ? "text-zinc-400" : "text-slate-500"
                }`}
              >
                {user.email}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div
          className={`text-center py-12 px-6 rounded-2xl border border-dashed ${
            theme === "dark"
              ? "bg-zinc-800/20 border-zinc-700"
              : "bg-slate-50 border-slate-200"
          }`}
        >
          <p
            className={`text-sm font-medium ${
              theme === "dark" ? "text-zinc-500" : "text-slate-400"
            }`}
          >
            No users found matching{" "}
            <span
              className={`font-bold underline decoration-blue-500/30 ${
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              }`}
            >
              "{searchQuery}"
            </span>
            .
          </p>
        </div>
      )}
    </div>
  );
};

export default UserList;
