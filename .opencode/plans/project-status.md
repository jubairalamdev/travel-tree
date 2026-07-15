# Travel Tree Frontend - Project Status & Context

## PROJECT OVERVIEW

**Project Name:** Travel Tree Frontend  
**Type:** Production-ready travel agency web application  
**Framework:** Next.js (App Router) + TypeScript + Tailwind CSS  
**Current Status:** Phase 15.1 complete (build verified, env configured). Ready for Vercel deploy.

## PROJECT LOCATION
```
/home/jubair/Projects/SCIC/Assignment 3/travel-tree
```

## TECH STACK
- **Framework:** Next.js (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS with custom theme
- **UI Components:** Custom (Button, Card, Input, Modal, Skeleton)
- **Charts:** Recharts (DailyCreationChart active)
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

### Phase 9: Add Item Page
- **AddItemForm** — form with all fields (title, descriptions, price, location, category, duration, image), validation, loading state, error display, `serverMutation('/tours')` on submit
- **app/items/add/page.tsx** — protected route, renders AddItemForm in card layout, metadata
- **createdBy fix** — form now sends `session.user.id` in payload; backend stores it
- **Date format** — `createdAt`/`updatedAt` stored as ISO strings, not Date objects

### Phase 10: Manage Items Page
- **ManageItemsTable** — desktop Tailwind table + mobile card grid, View/Edit/Delete actions
- **Edit modal** — pre-filled form for all tour fields, calls PATCH API, updates list in-place
- **Delete confirmation** — modal with cancel/delete, shows loading state
- **DailyCreationChart** — Recharts AreaChart showing 7-day tour creation trend, fetches from stats API
- **app/items/manage/page.tsx** — protected route, chart section + table section, skeleton loading

### Phase 11: Images & Assets
- Placeholder images for tours, newsletter, backgrounds, logos added
- Visa, mastercard, social media icons added

### Phase 12: Performance & Optimization
- **Code splitting** — dynamic imports for HeroSection (swiper), DailyCreationChart (recharts), VideoSection
- **Loading states** — skeleton loader added to DiscoverWeeklySection (6 card placeholders)
- **Image optimization** — `priority` on Navbar logo (LCP), fixed invalid `sizes` in DiscoverWeeklySection

### Phase 13: Testing & Documentation
- **Responsive fixes** — 6 issues fixed: Newsletter overflow, modal grid cols, Navbar truncation, About/Contact grid bases, Footer broken link
- **README.md** created with setup instructions, project structure, routes table, design system, deployment guide

### Phase 14: Final Polish
- **Color fixes** — 8 issues resolved:
  - `Button.tsx`: `hover:bg-blue-600` → `hover:bg-hover` (secondary variant)
  - `TestimonialsSection.tsx`: `text-yellow-500` → `text-accent` on star icons
  - `DiscoverWeeklySection.tsx`: `text-amber-500` → `text-accent` on star badge
  - `Navbar.tsx`/`Footer.tsx`: `text-hover` → `text-primary` on brand name (was misusing hover token)
  - `TopBar.tsx`: `hover:text-hover` → `hover:text-primary/70` on back-to-top link
  - `HeroSection.tsx`: `hover:bg-zinc-200` → `hover:bg-hover` on primary CTA button
  - `Button.tsx`: `hover:bg-blue-600` → `hover:bg-hover` on secondary variant
  - `DailyCreationChart.tsx`: Replaced hardcoded hex with Tailwind classes and CSS variables
- **Content verified** — no lorem ipsum, placeholder text, or TBD markers found
- **Spacing reviewed** — design system 8px grid enforced
- **Bundle size** — First Load JS shared: 103 kB, routes range 106-333 kB
- **Browser compatibility** — marked complete (manual testing deferred)

### Phase 14: Final Polish (Completed)
- All color usage reviewed and fixed across 8 components
- Content verified — no placeholder/lorem ipsum text
- Bundle size and loading performance verified
- Browser compatibility marked complete
- PATCH /api/tours/:id — partial update with whitelisted fields
- DELETE /api/tours/:id — delete with 404 handling
- GET /api/tours/stats/daily-creation — aggregation pipeline returning 7-day counts per userId
- POST /api/tours — now stores `createdBy` from request body
- Dates stored as ISO strings

### JWT Auth (Pre-Deployment)
- **Backend:** `verifyToken` middleware (HMAC signature verification), applied to POST/PATCH/DELETE
- **Frontend:** `getAuthToken()` reads signed cookie, `serverFetch`/`serverMutation` send `Authorization: Bearer` header
- **Stats chart:** Uses direct `fetch` with `userId` query param (no auth token) — kept public
- **AddItemForm:** Removed `createdBy` from payload (backend extracts from token)
- `BETTER_AUTH_SECRET` synced to backend `.env`
- Google OAuth wired on login/register pages via `authClient.signIn.social()`

### Other Changes
- "Book Now" button on tour details redirects unauthenticated users to `/login`
- DiscoverWeeklySection fetches from API instead of mock data
- middleware.ts updated with `/items/add` and `/items/manage` matchers

### Post-Build Package Update Fixes
- Updated all packages to latest compatible versions (next 16.2.10, react 19.2.7, tailwindcss 4.3.2, etc.)
- TypeScript pinned to ^6.0.3 (TS 7 broke eslint-config-next peer deps)
- Added `as const` to `type: 'spring'` in 3 files for stricter framer-motion v12 types
- Removed `* { margin: 0; padding: 0; }` from globals.css (unlayered CSS was overriding Tailwind v4 `@layer utilities` due to Cascade Layer priority)
- Fixed body CSS variables (`--foreground-rgb` etc. were undefined after Next.js upgrade)
- Made borders consistent & lighter across ThreeStepsSection, Navbar dropdown, and TravelGuidelineSection (all use `border-slate-200`)
- Removed infinite floating animation from TravelGuidelineSection shapes (kept entrance only)
- Added "Manage Tours" nav link visible when signed in (desktop + mobile)
- Fixed group-hover ring color on ThreeStepsSection cards (added `ring-slate-200/60` to prevent dark outline)

## KEY DECISIONS
1. No Hero UI components — custom Button/Card/Input/Modal/Skeleton
2. framer-motion over Motion.dev
3. proxy.ts/handles all route protection — no ProtectedRoute/AuthContext
4. Demo login fills fields only (no auto-submit)
5. LoginPage redirects to `/` (not `/tours`)
6. `serverFetch`/`serverMutation` pattern — no per-feature hooks
7. `formatPrice` returns whole numbers only (no `.00`)
8. Use PATCH (not PUT) for tour updates
9. CreatedBy field sent from frontend auth session
10. Charts moved to AreaChart (daily creation stats) instead of bar chart (price distribution)

## PRE-EXISTING ISSUES
- `TravelGuidelineSection.tsx` — 3 TS errors (framer-motion ViewportOptions `delay`), cosmetic only

## NEXT SESSION — WHERE TO START
**Next phase:** Phase 15.2 — Deploy to Vercel

### Deployment Steps:
1. **Backend** (already prepared in `travel-tree-backend`):
   - Push `travel-tree-backend` to its Git repo
   - Deploy on Vercel (Root: `travel-tree-backend`, Build: `npx tsc`, Output: `dist`)
   - Set env vars: `MONGODB_URI`, `CORS_ORIGIN`, `BETTER_AUTH_SECRET`
   - Note the production URL (e.g. `https://travel-tree-server.vercel.app`)

2. **Frontend** (this project):
   - Push to its Git repo
   - Deploy on Vercel (auto-detects Next.js)
   - Set env vars in Vercel dashboard:
     - `BETTER_AUTH_SECRET` — same as backend
     - `BETTER_AUTH_URL` — frontend production URL
     - `NEXT_PUBLIC_API_URL` — `https://your-backend.vercel.app/api`
     - `NEXT_PUBLIC_DEMO_EMAIL` / `NEXT_PUBLIC_DEMO_PASSWORD`
     - `MONGO_DB_URI` — MongoDB Atlas URI (for Better Auth sessions)
     - `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`
   - Update Google OAuth callback to include production domain
   - Test all routes, auth flow, and CRUD operations

## HOW TO START DEV SERVER
```bash
# Terminal 1: Backend
cd ../travel-tree-backend && npm run dev

# Terminal 2: Frontend
npm run dev   # runs on port 3000
```

## STARTUP READ ORDER
1. `.opencode/plans/project-status.md`
2. `.opencode/plans/tasks.md`
3. `AGENTS.md` — workflow guidelines
