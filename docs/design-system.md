# Design System — 4A Solar (Virya-Derived Identity)

This document is the permanent design reference for all future work on this site. The Virya Energy visual identity is now 4A Solar's canonical design system. Do not revert to any prior navy/orange palette.

---

## 1. Colors

### 1.1 Custom Virya Palette (CSS custom properties in `@theme inline`)

| Token | CSS Variable | Hex Value | Role |
|---|---|---|---|
| Orange (primary) | `--color-virya-orange` | `#ff5938` | Primary CTA buttons, accents, active states, brand highlights |
| Beige | `--color-virya-beige` | `#eee8e2` | Alternating section backgrounds (ItemsSlider, MapSection, ProjectsSlider) |
| Muted | `--color-virya-muted` | `#9f908d` | Secondary text, stat numbers, card descriptions, "muted" word in split headings |
| Dark | `--color-virya-dark` | `#1f1e1e` | Primary body text, mobile menu background |
| Light | `--color-virya-light` | `#fefefe` | Page background, header background when scrolled |
| Green | `--color-virya-green` | `#185649` | Footer pre-footer CTA card background |
| Dark Green | `--color-virya-dark-green` | `#0f4338` | Footer outer background |
| Sage | `--color-virya-sage` | `#8fa89e` | Defined in tokens; not yet directly applied in components |
| Stat Card | `--color-virya-stat-card` | `#afc2bb` | Statistics section left highlight card |

### 1.2 shadcn Token Mappings (`:root`)

These map the Virya palette onto the shadcn/Tailwind CSS variable system. Use these via `bg-primary`, `text-muted-foreground`, etc.

| Token | Value | Usage |
|---|---|---|
| `--background` | `#fefefe` | Page body background |
| `--foreground` | `#1f1e1e` | Default text color |
| `--card` | `#ffffff` | Card backgrounds |
| `--card-foreground` | `#1f1e1e` | Card text |
| `--popover` | `#ffffff` | Popover/dropdown background |
| `--popover-foreground` | `#1f1e1e` | Popover text |
| `--primary` | `#ff5938` | Primary button fill, ring, sidebar accent |
| `--primary-foreground` | `#ffffff` | Text on primary backgrounds |
| `--secondary` | `#eee8e2` | Secondary button fill, muted section bg |
| `--secondary-foreground` | `#1f1e1e` | Text on secondary backgrounds |
| `--muted` | `#eee8e2` | Muted backgrounds (same as secondary) |
| `--muted-foreground` | `#9f908d` | Subdued text on muted areas |
| `--accent` | `#eee8e2` | Accent hover states |
| `--accent-foreground` | `#1f1e1e` | Text on accent |
| `--destructive` | `oklch(0.577 0.245 27.325)` | Error/destructive state |
| `--border` | `#e8e0d8` | Default border color (warm off-white) |
| `--input` | `#e8e0d8` | Form input borders |
| `--ring` | `#ff5938` | Focus ring color |
| `--radius` | `1rem` (16px) | Base border-radius multiplier |

### 1.3 Additional Colors (used inline in components)

| Value | Where Used |
|---|---|
| `#1a1a1a` | HeroSection fallback background (very close to `virya-dark`) |
| `#f5f0ea` | LatestNews tag badge background (lighter warm off-white) |
| `#ffffff` | Hero "Build with us" button, stat box backgrounds, slider nav arrows |
| `rgba(0,0,0,0.35)` / `bg-black/35` | Hero video overlay |
| `rgba(255,89,56,0.8)` | MapSection hotspot radial gradient |
| `rgba(255,255,255,0.92)` | HighlighterServices floating tag pill backgrounds (frosted) |
| `rgba(255,255,255,0.04)` | Footer CTA card decorative ghost panel |
| `rgba(255,255,255,0.97)` | Header background when scrolled (frosted glass) |
| `rgba(0,0,0,0.06)` | Stat box border |
| `rgba(0,0,0,0.08)` | News card border |
| `rgba(0,0,0,0.1)` | Slider navigation arrow shadow |

### 1.4 Section Background Map

| Section | Background |
|---|---|
| Header (top of page) | `transparent` |
| Header (scrolled >80px) | `rgba(254,254,254,0.97)` + `backdrop-filter: blur(8px)` |
| Mobile navigation overlay | `#1f1e1e` |
| HeroSection | `#1a1a1a` (behind video), `bg-black/35` overlay |
| ItemsSlider | `#eee8e2` |
| StatisticsSection | `#ffffff` |
| BrandPromiseSection | `#ffffff` |
| MapSection | `#eee8e2` |
| HighlighterServices | `#ffffff` |
| ProjectsSlider | `#eee8e2` |
| LatestNews | `#ffffff` |
| SiteFooter outer | `#0f4338` |
| Footer pre-footer CTA card | `#185649` |

White and beige alternate throughout the page for visual rhythm.

---

## 2. Typography

### 2.1 Font Family

**Single typeface: Source Sans 3** (loaded via `next/font/google` as `--font-source-sans`)

- Google Font ID: `Source_Sans_3`
- Weights loaded: **300, 400, 600, 700** (normal + italic)
- Applied to: every element on the site — headings and body text use the same typeface
- Tailwind aliases: `--font-sans` and `--font-heading` both point to `--font-source-sans`
- Font smoothing: `-webkit-font-smoothing: antialiased`, `-moz-osx-font-smoothing: grayscale`

**No other font families are used.**

### 2.2 Heading System

All headings use **weight 400** (regular). The design deliberately avoids bold headings — the editorial feel comes from size and negative letter-spacing.

| Level | Font Size | Weight | Line Height | Letter Spacing | Used In |
|---|---|---|---|---|---|
| Hero H1 | `clamp(56px, 8.33vw, 120px)` | 400 | 1.0 | −0.02em | HeroSection |
| virya-h1 (class) | `clamp(60px, 8.33vw, 120px)` | 400 | 1.0 | −0.02em | CSS utility class |
| Section H2 (standard) | `clamp(36px, 3.5vw, 48px)` | 400 | — | −0.02em | ItemsSlider, ProjectsSlider, LatestNews |
| Section H2 (virya-h2 class) | `clamp(36px, 3.84vw, 55.25px)` | 400 | 1.1 | −0.02em | CSS utility class |
| MapSection H2 | `clamp(36px, 3.84vw, 55px)` | 400 | 1.1 | −0.02em | MapSection |
| BrandPromise H2 | `clamp(32px, 3.5vw, 50px)` | 400 | 1.1 | −0.02em | BrandPromiseSection |
| HighlighterServices H2 | `clamp(32px, 3.5vw, 52px)` | 400 | 1.15 | −0.02em | HighlighterServices |
| Stats left card H2 | `clamp(28px, 3vw, 42px)` | 400 | 1.1 | −0.02em | StatisticsSection |
| Footer CTA H2 | `clamp(28px, 3.5vw, 52px)` | 400 | 1.1 | — | SiteFooter |
| News card H3 | `18px` | 400 | 1.3 | — | LatestNews article titles |
| Project card name | `22px` | 400 | — | — | ProjectsSlider overlay |

**Split heading pattern:** Section headings use a two-tone technique — primary word in `#1f1e1e`, secondary "muted" word in `#9f908d`. Example: `<span style={{color:"#1f1e1e"}}>Our </span><span style={{color:"#9f908d"}}>expertise</span>`.

**Orange highlight pattern:** Used in StatisticsSection left card (`Virya` word in orange), HighlighterServices (typed industry word + cursor in `#FF5938`), and SiteFooter CTA (`energy transition` in orange).

### 2.3 Complete Type Scale (smallest → largest)

| Size | Weight | Usage |
|---|---|---|
| `12px` | 400 | News card tag badges, timestamps |
| `13px` | 400 | Footer copyright |
| `14px` | 400 | Card descriptions, stat labels, slider nav, map legend text, footer category headers (uppercase), map tab buttons, BrandPromise button |
| `15px` | 400 | Ghost buttons in BrandPromise, HighlighterServices, footer "See all news"; footer links |
| `16px` | 400 | Nav links, CTA buttons (primary, outline), body text (BrandPromise paragraph, hero body) |
| `18px` | 400 | ItemsSlider card titles, LatestNews article headings, hero body text |
| `20px` | 400 | MapSection descriptor text |
| `22px` | 400 | ProjectsSlider project name overlay |
| `28px` | 400 | Mobile navigation links |
| `clamp(28px–52px)` | 400 | Footer CTA heading, Stats left card heading |
| `clamp(32px–52px)` | 400 | HighlighterServices, BrandPromise section headings |
| `clamp(36px–55px)` | 400 | MapSection, standard section H2s, ProjectsSlider, LatestNews headings |
| `clamp(36px–52px)` | 400 | Stat numbers in boxes |
| `clamp(56px–120px)` | 400 | Hero H1 |

---

## 3. Spacing Patterns

### 3.1 Section Vertical Padding

| Value | Used In |
|---|---|
| `80px 0` | ItemsSlider, StatisticsSection, MapSection, HighlighterServices, ProjectsSlider, LatestNews |
| `100px 0` | BrandPromiseSection |
| `60px 80px 0` / `60px 80px 40px` | SiteFooter |

### 3.2 Content Wrappers

Two wrapper patterns exist:

**`.virya-wrapper`** (max-width 1440px):
```
max-width: 1440px
margin: 0 auto
padding: 0 80px     (desktop)
padding: 0 40px     (≤1024px)
padding: 0 24px     (≤640px)
```
Used in: SiteHeader, HeroSection, ItemsSlider, ProjectsSlider.

**Narrow wrapper** (max-width 1200px):
```
max-width: 1200px
margin: 0 auto
padding: 0 40px
```
Used in: StatisticsSection, BrandPromiseSection, MapSection, HighlighterServices, LatestNews.

**Footer CTA wrapper** (max-width 1280px): `maxWidth: 1280`, `padding: 60px 80px`.

### 3.3 Internal Spacing

| Context | Value |
|---|---|
| Card internal padding (standard) | `24px` |
| Stat box padding | `32px 24px` |
| Stat left card padding | `40px` |
| Footer CTA card padding | `60px 80px` |
| Section heading → content | `48px` (most), `40px` (ProjectsSlider) |
| H2 → body text | `24px` |
| Body text → button | `32px` |
| Hero button group gap | `16px` |
| Desktop nav link gap | `gap-10` (40px via Tailwind) |
| Map filter tab gap | `8px` |
| News article grid gap | `24px` |
| ItemsSlider card gap | `24px` |
| ProjectsSlider card gap | `24px` |
| Stats 2×2 grid gap | `16px` |
| Stats outer grid gap | `32px` |
| BrandPromise grid gap | `80px` |
| HighlighterServices grid gap | `60px` |
| MapSection grid gap | `40px` |
| Footer nav grid gap | `40px` |
| Footer logo → nav columns | `48px` |
| Mobile nav links gap | `24px` (flex column `gap-6`) |
| Header padding | `32px 0` |

---

## 4. Border Radius

| Value | Used On |
|---|---|
| `999px` | All buttons and pill shapes — primary, outline, ghost CTAs; map filter tabs; tag badges; stat "Learn more" button |
| `50%` | Slider navigation arrow buttons (circular) |
| `24px` | Footer pre-footer CTA card |
| `20px` | ItemsSlider cards, ProjectsSlider cards, StatisticsSection left card, HighlighterServices image |
| `16px` | StatisticsSection stat boxes, LatestNews news cards |
| `12px` | Icon badge overlays on ItemsSlider card images |
| `8px` | MapSection image container |
| `1rem` (16px) | `--radius` base (shadcn) |

**Derived shadcn radius scale** (from `--radius: 1rem`):
- `--radius-sm`: `0.5rem` (8px)
- `--radius-md`: `0.75rem` (12px)
- `--radius-lg`: `1rem` (16px)
- `--radius-xl`: `1.5rem` (24px)
- `--radius-2xl`: `2rem` (32px)
- `--radius-3xl`: `2.5rem` (40px)
- `--radius-4xl`: `3rem` (48px)

---

## 5. Animations and Transitions

### 5.1 CSS Keyframe Animations

**`virya-fade-up`** (defined in `globals.css`):
```css
@keyframes virya-fade-up {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* Applied via: */
.animate-fade-up {
  animation: virya-fade-up 0.7s ease forwards;
}
```
Duration: 0.7s, easing: ease, fill-mode: forwards.

### 5.2 CSS Transitions

| Element | Transition |
|---|---|
| Horizontal slider track | `transform 0.4s ease` |
| Header (scroll state) | `all 0.3s ease` |
| Nav link color (scroll) | `color 0.3s ease` |
| `.virya-btn-primary` hover | `background 0.2s ease, opacity 0.2s ease` |
| `.virya-btn-outline` hover | `background 0.2s ease, border-color 0.2s ease` |
| `.virya-btn-ghost` hover | `border-color 0.2s ease` |
| Map filter tabs | `background 0.2s ease, border-color 0.2s ease, color 0.2s ease` |
| Slider nav button opacity | `opacity 0.2s` |
| HighlighterServices image swap | `opacity 0.4s ease` |
| BrandPromise ghost button | `border-color 0.2s ease` |
| Stats "Learn more" button | `border-color 0.2s ease` (via inline onMouseEnter/Leave) |

### 5.3 JavaScript / React Animations

**Typewriter effect** (`HighlighterServices`):
- Technique: React `useEffect` with `setTimeout` chains
- Typing: one character every **80ms**
- Erasing: one character every **50ms**
- Pause between words: **2500ms**
- Blinking cursor: toggled every **500ms** using `setInterval`
- Target words cycle: Landowners → Manufacturing → Logistics → Retail → (repeat)

**Lottie animations** (`StatisticsSection`, `BrandPromiseSection`):
- Library: `lottie-react` loaded via `next/dynamic` with `{ ssr: false }`
- Animation data fetched client-side via `fetch()` + `useEffect`
- Stat icons: 60×60px, loop: true (wind.json, profile.json, fuel.json, globe.json)
- Brand promise illustration: 100% width, loop: true (ses-illu-en.json)

**Scroll-triggered header** (`SiteHeader`):
- Technique: `window.addEventListener('scroll', ...)` with `{ passive: true }`
- Threshold: 80px scroll depth
- Effect: header transitions from `transparent` to frosted glass (`rgba(254,254,254,0.97)` + `backdrop-filter: blur(8px)` + box shadow)

**No Framer Motion, GSAP, or CSS Intersection Observer** currently used.

---

## 6. Button Styles

### 6.1 `.virya-btn-primary` (orange filled pill)

```css
display: inline-flex; align-items: center; gap: 8px;
padding: 14px 28px;
background: #ff5938;
color: #ffffff;
border-radius: 999px;
font-size: 16px; font-weight: 400;
border: none;
transition: background 0.2s ease, opacity 0.2s ease;
```
`:hover` → `background: #e04a2c`

Used in: SiteHeader "Build with us", SiteFooter "Get started".

### 6.2 Hero White Button (inline, no class)

```css
background: #ffffff; color: #1f1e1e;
border-radius: 999px;
padding: 16px 32px;
font-size: 16px; font-weight: 400;
```
Used in: HeroSection "Build with us" (on dark/video background).

### 6.3 `.virya-btn-outline` (white outline on dark backgrounds)

```css
display: inline-flex; align-items: center; gap: 8px;
padding: 14px 28px;
background: transparent; color: #fefefe;
border: 1.5px solid rgba(254,254,254,0.6);
border-radius: 999px;
font-size: 16px; font-weight: 400;
transition: background 0.2s ease, border-color 0.2s ease;
```
`:hover` → `background: rgba(254,254,254,0.1); border-color: rgba(254,254,254,0.9)`

Used in: HeroSection "Discover our work", StatisticsSection "Learn more" (on sage card).

### 6.4 `.virya-btn-ghost` (dark outline on light backgrounds)

```css
display: inline-flex; align-items: center; gap: 8px;
padding: 12px 24px;   /* or 12px 28px in some locations */
background: transparent; color: #1f1e1e;
border: 1.5px solid rgba(31,30,30,0.25);
border-radius: 999px;
font-size: 15px; font-weight: 400;
transition: border-color 0.2s ease;
```
`:hover` → `border-color: rgba(31,30,30,0.6)`

Used in: BrandPromise "Learn more", MapSection "Discover all our projects", HighlighterServices "Learn more", ProjectsSlider "Discover our projects", LatestNews "See all news".

### 6.5 Map Filter Tab Buttons (toggled active state)

```css
/* inactive */
background: transparent; color: #1f1e1e;
border: 1.5px solid rgba(31,30,30,0.2);
border-radius: 999px; padding: 10px 20px; font-size: 14px;

/* active */
background: #FF5938; color: #ffffff;
border-color: #FF5938;

transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
```

### 6.6 shadcn `Button` component (`src/components/ui/button.tsx`)

Based on `@base-ui/react/button` with `cva`. Not currently used in site sections — available for future use.

| Variant | Appearance |
|---|---|
| `default` | `bg-primary` (#ff5938) + `text-primary-foreground` (#fff) |
| `outline` | `border-border` + `bg-background`, hover → `bg-muted` |
| `secondary` | `bg-secondary` (#eee8e2) + `text-secondary-foreground` |
| `ghost` | transparent, hover → `bg-muted` |
| `destructive` | `bg-destructive/10` + `text-destructive` |
| `link` | `text-primary`, underline on hover |

Sizes: `default` (h-8), `sm` (h-7), `lg` (h-9), `xs` (h-6), `icon` (size-8), plus icon-xs, icon-sm, icon-lg.

---

## 7. Card and Container Styles

### 7.1 Expertise Slider Cards (ItemsSlider)

```
width: 416px (fixed)
border-radius: 20px
background: #ffffff
overflow: hidden
Image section: height 300px, object-fit: cover
  └── Icon badge: 48×48px, background: rgba(255,255,255,0.9), border-radius: 12px, top:20 left:20
Body section: padding: 24px
  └── Title: 18px, #1f1e1e, lh 1.3, mb 8px
      Title muted word: color #9f908d (inline span)
  └── Description: 14px, #9f908d, lh 1.5
```

### 7.2 Statistics Boxes (StatisticsSection)

```
background: #ffffff
border-radius: 16px
border: 1px solid rgba(0,0,0,0.06)
padding: 32px 24px
Layout: flex column, centered, gap 12px
  └── Lottie animation: 60×60px
  └── Number: clamp(36px–52px), weight 400, #9f908d
  └── Label: 14px, #9f908d, centered, lh 1.4
```

### 7.3 Statistics Left Highlight Card

```
background: #afc2bb (virya-stat-card)
border-radius: 20px
padding: 40px
min-height: 400px
Layout: flex column, space-between
  └── Heading: clamp(28–42px), #ffffff ("Virya" in #FF5938)
  └── Outline button: transparent, #ffffff border at 50% opacity
  └── Decorative stripe: absolute, #FF5938, rotate(-40deg), bottom-right
```

### 7.4 News Cards (LatestNews)

```
background: #ffffff
border: 1px solid rgba(0,0,0,0.08)
border-radius: 16px
padding: 24px
Layout: flex column
  └── Tag chips: 12px, #9f908d, bg #f5f0ea, border-radius 999px, padding 4px 12px
  └── Heading: 18px, #1f1e1e, weight 400, lh 1.3
  └── Date: 12px, #9f908d
  └── Excerpt: 14px, #9f908d, lh 1.5
  └── "See more →" link: 14px, #FF5938
```

### 7.5 Project Slider Cards (ProjectsSlider)

```
width: 380px (fixed)
height: 520px (fixed)
border-radius: 20px
overflow: hidden
Image: 100%×100%, object-fit: cover
Gradient overlay: linear-gradient(to top, rgba(0,0,0,0.7) → transparent), bottom 50%
Category label: bottom:56, left:24 — 14px, rgba(255,255,255,0.85) + icon
Project name: bottom:24, left:24 — 22px, #ffffff, weight 400
```

### 7.6 Highlighter Services Image Panel

```
Image: 360×460px, border-radius: 20px, object-fit: cover
Floating tag pills (×4, absolute positioned at corners):
  background: rgba(255,255,255,0.92)
  backdrop-filter: blur(8px)
  border-radius: 999px
  padding: 10px 20px
  font-size: 14px, color: #1f1e1e
  box-shadow: 0 2px 12px rgba(0,0,0,0.08)
```

### 7.7 Footer Pre-footer CTA Card

```
background: #185649
border-radius: 24px
padding: 60px 80px
min-height: 220px
max-width: 1280px
Layout: flex column, justify-center
  └── Heading: clamp(28–52px), #ffffff, "energy transition" in #FF5938
  └── CTA button: bg #FF5938, padding 16px 32px, border-radius 999px
  └── Ghost panel: absolute right, rgba(255,255,255,0.04), decorative
```

---

## 8. Shadows

| Value | Used On |
|---|---|
| `0 2px 20px rgba(0,0,0,0.06)` | Header when scrolled (frosted glass) |
| `0 2px 12px rgba(0,0,0,0.1)` | Slider navigation arrow buttons (circular, white) |
| `0 2px 12px rgba(0,0,0,0.08)` | Floating tag pills (HighlighterServices) |

Shadows are deliberately subtle — this design avoids heavy drop shadows.

---

## 9. Icons

All icons are custom SVG React components in `src/components/icons.tsx`, using `currentColor` for fill/stroke. This means icon color is inherited from the text color of the parent.

| Component | Default Size | Description |
|---|---|---|
| `ArrowRightIcon` | 16×16 | Right-pointing arrow, stroke |
| `WindIcon` | 20×20 | Stylized wind turbine blades, stroke |
| `SolarCircleIcon` | 12×12 | Filled circle (solar dot) |
| `HydrogenIcon` | 20×20 | Atom/orbit rings, stroke |
| `LinkedInIcon` | 24×24 | LinkedIn logo, fill |
| `MenuIcon` | 24×24 | Three horizontal lines (hamburger) |
| `CloseIcon` | 24×24 | × (X close) |
| `ChevronDownIcon` | 16×16 | Downward chevron |
| `ChevronLeftIcon` | 20×20 | Left chevron |
| `ChevronRightIcon` | 20×20 | Right chevron |
| `VirywLogoIcon` | 100×49 | SVG wordmark (logo, with orange V-mark) |

All stroke icons use `strokeWidth: 1.5` and `strokeLinecap: round`.

In addition, SVG icon files are referenced from `/public/icons/`: `wind.svg`, `solar.svg`, `hydrogen.svg`, `monitoring.svg`, `transition.svg` (used in ItemsSlider card badges).

---

## 10. Layout Architecture

### 10.1 Page Structure

```
SiteHeader       (fixed, z-index 1000, transparent → frosted glass on scroll)
HeroSection      (100vh, full-bleed video)
ItemsSlider      (bg-beige, horizontal scroll slider)
StatisticsSection (bg-white, 1fr 2fr grid)
BrandPromiseSection (bg-white, 55fr 45fr grid + Lottie)
MapSection       (bg-beige, 35fr 65fr grid)
HighlighterServices (bg-white, 55fr 45fr grid + typewriter)
ProjectsSlider   (bg-beige, horizontal scroll slider)
LatestNews       (bg-white, 3-col news grid)
SiteFooter       (bg-dark-green, CTA card + nav columns)
```

### 10.2 Grid Layouts (desktop)

| Section | Columns | Gap |
|---|---|---|
| StatisticsSection outer | `1fr 2fr` | 32px |
| StatisticsSection stats | `1fr 1fr` | 16px |
| BrandPromiseSection | `55fr 45fr` | 80px |
| MapSection | `35fr 65fr` | 40px |
| HighlighterServices | `55fr 45fr` | 60px |
| LatestNews | `repeat(3, 1fr)` | 24px |
| SiteFooter nav | `repeat(4, 1fr)` | 40px |

### 10.3 Responsive Breakpoints

| Breakpoint | Change |
|---|---|
| `lg` (1024px) | Desktop nav shows; mobile hamburger hides |
| `768px` | Most 2-col grids collapse to 1-col |
| `480px` | Footer nav: 2-col → 1-col |
| `640px` | `.virya-wrapper` padding reduces to 24px |
| `1024px` | `.virya-wrapper` padding reduces to 40px |

### 10.4 Z-index Layers

| Value | Element |
|---|---|
| `1100` | Mobile navigation overlay |
| `1000` | Fixed site header |
| `10` (relative) | Hero section text content |

### 10.5 Max Content Widths

| Width | Used In |
|---|---|
| `1440px` | Hero, ItemsSlider, ProjectsSlider (widest sections) |
| `1280px` | Footer CTA card |
| `1200px` | StatisticsSection, BrandPromise, MapSection, HighlighterServices, LatestNews |

---

## 11. Utility Classes

| Class | Effect |
|---|---|
| `.virya-wrapper` | Max-width 1440px centered wrapper with responsive padding |
| `.virya-h1` | Fluid heading size: clamp(60px–120px), weight 400, lh 1, tracking −0.02em |
| `.virya-h2` | Fluid heading size: clamp(36px–55.25px), weight 400, lh 1.1, tracking −0.02em |
| `.virya-btn-primary` | Orange filled pill button |
| `.virya-btn-outline` | White outline pill button (for dark backgrounds) |
| `.virya-btn-ghost` | Dark outline pill button (for light backgrounds) |
| `.text-virya-orange` | `color: #ff5938` |
| `.text-virya-muted` | `color: #9f908d` |
| `.text-virya-dark` | `color: #1f1e1e` |
| `.text-virya-light` | `color: #fefefe` |
| `.bg-virya-beige` | `background-color: #eee8e2` |
| `.bg-virya-orange` | `background-color: #ff5938` |
| `.bg-virya-green` | `background-color: #185649` |
| `.bg-virya-dark-green` | `background-color: #0f4338` |
| `.animate-fade-up` | `virya-fade-up` keyframe animation (0.7s ease forwards) |
| `.hide-scrollbar` | Hides scrollbar across all browsers (for overflow-scroll containers) |

---

## 12. Design Patterns

### Split Heading Pattern
Section headings divide into a dark primary word and a muted secondary word:
```jsx
<h2>
  <span style={{ color: "#1f1e1e" }}>Our </span>
  <span style={{ color: "#9f908d" }}>expertise</span>
</h2>
```

### Orange Accent Word Pattern
A keyword or brand name is highlighted in `#FF5938` within an otherwise white or light heading.

### Section Rhythm
The page alternates between white (`#ffffff`) and beige (`#eee8e2`) section backgrounds, with the green footer as a terminating anchor.

### Pill Buttons Only
All interactive buttons use `border-radius: 999px` (fully rounded). There are no rectangular buttons with sharp corners anywhere in the site.

### Weight-400 Typography
Headings never use bold weight. The hierarchy is established by size and color contrast, not weight.

### Subtle Borders
Cards use very low-opacity borders — `1px solid rgba(0,0,0,0.06)` or `rgba(0,0,0,0.08)` — never hard visible outlines.
