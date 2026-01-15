"use client";

import { useState, useEffect } from "react";

export default function ClientPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setData({
        timestamp: new Date().toLocaleTimeString(),
        id: Math.random().toString(36).substr(2, 9),
        type: "Client Side Rendering (CSR)",
      });
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Client Side Rendering (CSR)</h1>
        <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
          <p className="text-orange-800 dark:text-orange-300">
            <strong>Concept:</strong> The page structure loads immediately, and
            then the browser (client) fetches the data. Useful for highly
            interactive dashboards or private user data.
          </p>
        </div>
      </div>
      <div className="border rounded-xl p-8 shadow-sm min-h-[300px] flex flex-col">
        <h2 className="text-xl font-semibold mb-6 border-b pb-2">
          Fetched Data:
        </h2>
        {loading ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            <span className="ml-3 text-gray-500">Loading on client...</span>
          </div>
        ) : (
          <div className="space-y-4 animate-in fade-in duration-500">
            <div>
              <span className="text-sm text-gray-500 uppercase font-bold">
                Fetched at:
              </span>
              <p className="text-2xl font-mono">{data.timestamp}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500 uppercase font-bold">
                Source:
              </span>
              <p className="text-lg">Browser / Client-side</p>
            </div>
            <div>
              <span className="text-sm text-gray-500 uppercase font-bold">
                Random ID:
              </span>
              <p className="text-lg font-mono">{data.id}</p>
            </div>
          </div>
        )}
      </div>
      <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-400">
        <p>
          To see this in action: 1. Notice the spinner when you first navigate
          here. 2. The data is not in the initial HTML (if you view source).
        </p>
      </div>
    </main>
  );
}
