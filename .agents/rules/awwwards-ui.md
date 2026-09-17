# Awwwards UI & Design Guidelines

When developing UI components and layouts:
- Use modern Awwwards-caliber aesthetics (bento grids, kinetic text, velocity scroll, 3D/WebGL background depth).
- Available installed libraries: `lenis`, `gsap` (`@gsap/react`), `motion`, `three` (`@types/three`), `dompurify` (`@types/dompurify`), `lucide-react`.
- **NO CUSTOM CURSORS**: Never implement custom cursor overlays, trailing dots, or cursor overrides. Keep standard native OS cursor and use spring-physics / magnetic pull on interactive elements instead.
- Brand & Secondary Color: Use `#FE7402` for all button brushstrokes, highlight badges, accents, and secondary color elements across the site.
- Next.js & React 19 rules: Use `'use client'` on interactive/motion components, ensure SSR safety (`ssr: false` on WebGL/Canvas if needed), clean up GSAP/Three.js resources on unmount.
