# Travel Tree

A production-ready travel agency frontend built with Next.js 15, TypeScript, and Tailwind CSS.

## Prerequisites

- **Node.js** v18+ (recommended: v20 LTS)
- **npm** v9+
- **MongoDB** Atlas account (or local MongoDB instance)
- Backend API server running on port 5000

## Setup

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your MongoDB URI and Better Auth secret

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Backend

This frontend connects to a separate Express + MongoDB backend. Start it from the `travel-tree-backend` directory:

```bash
cd ../travel-tree-backend
npm install
npm run dev
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js dev server (port 3000) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/              # Next.js App Router pages & API routes
│   ├── items/        # Add/Manage tour pages (protected)
│   ├── tours/        # Tour listing & detail pages
│   ├── login/        # Authentication pages
│   └── ...
├── components/       # Reusable UI components
│   ├── auth/         # Login/Register forms
│   └── ...
├── lib/              # Utilities (API fetchers, auth client, helpers)
├── types/            # TypeScript interfaces
└── assets/           # Static assets
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
| `/items/manage` | Manage tours (edit/delete) | Protected |

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS
- **Auth:** Better Auth (MongoDB adapter)
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
| Hover | `#0d6efd` | Button hover state only |

## Deployment

### Build
```bash
npm run build
```

### Environment Variables
Ensure these are set in production:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_API_URL` | Backend API URL (e.g. `https://api.example.com/api`) |
| `BETTER_AUTH_SECRET` | 32+ char secret for auth encryption |
| `BETTER_AUTH_URL` | Deployed frontend URL |
| `MONGO_DB_URI` | MongoDB connection string |

### Deploy to Vercel
```bash
npm run build
vercel --prod
```
