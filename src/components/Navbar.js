"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="border-b dark:border-gray-800 p-4 sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl tracking-tight">
          Next<span className="text-blue-600">JS</span> Study
        </Link>
        <div className="flex items-center space-x-8 text-sm font-medium">
          {/* Topic Dropdown */}
          <div className="relative group">
            <button className="flex items-center hover:text-blue-600 transition-colors focus:outline-none">
              Topic
              <svg
                className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50">
              <div className="py-1">
                <Link
                  href="/static"
                  className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    isActive("/static") ? "text-blue-600 font-bold" : ""
                  }`}
                >
                  Static
                </Link>
                <Link
                  href="/dynamic"
                  className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    isActive("/dynamic") ? "text-blue-600 font-bold" : ""
                  }`}
                >
                  Dynamic
                </Link>
                <Link
                  href="/incremental"
                  className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    isActive("/incremental") ? "text-blue-600 font-bold" : ""
                  }`}
                >
                  Hybrid
                </Link>
                <Link
                  href="/client"
                  className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    isActive("/client") ? "text-blue-600 font-bold" : ""
                  }`}
                >
                  Client
                </Link>
                <Link
                  href="/hooks-demo"
                  className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    isActive("/hooks-demo") ? "text-blue-600 font-bold" : ""
                  }`}
                >
                  Hooks Demo
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/login"
            className={`px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors ${
              isActive("/login") ? "opacity-90" : ""
            }`}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
