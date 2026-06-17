# Brand Promise Section Specification

## Overview
- **Target file:** `src/components/BrandPromiseSection.tsx`
- **Background:** `#FFFFFF` (white)
- **Interaction model:** static (Lottie animation on right autoplays)

## Visual Description
White section. 2-column layout.
Left: large heading "Our Fit For Purpose Brand Promise" (dark first line, muted second), paragraph text, "Learn more" button.
Right: Lottie animation showing a cycling list of energy-related items, with one highlighted in salmon/orange.

## DOM Structure
```
<section> (white bg, padding: 80px 0)
  <div class="wrapper">
    <div class="container"> (2 columns: ~55% left, ~45% right, gap: 80px, align-items: center)
      <div class="left">
        <h2>
          <span class="dark">Our Fit For Purpose</span><br>
          <span class="muted">Brand Promise</span>
        </h2>
        <p>
        <a class="btn-ghost">"Learn more"</a>
      </div>
      <div class="right">
        <lottie-player src="/lottie/ses-illu-en.json">
      </div>
    </div>
  </div>
</section>
```

## Computed Styles — Section
```
background: #ffffff
padding: 100px 0
```

## Computed Styles — h2
```
font-size: clamp(36px, 3.5vw, 50px)
font-weight: 400
line-height: 1.1
letter-spacing: -0.02em
margin-bottom: 24px
```
- "Our Fit For Purpose" → color: `#1f1e1e`
- "Brand Promise" → color: `#9f908d`

## Computed Styles — Paragraph
```
font-size: 16px
color: #1f1e1e
line-height: 1.6
max-width: 480px
margin-bottom: 32px
```

## Computed Styles — "Learn more" Button
```
(ghost dark button)
background: transparent
color: #1f1e1e
border: 1.5px solid rgba(31,30,30,0.25)
border-radius: 999px
padding: 12px 28px
font-size: 15px
```

## Computed Styles — Lottie Container
```
width: 100%
max-width: 380px
```

## Text Content (verbatim)
- h2: "Our Fit For Purpose\nBrand Promise"
- Paragraph: "For Virya Energy, the energy transition must be adapted to each reality. Our "fit for purpose" approach reflects our commitment to developing customized solutions that exactly meet everyone's needs. By simplifying access to renewable energy, we are building a path towards a sustainable future."
- Button: "Learn more"

## Assets
- Lottie: `/public/lottie/ses-illu-en.json`

## Lottie Implementation
```tsx
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import sesData from "../../public/lottie/ses-illu-en.json";
// <Lottie animationData={sesData} loop autoplay style={{ width: "100%", maxWidth: 380 }} />
```

## Responsive Behavior
- **Desktop (1440px):** 2-column, text left ~55%, Lottie right ~45%
- **Tablet (768px):** Stack vertically, Lottie below text
- **Mobile (390px):** Single column

## Implementation Notes
- Use `"use client"` or dynamic import for Lottie
- The Lottie animation shows a vertical list with one item highlighted in salmon (#FF5938 or similar)
