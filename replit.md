# Overview

This is a restaurant website application for Shri Krishna Restaurant, a 43-year-old family-run South Indian restaurant in Mumbai. The project is built as a full-stack TypeScript application with a React frontend and Express backend, featuring a modern restaurant website with sections for menu display, gallery, reviews, contact information, and more. The application uses a component-based architecture with modern UI components from shadcn/ui.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Tailwind CSS for styling with shadcn/ui components
- **Component Library**: Radix UI primitives for accessible components
- **State Management**: React hooks with TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API with `/api` prefix
- **Development**: Hot reloading with Vite integration in development mode
- **Error Handling**: Centralized error middleware

## Data Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **Migrations**: Drizzle Kit for schema management
- **Schema**: Shared schema definitions in TypeScript
- **Storage Interface**: Abstracted storage layer with in-memory fallback

## Development Setup
- **Monorepo Structure**: Client and server code in separate directories with shared types
- **Path Aliases**: Configured for clean imports (`@/`, `@shared/`)
- **Development Server**: Concurrent client and server development with Vite proxy

## Styling and UI
- **Design System**: shadcn/ui with "new-york" style variant
- **Theme**: Neutral base colors with CSS variables
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Custom CSS animations for enhanced UX

# External Dependencies

## Core Runtime Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon Database
- **drizzle-orm**: Type-safe SQL ORM
- **express**: Web application framework
- **react**: Frontend UI library
- **vite**: Build tool and development server

## UI and Styling
- **@radix-ui/react-***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant styling
- **lucide-react**: Icon library

## Development Tools
- **tsx**: TypeScript execution for Node.js
- **esbuild**: JavaScript bundler for production builds
- **drizzle-kit**: Database migration and introspection tool
- **@replit/vite-plugin-***: Replit-specific development enhancements

## Data and Validation
- **zod**: Schema validation library
- **drizzle-zod**: Integration between Drizzle and Zod
- **@tanstack/react-query**: Server state management
- **@hookform/resolvers**: Form validation resolvers

## Additional Features
- **date-fns**: Date manipulation utilities
- **embla-carousel-react**: Carousel component
- **cmdk**: Command palette component
- **connect-pg-simple**: PostgreSQL session store