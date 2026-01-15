"use client";

import React from "react";
import { useTheme } from "@/components/hooks-demo/ThemeContext";
import UseEffectDemo from "@/components/hooks-demo/UseEffectDemo";
import Link from "next/link";
import { ThemeProvider } from "@/components/hooks-demo/ThemeContext";

const UseEffectPageContent = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 px-4 py-10 
      ${theme === "dark" ? "bg-black text-white" : "bg-white text-slate-900"}`}
    >
      <div className="max-w-4xl mx-auto">
        <nav className="mb-8">
          <Link
            href="/hooks-demo"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              theme === "dark"
                ? "bg-zinc-800 hover:bg-zinc-700"
                : "bg-slate-100 hover:bg-slate-200"
            }`}
          >
            ← Back to Dashboard
          </Link>
        </nav>

        <div
          className={`rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 transition-all border ${
            theme === "dark"
              ? "bg-zinc-900 border-zinc-800"
              : "bg-white border-slate-100"
          }`}
        >
          <UseEffectDemo />
        </div>
      </div>
    </div>
  );
};

export default function UseEffectPage() {
  return (
    <ThemeProvider>
      <UseEffectPageContent />
    </ThemeProvider>
  );
}
