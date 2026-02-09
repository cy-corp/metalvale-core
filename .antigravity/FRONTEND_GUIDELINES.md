# Frontend Guidelines - MetalVale Core

## Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS 4.0
- **Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **Animations**: tw-animate-css + Tailwind transitions

## Principles
1. **Token Usage**: Never use hardcoded values. Always reference `--color-*`, `--radius-*`, etc., via `@apply` or Tailwind classes.
2. **Component Hierarchy**: 
   - `ui/`: Raw primitive components (buttons, cards, etc.).
   - `features/`: Business-logic-specific UI (MetricCard, OrdersTable).
   - `layout/`: Global structure (Sidebar, Header).
3. **Motion**: Use `transition-all duration-300 ease-in-out` for general states. Scale animations should be subtle (`max 1.01`).
4. **Responsiveness**: Use `sm:`, `md:`, `lg:`, `xl:` breakpoints. Mobile-first approach is mandatory.
