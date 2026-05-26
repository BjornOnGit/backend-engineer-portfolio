# Premium Backend Engineer Portfolio

A modern, enterprise-grade portfolio website built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion. Designed to showcase backend engineering expertise with a professional infrastructure company aesthetic.

## Features

### 🎨 Design & UX
- **Enterprise Dark Mode**: Deep blue dark theme (#0B1020) with blue accent (#3B82F6)
- **Responsive Design**: Mobile-first approach with optimized layouts for all devices
- **Smooth Animations**: Framer Motion for subtle, professional transitions
- **Accessibility First**: ARIA labels, semantic HTML, and keyboard navigation
- **Production Quality**: Optimized performance with zero CLS and fast load times

### 📄 Pages & Routes
- **Home Page**: Hero section with featured projects, skills, experience, and CTA
- **Projects**: Full project listing and detailed case study pages
- **Blog**: Article listing with individual post pages
- **Resume**: Professional experience, education, skills, and certifications
- **404 Page**: Custom error page with navigation

### 💻 Components
- **Navigation**: Sticky header with smooth animations
- **Footer**: Multi-column footer with social links and navigation
- **Project Cards**: Animated cards with metrics, technologies, and CTAs
- **Experience Timeline**: Interactive timeline with achievements
- **Skills Section**: Categorized technical expertise
- **Hero Section**: Large, engaging landing section
- **About Section**: Professional journey and background

### 🛠️ Technical Features
- **Type Safety**: Full TypeScript implementation
- **Reusable Components**: Modular, composable React components
- **Dynamic Content**: Centralized portfolio data structure
- **Animations**: Framer Motion variants and stagger effects
- **SEO Optimized**: Rich metadata, OG tags, keywords
- **Fast Navigation**: Next.js App Router with optimized routing

## Project Structure

```
├── app/
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # Home page
│   ├── globals.css                # Global styles and design tokens
│   ├── projects/
│   │   ├── page.tsx               # Projects listing
│   │   └── [id]/page.tsx          # Project detail pages
│   ├── blog/
│   │   ├── page.tsx               # Blog listing
│   │   └── [id]/page.tsx          # Blog post pages
│   ├── resume/page.tsx            # Resume/CV page
│   └── not-found.tsx              # 404 page
├── components/
│   ├── Navigation.tsx             # Header navigation
│   ├── Footer.tsx                 # Footer component
│   ├── HeroSection.tsx            # Hero/welcome section
│   ├── ProjectCard.tsx            # Project card component
│   ├── ExperienceCard.tsx         # Experience timeline card
│   ├── SkillsSection.tsx          # Skills/expertise section
│   └── AboutSection.tsx           # About/experience section
├── lib/
│   ├── animations.ts              # Framer Motion animation variants
│   ├── types.ts                   # TypeScript interfaces
│   └── portfolio-data.ts          # Portfolio content and data
├── public/                        # Static assets
├── package.json
├── tailwind.config.ts             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
└── next.config.mjs                # Next.js configuration
```

## Color Scheme

### Dark Mode (Default)
- **Background**: `#0B1020` (Deep Navy)
- **Foreground**: `#F5F5F5` (Off White)
- **Accent**: `#3B82F6` (Bright Blue)
- **Secondary**: `#1E293B` (Dark Slate)
- **Border**: `#15293D` (Darker Navy)
- **Muted**: `#8B92A9` (Steel Gray)

All colors are defined as CSS custom properties in `globals.css` and can be easily customized.

## Customization Guide

### Update Portfolio Content

Edit `lib/portfolio-data.ts` to add your own:
- **Projects**: Add/remove project entries with metrics and technologies
- **Experience**: Update employment history and achievements
- **Skills**: Modify technical expertise categories

### Modify Navigation Links

Update `components/Navigation.tsx` to change navigation items and social links.

### Change Colors

Edit CSS variables in `app/globals.css`:
```css
--background: oklch(0.08 0 0);      /* Change background */
--accent: oklch(0.55 0.2 264.4);    /* Change accent color */
--foreground: oklch(0.95 0 0);      /* Change text color */
```

### Add New Pages

Create new route groups in `app/` following the Next.js App Router pattern.

## Animation Variants

Pre-built Framer Motion animation variants are available in `lib/animations.ts`:
- `fadeIn`: Simple opacity fade
- `slideUp`: Slide in from bottom with fade
- `slideInLeft/Right`: Directional slides
- `staggerContainer`: Parent container for staggered children
- `scaleIn`: Scale animation with fade
- `containerVariants`: Smart stagger for grid layouts

## Performance Optimizations

- **Image Optimization**: Use Next.js Image component for automatic optimization
- **Code Splitting**: Automatic per-route code splitting
- **CSS-in-JS**: Tailwind CSS for optimized styling
- **Animations**: GPU-accelerated Framer Motion animations
- **No Client-Side Bloat**: Minimal JavaScript on client
- **Semantic HTML**: Proper semantic structure for crawlers

## Getting Started

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Environment Variables

No additional environment variables required for basic functionality. Customize email links and social media URLs in component files.

## Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components adapt gracefully to different screen sizes.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This portfolio template is free to use and modify for your own purposes.

## Credits

Built with:
- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## Support

For issues or questions about customizing this portfolio, refer to the official documentation:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
