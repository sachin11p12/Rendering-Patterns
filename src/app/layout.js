import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Next.js Rendering Patterns Study",
  description: "A project to learn SSG, SSR, ISR, and CSR in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
