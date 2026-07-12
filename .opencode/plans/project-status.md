# Travel Tree Frontend - Project Status & Context

## PROJECT OVERVIEW

**Project Name:** Travel Tree Frontend
**Type:** Production-ready travel agency web application
**Framework:** Next.js (App Router) + TypeScript + Tailwind CSS
**Current Status:** Phases 1-5 complete (auth, layout, navbar), Phases 10 complete (About, Contact). Phases 6-9, 11-15 remain.

## PROJECT LOCATION
```
/home/jubair/Projects/SCIC/Assignment 3/travel-tree
```

## TECH STACK
- **Framework:** Next.js (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS with custom theme
- **UI Components:** Custom (Button, Card, Input, Modal, Skeleton) — Hero UI listed in PRD but not used; custom components built instead
- **Charts:** Recharts (not yet used, for Phase 9)
- **State Management / Fetching:** TanStack React Query (not yet used, for Phases 6-9)
- **Icons:** Lucide React
- **Animation:** framer-motion (Motion.dev listed in PRD but framer-motion used in practice)
- **Carousels:** Swiper
- **Auth:** Better Auth (server-side via `lib/auth.ts` + client-side via `lib/auth-client.ts`)
- **Database (Auth):** MongoDB Atlas (via `mongodb` native driver, `lib/mongodb.ts`)
- **Toast Notifications:** react-toastify
- **Fonts:** Google Fonts (Inter + Poppins)

## DESIGN SYSTEM

### Color Palette (Strictly Enforced)
| Purpose | Color | HEX | Usage |
|---------|-------|-----|-------|
| Primary | Red | `#fc4c5a` | Buttons, Badges, Active States, Highlights |
| Secondary | Teal | `#7fdbc9` | Stats section BG, Demo credentials button, soft highlights |
| Accent | Yellow | `#ffc83d` | Icons, Stars, Decorative Elements |
| Hover | Blue | `#0d6efd` | ONLY for primary button hover state |
| White | White | `#ffffff` | Backgrounds, cards |
| Text Dark | Near-black | `#1a1a1a` | Headings |
| Text Gray | Gray | `#666666` | Body text, subtext |

### Key Design Rules
- 8px spacing grid
- Consistent card design across app (same height, width, border-radius, shadow)
- Mobile-first responsive design (breakpoints: sm 640px, md 768px, lg 1024px, xl 1280px)
- No Lorem Ipsum — meaningful travel content only
- Images use placeholder `src=""` with descriptive `alt` text (to be replaced later)

## ROUTES / PAGES
| Route | Page | Status |
|-------|------|--------|
| `/` | Landing page (9 sections) | Done |
| `/login` | Login page with email/password + Google social placeholder + Demo Credentials button | Done |
| `/register` | Register page with name/email/password/confirm + inline validation | Done |
| `/about` | About page with Our Story, What Drives Us, Meet Our Team | Done |
| `/contact` | Contact page with form, contact info cards, map placeholder | Done |
| `/tours` | Tours listing | Not started |
| `/tours/[id]` | Tour details | Not started |
| `/items/add` | Add item (protected) | Not started |
| `/items/manage` | Manage items (protected) | Not started |

## CURRENT STATUS

### ✅ COMPLETED WORK & HOW IT WAS DONE

#### Phase 1: Project Setup & Configuration
- Next.js App Router project initialized with TypeScript strict mode
- Tailwind CSS configured with custom color palette (primary `#fc4c5a`, secondary `#7fdbc9`, accent `#ffc83d`, hover `#0d6efd`)
- Core dependencies installed: recharts, @tanstack/react-query, lucide-react, framer-motion, swiper, react-toastify, hero-ui (v3)
- Folder structure: `src/app`, `src/components`, `src/lib`, `src/types`, `src/assets`
- Global CSS with custom theme colors, root layout with metadata/OG/Twitter cards, Google Fonts (Inter + Poppins)

#### Phase 2: Global Components
- **Shared UI:** `Button` (primary/secondary/outline variants), `Card`, `Input`, `Modal`, `Skeleton` — all under `src/components/`
- **Layout:** `Navbar` (sticky, scroll-aware), `MobileMenu` (slide-in drawer with overlay), `Footer` (4-column), `TopBar` (copyright + payment icons + back-to-top)
- **Utilities:** `formatPrice`, `ratingToStars`, `validateImageUrl`, `formatDate` in `src/lib/`
- **Types:** `Tour`, `User`, `NavigationLink`, `Stats`, `Testimonial`, `Event`, `TeamMember` in `src/types/`
- All components re-exported from `src/components/index.ts`

#### Phase 3: Landing Page (9 sections)
All sections created as separate components and assembled on `src/app/page.tsx`:
1. **HeroSection** — Swiper slider with 3 slides, floating shapes (framer-motion), 60-70vh, responsive (shapes hidden on mobile)
2. **DiscoverWeeklySection** — 3 cards/row with featured image, badge, title, location, rating, price, explore button
3. **ThreeStepsSection** — 3 card steps with Suitcase/Taxi/Star icons
4. **StatisticsSection** — 4-column grid on `#7fdbc9` background, icons + counts (28K users, 13K tours, 68K likes, 10K ratings)
5. **TravelGuidelineSection** — Split layout: left heading + checklist, right overlapping oval image placeholders (has pre-existing TS errors with framer-motion ViewportOptions `delay` — 3 errors, cosmetic only)
6. **TestimonialsSection** — Carousel with quote cards, circular avatars in primary/secondary/accent colors
7. **VideoSection** — Full-width background with play button (triangle in `#fc4c5a`)
8. **NewsletterSection** — Split: left illustration placeholder, right `#7fdbc9` bg with email input + subscribe button
9. **Footer** — 4-column layout with logo, description, social icons, support/about/contact links, bottom bar

#### Phase 4: Authentication System
- **Better Auth** configured with MongoDB adapter (`lib/auth.ts`), email/password only (no 2FA, no email verification), 7-day sessions, 5-min cookie cache
- **MongoDB connection** (`lib/mongodb.ts`) — `MongoClient` with connection pooling, graceful shutdown
- **API route** — `app/api/auth/[...all]/route.ts` mounts Better Auth handler for GET/POST
- **Auth client** (`lib/auth-client.ts`) — `createAuthClient` with `signIn`, `signUp`, `signOut`, `useSession`, `getSession`, `useUser`
- **Proxy** (`proxy.ts`) — Next.js middleware. Redirects logged-in users from /login → /tours, /register → /tours. Redirects unauthenticated users from protected routes to /login. Matcher: /login, /register, /tours, /tours/:path*
- **LoginPage** — Centered card with email/password, error banner, loading state, Google button (placeholder), toast.success/error from react-toastify
- **RegisterPage** — Name/email/password/confirm fields, inline per-field validation (min length, email format, password match), error clears on field edit, redirects to /tours on success, toast.success/error
- **Demo Login** — "Demo Credentials" button (secondary teal `#7fdbc9`) auto-fills email + password from `NEXT_PUBLIC_DEMO_EMAIL` / `NEXT_PUBLIC_DEMO_PASSWORD` env vars. Does NOT auto-submit — user clicks "Sign In" manually. Hidden if env vars not set. Added error message if credentials missing.
- ProtectedRoute, AuthContext, auth utilities were intentionally **removed** — proxy.ts handles route protection server-side, and better-auth's `useSession` provides reactive auth state without a context wrapper.

#### Phase 5: Main Application Layout
- **Root layout** (`app/layout.tsx`) — Added `<main className="flex-1">` wrapper around children, `flex flex-col min-h-screen` on body for sticky footer
- **Error boundary** (`app/error.tsx`) — 'use client' component with error icon, "Something went wrong" message, "Try Again" button calling `reset()`
- **404 page** (`app/not-found.tsx`) — Large "404" text, "Page Not Found" heading, "Back to Home" link
- **Navbar auth states** — `useSession()` from better-auth drives UI:
  - **Logged out:** Sign In (outlined) + Get Started (primary) buttons
  - **Loading state:** Skeleton placeholder while session is pending
  - **Logged in:** Manage Items + Add Item buttons, profile dropdown with avatar initial, name/email, dropdown links to Manage/Add, red Sign Out with toast
  - **Mobile:** `MobileMenu` now receives `session`/`isPending` props and shows auth-appropriate UI
  - **Bug fixed:** Navbar had conflicting classes `bg-white shadow-lg py-4 bg-transparent py-3` — changed to proper conditional `isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-4'`

#### Phase 10: Additional Pages
- **AboutPage** (`/about`) — 3 sections:
  1. "Our Story" — split layout with narrative text + gradient image placeholder
  2. "What Drives Us" — 4-column value cards (Mission/Passion/Promise/Impact) on `secondary/10` bg
  3. "Meet Our Team" — 4-column team member grid with avatar initials, roles, bios
  - Added `TeamMember` interface to `src/types/index.ts`
- **ContactPage** (`/contact`) — 2-column layout:
  1. Left: Contact form (name, email, subject, message) with inline validation, `toast.success` on submit, loading state
  2. Right: 2x2 contact info cards (MapPin/Phone/Mail/Clock with address, phone, email, hours) + map placeholder gradient box with "Coming soon"

### Backend PRD
- `Backend PRD.md` created as reference for a separate Node.js + Express.js + TypeScript + MongoDB Atlas backend
- Single-file `src/index.ts`, no MVC, no auth (JWT added later), native `mongodb` driver (no Mongoose)
- Tours CRUD at `/api/tours`, consistent `{ success, message, data }` response format, CORS to localhost:3000

### KEY IMPLEMENTATION DECISIONS
1. **No Hero UI components used** despite being listed in PRD — project uses custom `Button`, `Input`, `Card`, `Modal`, `Skeleton` components instead
2. **framer-motion over Motion.dev** — framer-motion installed and used; Motion.dev listed in PRD but not used
3. **proxy.ts handles all route protection** — no ProtectedRoute wrapper, no AuthContext provider needed
4. **Custom Button component** has primary/secondary/outline variants with `bg-primary text-white hover:bg-hover` pattern
5. **Demo login fills fields only** — does NOT auto-submit; user must click Sign In
6. **No Mongoose** — native `mongodb` driver used for both frontend auth DB and backend reference
7. **LoginPage** redirects to `/` on success (not `/tours`)

### ❌ NOT STARTED
- Phase 6: Tours Listing Page — needs backend or mock data
- Phase 7: Tour Details Page — needs backend or mock data
- Phase 8: Add Item Page — needs backend or mock data
- Phase 9: Manage Items Page — needs backend or mock data + Recharts
- Phase 11: Images & Assets — placeholder images, visa/mastercard icons
- Phase 12: Performance & Optimization — code splitting, lazy loading, image optimization
- Phase 13: Testing & Documentation — mock data, responsive testing, README
- Phase 14: Final Polish — color review, spacing, interactions
- Phase 15: Deployment — build, env vars, deploy

### PRE-EXISTING ISSUES
- `src/components/TravelGuidelineSection.tsx` has 3 TypeScript errors (lines 127, 142, 157): `'delay' does not exist in type 'ViewportOptions'`. These are framer-motion API changes, not caused by any of our work.

## PROJECT STRUCTURE
```
src/
├── app/
│   ├── about/page.tsx
│   ├── api/auth/[...all]/route.ts
│   ├── contact/page.tsx
│   ├── login/page.tsx
│   ├── register/page.tsx
│   ├── test/page.tsx
│   ├── page.tsx                 # Landing page
│   ├── layout.tsx               # Root layout with Navbar, Footer, ToastContainer
│   ├── error.tsx                # Global error boundary
│   ├── not-found.tsx            # 404 page
│   └── globals.css
├── components/
│   ├── auth/
│   │   ├── LoginPage.tsx
│   │   └── RegisterPage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── Button.tsx / Card.tsx / Input.tsx / Modal.tsx / Skeleton.tsx
│   ├── Navbar.tsx / MobileMenu.tsx / Footer.tsx / TopBar.tsx
│   ├── HeroSection.tsx / DiscoverWeeklySection.tsx / ThreeStepsSection.tsx
│   ├── StatisticsSection.tsx / TravelGuidelineSection.tsx
│   ├── TestimonialsSection.tsx / VideoSection.tsx / NewsletterSection.tsx
│   └── index.ts                # Barrel exports
├── lib/
│   ├── mongodb.ts              # MongoDB client
│   ├── auth.ts                 # Better Auth config
│   ├── auth-client.ts          # Client-side auth
│   └── utils.ts                # formatPrice, ratingToStars, validateImageUrl, formatDate
├── types/
│   └── index.ts                # Tour, User, NavigationLink, Stats, Testimonial, Event, TeamMember
└── assets/
```

## ENVIRONMENT VARIABLES (`.env`)
```
BETTER_AUTH_SECRET=fb46RIROfEcL7KZa0wf0wmZP3DewIvQo
BETTER_AUTH_URL=http://localhost:3000
MONGO_DB_URI=mongodb+srv://...
NEXT_PUBLIC_DEMO_EMAIL=test@jubair.com
NEXT_PUBLIC_DEMO_PASSWORD=A12345678a
```

## FILES
- `/Frontend PRD.md` — Product requirements document
- `/Backend PRD.md` — Backend API reference (separate project, not built yet)
- `/.opencode/plans/tasks.md` — Full task checklist (412 lines)
- `/.opencode/plans/project-status.md` — This file
- `/proxy.ts` — Next.js middleware for route protection
- `/authentication.md` — Auth implementation guide

## HOW TO START DEV SERVER
```bash
npm run dev
```
Frontend runs on `http://localhost:3000`. Backend will run on port 5000 when built.

## DEVELOPMENT GUIDELINES
- Follow the strict color palette (primary `#fc4c5a`, secondary `#7fdbc9`, accent `#ffc83d`, hover `#0d6efd`)
- Use framer-motion for animations (not Motion.dev)
- Use Lucide React for icons
- Use react-toastify for toast notifications
- Maintain consistent card design
- Use meaningful travel content (no Lorem Ipsum)
- Mobile-first responsive design
- Proper TypeScript typing
- Use TanStack Query for all data fetching with skeleton loaders

## NEXT SESSION STARTUP
When starting a new session, read these files in order:
1. `/.opencode/plans/project-status.md` — this file
2. `/.opencode/plans/tasks.md` — detailed task checklist
3. `/Frontend PRD.md` — original requirements
4. `/Backend PRD.md` — backend API reference (for building API-consuming features)
