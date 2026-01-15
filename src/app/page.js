import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Next.js Rendering Patterns
      </h1>

      <p className="text-lg mb-12 text-center text-gray-600 dark:text-gray-400">
        Explore and learn different data fetching and rendering strategies in
        the Next.js App Router.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <PatternCard
          title="Static Site Generation (SSG)"
          description="Data is fetched at build time. Ideal for content that doesn't change often."
          href="/static"
          tag="Static"
          color="bg-green-100 text-green-800"
        />

        <PatternCard
          title="Server Side Rendering (SSR)"
          description="Data is fetched on every request. Ideal for personalized or frequently changing data."
          href="/dynamic"
          tag="Dynamic"
          color="bg-blue-100 text-blue-800"
        />

        <PatternCard
          title="Incremental Static Regeneration (ISR)"
          description="Static content that updates in the background after a specific interval."
          href="/incremental"
          tag="Hybrid"
          color="bg-purple-100 text-purple-800"
        />

        <PatternCard
          title="Client Side Rendering (CSR)"
          description="Data is fetched in the browser after the initial page load."
          href="/client"
          tag="Client"
          color="bg-orange-100 text-orange-800"
        />
      </div>
    </main>
  );
}

function PatternCard({ title, description, href, tag, color }) {
  return (
    <Link href={href}>
      <div className="group border rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 dark:border-gray-800">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold group-hover:text-blue-500 transition-colors">
            {title}
          </h2>
          <span
            className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${color}`}
          >
            {tag}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </Link>
  );
}
