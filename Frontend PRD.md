# Frontend PRD (`frontend-prd.md`)

# Product Requirements Document (PRD)

## Project: Travel Tree Frontend

---

# 1. Project Overview

## Project Name
**Travel Tree**

## Objective
Build a **production-ready, pixel-perfect travel agency frontend application** using **Next.js** and **TypeScript**.

The UI/UX must:

- Strictly follow the provided design inspirations.
- Follow the defined color theory.
- Be fully responsive.
- Deliver a modern, engaging user experience.
- Be production ready.

---
**Note:** 
- All the illustrations, images and logos will be manually set later, so do not be tensed for those, just keep fallback alt texts on them and leave the src empty.
- Backend is on a seperate origin/folder. it will be connected manually later.

---

# 2. Technology Stack

| Category | Technology |
|-----------|------------|
| Framework | Next.js (App Router) |
| Language | TypeScript (Strict Mode) |
| Styling | Tailwind CSS |
| Folder Structure | `src/app`, `src/components`, `src/lib`, `src/types`, `src/assets` |
| Charts | Recharts |
| State Management & Fetching | TanStack Query (React Query) |
| Icons | Lucide React or React Icons |
| Frontend Motion | Motion.dev |
| Slider Carousels | Swiper Sliders | 

### Notes

- Use **Recharts** for internal data visualization (dashboard, analytics, price trends, etc.).
- Use **React Query** for:
  - Data fetching
  - Caching
  - Skeleton loaders
  - Request management

---

# 3. Global Design System & UI Rules

## Color Palette (Strictly Enforced)

| Purpose | Color |
|---------|-------|
| Primary | `#fc4c5a` |
| Secondary | `#7fdbc9` |
| Accent | `#ffc83d` |
| Button Hover | `#0d6efd` |
| White | `#ffffff` |
| Off White | Light Gray |
| Text | Dark Gray / Black |

### Color Usage

#### Primary (`#fc4c5a`)
Use for:

- Primary CTA buttons
- Badges
- Active states
- Important highlights

#### Secondary (`#7fdbc9`)
Use for:

- Statistics section background
- Soft highlight areas
- Secondary backgrounds

#### Accent (`#ffc83d`)
Use for:

- Decorative elements
- Icons
- Star ratings
- Small highlights

#### Hover (`#0d6efd`)
Use only for:

- Primary button hover state

---

## Layout Rules

- Follow an **8px spacing grid**.
- Maintain consistent padding across all sections.
- Keep section spacing visually balanced.

---

## Cards

All cards throughout the application **must be identical**.

Requirements:

- Same height
- Same width
- Same border radius
- Same shadow
- Same spacing

No visual variations are allowed.

---

## Responsiveness

Design Mobile First.

Required breakpoints:

- `sm`
- `md`
- `lg`
- `xl`

Navigation Requirements:

- Desktop Navigation
- Mobile Hamburger Menu
- Full-width mobile drawer

---

## Content Rules

- ❌ No Lorem Ipsum.
- Every piece of text must contain meaningful travel-related content.

---

# 4. Page-by-Page Requirements

---

# 4.1 Global Navbar (Sticky / Fixed)

## Left

- Travel Tree logo
- Small colorful icon
  - *(Image will be provided later.)*

---

## Center (Desktop)

Navigation Links:

- Home
- Pages
- Tours
- Destinations
- Events
- Blog
- Contact

---

## Right (Logged Out)

- Login (Text Link)
- Sign Up (Primary Button)

Button Color:

`#fc4c5a`

---

## Right (Logged In)

Show:

- Manage Items
- Add Item
- Profile Dropdown

---

## Mobile

Display:

- Hamburger Menu
- Full-width navigation drawer

---

# 4.2 Home / Landing Page

The landing page consists of **9 sections**.

---

## 1. Hero Section

### Height

- 60–70vh

### Background

High-quality travel image:

- Yellow van
- Red rock road

*(Image will be set manually later.)*

### Overlay Content

Small Heading

> Natural Beauty

Main Heading

> Discover the most engaging places

Subtitle

> Less planning, 50,000 trips are ready for you.

---

## 2. Discover Weekly

### Header

- Section Title
- Get Started CTA Button

### Layout

Display **3 cards** in one row.

Each card contains:

- Featured Image
- "3 Days" badge
- Tour Title

Example:

> Venice, Rome and Milan – 9 Days 8 Nights

Additional Information:

- Location
- 5-Star Rating
- Price

Example:

~~$190.00~~

**$139.99**

CTA:

- Explore Button (`#fc4c5a`)

---

## 3. Three Steps For The Perfect Trip

### Heading

> Find Travel Perfection

Include a short description.

### Cards

Three white cards.

#### Card 1

- Red suitcase icon
- "Tell us what you want to do"

#### Card 2

- Blue taxi icon
- "Share your travel preference"

#### Card 3

- Green star icon
- "We'll give you recommendations"

---

## 4. Statistics Section

Background Color:

`#7fdbc9`

Display four equal columns.

| Icon | Text |
|------|------|
| Users | 28K Total Users |
| Tours | 13K Total Tours |
| Likes | 68K Social Likes |
| Ratings | 10K 5-Star Ratings |

Icons should be light-colored.

Text should be white.

---

## 5. Travel Guideline

Split Layout.

### Left Side

Heading:

> Take A Tour

Subheading:

> Discover Our Travel Guideline

Checklist:

- ✔ Travel safely
- ✔ Experienced guides
- ✔ Affordable packages

---

### Right Side

Two overlapping oval images:

- Rocky Coast
- Tropical Resort Pool

---

## 6. Testimonials

Heading

> What Our Happy Clients Say

Center Card:

- Quote
- Jenny Wilson
- Web Developer

Around the card:

Multiple circular avatars using:

- `#fc4c5a`
- `#7fdbc9`
- `#ffc83d`

---

## 7. Video Section

Full-width background image.

Image Theme:

- Blue Lake
- Mountains
- Boats

Content:

Small Heading

> Our Blog

Large Heading

> Travel Tips and Advice

Center:

Large circular play button.

Triangle Color:

`#fc4c5a`

---

## 8. Newsletter Section

Split Layout.

### Left

Illustration:

- Yellow Hat
- Purple Shirt
- Holding Yellow Map

### Right

Background:

`#7fdbc9`

Content:

Heading

> Subscribe newsletter & get company news.

Components:

- Email Input
- Subscribe Now Button

Button Color:

`#fc4c5a`

---

## 9. Footer

### Left Column

- Travel Tree Logo
- Short Description
- Social Icons

---

### Middle Columns

#### Support

- Customer Support
- FAQ
- Help Center

#### About Us

- Our Story
- Careers
- Team

#### Contact Info

- 455 West Orchard Street
- +92 (666) 888 0000
- needhelp@company.com

---

### Bottom Bar

Display:

- © Copyright 2025 by Company.com
- VISA Icon
- Mastercard Icon
- Back-to-Top Button

---

# 4.3 Explore / Listing Page (`/tours`)

## Top Section

Search Bar

---

## Sidebar Filters

Minimum filters:

- Category
- Price Range
- Rating

---

## Sorting

Dropdown Options:

- Price: Low → High
- Price: High → Low
- Newest

---

## Grid

Desktop:

- 4 cards per row

Cards must exactly match the Discover Weekly card design.

---

## Loading State

Use Skeleton Loaders.

Skeleton dimensions must match the final cards.

---

## Pagination

Numbered pagination at the bottom.

---

# 4.4 Details Page (`/tours/[id]`)

## Access

Public

---

## Gallery

Multiple images.

Rounded / oval styling preferred.

---

## Sections

- Title
- Location
- Price
- Rating
- Description
- Overview
- Key Information
- Reviews
- Related Tours

### Key Information

Examples:

- Duration
- Group Size
- Difficulty
- Departure Date

---

# 4.5 Authentication Pages

Routes:

- `/login`
- `/register`

Requirements:

- Clean centered card
- Proper validation
- Inline error messages

### Demo Login

Provide a button that:

- Auto-fills credentials
- Automatically submits

### Sign Up Button

Color:

`#fc4c5a`

---

# 4.6 Protected Page — Add Item (`/items/add`)

## Authentication

If unauthenticated:

Redirect to:

`/login`

---

## Form Fields

- Title
- Short Description
- Full Description
- Price
- Date / Priority
- Image URL

---

## Submit Button

Hover Color:

`#0d6efd`

---

# 4.7 Protected Page — Manage Items (`/items/manage`)

## Authentication

Redirect unauthenticated users to:

`/login`

---

## Layout

Responsive:

- Table
- or Grid

---

## Row Actions

- View
- Delete

---

## Recharts Integration

Display at least one chart.

Examples:

- Price Distribution
- Views Over Time
- Booking Analytics

---

# 4.8 Additional Pages

Minimum **2 additional pages**.

---

## About Page

Include:

- Company Story
- Mission
- Team Section

---

## Contact Page

Include:

- Contact Form
- Embedded Map
- Contact Information

Use the same contact details displayed in the footer.
