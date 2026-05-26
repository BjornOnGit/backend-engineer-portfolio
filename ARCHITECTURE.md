# Portfolio Architecture Documentation

## Design Philosophy

This portfolio follows **enterprise software design principles** with emphasis on:
- **Scalability**: Component architecture allows easy expansion
- **Maintainability**: Clear separation of concerns and reusable components
- **Performance**: Optimized rendering and bundle size
- **Accessibility**: WCAG compliance and semantic HTML
- **Type Safety**: Full TypeScript implementation

## Design System

### Color Tokens
All colors use CSS custom properties for easy theming:

```css
/* Primary Colors */
--background: #0B1020      /* Main background */
--foreground: #f5f5f5      /* Primary text */
--accent: #3B82F6          /* Primary action color */

/* Secondary Colors */
--secondary: #1E293B       /* Secondary background */
--muted: #8b92a9           /* Muted/disabled text */
--border: #15293D          /* Border color */

/* Semantic Colors */
--destructive: #dc2626     /* Error/danger states */
--ring: #3B82F6            /* Focus ring */
```

### Typography
- **Display (H1)**: 5rem-7rem, Bold, `text-balance`
- **Heading (H2)**: 3rem-4rem, Bold
- **Subheading (H3)**: 2rem, Semibold
- **Body**: 1rem, Regular, 1.5 line-height
- **Caption**: 0.875rem, Regular, Muted

### Spacing Scale
Uses Tailwind's standard spacing (4px increments):
- `gap-*` for flexbox spacing
- `p-*` for padding
- `m-*` for margins
- No arbitrary values

## Component Architecture

### Page Components (Server Components)
- `app/page.tsx` - Home page, composition of sections
- `app/projects/page.tsx` - Projects listing
- `app/projects/[id]/page.tsx` - Project detail with dynamic routing
- `app/blog/page.tsx` - Blog listing with static data
- `app/blog/[id]/page.tsx` - Blog posts with markdown content
- `app/resume/page.tsx` - Resume/CV page

All page components are **Server Components** for optimal performance.

### Client Components (with 'use client')
- `Navigation.tsx` - Interactive header with animations
- `Footer.tsx` - Interactive footer with social links
- `ProjectCard.tsx` - Card with hover animations
- `ExperienceCard.tsx` - Timeline card with expand animations
- `HeroSection.tsx` - Hero with staggered animations
- `SkillsSection.tsx` - Skills grid with hover effects
- `AboutSection.tsx` - About section with animations

All client components use **Framer Motion** for animations.

### Data Layer (`lib/`)

#### `types.ts`
TypeScript interfaces for type safety:
- `Project`: Portfolio project data
- `BlogPost`: Blog article metadata
- `Experience`: Work history entry
- `Skill`: Skill category with items

#### `portfolio-data.ts`
Centralized content management:
```typescript
export const projects: Project[] = [...]
export const experiences: Experience[] = [...]
export const skills: Skill[] = [...]
```

All content is centralized for easy updates without code changes.

#### `animations.ts`
Reusable Framer Motion variants:
- Container variants for parent animations
- Item variants for child animations
- Pre-configured timing and easing

## Routing Structure

### Static Routes
```
/ → Home (index page)
/projects → Projects listing
/blog → Blog listing
/resume → Resume page
/not-found → 404 page
```

### Dynamic Routes
```
/projects/[id] → Individual project detail pages
/blog/[id] → Individual blog posts
```

Both use `generateStaticParams()` for static generation.

## Animation Strategy

### Entrance Animations
- Hero section: Staggered fade-in with 200ms delays
- Project cards: Slide up from bottom with fade
- Section headings: Fade in on viewport

### Interaction Animations
- Links: Underline scale on hover
- Buttons: Scale or color transition
- Cards: Border color and shadow on hover

### Implementation Pattern
```typescript
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

<motion.div variants={itemVariants}>
  {/* Content */}
</motion.div>
```

## Performance Considerations

### Code Splitting
- Each page is automatically code-split by Next.js
- Client components are split by route
- Animations library (Framer Motion) is loaded only on client

### Image Strategy
- Use Next.js `Image` component for optimization
- Implement lazy loading for below-fold images
- Provide proper alt text for accessibility

### Bundle Size
- Framer Motion: ~40KB (gzipped)
- Lucide Icons: Tree-shakeable, only imported icons matter
- Tailwind CSS: ~15KB (purged for production)

### Rendering Strategy
- Home page uses dynamic sections (client components)
- Projects and blog use static generation with dynamic routes
- Resume page is fully static
- All pages support ISR for content updates

## Accessibility Features

### Semantic HTML
```html
<nav> Navigation
<header> Header
<main> Main content
<article> Blog posts
<section> Content sections
<footer> Footer
```

### ARIA Attributes
- `aria-label` on icon-only buttons
- `aria-hidden` on decorative elements
- Proper heading hierarchy (no skipped levels)

### Keyboard Navigation
- Tab order follows visual flow
- Focus indicators on all interactive elements
- Skip navigation links available

### Color Contrast
- All text meets WCAG AA standards
- Focus rings use high-contrast colors
- Dark mode compliant

## SEO Optimization

### Meta Data
- Dynamic titles for each page
- Description meta tags
- Open Graph tags for social sharing
- Structured data for rich snippets

### Sitemap
- Auto-generated via Next.js `metadata`
- Includes all routes and dynamic pages

### Performance Signals
- Fast Core Web Vitals (LCP, FID, CLS)
- Optimized images
- Minimal layout shifts

## State Management

**No global state management needed!**
- Data flows from `portfolio-data.ts` to components
- Page components are Server Components
- Client components handle local animations
- Using React hooks for component state only

## Customization Points

### Easy Changes
1. **Content**: Edit `lib/portfolio-data.ts`
2. **Colors**: Edit CSS variables in `app/globals.css`
3. **Fonts**: Update `layout.tsx` imports
4. **Links**: Update in component files

### Medium Difficulty
1. **Add new page**: Create new route directory
2. **Add new component**: Follow existing patterns
3. **Modify layout**: Edit layout.tsx grid system
4. **Change animations**: Modify `lib/animations.ts`

### Advanced Changes
1. **Add database**: Integrate with Supabase/PostgreSQL
2. **Add comments**: Implement backend API
3. **Add search**: Integrate search service
4. **Add auth**: Implement authentication

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically
4. Set custom domain

### Self-Hosted
```bash
# Build
pnpm build

# Run
pnpm start

# Or use Docker
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Future Enhancement Ideas

1. **Dark/Light Mode Toggle**: Add theme switcher component
2. **CMS Integration**: Connect to Contentful or Sanity
3. **Analytics**: Integrate Google Analytics or Plausible
4. **Newsletter**: Add email signup
5. **Comments**: Add comment system to blog posts
6. **Bookmarks**: Let visitors save projects
7. **Search**: Implement full-text search
8. **Mobile Menu**: Add hamburger menu for navigation
9. **Project Filtering**: Filter by technology or category
10. **Reading Time**: Auto-calculate blog post reading time

## Dependencies

### Core Dependencies
- `next@16` - React framework
- `react@19` - UI library
- `typescript` - Type safety
- `tailwindcss` - Styling
- `framer-motion@12` - Animations
- `lucide-react` - Icons

### DevDependencies
- `@types/node` - TypeScript for Node
- `@types/react` - TypeScript for React
- `autoprefixer` - CSS vendor prefixes
- `postcss` - CSS processing

No external UI component libraries needed - all components built from scratch!

## Testing Strategy

### Component Testing Ideas
- Snapshot tests for static components
- Animation tests with Framer Motion testing utilities
- Accessibility tests with jest-axe

### E2E Testing Ideas
- Navigation flow testing
- Project detail page rendering
- Blog post content display
- Form submission (contact, newsletter)

Currently no tests included - easy to add with Jest + React Testing Library.

## Troubleshooting

### Animations not working
- Ensure Framer Motion is installed: `pnpm ls framer-motion`
- Check `use client` directive in component
- Verify motion components are imported

### Styles not applied
- Rebuild Tailwind: `pnpm build`
- Check class names are in template
- Verify CSS variables are set in `globals.css`

### Performance issues
- Check bundle size: `npm run analyze`
- Use React DevTools Profiler
- Optimize images in public folder

### Responsive layout broken
- Check viewport meta tag in `layout.tsx`
- Test with actual mobile device
- Verify Tailwind breakpoints are used correctly
