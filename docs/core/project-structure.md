# Project Structure

## Directory Layout

```
blog/
├── app/                    # Next.js app directory (App Router)
│   ├── components/        # Reusable React components
│   ├── ramblings/        # Blog posts and dynamic routes
│   │   ├── [slug]/       # Dynamic route for individual posts
│   │   └── page.tsx      # Blog listing page
│   ├── layout.tsx        # Root layout with Navbar
│   └── page.tsx          # Home page
├── public/               # Static assets
│   └── images/          # Blog post images and backgrounds
├── types/               # TypeScript type definitions
├── docs/                # Project documentation
└── package.json         # Project dependencies and scripts
```

## Key Files and Their Purpose

### Configuration Files
- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration with theme customization
- `tsconfig.json` - TypeScript configuration with path aliases
- `postcss.config.js` - PostCSS configuration for Tailwind

### Core Application Files
- `app/layout.tsx` - Root layout with Navbar and common UI elements
- `app/page.tsx` - Home page with basketball-themed design
- `app/globals.css` - Global styles and Tailwind directives

### Blog Components
- `app/components/BlogPostCard.tsx` - Card component for blog post previews
- `app/components/Navbar.tsx` - Navigation bar with basketball theme
- `app/ramblings/[slug]/page.tsx` - Dynamic blog post template
- `app/ramblings/page.tsx` - Blog listing page with grid layout

### Type Definitions
- `types/blog.ts` - TypeScript interfaces for blog posts

### Assets
- `public/images/` - Blog post cover images and background images
  - `background-image.png` - Homepage background
  - `court2.avif` - Blog listing background
  - Various article cover images (*.jpg, *.webp)
