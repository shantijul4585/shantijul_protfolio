# Shantijul Islam Portfolio Website

## Overview

This is a full-stack portfolio website for Shantijul Islam, a Statistics graduate and aspiring Data Analyst. The application showcases his educational background, professional experience, technical skills, and data analysis projects. It features a modern, responsive design with interactive sections and a contact form functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Neon Database serverless connection
- **ORM**: Drizzle ORM for type-safe database operations
- **Development**: In-memory storage fallback for development

## Key Components

### Database Schema
- **users**: User authentication table with username and password
- **contacts**: Contact form submissions with name, email, subject, message, and timestamp
- Database migrations managed through Drizzle Kit

### API Endpoints
- `POST /api/contact`: Submit contact form data
- `GET /api/contacts`: Retrieve all contact submissions (admin functionality)

### Frontend Sections
1. **Hero Section**: Introduction with profile avatar and call-to-action
2. **About Section**: Career objective and key competencies
3. **Education Section**: Academic qualifications with timeline
4. **Experience Section**: Professional and organizational experience
5. **Skills Section**: Technical skills with proficiency levels
6. **Projects Section**: Portfolio of data analysis projects with GitHub links
7. **Contact Section**: Interactive contact form with validation

### UI Components
- Responsive navigation with smooth scrolling
- Interactive cards and animations
- Toast notifications for user feedback
- Mobile-responsive design with hamburger menu
- Gradient backgrounds and modern styling

## Data Flow

### Contact Form Submission
1. User fills out contact form in the frontend
2. Form data is validated using Zod schemas
3. Data is sent to `/api/contact` endpoint via POST request
4. Backend validates and stores data in PostgreSQL database
5. Success/error response is sent back to frontend
6. Toast notification displays submission status

### Development vs Production
- Development uses in-memory storage for contacts
- Production uses PostgreSQL with Neon Database
- Vite dev server handles frontend in development
- Built static files served in production

## External Dependencies

### Frontend Dependencies
- React ecosystem: React, React DOM, React Query
- UI Library: Radix UI primitives, shadcn/ui components
- Styling: Tailwind CSS, class-variance-authority, clsx
- Icons: Lucide React
- Form handling: React Hook Form with Zod validation
- Date utilities: date-fns

### Backend Dependencies
- Server: Express.js with TypeScript support
- Database: Drizzle ORM, @neondatabase/serverless
- Validation: Zod for schema validation
- Build: esbuild for production bundling
- Development: tsx for TypeScript execution

### Development Tools
- Vite with React plugin
- TypeScript compiler
- PostCSS with Tailwind CSS
- ESLint configuration
- Replit-specific development tools

## Deployment Strategy

### Build Process
1. Frontend builds to `dist/public` using Vite
2. Backend builds to `dist/index.js` using esbuild
3. Both client and server code bundled for production

### Environment Configuration
- `NODE_ENV`: Development/production mode switching
- `DATABASE_URL`: PostgreSQL connection string (required for production)
- Replit-specific environment variables for development

### Production Deployment
- Server serves static files from `dist/public`
- Express API handles backend routes
- PostgreSQL database for persistent storage
- Session management with connect-pg-simple

### Development Setup
- Concurrent frontend and backend development
- Hot module replacement (HMR) for rapid iteration
- In-memory storage for quick development cycles
- Vite dev server with proxy configuration

## Changelog

```
Changelog:
- July 08, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```