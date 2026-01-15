export default function Loading() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl mx-auto space-y-6 animate-pulse">
        <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded-md w-3/4"></div>
        <div className="h-24 bg-gray-100 dark:bg-gray-900 rounded-lg"></div>
        <div className="h-64 border border-gray-100 dark:border-gray-800 rounded-xl bg-gray-50/50 dark:bg-gray-900/50"></div>
      </div>
      <p className="mt-8 text-gray-400 text-sm animate-bounce">
        Loading from server...
      </p>
    </div>
  );
}
