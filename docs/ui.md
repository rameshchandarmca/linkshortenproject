# UI Guidelines - Agent Instructions

## Core Rule

- **ALL UI elements must use shadcn/ui components. NEVER create custom components.**
- If a shadcn/ui component exists for the use case, use it. No exceptions.

## shadcn/ui Setup

- Style: `base-nova`
- Base color: `neutral`
- CSS variables enabled
- Icon library: `lucide` (use `lucide-react` for all icons)
- RSC: `true` — components support React Server Components
- Component alias: `@/components/ui`

## Adding Components

- Use the CLI to add components: `npx shadcn@latest add <component-name>`
- Never manually write component code that replicates shadcn/ui primitives
- Components are installed to `components/ui/`

## Usage Rules

- Import from `@/components/ui/<component>`
- Use `cn()` from `@/lib/utils` for conditional class merging
- Do not override component internals — use exposed props and variants only
- Do not wrap shadcn/ui components in unnecessary custom wrapper components
- Apply layout/spacing via Tailwind utility classes on the component directly

## Variants & Styling

- Use built-in `variant` and `size` props before reaching for custom classes
- Extend with Tailwind utilities when the built-in props are insufficient
- Do not add inline `style` attributes — use Tailwind classes only
- CSS variables for colors are defined in `app/globals.css` — do not hardcode color values

## Icons

- Use `lucide-react` exclusively
- Import icons by name: `import { LinkIcon } from "lucide-react"`
- Do not use other icon libraries (heroicons, react-icons, etc.)

## Do Not

- Create custom button, input, dialog, dropdown, or form components
- Copy/paste Radix UI primitives directly — use the shadcn/ui wrappers
- Use HTML form elements raw (`<input>`, `<button>`, `<select>`) — use shadcn/ui equivalents
- Use `@radix-ui/*` packages directly in feature code
