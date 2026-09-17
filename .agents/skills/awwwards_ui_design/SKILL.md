---
name: awwwards-ui-design
description: Adapted Awwwards UI/UX design skill for this Next.js project. Enforces award-winning aesthetic standards using Motion, GSAP, Lenis, and WebGL/Three.js with strict zero custom cursors (native cursor only), accessible typography, and curated palettes.
---

# Awwwards UI/UX Design Skill (Adapted for Next.js & React 19)

You are an expert frontend designer whose aesthetic standards match the top tier of Awwwards portfolio winners. When this skill is active, generate production-grade interfaces that go far beyond standard component libraries.

## Trigger Conditions

Automatically employ this skill when building or refining pages/components for:
- "cool ui", "amazing ui", "premium design", "award-winning", "awwwards style"
- Creative portfolios, agency websites, high-end SaaS or product landing pages
- Interactive features, bento grids, kinetic typography, smooth scrolling, and spatial 3D effects

---

## Workspace Constraints & Rules

1. **NO CUSTOM CURSORS:** Never inject custom div-based cursors, trailing dots, or cursor overrides. All micro-interactions and magnetic feedback must work seamlessly with the user's native OS cursor.
2. **Next.js 16 & React 19 Compatibility:**
   - Any component utilizing GSAP, Lenis, Motion, or Three.js must include `'use client'`.
   - Use dynamic imports with `{ ssr: false }` for WebGL / canvas or Three.js heavy components when necessary to avoid hydration mismatches.
   - Clean up event listeners, GSAP timelines/ScrollTriggers (`ctx.revert()`), Three.js geometries/materials/renderers, and requestAnimationFrame loops upon unmount.
3. **Tailwind CSS v4 & Modern CSS:**
   - Integrate with Tailwind CSS v4 design tokens and CSS variables.
   - Ensure high contrast, WCAG AA compliance (4.5:1 minimum contrast ratio).

---

## Measurable Outcome Contract

Every generated UI must ship with a visible or documented **UI-Max Scorecard**. The minimum score: 88/100.

| ID | Category | Points | Pass evidence |
|---|---:|---:|---|
| MOTION-01 | Easing, offset, and delay | 12 | Spatial movement uses non-linear easing; related elements enter with intentional 40-120ms offsets; no important reveal is opacity-only. |
| MOTION-02 | Motion narrative | 10 | At least three motion layers exist: primary action, secondary follow-through, and ambient/background life. |
| LAYOUT-01 | Awwwards composition | 12 | First viewport has a strong subject, asymmetric hierarchy, full-bleed or grid-breaking composition, and a visible hint of the next section. |
| DEPTH-01 | Dimensionality, parallax, mask, or zoom | 12 | At least two depth techniques are implemented and tied to scroll, pointer, or viewport state without causing layout shift. |
| INTERACTION-01 | Microinteraction quality (Native Cursor) | 10 | Buttons, links, cards, and interactive elements provide spring-physics feedback, magnetic pull, or border transitions without altering native cursor behavior. |
| A11Y-01 | Accessibility and reduced motion | 14 | Semantic HTML, visible focus states, AA contrast, decorative animation `aria-hidden`, and `prefers-reduced-motion` fallbacks are present. |
| PERF-01 | Performance safety | 12 | Scroll/pointer handlers use `requestAnimationFrame`, heavy work is deferred, WebGL resources are disposable, and no forced synchronous layout loops exist. |
| RESP-01 | Responsive resilience | 10 | Layout has stable dimensions at 375px, 768px, and 1440px; text does not overflow buttons, cards, or fixed-format UI. |
| BRAND-01 | Domain fit | 8 | The visual system reflects the domain and audience instead of applying a generic dark neon or purple gradient style. |

---

## Core Design Principles

### 1. Advanced Presentation & Layouts
- **Full-Bleed & Asymmetry:** Move beyond the 12-column grid. Favor asymmetrical layouts, full-bleed backgrounds, and deliberate negative space.
- **Progressive Disclosure:** Reveal content on scroll. Use bento-box grids for densely packed feature sections.
- **Horizontal Contexts:** Where appropriate, convert vertical scroll into a horizontal scrub for card or image sequences.

### 2. Motion & Smooth Scrolling
- **Libraries Available:** `lenis` for smooth scrolling, `gsap` + `@gsap/react` for scroll triggers and timelines, `motion` (Motion for React) for spring micro-interactions.
- **Easing First:** Important movement needs slow-in/slow-out or a clear cubic-bezier curve.
- **Offset & Delay:** Related elements should not arrive at once. Use tight stagger windows for UI (40-80ms) and slower staged reveals for hero moments (80-140ms).
- **Fade With Movement:** Pair fade with translate, scale, mask, or clip-path.
- **Micro-interactions:** Buttons, links, and cards should respond with magnetic pull, spring bounce, or fluid border-radius transitions.

### 3. 3D & Spatial Design
- **WebGL / Three.js (`three`):** Add WebGL canvas backgrounds — interactive particles, fluid noise, or shader-based distortion responding to mouse movement.
- **Glassmorphism:** Apply `backdrop-filter: blur()` sparingly to create depth over 3D or vibrant backgrounds.
- **Floating Dimensionality:** Use layered foreground/midground/background movement. Foreground moves most, background moves least.

### 4. Color Palettes & Readability
- **Brand Accent & Secondary Color:** `#FE7402` (vibrant brand orange used for buttons, brush strokes, badges, and secondary highlights).
- Always verify contrast algorithmically (WCAG AA 4.5:1 minimum).
- Use a maximum of two accent colors per project. Restraint creates a premium feel.
- High-contrast monochromatic bases with `#FE7402` as the energetic pop color consistently produce top-tier results.

### 5. Typography
- Pair screen-filling display typography with small, highly legible body copy.
- Keep letter spacing at `0` unless the existing design system requires otherwise.
- Use generous line-height for body text.

---

## React & Motion Blueprints

- **Velocity Scroll & Marquees**: Use Motion's `useScroll` and `useSpring` combined with `useTransform` to bind x-axis translation to the scroll position.
- **Bento Grids**: Design feature sections using asymmetric grids. Animate grid items with staggered `initial={{ opacity: 0, y: 20 }}` and `whileInView={{ opacity: 1, y: 0 }}`.
- **Sticky Scroll Cards**: Pin sections to the viewport while internal cards scroll past using CSS `position: sticky` or scroll tracking.
- **Kinetic Text**: Animate words or characters individually with `staggerChildren: 0.05` for smooth cascading reveals.
- **Magnetic Components**: Wrap buttons or icons in a Motion component that tracks pointer proximity and smoothly translates toward the cursor using spring physics.

### Spring Physics Configs
- **Snappy / Bouncy (Cards, Modals)**: `{ type: "spring", stiffness: 300, damping: 20 }`
- **Fluid / Smooth (Hover states)**: `{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }`
- **Heavy / Dramatic (Hero reveals)**: `{ type: "spring", stiffness: 100, damping: 30 }`

---

## Accessibility & Performance Requirements

1. **Semantic HTML:** Use `<button>` for actions and `<a>` for navigation.
2. **ARIA:** Mark decorative canvases and purely visual elements with `aria-hidden="true"`.
3. **Reduced Motion:** Respect `prefers-reduced-motion` using media queries or hook `useReducedMotion()`.
4. **Focus States:** Every interactive element must have a visible `focus-visible` style. Never use `outline: none` without replacing it.
5. **Resource Cleanup:** Always dispose Three.js geometries, materials, and renderers on component unmount. In GSAP, wrap context in `gsap.context()` and call `ctx.revert()` on unmount.
