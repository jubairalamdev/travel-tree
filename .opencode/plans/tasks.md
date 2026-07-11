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
- [ ] Create 3 step cards
- [ ] Add suitcase, taxi, star icons
- [ ] Add description text

### 3.4 Statistics Section
- [ ] Create statistics cards
- [ ] Set background color (#7fdbc9)
- [ ] Display 4 columns with icons and text
- [ ] Add user count, tour count, likes, ratings

### 3.5 Travel Guideline Section
- [ ] Split layout component
- [ ] Left side: heading, subheading, checklist
- [ ] Right side: 2 overlapping oval images

### 3.6 Testimonials Section
- [ ] Create testimonial card with quote, name, role
- [ ] Add circular avatar background with colors
- [ ] Implement carousel for testimonials

### 3.7 Video Section
- [ ] Create full-width background section
- [ ] Add section heading and large heading
- [ ] Add circular play button with triangle color
- [ ] Add embedded video placeholder

### 3.8 Newsletter Section
- [ ] Split layout component
- [ ] Left side: illustration (yellow hat, purple shirt, map)
- [ ] Right side: background, heading, email input, subscribe button

### 3.9 Footer Component
- [ ] Create 4-column footer layout
- [ ] Left: logo, description, social icons
- [ ] Middle: support links, about links
- [ ] Right: contact information
- [ ] Bottom bar: copyright, payment icons, back-to-top button

## Phase 4: Authentication System

### 4.1 Create Authentication Types
- [ ] User credentials type
- [ ] Auth error type
- [ ] Login form fields type
- [ ] Register form fields type

### 4.2 Create Authentication API Hooks
- [ ] Create useLogin mutation hook
- [ ] Create useRegister mutation hook
- [ ] Add error handling and loading states

### 4.3 Create Login Page
- [ ] Create login page layout
- [ ] Build form with email, password fields
- [ ] Add inline validation
- [ ] Add demo login button
- [ ] Add sign up link

### 4.4 Create Register Page
- [ ] Create register page layout
- [ ] Build form with name, email, password, confirm password
- [ ] Add inline validation
- [ ] Add submit button with primary color

### 4.5 Create Auth Context
- [ ] Setup authentication context
- [ ] Implement state management for user
- [ ] Add authentication guards

### 4.6 Create Protected Route Component
- [ ] Create wrapper component for protected routes
- [ ] Add redirect logic for unauthenticated users
- [ ] Implement loading state

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
