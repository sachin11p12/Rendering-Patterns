import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Next.js Rendering Patterns Study",
  description: "A project to learn SSG, SSR, ISR, and CSR in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <nav className="border-b dark:border-gray-800 p-4 sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-md z-10">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Link href="/" className="font-bold text-xl tracking-tight">
              Next<span className="text-blue-600">JS</span> Study
            </Link>
            <div className="space-x-8 text-sm font-medium">
              <Link
                href="/static"
                className="hover:text-blue-600 transition-colors"
              >
                Static
              </Link>
              <Link
                href="/dynamic"
                className="hover:text-blue-600 transition-colors"
              >
                Dynamic
              </Link>
              <Link
                href="/incremental"
                className="hover:text-blue-600 transition-colors"
              >
                Hybrid
              </Link>
              <Link
                href="/client"
                className="hover:text-blue-600 transition-colors"
              >
                Client
              </Link>
              <Link
                href="/hooks-demo"
                className="hover:text-blue-600 transition-colors"
              >
                Hooks Demo
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
