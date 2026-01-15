import { getMockData } from "../data-service";

// By default in Next.js App Router, pages are static unless they use dynamic functions
export default async function StaticPage() {
  const data = await getMockData("Static Site Generation (SSG)");

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          Static Site Generation (SSG)
        </h1>
        <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <p className="text-green-800 dark:text-green-300">
            <strong>Concept:</strong> Data is fetched at build time. When you
            refresh this page, the timestamp will <strong>not</strong> change
            because the HTML was pre-rendered when the site was built.
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
              Data Type:
            </span>
            <p className="text-lg">{data.type}</p>
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
          To see this in action: 1. Run `npm run build` 2. Run `npm run start`
          3. Refresh the page multiple times. The timestamp will stay exactly
          the same.
        </p>
      </div>
    </main>
  );
}
