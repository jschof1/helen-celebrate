# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Helen Clayton Celebrancy Website (`artifacts/helen-clayton`)
- **Type**: React + Vite (presentation-first, no backend)
- **Preview path**: `/`
- **Stack**: React, Vite, Tailwind CSS, GSAP + @gsap/react, wouter, Playfair Display + DM Sans fonts
- **Pages**: Home, Meet Helen, Funerals & Memorials, Weddings & Vow Renewals, Costs, FAQs, Helpful Links, Contact
- **Design**: Experimental broken-layout, GSAP ScrollTrigger animations, dark red (#8b1a1a) + dark beige + white palette
- **Client**: Helen Clayton Celebrancy, Poole, Dorset
- **Media assets** (at `attached_assets/`):
  - **Videos** (AI-generated): `generated_videos/wedding_ceremony.mp4`, `peaceful_garden.mp4`, `dorset_coast.mp4`
  - **Stock images** (in `stock_images/`): wedding_outdoor_1/2, wedding_couple_1/2, funeral_flowers, memorial_garden_1/2, coast_sunset, helen_portrait_1/2, wedding_rings, crematorium, vow_renewal
- **Vite fs.allow**: `attached_assets/` is explicitly allowed so videos and large images are served in dev
- **Image alias**: `@assets` → `../../attached_assets` (set in `vite.config.ts`)
