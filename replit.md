# Portfolio Web Application

## Overview

This is a modern full-stack portfolio web application built with React, TypeScript, and Express.js. The application showcases a developer's skills, projects, and contact information with an interactive 3D background and responsive design. It features a contact form with database storage capabilities and is designed to be easily customizable for different portfolios.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Bundling**: Vite for fast development and optimized production builds
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas for runtime type validation
- **Development**: Hot module replacement (HMR) with Vite integration

## Key Components

### Database Schema (`shared/schema.ts`)
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contacts Table**: Contact form submissions (id, name, email, subject, message, createdAt)
- **Validation**: Zod schemas for type-safe data validation with custom rules (email validation, minimum lengths)

### API Endpoints (`server/routes.ts`)
- **POST `/api/contact`**: Handle contact form submissions with validation
- **GET `/api/contacts`**: Retrieve all contact submissions (admin functionality)
- Error handling with proper HTTP status codes and user-friendly messages

### Frontend Pages and Components
- **Portfolio Page**: Main landing page with all sections
- **Hero Section**: Animated introduction with profile image and call-to-action
- **Skills Section**: Interactive skill showcase with progress indicators
- **Projects Section**: Project gallery with descriptions and technologies
- **About Section**: Personal information and statistics
- **Contact Section**: Form with real-time validation and submission feedback
- **3D Background**: Three.js integration for visual enhancement
- **Navigation**: Smooth scrolling navigation with theme toggle

### Storage Layer (`server/storage.ts`)
- **Interface-based Design**: `IStorage` interface for flexible storage implementations
- **Memory Storage**: In-memory storage for development (falls back when database unavailable)
- **Database Integration**: Ready for Drizzle ORM integration with PostgreSQL

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form with validation
   - Frontend validates using Zod schemas
   - API request sent to `/api/contact` endpoint
   - Backend validates and stores in database
   - Success/error feedback displayed to user

2. **Content Rendering**:
   - Static content rendered from component definitions
   - Dynamic animations loaded via CDN (GSAP, Three.js)
   - Theme state managed through context and localStorage

3. **Development Workflow**:
   - Vite provides HMR for frontend development
   - Express server serves API and static files
   - TypeScript provides compile-time type checking

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack Query
- **UI Framework**: Radix UI primitives, Tailwind CSS, class-variance-authority
- **Backend**: Express.js, Drizzle ORM, Neon Database serverless driver
- **Validation**: Zod for runtime type validation
- **Build Tools**: Vite, TypeScript, ESBuild

### CDN-Loaded Libraries
- **GSAP**: Animation library loaded dynamically for performance
- **Three.js**: 3D graphics library for background effects
- **External Fonts**: Loaded via CSS imports

### Development Tools
- **Replit Integration**: Custom plugins for Replit environment
- **Hot Reload**: Vite plugin for runtime error overlay
- **Code Quality**: TypeScript strict mode, ESLint configuration

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express API proxy
- **Database**: Environment variable `DATABASE_URL` for PostgreSQL connection
- **Asset Serving**: Vite handles frontend assets, Express serves API

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles Express server to `dist/index.js`
- **Database Migrations**: Drizzle Kit handles schema migrations
- **Environment**: Production mode with optimized builds and error handling

### Configuration
- **Database**: Drizzle config points to `shared/schema.ts` with PostgreSQL dialect
- **Build Scripts**: Separate development and production build processes
- **Static Assets**: Configured paths for assets and component resolution

The application is designed to be easily deployable to various platforms while maintaining development simplicity and production performance.