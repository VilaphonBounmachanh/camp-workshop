# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `npm run dev` — Start development server (localhost:3000)
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

No test framework is configured yet.

## Tech Stack

- **Next.js 16.1.6** with App Router and React 19.2.3
- **TypeScript 5** (strict mode)
- **Tailwind CSS v4** via PostCSS plugin (no tailwind.config file — uses v4's CSS-based config)
- **shadcn/ui** (New York style) with Radix UI primitives and Lucide icons
- **ESLint 9** with flat config format

## Architecture

This is an App Router project — all routes live in `app/`. React Server Components are enabled by default.

**Path aliases** (configured in tsconfig.json):
- `@/*` maps to the project root (e.g., `@/components`, `@/lib`)

**Key directories:**
- `components/ui/` — shadcn/ui primitives (Button, etc.)
- `components/Navbar/` — Navbar feature components (Logo, Search, Navbar)
- `lib/utils.ts` — `cn()` helper combining `clsx` + `tailwind-merge`

## shadcn/ui

Components are added via the `shadcn` CLI. Configuration is in `components.json`:
- UI components go in `components/ui/`
- Style: "new-york", base color: neutral, CSS variables enabled

## Styling

Global styles are in `app/globals.css`, which imports Tailwind, animation utilities (`tw-animate-css`), and shadcn styles. A custom `.container` class adds `px-8 mx-auto`.
