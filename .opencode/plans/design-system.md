# Travel Tree - Design System Reference

## UI COMPONENT LIBRARY
- **Hero UI** (v3 latest) - Pre-built component library for consistent UI
- Pre-configured with custom colors from the design system
- Components: Buttons, Inputs, Cards, Modals, etc.

## COLOR PALETTE (Strictly Enforced)

### Primary Colors
```css
--primary: #fc4c5a;    /* Buttons, Badges, Active States, Important Highlights */
--secondary: #7fdbc9;  /* Statistics Section Background, Soft Highlights */
--accent: #ffc83d;     /* Icons, Stars, Decorative Elements, Small Highlights */
--hover: #0d6efd;      /* ONLY for Primary Button Hover State */
```

### Neutral Colors
```css
--white: #ffffff;
--off-white: #f5f5f5;  /* Light Gray */
--text-dark: #1a1a1a;
--text-gray: #666666;
```

## SPACING SYSTEM
- Base unit: 8px
- Small padding: 8px-16px
- Medium padding: 24px-32px
- Large padding: 48px-64px
- Section spacing: 80px-120px

## CARD DESIGN (Consistent Across App)
- Height: Fixed/Consistent
- Width: Responsive
- Border Radius: 8px-12px
- Shadow: Subtle elevation
- Padding: 24px-32px
- Spacing: 8px grid system

## BREAKPOINTS (Mobile First)
- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px++

## TYPOGRAPHY (Recommended)
- Heading: Bold, modern sans-serif
- Body: Readable sans-serif
- Subtext: Lighter weight, gray tones

## RESPONSIVE RULES
- Always design mobile first
- Use Tailwind's responsive prefixes (md:, lg:)
- Ensure navigation works on all breakpoints
- Test at: sm, md, lg, xl breakpoints

## COMPONENT SPECIFICATIONS

### Buttons
- Primary: `#fc4c5a` background, white text
- Hover: `#0d6efd` (only for primary buttons)
- Padding: 12px-24px
- Border Radius: 8px
- Font: Bold, modern

### Inputs
- Border: 1px solid #e0e0e0
- Focus: Primary color ring
- Padding: 12px
- Border Radius: 8px

### Badges
- Primary: `#fc4c5a` background, white text
- Secondary: `#7fdbc9` background, dark text

## ICON USAGE
- Use Lucide React icons
- Primary color for main icons
- Accent color for decorative elements
- Size: 24px-48px

## IMAGES & ILLUSTRATIONS
- All images will be added later
- Use placeholder URLs
- Add alt text for accessibility
- Use optimized formats (WebP preferred)

## LAYOUT RULES
- Maintain 8px spacing grid
- Consistent padding across sections
- Visually balanced spacing
- Proper section separation
