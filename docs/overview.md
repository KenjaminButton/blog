# Blog Project Documentation

## Project Overview
A Next.js 14 blog application with TypeScript and Tailwind CSS support. The project aims to be a modern, performant blogging platform with real-time photo sharing capabilities.

## Tech Stack
- Next.js 14
- TypeScript
- Tailwind CSS
- ESLint
- Supabase (planned)

## Documentation Index

### Core Setup
- [Project Structure](./core/project-structure.md)
- [Development Setup](./core/development-setup.md)

### Features
*(To be implemented)*
- Authentication System
- Post Management
- Photo Upload and Storage
- UI Components

### Development Guidelines
- Code Style and Standards
- Testing Strategy
- Deployment Process

## Blog Overview

This blog is built with Next.js and includes various features:

## Features

### NBA Games Integration
- Uses RapidAPI Basketball API to display NBA game data
- Shows comprehensive game information including:
  - Team names and logos
  - Quarter-by-quarter scoring
  - Game status and venue
  - Support for overtime periods
- Environment Variables:
  - `NEXT_PUBLIC_RAPIDAPI_KEY`: API key for RapidAPI Basketball service
  - Must be set in `.env` file (not committed to repository)

### API Integration Setup
1. Create a `.env` file in the root directory
2. Add your RapidAPI key:
   ```
   NEXT_PUBLIC_RAPIDAPI_KEY=your_api_key_here
   ```
3. Ensure `.env` is in `.gitignore`

### Development
```bash
npm install
npm run dev
```

The development server will start at `http://localhost:3000`.

## Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)
