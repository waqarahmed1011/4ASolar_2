# Statistics Section Specification

## Overview
- **Target file:** `src/components/StatisticsSection.tsx`
- **Background:** `#FFFFFF` (white)
- **Interaction model:** static (Lottie animations autoplay)

## Visual Description
White section. Left: sage/teal rounded card "Virya Energy in a few numbers" with orange diagonal stripe and "Learn more" button.
Right: 2×2 grid of white stat boxes, each with a Lottie icon at top, large number, and label below.

## DOM Structure
```
<section> (white bg, padding: 80px 0)
  <div class="wrapper">
    <div class="grid"> (2 columns: 1fr 3fr gap 32px)
      <div class="left-card"> (sage/teal bg, rounded, padding: 40px)
        <h2>"Virya Energy in a few numbers"</h2>
        <a class="btn-ghost">"Learn more"</a>
        <div class="stripe"> (orange diagonal stripe, decorative)
      </div>
      <div class="stats-grid"> (2×2 grid, gap: 16px)
        <div class="stat-box"> × 4
          <lottie-player> (Lottie animation)
          <span class="number">
          <span class="label">
        </div>
        <div class="divider"> (thin vertical dividers between boxes)
      </div>
    </div>
  </div>
</section>
```

## Computed Styles — Left Card
```
background: #afc2bb  (sage/teal — approximately rgb(143,185,172) or similar muted teal-green)
border-radius: 20px
padding: 40px
position: relative
overflow: hidden
min-height: 400px
display: flex
flex-direction: column
justify-content: space-between
```

## Left Card — Heading
```
font-size: 42px
font-weight: 400
line-height: 1.1
letter-spacing: -0.02em
color: #ffffff
```
Text: "Virya\nEnergy\nin a few\nnumbers"
(note "Virya" in orange `#FF5938`, rest in white)

## Left Card — "Learn more" Button
```
background: transparent
color: #ffffff
border: 1.5px solid rgba(255,255,255,0.5)
border-radius: 999px
padding: 12px 24px
font-size: 14px
width: fit-content
```

## Left Card — Diagonal Orange Stripe
```
position: absolute
bottom: -20px
right: -20px
width: 160px
height: 8px
background: #FF5938
transform: rotate(-40deg)
transform-origin: right center
```
(decorative large stripe across bottom-right of card)

## Computed Styles — Stat Box
```
background: #ffffff
border-radius: 16px
border: 1px solid rgba(0,0,0,0.06)
padding: 32px 24px
display: flex
flex-direction: column
align-items: center
justify-content: flex-start
gap: 12px
```

## Stat Box — Number
```
font-size: 52px
font-weight: 400
letter-spacing: -0.02em
color: #9f908d
line-height: 1.0
```

## Stat Box — Label
```
font-size: 14px
color: #9f908d
text-align: center
```

## Stat Box — Lottie Icon
```
width: 60px
height: 60px
```

## Statistics Data (4 items)
1. Lottie: `/public/lottie/wind.json` → Number: "625 MW" → Label: "Installed production capacity"
2. Lottie: `/public/lottie/profile.json` → Number: "700+" → Label: "Employees over multiple markets"
3. Lottie: `/public/lottie/fuel.json` → Number: "6" → Label: "Hydrogen service stations"
4. Lottie: `/public/lottie/globe.json` → Number: "15+" → Label: "Countries with a Virya presence"

## Lottie Implementation
Use `lottie-react` package:
```tsx
import Lottie from "lottie-react";
// Load JSON: import windData from "@/public/lottie/wind.json";
// Or dynamic: fetch("/lottie/wind.json")
```
Each Lottie: autoplay, loop=true, width=60, height=60

## Responsive Behavior
- **Desktop (1440px):** 2-column layout (left card + 2×2 grid)
- **Tablet (768px):** Stack vertically (left card full width, then stats below)
- **Mobile (390px):** Same as tablet

## Assets
- Lottie files: `/public/lottie/wind.json`, `profile.json`, `fuel.json`, `globe.json`

## Implementation Notes
- Install: `npm install lottie-react`
- Use `"use client"` for Lottie (client-side only)
- The stats grid uses CSS Grid: `grid-template-columns: repeat(2, 1fr)`
- Dividers between stat boxes: thin border-right / border-bottom on boxes
