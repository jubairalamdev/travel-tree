# Travel Tree Frontend - Project Status & Context

## PROJECT OVERVIEW

**Project Name:** Travel Tree Frontend  
**Type:** Production-ready travel agency web application  
**Framework:** Next.js (App Router) + TypeScript + Tailwind CSS  
**Current Status:** Phases 1-12 complete. Remaining: Phases 13-15.

## PROJECT LOCATION
```
/home/jubair/Projects/SCIC/Assignment 3/travel-tree
```

## TECH STACK
- **Framework:** Next.js (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS with custom theme
- **UI Components:** Custom (Button, Card, Input, Modal, Skeleton)
- **Charts:** Recharts (not yet used)
- **Data Fetching:** TanStack React Query + `serverFetch`/`serverMutation`
- **Icons:** Lucide React
- **Animation:** framer-motion
- **Carousels:** Swiper
- **Auth:** Better Auth (MongoDB adapter)
- **Toast:** react-toastify
- **Fonts:** Inter + Poppins

## COLOR PALETTE (Strictly Enforced)
| Purpose | Color | HEX |
|---------|-------|-----|
| Primary | Red | `#fc4c5a` |
| Secondary | Teal | `#7fdbc9` |
| Accent | Yellow | `#ffc83d` |
| Hover | Blue | `#0d6efd` |

## ROUTES
| Route | Page | Status |
|-------|------|--------|
| `/` | Landing page (9 sections) | Done |
| `/login` | Login page | Done |
| `/register` | Register page | Done |
| `/about` | About page | Done |
| `/contact` | Contact page | Done |
| `/tours` | Tours listing with search, filters, sort, pagination | Done |
| `/tours/[id]` | Tour details (hero, info, description, related) | Done |
| `/items/add` | Add item (protected) | Done |
| `/items/manage` | Manage items (protected) | Done |

## COMPLETED WORK SUMMARY

### Phase 6: API Utilities
- `src/lib/serverFetch.ts` — GET utility, returns `response.data`
- `src/lib/serverMutation.ts` — POST/PUT/DELETE utility, JSON body, returns `response.data`
- `NEXT_PUBLIC_API_URL` in `.env` pointing to `http://localhost:5000/api`

### Phase 7: Tours Listing Page
- **FilterSidebar** — category dropdown, price range (min/max), rating stars, reset button
- **SortDropdown** — price low/high, price high/low, rating high/low
- **ToursGrid** — responsive 4-col grid, Card component, skeleton loading, empty state
- **Pagination** — numbered with prev/next, ellipsis for many pages
- **tours/page.tsx** — full listing with search (debounced), filters, sort, grid, pagination, TanStack Query `useQuery` + `serverFetch('/tours')`
- **Providers.tsx** — wraps app in `QueryClientProvider`

### Phase 8: Tour Details Page
- **TourDetailsClient** — hero image with pulsing skeleton (disappears on image load), breadcrumbs (Home > Tours > Title), description, key info card (price/duration/category with icons), related tours (same category, shuffled, max 4)
- **app/tours/[id]/page.tsx** — dynamic route, Next.js 15 async `params`, delegates to TourDetailsClient
- "Book Now" button shows toast (`{title} has been added!`) instead of navigating

### Phases 1-5
- Full landing page (9 sections), Navbar with auth-aware states, Footer, error/404 pages
- Better Auth with MongoDB adapter, Login/Register pages with demo credentials
- About page, Contact page

### Global Loading
- `src/app/loading.tsx` — fullscreen overlay with animated hexagon spinner (`#fc4c5a`), CSS in `globals.css`
- `src/middleware.ts` — edge-compatible (cookie check, no MongoDB import)

## KEY DECISIONS
1. No Hero UI components — custom Button/Card/Input/Modal/Skeleton
2. framer-motion over Motion.dev
3. proxy.ts/handles all route protection — no ProtectedRoute/AuthContext
4. Demo login fills fields only (no auto-submit)
5. LoginPage redirects to `/` (not `/tours`)
6. `serverFetch`/`serverMutation` pattern — no per-feature hooks
7. `formatPrice` returns whole numbers only (no `.00`)

## PRE-EXISTING ISSUES
- `TravelGuidelineSection.tsx` — 3 TS errors (framer-motion ViewportOptions `delay`), cosmetic only

## NEXT SESSION — WHERE TO START
**Next phase:** Phase 13 — Testing & Documentation
1. Create mock tour/user/statistics data
2. Test responsive design on mobile/tablet/desktop
3. Create/update README with setup and dev guidelines

## HOW TO START DEV SERVER
```bash
npm run dev   # runs on port 3000 (or PORT=9000 npm run dev for alt port)
```

## STARTUP READ ORDER
1. `.opencode/plans/project-status.md`
2. `.opencode/plans/tasks.md`
