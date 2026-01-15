import { getMockData } from "../data-service";

// Revalidate every 10 seconds. This is the core of ISR.
export const revalidate = 10;

export default async function IncrementalPage() {
  const data = await getMockData("Incremental Static Regeneration (ISR)");

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          Incremental Static Regeneration (ISR)
        </h1>
        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
          <p className="text-purple-800 dark:text-purple-300">
            <strong>Concept:</strong> A hybrid approach. The page is static, but
            Next.js will re-generate it in the background after a certain
            interval (10 seconds here).
          </p>
        </div>
      </div>

      <div className="border rounded-xl p-8 shadow-sm">
        <h2 className="text-xl font-semibold mb-6 border-b pb-2">
          Fetched Data:
        </h2>
        <div className="space-y-4">
          <div>
            <span className="text-sm text-gray-500 uppercase font-bold">
              Fetched at:
            </span>
            <p className="text-2xl font-mono">{data.timestamp}</p>
          </div>
          <div>
            <span className="text-sm text-gray-500 uppercase font-bold">
              Revalidation Period:
            </span>
            <p className="text-lg">10 Seconds</p>
          </div>
          <div>
            <span className="text-sm text-gray-500 uppercase font-bold">
              Random ID:
            </span>
            <p className="text-lg font-mono">{data.id}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-400">
        <p>
          To see this in action (in production build): 1. Refresh. The timestamp
          stays the same. 2. Wait 10 seconds. 3. Refresh once. You might still
          see the old timestamp (as the background re-generation is triggered).
          4. Refresh again. You'll see the NEW timestamp.
        </p>
      </div>
    </main>
  );
}
