# Project Structure

## Directory Layout

```
blog/
├── app/                    # Next.js app directory (App Router)
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
├── public/               # Static assets
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
- `app/layout.tsx` - Root layout with common UI elements
- `app/page.tsx` - Home page component
- `styles/globals.css` - Global styles and Tailwind directives
