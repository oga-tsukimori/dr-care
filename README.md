# Dr.Care Medical Tourism Website

A professional medical tourism website built with Next.js, React, and Tailwind CSS.

## Overview

Dr.Care connects international patients with world-class medical facilities and experienced specialists, offering comprehensive healthcare packages at affordable prices.

## Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Modern Stack**: Built with Next.js for optimal performance and SEO
- **Tailwind CSS**: Beautiful, consistent styling
- **Multiple Pages**:
  - Homepage with hero section and service overview
  - Services page with detailed procedure listings
  - About page with team information
  - Contact page with inquiry form

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
dr-care/
├── app/
│   ├── components/      # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Hero.tsx
│   ├── services/        # Services page
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── public/              # Static assets
└── package.json
```

## Customization

### Update Content

- Edit page content in `app/*/page.tsx` files
- Modify component text in `app/components/*.tsx`
- Update metadata in `app/layout.tsx`

### Styling

All styling uses Tailwind CSS utility classes. The theme can be customized in the globals.css file.

### Add New Pages

Create a new folder in `app/` with a `page.tsx` file:

```tsx
// app/new-page/page.tsx
export default function NewPage() {
  return <div>Your content here</div>;
}
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is to use the [Vercel Platform](https://vercel.com/new):

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Technologies

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript

## Reference

Based on the Dr.Care Facebook page: https://www.facebook.com/profile.php?id=61586991034520

## License

Private - All rights reserved
