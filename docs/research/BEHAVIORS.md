# Behaviors — virya-energy.com/en/

## Scroll Behaviors

### Header Scroll State
- **Trigger:** scroll past ~80px
- **State A (top):** `background: transparent`, `position: absolute`, light text/logo
- **State B (scrolled):** adds background color (white or beige), gains subtle shadow
- **Transition:** CSS transition ~0.3s ease
- **Implementation:** `useEffect` + `window.scroll` listener toggling a class

### GSAP ScrollTrigger Pin (Hero section)
- **Mechanism:** GSAP `ScrollTrigger.pin` on `.hero` element
- **Space allocated:** 4062px (pin-spacer height)
- **Content transitions:** Multiple full-screen "slides" animate in/out as user scrolls within the 4062px window
- **Clone approach:** Static hero only (simplify)

### Section Fade-in Animations
- **Trigger:** IntersectionObserver when section enters viewport
- **Effect:** Elements fade up from `opacity: 0, translateY(24px)` to `opacity: 1, translateY(0)`
- **Duration:** ~0.7s ease
- **Sections affected:** h2 headings, cards, stats, buttons

### Highlighter Services — Typing + Cycling Animation
- **Mechanism:** Text in heading cycles through customer types (Landowners → Manufacturing → Logistics → Retail)
- **Effect:** Typing cursor visible (`|`), text appears letter by letter
- **Image:** Changes per content panel
- **Tags:** 4 floating pill tags per panel
- **Implementation:** `useEffect` with `setInterval`, cycling through panels array

---

## Click Behaviors

### Items Slider (Swiper.js)
- **Interaction:** Click left/right arrows to navigate expertise cards
- **Active state:** Highlighted card is more opaque/visible
- **Cards:** 6 slides (Wind, Solar, Hydrogen, Energy Supply, Monitoring, Transition)

### Map Filter Tabs (All/Hydrogen/Solar/Wind)
- **Interaction:** Click tab to filter map markers
- **Active tab:** Orange background, white text
- **Inactive tab:** Light border, dark text
- **Transition:** instant color change

### Projects Slider (Swiper.js)
- **Interaction:** Click left/right arrows to navigate project cards
- **Cards:** 6 project cards

---

## Hover States

### Navigation links
- Underline or color change on hover

### "Build with us" CTA button
- Background darkens slightly: `#FF5938` → `#e04a2c`
- Transition: 0.2s ease

### Outline buttons (hero CTAs, "Learn more")
- Border becomes more opaque on hover
- Subtle background fill: `rgba(255,255,255,0.1)`

### Expertise cards (Items Slider)
- Subtle scale or shadow on hover

### Project cards
- Image may scale slightly on hover
- Overlay becomes slightly lighter

### Footer links
- Color change or underline

---

## Responsive Behavior

### Desktop (1440px)
- Full nav visible in header
- Hero: full-width background, centered text
- Items slider: 3 cards visible
- Statistics: left card + 2x2 grid
- Brand Promise: 2-column (text left, Lottie right)
- Map: text left + map right
- Highlighter: text left + image right
- Projects: 3 cards visible
- News: 3-column cards
- Footer: 4-column nav

### Tablet (768px)
- "Build with us" still visible in header, some nav items may collapse
- Hero text scales down
- Items slider: 2 cards visible
- Statistics: stacks vertically
- Brand Promise: stacks vertically
- Footer: 2-column nav

### Mobile (390px)
- Hamburger menu replaces nav
- Hero: single column, smaller text (~60px)
- Items slider: 1 card visible
- All sections: single column
- Footer: single column nav

---

## Lottie Animations

### Statistics Section (4 Lottie players)
- wind.json — wind turbine animation (above "625 MW")
- profile.json — person/employee animation (above "700+")
- fuel.json — fuel nozzle animation (above "6")
- globe.json — globe/earth animation (above "15+")
- These autoplay, loop, on white background within stat cards

### Brand Promise Section (1 Lottie player)
- SES-illu-en.json — shows cycling energy type list with highlighted state
- Plays on the right side of the 2-column layout

**Clone approach:** Use `@lottiefiles/react-lottie-player` or `lottie-react` package, load JSON files from the original CDN URLs.
