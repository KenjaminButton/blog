# Project Structure

## Directory Layout

```
blog/
├── app/                    # Next.js app directory (App Router)
│   ├── layout.tsx         # Root layout with metadata and favicon
│   └── page.tsx           # Home page with basketball theme
├── components/            # Reusable React components
├── public/               # Static assets
│   ├── images/           # Background images
│   └── icon.svg          # Basketball favicon
├── styles/               # Global styles and Tailwind config
├── docs/                # Project documentation
└── package.json         # Project dependencies and scripts
```

## Key Files and Their Purpose

### Configuration Files
- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `.eslintrc.json` - ESLint rules and configuration

### Core Application Files
- `app/layout.tsx` - Root layout with site metadata and basketball favicon
- `app/page.tsx` - Home page with basketball-themed background
- `styles/globals.css` - Global styles and Tailwind directives

### Assets
- `public/images/background-images.png` - Basketball-themed background image
- `public/icon.svg` - Basketball favicon with orange-to-red gradient
