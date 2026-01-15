import Dashboard from "@/components/hooks-demo/Dashboard";

export const metadata = {
  title: "React Hooks Demo | Study Practical Project",
  description:
    "A practical demonstration of useState, useEffect, useContext, and useRef hooks.",
};

export default function HooksDemoPage() {
  return (
    <main>
      {/* 
        This is our entry point. 
        Next.js uses the 'app' directory for routing.
        Access this at http://localhost:3000/hooks-demo
      */}
      <Dashboard />
    </main>
  );
}
