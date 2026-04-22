# Authentication Guidelines

## Core Rules

- **Clerk is the only auth provider.** Do not implement any other authentication method (e.g., NextAuth, custom JWT, sessions, OAuth directly). All auth logic must go through Clerk.
- Never store passwords, tokens, or credentials manually. Clerk handles all of this.

## Protected Routes

- `/dashboard` is a protected route. Access requires an authenticated user.
- Enforce protection using Clerk middleware (`clerkMiddleware` in `middleware.ts`). Use `auth().protect()` or equivalent Clerk API — do not roll custom redirect logic.

## Redirects

- If an authenticated user navigates to `/` (homepage), redirect them to `/dashboard`.
- Implement this redirect in `middleware.ts` using Clerk's `auth()` helper to detect session state.

## Sign In / Sign Up UI

- Sign in and sign up must always open as a **modal**, never as a dedicated page.
- Use Clerk's `<SignInButton mode="modal">` and `<SignUpButton mode="modal">` components.
- Do not create custom `/sign-in` or `/sign-up` routes or pages.

## Clerk Integration Patterns

- Use `currentUser()` or `auth()` from `@clerk/nextjs/server` for server-side user/session access.
- Use `useUser()` or `useAuth()` from `@clerk/nextjs` for client-side access.
- Wrap the app in `<ClerkProvider>` at the root layout — confirm it is already present before adding it.
- Check `node_modules/next/dist/docs/` for any Next.js 16-specific Clerk integration notes.

## proxy.ts (Next.js middleware)

- This project uses `proxy.ts` at the project root instead of `middleware.ts` (Next.js 16 convention). Do NOT create a `middleware.ts` — it will conflict.
- `proxy.ts` must use `clerkMiddleware` with route protection logic.
- The matcher must cover `/dashboard` and any other protected paths.
- Authenticated-user-to-dashboard redirect logic lives here alongside route protection.
