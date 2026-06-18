# Header / Navigation Specification

## Overview
- **Target file:** `src/components/SiteHeader.tsx`
- **Screenshot:** `docs/design-references/hero-desktop.png` (header visible at top)
- **Interaction model:** scroll-triggered (transparent → white background)

## DOM Structure
```
<header> (position: fixed/sticky, z-index: 1000, full-width)
  <div class="wrapper"> (max-width 1440px, padding 0 80px, flex, align-center, justify-between)
    <a class="logo"> (left)
      <img src="/images/virya-logo.png" alt="logo" width=100 height=49>
    </a>
    <nav> (center, flex, gap: 40px)
      <div class="nav-item dropdown">Our expertise ↓</div>
      <div class="nav-item dropdown">Your activity ↓</div>
      <a>About Us</a>
      <a>Resources</a>
      <a>News</a>
      <a>Cooperatives</a>
      <a>Careers</a>
      <a>Projects</a>
    </nav>
    <a class="cta-button"> (right) "Build with us →"
  </div>
</header>
```

## Computed Styles — Container

```
position: fixed (after scroll) / absolute (initial)
width: 100%
height: 124px
padding: 32px 0
background: transparent (initial) → rgba(254,254,254,0.95) (scrolled)
z-index: 1000
display: flex
align-items: center
transition: background 0.3s ease, box-shadow 0.3s ease
```

## Computed Styles — Logo

```
width: 100px
height: auto
```

## Computed Styles — Nav Links

```
font-size: 16px
font-weight: 400
font-family: Source Sans 3, sans-serif
color: #fefefe (on hero) → #1f1e1e (scrolled)
text-decoration: none
transition: color 0.3s ease
gap between items: ~40px
```

## Computed Styles — CTA Button

```
background: #FF5938
color: #ffffff
border-radius: 999px
padding: 14px 28px
font-size: 16px
font-weight: 400
display: inline-flex
align-items: center
gap: 8px
```

## States & Behaviors

### Scroll-triggered floating header
- **Trigger:** `window.scrollY > 80`
- **State A (top):** background: transparent, text color white (color-light mode)
- **State B (scrolled):** background: rgba(254,254,254,0.95), text color #1f1e1e, box-shadow: 0 2px 20px rgba(0,0,0,0.08)
- **Transition:** CSS transition 0.3s ease on background and box-shadow
- **Implementation:** `useEffect` + scroll listener toggling `isScrolled` state class

### Mobile nav (hamburger)
- At < 1024px: hamburger button replaces nav links
- Click hamburger: full-screen overlay menu appears
- Menu items same as desktop

## Navigation Items

### Desktop nav links (in order):
1. "Our expertise" — has dropdown (mega menu, not needed for homepage clone)
2. "Your activity" — has dropdown
3. "About Us"
4. "Resources"
5. "News"
6. "Cooperatives"
7. "Careers"
8. "Projects"

### CTA Button:
- Text: "Build with us →"
- href: "#" (or `/en/contact/`)
- Style: orange pill button

## Responsive Behavior
- **Desktop (1440px):** Full nav + CTA visible
- **Tablet (768px):** Compact nav, may wrap
- **Mobile (390px):** Hamburger icon only, full-screen overlay on click

## Assets
- Logo image: `public/images/virya-logo.png` (100×49px rendered, original 275×134)
- Arrow icon: inline SVG `→`

## Implementation Notes
- Use `"use client"` directive for scroll listener
- On the homepage, start in "light" mode (white text on dark hero)
- On scroll past hero, switch to "dark" mode (dark text on white bg)
- Logo: use `<Image>` from next/image, with width=100 height=49
