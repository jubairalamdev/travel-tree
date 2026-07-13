# Travel Tree Frontend - Development Plan

## Phase 1: Project Setup & Configuration

### 1.1 Initialize Next.js Project
- [x] Create Next.js App Router project with TypeScript
- [x] Configure strict TypeScript settings
- [x] Set up Tailwind CSS with custom color palette
- [x] Install core dependencies (Recharts, TanStack Query, Lucide React, Motion.dev, Swiper)
- [x] Install core dependencies (Hero Ui Latest, v3 version)

### 1.2 Configure Project Structure
- [x] Create folder structure: src/app, src/components, src/lib, src/types, src/assets
- [x] Set up global CSS with custom theme colors
- [x] Configure tailwind.config.ts with custom colors

### 1.3 Create Global Layout & Head Components
- [x] Set up root layout with metadata
- [x] Configure global CSS imports
- [x] Setup Google Fonts (likely a modern sans-serif)

## Phase 2: Global Components

### 2.1 Create Shared UI Components
- [x] Button component with variants
- [x] Card component (consistent design across app)
- [x] Input component
- [x] Modal/Dialog component
- [x] Loading/Skeleton components

### 2.2 Create Global Layout Components
- [x] Sticky Navbar (desktop navigation)
- [x] Mobile Hamburger Menu
- [x] Mobile Navigation Drawer
- [x] Footer component
- [x] Top bar (copyright, payment icons, back-to-top button)

### 2.3 Create Utility Functions
- [x] Format price function
- [x] Rating to star display function
- [x] Image URL validation helper
- [x] Date formatter

### 2.4 Define Type Definitions
- [x] Tour type interface
- [x] User type interface
- [x] Navigation link types
- [x] Stats type
- [x] Testimonial type
- [x] Event type

## Phase 3: Landing Page (9 Sections)

### 3.1 Hero Section
- [x] Create hero section component (60-70vh)
- [x] Set background with swiper slider with 3 sliders
- [x] Display heading, subheading, subtitle on each sliders
- [x] Add some shapes automatically floating with Motion.dev
- [x] Mobile responsive slider, hide shapes on mobile

### 3.2 Discover Weekly Section
- [x] Create card component for weekly tours
- [x] Display 3 cards per row
- [x] Add featured image, badge, tour title
- [x] Show location, rating, price
- [x] Add explore button

### 3.3 Three Steps Section
- [x] Create 3 step cards
- [x] Add suitcase, taxi, star icons
- [x] Add description text

### 3.4 Statistics Section
- [x] Create statistics cards
- [x] Set background color (#7fdbc9)
- [x] Display 4 columns with icons and text
- [x] Add user count, tour count, likes, ratings

### 3.5 Travel Guideline Section
- [x] Split layout component
- [x] Left side: heading, subheading, checklist
- [x] Right side: 2 overlapping oval images

### 3.6 Testimonials Section
- [x] Create testimonial card with quote, name, role
- [x] Add circular avatar background with colors
- [x] Implement carousel for testimonials

### 3.7 Video Section
- [x] Create full-width background section
- [x] Add section heading and large heading
- [x] Add circular play button with triangle color
- [x] Add embedded video placeholder

### 3.8 Newsletter Section
- [x] Split layout component
- [x] Left side: illustration (yellow hat, purple shirt, map)
- [x] Right side: background, heading, email input, subscribe button

### 3.9 Footer Component
- [x] Create 4-column footer layout
- [x] Left: logo, description, social icons
- [x] Middle: support links, about links
- [x] Right: contact information
- [x] Bottom bar: copyright, payment icons, back-to-top button

## Phase 4: Authentication System

### 4.1 Install Dependencies
- [x] Install better-auth core library
- [x] Install @better-auth/mongo-adapter for MongoDB integration
- [x] Install mongodb driver for database connections
- [x] No additional packages needed (password hashing is built-in)

### 4.2 Configure Environment Variables
- [x] Create .env file with BETTER_AUTH_SECRET (min 32 chars)
- [x] Set BETTER_AUTH_URL to http://localhost:3000
- [x] Configure MONGODB_URI for MongoDB Atlas connection
- [x] Configure optional social provider credentials (Google Only)

### 4.3 Set Up MongoDB Connection
- [x] Create lib/mongodb.ts for MongoDB client connection
- [x] Configure connection pooling and error handling
- [x] Export database client instance
- [x] Handle graceful shutdown for connection

### 4.4 Configure Better Auth Instance
- [x] Create lib/auth.ts with betterAuth configuration
- [x] Configure MongoDB adapter (mongodbAdapter)
- [x] Enable email/password authentication
- [x] Configure session management with secure cookies
- [x] Set base URL and secret key
- [x] Enable cookie caching for performance (5 min maxAge)
- [x] No 2FA or email verification plugins (keep it simple)

### 4.5 Create API Route Handler
- [x] Create app/api/auth/[...all]/route.ts file
- [x] Mount Better Auth handler using toNextJsHandler
- [x] Configure GET and POST methods
- [x] Handle authentication API requests

### 4.6 Create Client-Side Auth Client
- [x] Create lib/auth-client.ts with createAuthClient
- [x] Configure base URL for API calls
- [x] Export signIn, signUp, signOut hooks
- [x] Export useSession hook for reactive session access
- [x] Export getSession hook for async session retrieval
- [x] Export useUser hook for user data
- [x] Configure React client for session management

### 4.7 Create Next.js Proxy for Safe Redirection
- [x] Create proxy.ts file at root level
- [x] Configure proxy to run on authentication routes (/login, /register, /tours, /tours/[id])
- [x] Implement permission-based redirects for logged-in users (redirect /login, /register to /tours)
- [x] Implement protection for private routes (redirect unauthenticated to /login)
- [x] Use getSession from Better Auth inside proxy for server-side session verification
- [x] Configure matcher for path filtering
- [x] Add loading state handling for redirects

### 4.8 Create Login Page
- [x] Create src/components/auth/LoginPage.tsx
- [x] Build login form with email and password fields
- [x] Implement form validation with error handling
- [x] Add submit button with loading state
- [x] Include link to registration page
- [x] Add social auth button placeholder for Google (manual)
- [x] Use Hero UI components for styling
- [x] Handle redirect after successful login

### 4.9 Create Register Page
- [x] Create src/components/auth/RegisterPage.tsx
- [x] Build registration form with name, email, password fields
- [x] Add password confirmation field
- [x] Implement form validation for all fields
- [x] Add inline validation and error display
- [x] Include submit button with loading state
- [x] Link to login page for existing users
- [x] Use Hero UI components for styling
- [x] Handle redirect after successful registration

### 4.10 Add Demo Login Button to Login Page
- [x] Create demo login button that auto-fills credentials
- [x] Configure demo credentials in environment variables
- [x] Implement auto-submit after filling credentials
- [x] Handle loading state for demo login
- [x] Add error handling if demo credentials are not configured

## Phase 5: Main Application Layout

### 5.1 Create Main Layout Wrapper
- [x] Set up app layout structure
- [x] Integrate navigation
- [x] Add global error boundary
- [x] Setup metadata

### 5.2 Update Navbar for Auth States
- [x] Add login/signup buttons for logged out state
- [x] Add user dropdown for logged in state
- [x] Add mobile menu toggle
- [x] Implement route change logic

## Phase 6: API Utility Functions

### 6.1 Create API Utility Functions
- [x] Create src/lib/serverFetch.ts for GET requests
- [x] Create src/lib/serverMutation.ts for POST/PUT/DELETE requests
- [x] Configure NEXT_PUBLIC_API_URL env var pointing to backend
- [x] Add error handling (check response.success, throw on failure)
- [x] Export both functions for use across all data-fetching pages

## Phase 7: Tours Listing Page

### 7.1 Create Filter Sidebar Component
- [x] Create category filter dropdown (extract unique categories from data)
- [x] Create price range filter (min/max inputs)
- [x] Create rating filter (stars or dropdown)
- [x] Add reset filters button

### 7.2 Create Sort Dropdown Component
- [x] Create sort options (price low/high, rating high/low)
- [x] Add sort change handler

### 7.3 Create Tours Grid Component
- [x] Create responsive grid (4 columns on desktop)
- [x] Use card component from Phase 2
- [x] Add client-side pagination

### 7.4 Create Pagination Component
- [x] Create numbered pagination UI
- [x] Add page change handler
- [x] Add active state styling

### 7.5 Create Tour Listing Page
- [x] Setup page layout with search bar
- [x] Fetch tours via useQuery + serverFetch('/tours')
- [x] Integrate filter sidebar (client-side filtering)
- [x] Integrate sort dropdown (client-side sorting)
- [x] Integrate tours grid
- [x] Add skeleton loading states
- [x] Add search bar with debounce (client-side search)

## Phase 8: Tour Details Page

### 8.1 Create Tour Details Sections
- [x] Create hero section with single large image (imageUrl)
- [x] Create title, location, price, rating display
- [x] Create description section
- [x] Create key information card (duration, category)
- [x] Create related tours section (fetch all, pick random 3-4)

### 8.2 Create Tour Details Page
- [x] Set up dynamic route page at app/tours/[id]/page.tsx
- [x] Fetch tour via useQuery + serverFetch('/tours/${id}')
- [x] Integrate all tour sections
- [x] Add breadcrumbs
- [x] Add loading/error states

## Phase 9: Add Item Page

### 9.1 Create Add Item Form Component
- [x] Create form fields: title, short description, full description, price, originalPrice, location, category, duration, image URL
- [x] Add form validation (required fields, price > 0)
- [x] Add submit button with loading state
- [x] Add error display

### 9.2 Create Add Item Page
- [x] Set up protected route at /items/add
- [x] Submit via useMutation + serverMutation('/tours', formData)
- [x] Add success/error handling with toast
- [x] Redirect to /tours on success

## Phase 10: Manage Items Page

### 10.1 Create Manage Items Table/Grid
- [x] Create responsive layout (table on desktop, grid on mobile)
- [x] Display tour data (title, price, location, rating)
- [x] Add view action button (links to /tours/[id])
- [x] Add delete action button with confirmation dialog

### 10.2 Create Chart Component
- [ ] Create Recharts component
- [ ] Add price distribution chart (bar chart of tours by price range)

### 10.3 Create Manage Items Page
- [ ] Set up protected route at /items/manage
- [ ] Fetch tours via useQuery + serverFetch('/tours')
- [ ] Delete tour via useMutation + serverMutation('/tours/${id}', {}, 'DELETE')
- [ ] Add delete confirmation dialog
- [ ] Add chart section
- [ ] Handle loading/error states

## Phase 10: Additional Pages

### 10.1 Create About Page
- [x] Create about page layout
- [x] Add company story section
- [x] Add mission section
- [x] Add team section with member cards

### 10.2 Create Contact Page
- [x] Create contact page layout
- [x] Build contact form with fields
- [x] Add embedded map placeholder
- [x] Add contact information section

## Phase 11: Images & Assets

### 11.1 Add Placeholders
- [ ] Add placeholder images for all tours
- [ ] Add placeholder illustrations for newsletter
- [ ] Add placeholder images for backgrounds
- [ ] Add placeholder logos and icons

### 11.2 Add External Assets
- [ ] Add visa icon
- [ ] Add mastercard icon
- [ ] Add social media icons

## Phase 12: Performance & Optimization

### 12.1 Implement Code Splitting
- [ ] Split page components
- [ ] Implement dynamic imports
- [ ] Add lazy loading for heavy components

### 12.2 Add Loading States
- [ ] Create skeleton loaders for all data fetching
- [ ] Add loading states for all pages
- [ ] Add loading spinners

### 12.3 Optimize Images
- [ ] Implement image optimization
- [ ] Add lazy loading
- [ ] Add responsive images

## Phase 13: Testing & Documentation

### 13.1 Create Mock Data
- [ ] Create mock tour data
- [ ] Create mock user data
- [ ] Create mock statistics data

### 13.2 Test Responsive Design
- [ ] Test all pages on mobile
- [ ] Test all pages on tablet
- [ ] Test all pages on desktop
- [ ] Fix responsive issues

### 13.3 Create README
- [ ] Add project setup instructions
- [ ] Add development guidelines
- [ ] Add deployment instructions

## Phase 14: Final Polish

### 14.1 Final Review
- [ ] Review all color usage
- [ ] Check spacing and alignment
- [ ] Verify content is meaningful
- [ ] Test all interactions

### 14.2 Performance Check
- [ ] Check bundle size
- [ ] Verify loading performance
- [ ] Test navigation speed

### 14.3 Browser Compatibility
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on Edge

## Phase 15: Deployment

### 15.1 Prepare Deployment
- [ ] Create production build
- [ ] Check environment variables
- [ ] Configure build settings

### 15.2 Deploy Application
- [ ] Deploy to Vercel/Netlify
- [ ] Verify deployment
- [ ] Test deployed application
