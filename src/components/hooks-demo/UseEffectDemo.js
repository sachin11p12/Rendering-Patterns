"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";

const UseEffectDemo = () => {
  const { theme } = useTheme();

  // 1. State for various examples
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [logs, setLogs] = useState([]);

  // Helper to add logs to our UI
  const addLog = (msg) => {
    setLogs((prev) =>
      [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev].slice(0, 5)
    );
  };

  // --- EXAMPLE 1: Fetching Data from an API ---
  useEffect(() => {
    addLog("useEffect (API): Fetching data...");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        addLog("useEffect (API): Data fetched!");
      });
  }, []); // Run only once

  // --- EXAMPLE 2: Updating the DOM (Document Title) ---
  useEffect(() => {
    addLog("useEffect (DOM): Updating document title...");
    document.title = `Clickedd ${count} times`;
  }, [count]); // Run whenever 'count' changes

  // --- EXAMPLE 3: Using Timers (Live Clock) ---
  useEffect(() => {
    addLog("useEffect (Timer): Starting clock...");
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // CLEANUP: Stop the timer when component disappears
    return () => {
      addLog("useEffect (Timer): Cleaning up clock...");
      clearInterval(timerId);
    };
  }, []); // Run only once

  // --- EXAMPLE 4: Subscribing to Events (Window Resize) ---
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      addLog(`useEffect (Event): Resize -> ${window.innerWidth}px`);
    };

    addLog("useEffect (Event): Adding resize listener...");
    window.addEventListener("resize", handleResize);

    // CLEANUP: Remove the listener to prevent memory leaks
    return () => {
      addLog("useEffect (Event): Removing resize listener...");
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Run only once

  // --- EXAMPLE 5: Running code after every render ---
  useEffect(() => {
    // Note: No dependency array means this runs every single time anything updates
    console.log("Component rendered!");
  });

  const cardClass = `p-6 rounded-2xl border transition-all ${
    theme === "dark"
      ? "bg-zinc-800/50 border-zinc-700"
      : "bg-slate-50 border-slate-100 shadow-sm"
  }`;

  return (
    <div className="space-y-8">
      <header className="mb-6">
        <h2 className="text-2xl font-bold mb-2">useEffect Deep Dive</h2>
        <p className="opacity-70">
          Exploring the 5 most common use cases for side effects.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {/* API Fetching */}
        <div className={cardClass}>
          <h3 className="font-bold text-blue-500 mb-2 uppercase text-xs tracking-widest">
            1. API Fetching
          </h3>
          <p className="text-sm mb-4">
            Fetches data from JSONPlaceholder on mount.
          </p>
          {data ? (
            <div
              className={`p-3 rounded-lg text-sm font-mono ${
                theme === "dark" ? "bg-zinc-900" : "bg-white border"
              }`}
            >
              <span className="text-green-500">✔</span> {JSON.stringify(data)}
            </div>
          ) : (
            <div className="animate-pulse text-sm">Loading data...</div>
          )}
        </div>

        {/* DOM Update */}
        <div className={cardClass}>
          <h3 className="font-bold text-purple-500 mb-2 uppercase text-xs tracking-widest">
            2. DOM Updates
          </h3>
          <p className="text-sm mb-4">
            Updates the <strong>Browser Tab Title</strong> as you click.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">{count}</span>
            <button
              onClick={() => setCount((c) => c + 1)}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm hover:bg-purple-600 transition-colors"
            >
              Increment Count
            </button>
          </div>
        </div>

        {/* Timers */}
        <div className={cardClass}>
          <h3 className="font-bold text-orange-500 mb-2 uppercase text-xs tracking-widest">
            3. Timers
          </h3>
          <p className="text-sm mb-4">
            Uses <code>setInterval</code> for a live clock.
          </p>
          <div
            className={`text-3xl font-mono text-center py-2 ${
              theme === "dark" ? "text-orange-400" : "text-orange-600"
            }`}
          >
            {time}
          </div>
        </div>

        {/* Event Subscriptions */}
        <div className={cardClass}>
          <h3 className="font-bold text-green-500 mb-2 uppercase text-xs tracking-widest">
            4. Event Subscriptions
          </h3>
          <p className="text-sm mb-4">
            Listening to the <code>window.resize</code> event.
          </p>
          <div className="text-center">
            <span className="text-sm opacity-60">Window Width:</span>
            <div className="text-2xl font-bold text-green-500">
              {windowWidth}px
            </div>
          </div>
        </div>
      </div>

      {/* Logs section (Showing "After Render" concept) */}
      
      <div
        className={`p-6 rounded-2xl border ${
          theme === "dark"
            ? "bg-zinc-900 border-zinc-700"
            : "bg-black text-white"
        }`}
      >
        <h3 className="font-bold mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
          Activity Logs (Effect Triggers)
        </h3>
        <ul className="space-y-2 font-mono text-xs opacity-80">
          {logs.map((log, i) => (
            <li key={i} className={i === 0 ? "text-green-400" : ""}>
              {log}
            </li>
          ))}
          {logs.length === 0 && (
            <li className="italic opacity-50">No activity yet...</li>
          )}
        </ul>
        <p className="mt-4 text-[10px] opacity-40 uppercase tracking-tighter">
          * This log updates whenever an effect runs (Example 5: Running after
          render)
        </p>
      </div>
    </div>
  );
};

export default UseEffectDemo;
