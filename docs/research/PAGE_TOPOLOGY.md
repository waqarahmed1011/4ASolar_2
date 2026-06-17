# Page Topology — virya-energy.com/en/

## Page: Homepage

**Scroll height:** ~11,530px (at 1440px viewport)
**Page layout:** Single-column scroll with fixed header overlay

---

## Section Order (top → bottom)

| # | Name | CSS Class | Y-pos | Height | Interaction |
|---|------|-----------|-------|--------|-------------|
| 1 | Header | `.header.header--site` | fixed | 124px | scroll-triggered style change |
| 2 | Hero + GSAP Pin | `.hero.hero--v1` inside `.pin-spacer` | 0 | 4062px scroll space | GSAP ScrollTrigger pin |
| 3 | Items Slider | `.items-slider.background-beige` | 4062 | 745px | Swiper.js horizontal slider |
| 4 | Statistics | `.statistic` | 4807 | 1094px | Lottie animations, fade-in |
| 5 | Brand Promise | `.content-lottie` | 5901 | 672px | Lottie animation right side |
| 6 | Map | `.map.background-beige` | 6574 | 951px | click-driven filter tabs |
| 7 | Highlighter Services | `.highlighter-services.content-block` | 7645 | 600px | scroll-driven panel cycling + typing effect |
| 8 | Projects Slider | `.projects-slider.background-beige` | 8365 | 715px | Swiper.js horizontal slider |
| 9 | Latest News | `.latest-news` | 9080 | 1461px | static cards |
| 10 | Pre-footer CTA | `.pre-footer.background-green-100` | inside footer | 373px | static |
| 11 | Footer | `.footer.background-dark-green` | 10541 | 989px | static |

---

## Fixed/Sticky Overlays

- **Header** (`#header`): `position: absolute` on load, becomes sticky/fixed after scroll. Background transitions from transparent to opaque. z-index: 1000.

## Z-index Layers

- Header: 1000 (z-30)
- Hero content: auto
- Mega menu: above hero

## GSAP Pin-Spacer Detail

The `.pin-spacer` (height 4062px) contains the `.hero` section pinned at top. As user scrolls 4062px, the hero stays in place while GSAP animates:
- Slide 1: Hero title + wind turbine video (y=0–1000)
- Slide 2: Fuel station image (y=1000–2000)
- Slide 3: Image collage (overlapping rotated photos) (y=2000–3000)
- Slide 4: "We develop sustainable energy solutions" text (y=3000–4062)

**Clone approach:** Implement as a simplified 100vh hero with the wind turbine background only. The GSAP animations are skipped for simplicity — only the default hero state is cloned.

## Column Structure

- Full-width sections with inner `.wrapper` at max-width ~1440px
- Typical padding: `0 80px` at desktop, `0 40px` tablet, `0 24px` mobile
