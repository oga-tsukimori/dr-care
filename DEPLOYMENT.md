# Deployment Guide

This guide covers deploying the Dr.Care website to Vercel and other platforms.

## Quick Deploy to Vercel (Recommended)

Vercel is the recommended platform for Next.js applications and offers free hosting with automatic deployments.

### Option 1: Deploy via GitHub (Easiest)

1. Visit [vercel.com](https://vercel.com)
2. Sign up or log in with your GitHub account
3. Click "Add New Project"
4. Import the `oga-tsukimori/dr-care` repository
5. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
6. Click "Deploy"

Your site will be live in minutes at a URL like `dr-care.vercel.app`.

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd dr-care
vercel

# For production deployment
vercel --prod
```

## Custom Domain Setup

After deployment, you can add a custom domain:

1. Go to your project in Vercel Dashboard
2. Navigate to Settings → Domains
3. Add your domain (e.g., `dr.care` or `www.dr.care`)
4. Follow DNS configuration instructions
5. Vercel will automatically provision SSL certificate

## Environment Variables

If you need to add environment variables (e.g., for contact form APIs):

1. Go to Settings → Environment Variables in Vercel
2. Add your variables:
   - `NEXT_PUBLIC_SITE_URL`
   - `CONTACT_FORM_API_KEY` (if using form service)
3. Redeploy to apply changes

## Alternative Deployment Options

### Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy

### Self-Hosted (VPS/Cloud Server)

```bash
# Build the application
npm run build

# Start the production server
npm start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "dr-care" -- start
pm2 save
pm2 startup
```

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify mobile responsiveness
- [ ] Test contact form submission
- [ ] Check SEO meta tags
- [ ] Set up Google Analytics (if needed)
- [ ] Configure sitemap.xml
- [ ] Test page load speeds
- [ ] Set up monitoring/alerts

## Troubleshooting

### Build Fails on Vercel

If the build fails, check:

1. **Node Version**: Ensure Vercel uses Node 18+
   - Set in `package.json`: `"engines": { "node": ">=18" }`
2. **Dependencies**: All dependencies are in `package.json`
3. **Environment Variables**: Required vars are set in Vercel dashboard

### Styling Issues

If Tailwind styles don't appear:

1. Verify `globals.css` is imported in `layout.tsx`
2. Check `tailwind.config.ts` includes all content paths
3. Clear `.next` cache and rebuild

### Image Optimization Errors

Next.js requires Image Optimization API:

- Vercel handles this automatically
- For self-hosting, configure `next.config.ts`:

```typescript
module.exports = {
  images: {
    unoptimized: true, // Disable if needed
  },
};
```

## Updating the Live Site

With Vercel GitHub integration, updates are automatic:

1. Make changes locally
2. Commit and push to `main` branch
3. Vercel automatically deploys the updates
4. Preview deployments created for PRs

## Performance Optimization

After deployment, consider:

- Enable Vercel Analytics for performance insights
- Optimize images (use Next.js Image component)
- Add caching headers
- Minimize JavaScript bundles
- Use Vercel Edge Functions for dynamic content

## Support

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Repository](https://github.com/oga-tsukimori/dr-care)
