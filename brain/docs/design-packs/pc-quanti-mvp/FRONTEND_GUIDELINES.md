# FRONTEND_GUIDELINES - PC Quanti MVP

## What this file is

Component structure, token usage rules, and accessibility baseline for
PC Quanti frontend development.

## Component Architecture

### File Structure

```text
src/
├── components/
│   ├── ui/              # Reusable primitives (Button, Card, Container)
│   ├── layout/          # Layout components (Header, Footer, Section)
│   └── sections/        # Page-specific sections (Hero, ServicesGrid)
├── app/                 # Next.js App Router pages
│   ├── layout.tsx       # Root layout (global Header/Footer)
│   ├── page.tsx         # Home page
│   ├── about/
│   ├── services/
│   └── contact/
└── lib/                 # Utilities, types, constants
```

### Component Naming Conventions

- **UI Primitives:** `PascalCase` (e.g., `Button.tsx`, `Card.tsx`)
- **Layout Components:** `PascalCase` (e.g., `Header.tsx`, `Footer.tsx`)
- **Page Sections:** `PascalCase` + descriptive suffix
  (e.g., `HeroSection.tsx`, `ServicesGrid.tsx`)
- **Utilities:** `camelCase` (e.g., `formatDate.ts`, `cn.ts`)

### Component Composition Pattern

**Prefer composition over complexity:**

```tsx
// ✅ Good: Composable, single responsibility
<Card>
  <CardHeader>
    <CardTitle>Project Management</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Expert PM services for nuclear projects...</p>
  </CardContent>
  <CardFooter>
    <Button variant="primary">Learn More</Button>
  </CardFooter>
</Card>

// ❌ Avoid: Monolithic component with too many props
<ServiceCard
  title="Project Management"
  description="Expert PM services..."
  buttonText="Learn More"
  buttonVariant="primary"
  showImage={true}
  imagePosition="top"
  // ... 10+ more props
/>
```

### TypeScript Props Pattern

**Always define explicit prop types:**

```tsx
// ✅ Good: Explicit, typed, documented
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  className,
  ...props
}: ButtonProps) {
  // ...
}
```

## Token Usage Rules

### Colors

**Use Tailwind custom tokens from `tailwind.config.ts`:**

```tsx
// ✅ Good: Token-based
<button className="bg-pc-blue hover:bg-pc-blue-dark text-white">
  Contact Us
</button>

// ❌ Avoid: Hardcoded hex values
<button className="bg-[#2C02D9] hover:bg-[#2402B0]">
  Contact Us
</button>
```

**Token mapping:**

- `pc-blue`: `#2C02D9` (primary brand)
- `pc-blue-dark`: `#2402B0` (hover state)
- `pc-blue-light`: `#E8E5FB` (background tint)

### Spacing

**Use Tailwind spacing scale (4px increments):**

```tsx
// ✅ Good: Tailwind scale
<section className="py-16 px-4 md:px-8">
  <div className="max-w-7xl mx-auto space-y-12">
    {/* Content */}
  </div>
</section>

// ❌ Avoid: Arbitrary spacing
<section className="py-[67px] px-[13px]">
  {/* Content */}
</section>
```

### Typography

**Use defined type scale:**

```tsx
// ✅ Good: Semantic classes
<h1 className="text-4xl md:text-5xl font-bold">
  Expert Project Management
</h1>
<p className="text-lg text-gray-700">
  Supporting text...
</p>

// ❌ Avoid: Arbitrary sizes
<h1 className="text-[37px] font-[650]">
  Expert Project Management
</h1>
```

## Accessibility Baseline

### Semantic HTML

**Always use semantic elements:**

```tsx
// ✅ Good: Semantic
<header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

// ❌ Avoid: Div soup
<div className="header">
  <div className="nav">
    <div className="nav-item">Home</div>
  </div>
</div>
```

### Keyboard Navigation

**All interactive elements must be keyboard-accessible:**

```tsx
// ✅ Good: Native button, keyboard-friendly
<button onClick={handleClick}>Submit</button>

// ❌ Avoid: Div with onClick (not keyboard-accessible)
<div onClick={handleClick}>Submit</div>
```

### Focus Indicators

**Never remove focus without replacement:**

```tsx
// ✅ Good: Custom focus ring
<button className="focus:outline-none focus:ring-2 focus:ring-pc-blue">
  Submit
</button>

// ❌ Avoid: No focus indicator
<button className="focus:outline-none">
  Submit
</button>
```

### ARIA Labels

**Provide context for screen readers:**

```tsx
// ✅ Good: Descriptive aria-label
<button aria-label="Close navigation menu">
  <XIcon className="w-6 h-6" />
</button>

// ❌ Avoid: Icon-only button without label
<button>
  <XIcon className="w-6 h-6" />
</button>
```

### Alt Text for Images

**Always provide meaningful alt text:**

```tsx
// ✅ Good: Descriptive alt
<Image
  src="/logo.png"
  alt="PC Quanti - Project Management Consultancy"
  width={150}
  height={50}
/>

// ❌ Avoid: Missing or generic alt
<Image src="/logo.png" alt="logo" width={150} height={50} />
```

### Color Independence

**Never rely on color alone to convey information:**

```tsx
// ✅ Good: Icon + color
<div className="flex items-center gap-2 text-red-600">
  <AlertIcon className="w-5 h-5" />
  <span>Error: Please fix the form errors below</span>
</div>

// ❌ Avoid: Color only
<div className="text-red-600">
  Please fix the form errors below
</div>
```

## Responsive Design

### Mobile-First Approach

**Design for mobile, enhance for desktop:**

```tsx
// ✅ Good: Mobile-first breakpoints
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Content */}
</div>

// ❌ Avoid: Desktop-first
<div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
  {/* Content */}
</div>
```

### Touch Targets

**Minimum 44x44px for mobile:**

```tsx
// ✅ Good: Adequate touch target
<button className="min-h-[44px] px-6 py-2">
  Submit
</button>

// ❌ Avoid: Too small
<button className="text-xs py-1 px-2">
  Submit
</button>
```

## Performance

### Image Optimization

**Always use Next.js `<Image>` component:**

```tsx
import Image from 'next/image';

// ✅ Good: Optimized, lazy-loaded
<Image
  src="/services/project-management.jpg"
  alt="Project management services"
  width={600}
  height={400}
  loading="lazy"
/>

// ❌ Avoid: Plain img tag
<img src="/services/project-management.jpg" alt="..." />
```

### Code Splitting

**Lazy load non-critical components:**

```tsx
import dynamic from 'next/dynamic';

// ✅ Good: Lazy-loaded modal
const ContactModal = dynamic(() => import('@/components/ContactModal'), {
  loading: () => <p>Loading...</p>,
});
```

## Testing

### Component Testing Checklist

- [ ] Renders without errors
- [ ] Props passed correctly
- [ ] Events fire as expected (onClick, onChange, etc.)
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Screen reader announces content correctly
- [ ] Mobile viewport renders correctly

### Accessibility Testing

- [ ] Run Lighthouse audit (Accessibility score 90+)
- [ ] Test with keyboard only (no mouse)
- [ ] Test with screen reader (VoiceOver, NVDA)
- [ ] Test color contrast (WCAG AA minimum)

## Code Quality

### Linting

- **ESLint:** Enforce code style (`npm run lint`)
- **TypeScript:** Strict mode enabled (`tsconfig.json`)
- **Prettier:** Auto-format on save

### Git Commit Conventions

```text
feat: Add contact form component
fix: Correct button focus styling
docs: Update component usage guidelines
style: Format Button component
refactor: Simplify Card composition
test: Add Button accessibility tests
```

## Completeness Checklist

- [x] Component structure defined
- [x] Token usage rules documented
- [x] Accessibility baseline specified (WCAG AA)
- [x] Responsive design patterns documented
- [x] Performance best practices outlined
- [x] Testing checklist provided
