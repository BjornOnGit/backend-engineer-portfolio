# Deployment Guide

Complete guide for deploying your backend engineer portfolio to production.

## Quick Start (Vercel)

Vercel is the easiest way to deploy Next.js applications:

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### 2. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

Your site will be live in ~60 seconds!

### 3. Custom Domain (Optional)
1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records (instructions provided)
4. SSL certificate auto-provisioned

## Environment Variables

The portfolio doesn't require any environment variables for basic functionality.

If you add features later (like analytics, CMS, etc.):

```bash
# Create .env.local for development
NEXT_PUBLIC_ANALYTICS_ID=your_id_here
NEXT_PUBLIC_DOMAIN=yourportfolio.com

# For production, set in Vercel dashboard:
# Settings → Environment Variables
```

## Build & Optimization

### Local Build Test
```bash
# Build locally
pnpm build

# Check build output size
pnpm build
# Output shows: "Collecting page data"

# Start production server
pnpm start

# Visit http://localhost:3000
```

### Vercel Build Optimization
The default Vercel settings are already optimal:
- **Automatic image optimization**: Enabled
- **Automatic minification**: Enabled
- **Automatic code splitting**: Enabled
- **Automatic ISR**: Ready to configure

### Further Optimization (Optional)

#### Enable Caching
Add to `next.config.mjs`:
```javascript
export default {
  headers: [
    {
      source: '/static/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
};
```

#### Add Security Headers
```javascript
headers: [
  {
    source: '/:path*',
    headers: [
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
      {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN',
      },
      {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
      },
    ],
  },
],
```

## Monitoring & Analytics

### Performance Monitoring

#### Web Vitals (Built-in)
Next.js automatically collects Web Vitals. View in:
1. Vercel Dashboard → Analytics
2. Local: `npm run build` then check `.next/static`

#### Google Analytics
```javascript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/next'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

#### Vercel Analytics
Already enabled by default for all Vercel deployments.

### Error Tracking

#### Sentry (Recommended)
```bash
pnpm add @sentry/nextjs
```

```javascript
// next.config.mjs
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {
  // Your config
};

export default withSentryConfig(nextConfig, {
  org: "your-org",
  project: "portfolio",
  authToken: process.env.SENTRY_AUTH_TOKEN,
});
```

## SEO & Search Console

### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your domain
3. Download sitemap from: `https://yourportfolio.com/sitemap.xml`
4. Submit to Google

### Robots.txt
Create `public/robots.txt`:
```
User-agent: *
Allow: /
Disallow: /admin

Sitemap: https://yourportfolio.com/sitemap.xml
```

### Structured Data
Already included in project metadata:
- Open Graph tags for social sharing
- Author information
- Organization schema

## Maintenance

### Update Dependencies
```bash
# Check for updates
pnpm update --interactive

# Update specific package
pnpm up framer-motion

# Verify no breaking changes
pnpm build
pnpm test
```

### Update Content
Edit `lib/portfolio-data.ts` and commit:
```bash
git add lib/portfolio-data.ts
git commit -m "Update projects"
git push
# Vercel auto-deploys!
```

### Automated Deployments

#### Preview Deployments
Every pull request gets a preview URL:
- Create feature branch
- Push changes
- Vercel creates preview URL automatically
- Merge to main for production deploy

#### Scheduled Revalidation
For ISR (Incremental Static Regeneration):
```typescript
// app/projects/page.tsx
export const revalidate = 3600; // Revalidate every hour
```

## Troubleshooting

### Build Fails on Vercel
Check build logs in Vercel Dashboard:
1. Deployment → Build Logs
2. Look for error messages
3. Common issues:
   - TypeScript errors: Fix types
   - Missing env vars: Add to dashboard
   - Package version conflicts: Run `pnpm install`

### Site Shows Old Content
- Clear Vercel cache: Dashboard → Settings → Git → Redeploy
- Or redeploy from CLI: `vercel --prod`

### Slow Performance
1. Check Vercel Analytics
2. Look for slow API routes
3. Optimize large assets in public/
4. Enable automatic image optimization

### Custom Domain Not Working
1. Check DNS propagation: [mxtoolbox.com](https://mxtoolbox.com)
2. Verify nameservers point to Vercel
3. Wait 24-48 hours for full propagation
4. Check SSL certificate status in dashboard

## Self-Hosting

### Docker
Create `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Railway.app
1. Push to GitHub
2. Go to [railway.app](https://railway.app)
3. Select "New Project" → "Deploy from GitHub"
4. Select your repository
5. Set `NODE_ENV=production`
6. Deploy

### Render
1. Go to [render.com](https://render.com)
2. New "Web Service"
3. Connect GitHub
4. Select repository
5. Set build command: `pnpm build`
6. Set start command: `pnpm start`
7. Deploy

### AWS EC2
```bash
# SSH into instance
ssh -i key.pem ubuntu@your-instance.com

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone and build
git clone https://github.com/yourusername/portfolio.git
cd portfolio
npm install -g pnpm
pnpm install
pnpm build

# Run with PM2
sudo npm install -g pm2
pm2 start "pnpm start" --name portfolio
pm2 startup
pm2 save
```

## Performance Targets

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms  
- **CLS (Cumulative Layout Shift)**: < 0.1

### Lighthouse Scores
- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 90
- **SEO**: > 90

Check with: `vercel.com/your-site` (Vercel Analytics)

## Backup & Recovery

### Source Code Backup
```bash
# Backup to GitHub
git push --all origin
git push --tags origin

# Local backup
tar -czf portfolio-backup.tar.gz .
```

### Database Backup (if added)
If you add a database:
```bash
# Postgres
pg_dump database_name > backup.sql

# Restore
psql database_name < backup.sql
```

## Security Checklist

- [ ] No secrets in `.env.local` or code
- [ ] Enable HTTPS (auto in Vercel)
- [ ] Set security headers
- [ ] Add robots.txt
- [ ] Hide admin routes if needed
- [ ] Regular dependency updates
- [ ] Monitor for vulnerabilities: `pnpm audit`
- [ ] Set Vercel password protection if needed

## Cost Optimization

### Vercel Pricing
- **Free tier**: 12 serverless function executions/month (plenty for static site)
- **Pro tier**: $20/month for team features
- **Cost drivers**: Bandwidth usage, serverless functions, database

### Optimization Tips
- Keep site static (no serverless functions)
- Use edge caching for assets
- Compress images in public/
- Minimize API calls
- Use ISR instead of on-demand rendering

## Advanced: Adding Features

### Add CMS (Headless)
```bash
pnpm add next-sanity
```

### Add Comments
```bash
pnpm add disqus-react
```

### Add Analytics
```bash
pnpm add next-analytics
```

### Add Forms
```bash
pnpm add react-hook-form
```

For any additions, refer to Next.js documentation and integration guides.

## Getting Help

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Deployment Issues**: [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)
- **Community**: [next.js Discord](https://discord.gg/nextjs)
