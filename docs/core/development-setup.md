# Development Setup

## Prerequisites
- Node.js (Latest LTS version)
- npm (comes with Node.js)
- Git

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (coming soon)

## Local Development Setup

1. Clone the repository
```bash
git clone https://github.com/KenjaminButton/blog.git
cd blog
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser
- Navigate to [http://localhost:3000](http://localhost:3000)
- The development server supports hot reloading

## Project Structure

### Blog Posts
Blog posts are currently stored in `app/ramblings/[slug]/page.tsx` as a static array. Each post has:
- Unique slug for routing
- Cover image (stored in `public/images/`)
- Title and excerpt
- Reading time and date
- Content in markdown format
- Tags for categorization

### Styling
- Tailwind CSS for styling
- Custom basketball-themed gradient (orange `#FFA726` to red `#FF5252`)
- Responsive design for all screen sizes
- Dark mode optimized

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Future Implementations
- Supabase integration for:
  - Blog post storage
  - User authentication
  - Image storage
- Search functionality
- Comments system
- Author dashboard
