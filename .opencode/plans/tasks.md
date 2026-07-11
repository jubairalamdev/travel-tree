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
- [ ] Create lib/auth.ts with betterAuth configuration
- [ ] Configure MongoDB adapter (mongodbAdapter)
- [ ] Enable email/password authentication
- [ ] Configure session management with secure cookies
- [ ] Set base URL and secret key
- [ ] Enable cookie caching for performance (5 min maxAge)
- [ ] No 2FA or email verification plugins (keep it simple)

### 4.5 Create API Route Handler
- [ ] Create app/api/auth/[...all]/route.ts file
- [ ] Mount Better Auth handler using toNextJsHandler
- [ ] Configure GET and POST methods
- [ ] Handle authentication API requests

### 4.6 Create Client-Side Auth Client
- [ ] Create lib/auth-client.ts with createAuthClient
- [ ] Configure base URL for API calls
- [ ] Export signIn, signUp, signOut hooks
- [ ] Export useSession hook for reactive session access
- [ ] Export getSession hook for async session retrieval
- [ ] Export useUser hook for user data
- [ ] Configure React client for session management

### 4.7 Create Next.js Proxy for Safe Redirection
- [ ] Create proxy.ts file at root level
- [ ] Configure proxy to run on authentication routes (/login, /register, /tours, /tours/[id])
- [ ] Implement permission-based redirects for logged-in users (redirect /login, /register to /tours)
- [ ] Implement protection for private routes (redirect unauthenticated to /login)
- [ ] Use getSession from Better Auth inside proxy for server-side session verification
- [ ] Configure matcher for path filtering
- [ ] Add loading state handling for redirects

### 4.8 Create Login Page
- [ ] Create src/components/auth/LoginPage.tsx
- [ ] Build login form with email and password fields
- [ ] Implement form validation with error handling
- [ ] Add submit button with loading state
- [ ] Include link to registration page
- [ ] Add social auth button placeholder for Google (manual)
- [ ] Use Hero UI components for styling
- [ ] Handle redirect after successful login

### 4.9 Create Register Page
- [ ] Create src/components/auth/RegisterPage.tsx
- [ ] Build registration form with name, email, password fields
- [ ] Add password confirmation field
- [ ] Implement form validation for all fields
- [ ] Add inline validation and error display
- [ ] Include submit button with loading state
- [ ] Link to login page for existing users
- [ ] Use Hero UI components for styling
- [ ] Handle redirect after successful registration

### 4.10 Create Protected Route Component
- [ ] Create src/components/auth/ProtectedRoute.tsx
- [ ] Implement useSession hook for reactive session checking
- [ ] Implement redirect to /login if unauthenticated
- [ ] Add loading state during session verification
- [ ] Server-side session validation using getSession API
- [ ] Client-side fallback check with useSession
- [ ] Smooth redirect handling with proper state management
- [ ] Handle session expiration gracefully

### 4.11 Create Auth Context Provider
- [ ] Create AuthProvider component
- [ ] Wrap app with session provider
- [ ] Handle session state management with useSession
- [ ] Implement error handling for auth failures
- [ ] Add session refresh on mount using getSession
- [ ] Clean up subscriptions and prevent memory leaks
- [ ] Implement session timeout detection and handling

### 4.12 Create Utility Functions
- [ ] Create auth helper utilities
- [ ] Implement logout functionality with proper session cleanup
- [ ] Create session validation utilities using getSession
- [ ] Add auth error handling helpers
- [ ] Create session timeout detection and refresh logic
- [ ] Implement utility functions for auth state checking

## Phase 5: Main Application Layout

### 5.1 Create Main Layout Wrapper
- [ ] Set up app layout structure
- [ ] Integrate navigation
- [ ] Add global error boundary
- [ ] Setup metadata

### 5.2 Update Navbar for Auth States
- [ ] Add login/signup buttons for logged out state
- [ ] Add user dropdown for logged in state
- [ ] Add mobile menu toggle
- [ ] Implement route change logic

## Phase 6: Tours Listing Page

### 6.1 Create Tour API Hook
- [ ] Create useTours query hook
- [ ] Add search parameter support
- [ ] Add filters support

### 6.2 Create Filter Sidebar Component
- [ ] Create category filter dropdown
- [ ] Create price range slider
- [ ] Create rating filter
- [ ] Add reset filters button

### 6.3 Create Sort Dropdown Component
- [ ] Create sort options (price low/high, newest)
- [ ] Add sort change handler

### 6.4 Create Tours Grid Component
- [ ] Create responsive grid (4 columns on desktop)
- [ ] Use card component from Phase 2
- [ ] Add pagination

### 6.5 Create Pagination Component
- [ ] Create numbered pagination UI
- [ ] Add page change handler
- [ ] Add active state styling

### 6.6 Create Tour Listing Page
- [ ] Setup page layout with search bar
- [ ] Integrate filter sidebar
- [ ] Integrate sort dropdown
- [ ] Integrate tours grid
- [ ] Add skeleton loading states

### 6.7 Add Search Bar Component
- [ ] Create search input field
- [ ] Add search button
- [ ] Add search debounce logic

## Phase 7: Tour Details Page

### 7.1 Create Tour Details API Hook
- [ ] Create useTourDetails query hook
- [ ] Add tour ID parameter
- [ ] Add error handling

### 7.2 Create Gallery Component
- [ ] Create image gallery with thumbnails
- [ ] Add lightbox/modal for full view
- [ ] Use oval/rounded styling

### 7.3 Create Tour Information Sections
- [ ] Create title, location, price, rating section
- [ ] Create description section
- [ ] Create overview section
- [ ] Create key information card (duration, group size, difficulty, date)
- [ ] Create reviews section
- [ ] Create related tours section

### 7.4 Create Book/Book Now Button
- [ ] Add booking button with primary color
- [ ] Add loading state
- [ ] Add error handling

### 7.5 Create Tour Details Page
- [ ] Set up page layout
- [ ] Integrate all tour sections
- [ ] Add breadcrumbs
- [ ] Add related tours

## Phase 8: Add Item Page

### 8.1 Create Add Item Types
- [ ] Create addItem fields type
- [ ] Create item data type

### 8.2 Create Add Item API Hook
- [ ] Create useAddItem mutation hook
- [ ] Add form validation
- [ ] Add loading states

### 8.3 Create Add Item Form Component
- [ ] Create form fields: title, short description, full description, price, date, image URL
- [ ] Add form validation
- [ ] Add submit button with hover color
- [ ] Add loading state
- [ ] Add error display

### 8.4 Create Add Item Page
- [ ] Set up protected route
- [ ] Integrate form
- [ ] Add form validation
- [ ] Add success/error handling

## Phase 9: Manage Items Page

### 9.1 Create Manage Items API Hook
- [ ] Create useItems query hook
- [ ] Create useDeleteItem mutation hook
- [ ] Add loading states

### 9.2 Create Manage Items Table/Grid
- [ ] Create responsive layout (table on desktop, grid on mobile)
- [ ] Add item data display
- [ ] Add view action button
- [ ] Add delete action button

### 9.3 Create Chart Component
- [ ] Create Recharts component
- [ ] Add price distribution chart
- [ ] Add views over time chart
- [ ] Add booking analytics chart

### 9.4 Create Manage Items Page
- [ ] Set up protected route
- [ ] Integrate items data
- [ ] Add delete confirmation dialog
- [ ] Add chart section

## Phase 10: Additional Pages

### 10.1 Create About Page
- [ ] Create about page layout
- [ ] Add company story section
- [ ] Add mission section
- [ ] Add team section with member cards

### 10.2 Create Contact Page
- [ ] Create contact page layout
- [ ] Build contact form with fields
- [ ] Add embedded map placeholder
- [ ] Add contact information section

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
