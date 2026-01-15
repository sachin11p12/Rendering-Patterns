This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.
# Project Tech Stack & Concepts: Rendering pattern in Nextjs 

This document provides a comprehensive overview of the technologies, libraries, and architectural concepts used in the `rt-app` project.

## 🚀 Core Technologies

| Technology       | Version | Description                                                |
| :--------------- | :------ | :--------------------------------------------------------- |
| **Next.js**      | 16.1.1  | The React framework for the web, utilizing the App Router. |
| **React**        | 19.2.3  | The library for building user interfaces.                  |
| **Tailwind CSS** | 4.0.0   | A utility-first CSS framework for rapid UI development.    |
| **PostCSS**      | 8.4.x   | A tool for transforming CSS with JavaScript plugins.       |

---

## 📦 Libraries & Dependencies

### Production Dependencies

- **next**: Core framework for routing, SSR, and SSG.
- **react**: Core library for UI components.
- **react-dom**: Entry point to the DOM and server renderers for React.

### Development Dependencies

- **tailwindcss**: v4 engine for styling.
- **@tailwindcss/postcss**: Integration for PostCSS.
- **eslint**: Pluggable linting utility for JavaScript and JSX.
- **eslint-config-next**: ESLint configuration for Next.js.

---

## 🧠 Core Concepts & Rendering Patterns

The project explores various data fetching and rendering strategies available in the Next.js App Router:

### 1. Rendering Patterns (`src/app/`)

- **Static Site Generation (SSG)**: Data is fetched at build time. (`/static`)
- **Server-Side Rendering (SSR)**: Data is fetched on every request. (`/dynamic`)
- **Incremental Static Regeneration (ISR)**: Static content updates in the background after a specified interval. (`/incremental`)
- **Client-Side Rendering (CSR)**: Data is fetched in the browser after the initial page load. (`/client`)

### 2. React Hooks Demo (`src/components/hooks-demo/`)

This project serves as a showcase for core React Hooks:

- **`useState`**: For managing local component state.
- **`useEffect`**: For handling side effects (data fetching, DOM updates, etc.).
- **`useContext`**: For complex state management via the `ThemeContext`.

### 3. Styling with Tailwind CSS 4

- **Modern Color Palettes**: Uses the updated Tailwind 4 color system.
- **Gradients**: Implements `bg-linear-to-r` for premium visual effects.
- **Transitions/Animations**: Subtle hover effects and state transitions.

### 4. Project Architecture

- **App Router**: Uses the `src/app` directory for file-based routing.
- **Shared Layouts**: Centralized UI structure in `layout.js`.
- **Loading States**: Seamless transitions using `loading.js`.
- **Data Service**: A centralized `data-service.js` for simulating asynchronous data fetching.

---

## 📁 Directory Structure

```text
src/
├── app/                  # Route handlers, layouts, and pages
│   ├── client/           # CSR Demonstration
│   ├── dynamic/          # SSR Demonstration
│   ├── incremental/      # ISR Demonstration
│   ├── static/           # SSG Demonstration
│   ├── hooks-demo/       # Advanced Hooks showcase
│   └── data-service.js   # Mock data utility
├── components/           # Reusable UI components
│   └── hooks-demo/       # Specific components for the hooks showcase
└── globals.css           # Global Tailwind styles
```

---

## 🛠️ Performance & SEO

- **Semantic HTML**: Proper use of `main`, `h1`, `header`, etc.
- **Optimization**: Leveraging Next.js `Link` for fast client-side transitions.
- **Responsive Design**: Mobile-first approach using Tailwind's responsive utilities.
