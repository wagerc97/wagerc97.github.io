# Scientist + Software Developer · Portfolio

Modern personal site that presents the dual identity of scientist and software developer. Built with [Astro](https://astro.build) for fast static delivery, Markdown-friendly content, and long-term maintainability.

## Getting started

1. Install dependencies (requires Node 18+):
   ```bash
   npm install
   ```
2. Run the local dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build:
   ```bash
   npm run preview
   ```

## Structure

- `src/pages` – Home, Research, Software, About, Blog, Contact.
- `src/components` – Navigation, footer, section heading, theme toggle.
- `src/data/site.ts` – Centralized content for research themes, publications, projects, timelines, and contact info.
- `src/styles/global.css` – Modern scientific/minimal aesthetic with light/dark mode support.
- `public/` – Static assets, Google verification file, and legacy imagery.

## Concept

- Modern, minimal, scientific aesthetic with a blue/teal + charcoal palette.
- Hero quickly introduces “Data Scientist · Materials Science Researcher · Software Developer”.
- Dedicated sections for research focus, publications, modopy highlight, software projects, about/timeline, blog-like updates, and contact.
- Built-in light/dark toggle with persisted preference.
