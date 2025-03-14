# Navbar Component

## Overview
A responsive navigation bar with basketball-themed styling and mobile support.

## Features
- Responsive design (desktop and mobile)
- Basketball-themed gradient background
- Animated logo with rotation effect
- Mobile menu with slide-in animation
- Icon-based navigation items

## Implementation Details

### Navigation Items
```typescript
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Ramblings', href: '/ramblings', icon: '✍️' },
  { name: 'Gallery', href: '/gallery', icon: '📸' },
  { name: 'Random', href: '/random', icon: '🎲' },
  { name: 'About Me', href: '/about', icon: '🏀' }
];
```

### Styling
- Background: Gradient from `#FFA726` (orange) to `#FF5252` (red)
- Mobile menu: Slides in from right with 300ms transition
- Logo: 180-degree rotation on hover
- Menu items: Scale up on hover with background highlight

### Mobile Responsiveness
- Breakpoint: `md` (768px)
- Mobile menu width: 256px
- Smooth transitions for opening/closing
- Touch-friendly tap targets

## Usage
```typescript
// In layout.tsx
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
```

## Future Enhancements
- Active link highlighting
- User authentication status integration
- Dropdown submenus if needed
- Search functionality
