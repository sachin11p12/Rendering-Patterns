import { getMockData } from "../data-service";

// By adding export const dynamic = 'force-dynamic' or using cache: 'no-store' in fetch,
// we turn this page into a Server Side Rendered (SSR) page.
export const dynamic = "force-dynamic";

export default async function DynamicPage() {
  const data = await getMockData("Server Side Rendering (SSR)");

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Server Side Rendering (SSR)</h1>
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-blue-800 dark:text-blue-300">
            <strong>Concept:</strong> Data is fetched on every single request.
            When you refresh this page, the timestamp <strong>will</strong>{" "}
            change every time because it's re-rendering on the server.
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
          To see this in action: 1. Refresh the page. 2. Notice that the loading
          state (or the delay) happens every time. 3. The timestamp updates
          instantly on every refresh.
        </p>
      </div>
    </main>
  );
}
