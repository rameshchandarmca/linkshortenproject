# Link Shortener Project - Agent Instructions

> [!CAUTION]
> **BLOCKING REQUIREMENT — DO NOT SKIP**
> You MUST read the relevant file(s) from the `docs/` directory **before generating any code**.
> This is a hard requirement — not a suggestion. Identify which topic(s) your task touches, open the
> corresponding `docs/` file(s) with `read_file`, and only then begin writing code.
> Generating code without first reading the applicable docs file is **not permitted**.

This document provides comprehensive coding standards and guidelines for AI agents working on the Link Shortener project. All development must adhere to these standards to ensure consistency, maintainability, and quality.

For detailed guidelines on specific topics, refer to the modular documentation in the `docs/` directory. **Always read the relevant `.md` file BEFORE generating any code:**



## Project Overview

The Link Shortener project is a Next.js 16 application with TypeScript, using:
- **Framework**: Next.js 16 with App Router
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Clerk
- **Styling**: Tailwind CSS v4 with shadcn/ui
- **Deployment**: Vercel (planned)

## Core Standards

### 1. Coding Standards
📄 [Detailed coding standards](docs/coding-standards.md)
- TypeScript first approach
- ESLint compliance
- Consistent formatting
- Documentation requirements

### 2. Project Structure
📄 [File organization guidelines](docs/project-structure.md)
- Directory structure conventions
- File naming standards
- Import organization
- Asset management

### 3. Database Conventions
📄 [Database design and ORM usage](docs/database-conventions.md)
- Drizzle ORM patterns
- Schema design principles
- Migration workflow
- Performance considerations

### 4. Component Guidelines
📄 [React component standards](docs/component-guidelines.md)
- Component structure and types
- Props and state management
- Performance optimization
- Accessibility requirements

### 5. Authentication
📄 [Clerk integration guidelines](docs/auth.md)
- Authentication flow implementation
- Protected routes (`/dashboard` requires login)
- Authenticated users redirected from `/` to `/dashboard`
- Sign in/sign up always modal (never dedicated pages)
- Clerk is the only auth method — no exceptions

### 6. Styling
📄 [Tailwind CSS and design standards](docs/styling.md)
- Utility-first approach
- Component variants
- Responsive design
- Accessibility compliance

### 7. UI Components
📄 [shadcn/ui usage and component guidelines](docs/ui.md)
- ALL UI elements must use shadcn/ui — no custom components
- Add components via CLI: `npx shadcn@latest add <component>`
- Use `lucide-react` for all icons
- Use `cn()` from `@/lib/utils` for class merging

## Development Workflow

1. **Planning**: Review relevant documentation before implementing features
2. **Implementation**: Follow the established patterns and conventions
3. **Validation**: Ensure code passes linting and type checking
4. **Testing**: Write tests for new functionality (when testing is configured)
5. **Documentation**: Update documentation for significant changes

## Key Technologies

- **Next.js 16**: Latest version with breaking changes - read `node_modules/next/dist/docs/` guides
- **TypeScript 5**: Strict mode enabled
- **Drizzle ORM**: Type-safe database operations
- **Clerk**: Authentication and user management
- **Tailwind CSS v4**: Utility-first styling
- **shadcn/ui**: Component library with Radix UI

## Quality Assurance

- **Type Safety**: No `any` types, proper TypeScript usage
- **Error Handling**: Comprehensive error boundaries and user feedback
- **Performance**: Optimized for Core Web Vitals
- **Security**: Input validation, secure authentication
- **Accessibility**: WCAG compliance

## Getting Started

1. Read all documentation files in the `docs/` directory
2. Review the existing codebase structure
3. Understand the technology stack and configurations
4. Follow the established patterns for new development

## Important Notes

- **Breaking Changes**: Next.js 16 has significant changes from previous versions
- **Strict Mode**: TypeScript strict mode is enabled - no exceptions
- **ESLint**: All code must pass ESLint checks
- **Path Aliases**: Use `@/*` for internal imports
- **Server Components**: Prefer server components over client components

