# Travel Tree

A production-ready travel agency web application built with Next.js, TypeScript, and Tailwind CSS. Features tour browsing, user authentication, and full CRUD management for tours.

## Features

- **Landing Page** — Hero slider, weekly tours, statistics, testimonials, newsletter, and more
- **Tour Listings** — Search, category/price/rating filters, sort by price or rating, paginated grid
- **Tour Details** — Full tour info, breadcrumbs, related tours, "Book Now" with auth gate
- **Authentication** — Register, login, Google OAuth, session management via Better Auth + MongoDB
- **Add Tour** — Protected form with validation, creates tours tied to your account
- **Manage Tours** — Edit inline via modal, delete with confirmation, view daily creation chart
- **Responsive Design** — Mobile-first layout with hamburger menu, adaptive grids
- **Performance** — Dynamic imports, skeleton loading states, optimized images

## Prerequisites

- **Node.js** v18+ (v20 LTS recommended)
- **npm** v9+
- **MongoDB** Atlas account (or local instance)
- **Backend API** — Express server at `travel-tree-backend`

## Clone & Get Started

```bash
# Clone the repository
git clone https://github.com/your-username/travel-tree.git
cd travel-tree

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
```

Edit `.env` with your values:

| Variable | Description | Example |
|----------|-------------|---------|
| `BETTER_AUTH_SECRET` | 32+ char secret for auth (generate with `openssl rand -hex 32`) | `your-secret-min-32-chars` |
| `BETTER_AUTH_URL` | Frontend URL (use `http://localhost:3000` for dev) | `http://localhost:3000` |
| `NEXT_PUBLIC_BETTER_AUTH_URL` | Same as above, accessible to client | `http://localhost:3000` |
| `MONGO_DB_URI` | MongoDB connection string for Better Auth sessions | `mongodb+srv://...` |
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `http://localhost:5000/api` |
| `NEXT_PUBLIC_DEMO_EMAIL` | Demo login email (optional) | `demo@example.com` |
| `NEXT_PUBLIC_DEMO_PASSWORD` | Demo login password (optional) | `DemoPassword123` |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID (optional) | `xxx.apps.googleusercontent.com` |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret (optional) | `GOCSPX-...` |

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Backend Setup

The frontend connects to a separate Express + MongoDB backend:

```bash
cd ../travel-tree-backend
npm install
```

Create `travel-tree-backend/.env`:

```env
PORT=5000
MONGODB_URI=mongodb+srv://...
CORS_ORIGIN=http://localhost:3000
BETTER_AUTH_SECRET=your-secret-min-32-chars
```

Then start both:

```bash
# Terminal 1: Backend
cd ../travel-tree-backend && npm run dev

# Terminal 2: Frontend
cd ../travel-tree && npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js dev server (port 3000) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/               # Next.js App Router pages & API routes
│   ├── api/auth/      # Better Auth API handler
│   ├── items/         # Add/Manage tour pages (protected)
│   ├── tours/         # Tour listing & detail pages
│   ├── login/         # Login page
│   ├── register/      # Registration page
│   ├── about/         # About page
│   └── contact/       # Contact page
├── components/        # Reusable UI components
│   ├── auth/          # Login/Register forms
│   └── ...            # Buttons, Cards, Navbar, Footer, sections
├── lib/               # Utilities: API fetchers, auth client, helpers
├── types/             # TypeScript interfaces (Tour, User, etc.)
├── assets/            # Static assets (images, icons)
└── proxy.ts           # Route protection middleware
```

## Routes

| Route | Description | Auth |
|-------|-------------|------|
| `/` | Landing page (9 sections) | Public |
| `/tours` | Tour listing with search, filters, sort | Public |
| `/tours/[id]` | Tour details | Public |
| `/login` | Login page | Public |
| `/register` | Registration page | Public |
| `/about` | About page | Public |
| `/contact` | Contact page | Public |
| `/items/add` | Add new tour | Protected |
| `/items/manage` | Manage tours (edit/delete, chart) | Protected |

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Auth:** Better Auth + MongoDB adapter
- **Data Fetching:** TanStack React Query
- **Charts:** Recharts
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Carousel:** Swiper
- **Toasts:** React Toastify

## Design System

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#fc4c5a` | Buttons, badges, highlights |
| Secondary | `#7fdbc9` | Statistics background |
| Accent | `#ffc83d` | Stars, decorative elements |
| Hover | `#0d6efd` | Button hover states |

## Deploy to Vercel

```bash
npm run build
vercel --prod
```

Required environment variables in Vercel dashboard:

| Variable | Description |
|----------|-------------|
| `BETTER_AUTH_SECRET` | Same secret used by backend |
| `BETTER_AUTH_URL` | Frontend production URL (e.g. `https://travel-tree.vercel.app`) |
| `NEXT_PUBLIC_BETTER_AUTH_URL` | Same production URL |
| `MONGO_DB_URI` | MongoDB Atlas URI |
| `NEXT_PUBLIC_API_URL` | Backend production URL (e.g. `https://api.vercel.app/api`) |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |
