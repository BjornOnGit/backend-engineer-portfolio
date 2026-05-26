# Quick Start Guide - 5 Minutes to Launch

Get your portfolio live in 5 minutes.

## Step 1: Customize Your Content (2 min)

Open `lib/portfolio-data.ts` and update:

```typescript
// Replace sample projects with your projects
export const projects: Project[] = [
  {
    id: 'your-project-id',
    title: 'Your Project Name',
    description: 'What you built',
    shortDescription: 'Quick summary',
    technologies: ['Your', 'Tech', 'Stack'],
    featured: true,
    category: 'backend',
    impact: 'Business impact',
    metrics: [
      { label: 'Performance', value: '10x' },
    ],
  },
  // Add more projects
];

// Update your experience
export const experiences: Experience[] = [
  {
    company: 'Your Company',
    title: 'Your Title',
    startDate: '2023',
    current: true,
    description: 'What you do',
    technologies: ['Tech1', 'Tech2'],
    achievements: [
      'Achievement 1',
      'Achievement 2',
    ],
  },
  // Add more roles
];

// Update your skills
export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Your', 'Languages'],
  },
  // Add more skill categories
];
```

## Step 2: Update Your Links (1 min)

Edit these files to add your URLs:

### `components/Navigation.tsx`
```typescript
<motion.a href="https://github.com/yourusername" target="_blank">
  <Github size={20} />
</motion.a>

<motion.a href="https://linkedin.com/in/yourprofile" target="_blank">
  <Linkedin size={20} />
</motion.a>

<motion.a href="mailto:your@email.com">
  <Mail size={20} />
</motion.a>
```

### `components/Footer.tsx`
Update social links in the `social` array with your URLs.

## Step 3: Deploy to Vercel (2 min)

### Option A: GitHub + Vercel (Easiest)
```bash
# 1. Push to GitHub
git add .
git commit -m "Add my portfolio"
git push origin main

# 2. Go to vercel.com
# 3. Click "New Project"
# 4. Select your repository
# 5. Click "Deploy"
```

Done! Your site is live in ~60 seconds.

### Option B: Use Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# It will ask questions, then deploy
```

## Step 4: Custom Domain (Optional)

In Vercel Dashboard:
1. Go to Settings → Domains
2. Add your domain
3. Follow DNS instructions
4. Auto SSL certificate

## Common Edits

### Change Theme Color
Edit `app/globals.css`:
```css
.dark {
  --background: #0B1020;  /* Change this */
  --accent: #3B82F6;      /* Or this */
  --foreground: #f5f5f5;  /* Or this */
}
```

### Update Email
Search all files for `hello@example.com` and replace with yours:
```bash
grep -r "hello@example.com" . --include="*.tsx" --include="*.ts"
```

### Add More Projects
Just add to the `projects` array in `lib/portfolio-data.ts`:
```typescript
{
  id: 'project-slug',
  title: 'Project Name',
  // ... rest of fields
}
```

The page `/projects/project-slug` is automatically created!

### Add Blog Posts
Edit `app/blog/[id]/page.tsx` and add to `blogPosts`:
```typescript
const blogPosts: Record<string, any> = {
  'your-post-slug': {
    title: 'Your Post Title',
    date: '2024-01-15',
    readTime: 5,
    tags: ['tag1', 'tag2'],
    content: `Your markdown or HTML content here...`,
  },
};
```

Visit `/blog/your-post-slug` - it's live!

## Testing Locally

```bash
# Start dev server
pnpm dev

# Visit http://localhost:3000

# Changes auto-reload
```

## Build for Production

```bash
# Create optimized build
pnpm build

# Test production build
pnpm start

# Visit http://localhost:3000
```

## File Locations Reference

| What | Where |
|------|-------|
| Projects & Experience | `lib/portfolio-data.ts` |
| Homepage | `app/page.tsx` |
| Projects Page | `app/projects/page.tsx` |
| Project Detail | `app/projects/[id]/page.tsx` |
| Blog Posts | `app/blog/[id]/page.tsx` |
| Resume Page | `app/resume/page.tsx` |
| Navigation | `components/Navigation.tsx` |
| Footer | `components/Footer.tsx` |
| Colors | `app/globals.css` |
| Animations | `lib/animations.ts` |

## Commands Cheat Sheet

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm start            # Run production build
pnpm lint             # Check for errors

# Deployment
vercel                # Deploy with Vercel CLI
vercel --prod         # Deploy to production

# Package management
pnpm install          # Install dependencies
pnpm up               # Update packages
pnpm add <package>    # Add new package
```

## What Gets Generated Automatically

✅ Static pages (home, projects, blog, resume)
✅ Dynamic project pages from portfolio-data
✅ Dynamic blog pages from content
✅ Sitemap for SEO
✅ RSS feed (optional, can be added)
✅ 404 page
✅ Mobile responsive versions

## Next Steps

1. ✅ Update `lib/portfolio-data.ts`
2. ✅ Update your links
3. ✅ Run `pnpm dev` and preview
4. ✅ Push to GitHub
5. ✅ Deploy to Vercel
6. ✅ Share your portfolio!

## Getting Help

- **Errors?** Check `pnpm build` output
- **Styling?** Edit `app/globals.css` 
- **Layout?** Check `components/` and Tailwind classes
- **Content?** Edit `lib/portfolio-data.ts`
- **Routes?** Check `app/` folder structure

## Tips

- **Tip 1**: Keep project descriptions concise and impactful
- **Tip 2**: Use real numbers in metrics (100k+ RPS, 70% improvement)
- **Tip 3**: List technologies that showcase your expertise
- **Tip 4**: Update portfolio every 3-6 months with new projects
- **Tip 5**: Add blog posts to demonstrate thought leadership

## Before You Deploy

- [ ] Update all projects/experience
- [ ] Check links point to correct URLs
- [ ] Test on mobile device
- [ ] Run `pnpm build` successfully
- [ ] Preview looks professional

---

**You're ready to go!** 🚀

This portfolio will impress. Focus on keeping content updated and adding new projects as you grow.

Questions? See:
- README.md - Full documentation
- ARCHITECTURE.md - Technical details
- DEPLOYMENT.md - Hosting options
