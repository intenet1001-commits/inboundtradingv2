# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Inbound Trading V2 - A Next.js 16 web application with React 19, TypeScript, and Tailwind CSS 4.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Tech Stack

- **Framework**: Next.js 16.1.3 with App Router and React Compiler enabled
- **React**: 19.2.3 with React Compiler (babel-plugin-react-compiler)
- **Styling**: Tailwind CSS 4 with tw-animate-css
- **UI Components**: shadcn/ui (new-york style, lucide icons)
- **TypeScript**: Strict mode enabled

## Project Structure

```
src/
├── app/           # Next.js App Router pages and layouts
│   ├── layout.tsx # Root layout with Geist fonts
│   ├── page.tsx   # Home page
│   └── globals.css # Tailwind + CSS variables (light/dark themes)
├── components/    # React components (@/components)
│   └── ui/        # shadcn/ui components (@/components/ui)
├── lib/           # Utilities (@/lib)
│   └── utils.ts   # cn() helper for class merging
└── hooks/         # Custom React hooks (@/hooks)
```

## Path Aliases

- `@/*` maps to `./src/*`

## Adding shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

Components use new-york style preset with neutral base colors and CSS variables for theming.

## Theming

CSS custom properties in `globals.css` define light/dark themes using OKLCH color space. Toggle dark mode by adding `.dark` class to parent element.
