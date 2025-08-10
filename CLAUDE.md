# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm test` - Run Jest unit tests
- `pnpm lint` - Run ESLint with Next.js and Prettier rules

### Database Management
- `pnpm db:init` - Initialize database schema using scripts/init-db.ts
- `pnpm db:seed` - Seed database with initial data using scripts/seed-db.ts

## Architecture Overview

This is a full-stack Next.js application implementing a domain-driven design pattern with the following key architectural decisions:

### Technology Stack
- **Frontend**: Next.js 15 with React 19, TypeScript, Material-UI components
- **Database**: PostgreSQL with raw SQL queries (using `postgres` npm package)
- **State Management**: React Query (@tanstack/react-query) for data fetching and caching
- **Form Management**: React Hook Form with Zod validation
- **Styling**: Emotion with Material-UI theming
- **Testing**: Jest with Testing Library

### Project Structure

#### Domain-Driven Organization
The codebase follows domain-driven design under `src/domains/`:
- `grades/` - Grade management functionality
- `numbers/` - Number pair calculations
- `landingPage/` - Home page components

Each domain contains:
- `api/` - Controllers, services, repositories, and types
- `components/` - React components specific to the domain
- `shared/` - Types and utilities shared within the domain

#### Core Architecture Layers
1. **API Routes** (`src/app/api/`) - Next.js API routes handling HTTP requests
2. **Controllers** - Handle request/response logic and validation
3. **Services** - Business logic layer
4. **Repositories** - Database access layer with raw SQL queries
5. **Components** - React UI components with Material-UI

#### Key Patterns
- **DataService Pattern**: Centralized API handlers with query keys for React Query (`src/services/DataService/`)
- **Form Fields**: Reusable form components that integrate React Hook Form with Material-UI (`src/form-fields/`)
- **Repository Pattern**: Database operations abstracted through repository interfaces
- **Dependency Injection**: Services receive repository instances via constructor injection

### Database Design
- **Raw SQL Requirement**: All database operations use raw SQL queries, not ORM abstractions
- **Schema**: Located in `src/db/schema.sql` with two main tables:
  - `numbers` - Stores integers with unique constraint and value index
  - `grades` - Stores class grades with constraints (0-100 range, specific classes)
- **Connection**: PostgreSQL connection pool managed via `postgres` package in `src/db/db.ts`

### Development Patterns
- **Path Aliases**: Use `@/*` imports for `src/*` paths
- **Component Structure**: Each component has index.ts, component file, styled component, and types
- **Testing**: Unit tests located in `__tests__` directories within relevant modules
- **Validation**: Zod schemas for both client-side forms and API request validation

### Key Files
- `src/db/schema.sql` - Database schema definition
- `src/services/DataService/` - Centralized API handling with React Query integration
- `scripts/init-db.ts` and `scripts/seed-db.ts` - Database initialization scripts
- `jest.config.ts` - Test configuration with Next.js integration