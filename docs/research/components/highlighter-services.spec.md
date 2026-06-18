# Highlighter Services Section Specification

## Overview
- **Target file:** `src/components/HighlighterServices.tsx`
- **Background:** `#FFFFFF` (white)
- **Interaction model:** auto-cycling with a typing animation in the heading

## Visual Description
White section. 2-column layout.
Left: Large heading with a word that cycles (types/deletes) through customer types. Paragraph description. "Learn more" button.
Right: A rounded-corner photo (changes per panel) with 4 floating pill tags positioned around it.

## DOM Structure
```
<section> (white bg, padding: 80px 0)
  <div class="wrapper">
    <div class="container"> (2 columns: ~55% left, ~45% right, gap: 60px, align-items: center)
      <div class="left">
        <h2>
          "Discover our "
          <span class="typed-word">{currentWord}</span>
          <span class="cursor">|</span>
          <br/>
          "solutions"
        </h2>
        <p>{currentPanel.description}</p>
        <a class="btn-ghost">"Learn more"</a>
      </div>
      <div class="right"> (position: relative)
        <img class="panel-image"> (rounded 20px, width: 360px height: 480px)
        <div class="tag top-left">{tag1}</div>
        <div class="tag top-right">{tag2}</div>
        <div class="tag bottom-left">{tag3}</div>
        <div class="tag bottom-right">{tag4}</div>
      </div>
    </div>
  </div>
</section>
```

## Computed Styles — Section
```
background: #ffffff
padding: 80px 0
```

## Computed Styles — h2
```
font-size: clamp(36px, 3.5vw, 52px)
font-weight: 400
letter-spacing: -0.02em
line-height: 1.15
color: #1f1e1e
```

## Computed Styles — Typed Word (orange accent)
```
color: #FF5938
```
The animated word: "Landowners", "Manufacturing", "Logistics", "Retail"

## Computed Styles — Cursor
```
display: inline-block
width: 2px
height: 1em
background: #FF5938
margin-left: 2px
animation: blink 0.8s step-end infinite
```

## Computed Styles — Panel Image
```
width: 360px
height: 460px
border-radius: 20px
object-fit: cover
```

## Computed Styles — Floating Tag
```
position: absolute
background: rgba(255, 255, 255, 0.9)
backdrop-filter: blur(8px)
border-radius: 999px
padding: 10px 20px
font-size: 14px
color: #1f1e1e
white-space: nowrap
box-shadow: 0 2px 12px rgba(0,0,0,0.08)
```

## Content Panels (4 panels, cycling)

### Panel 1 — Landowners
- Word: "Landowners"
- Heading: "Discover our Landowners solutions"
- Desc: "For Virya Energy, the energy transition must be adapted to each reality. Our "fit for purpose" approach reflects our commitment to developing customized solutions that exactly meet everyone's needs."
- Image: `/public/images/highlighter-landowners.jpg`
- Tags: "Space Monetization", "Predictable Income", "Carbon Footprint Reduction", "Energy Independence"

### Panel 2 — Manufacturing
- Word: "Manufacturing"
- Heading: "Discover our Manufacturing solutions"
- Desc: "For Virya Energy, the energy transition must be adapted to each reality. Our "fit for purpose" approach reflects our commitment to developing customized solutions that exactly meet everyone's needs."
- Image: `/public/images/virya-image-8.jpg` (fallback)
- Tags: "Energy Cost Reduction", "Regulatory Compliance", "Energy Resilience", "Energy Independence"

### Panel 3 — Logistics
- Word: "Logistics"
- Image: `/public/images/virya-image-27.jpg` (fallback)
- Tags: "Fleet Electrification", "Clean Transport", "Carbon Reduction", "Energy Supply"

### Panel 4 — Retail
- Word: "Retail"
- Image: `/public/images/virya-image-31.jpg` (fallback)
- Tags: "Green Energy", "Cost Reduction", "ESG Compliance", "Sustainability"

## States & Behaviors

### Typing / Cycling Animation
- **Trigger:** Auto-plays on mount, cycles every ~3s
- **Mechanism:**
  1. Delete current word letter by letter (backspace effect)
  2. Type new word letter by letter
  3. Pause 2s on completed word
- **Implementation:** `useEffect` + `setInterval` + `useRef` for char index
- **Blink cursor:** CSS `animation: blink 0.8s step-end infinite`

### Panel transition
- When word fully typed, switch panel content (image + tags)
- Image crossfades with `opacity` transition: 0.4s ease

## Responsive Behavior
- **Desktop (1440px):** 2-column
- **Tablet (768px):** Stack (image + tags below text)
- **Mobile (390px):** Single column, tags hidden or inline

## Implementation Notes
- Use `"use client"` for animation
- Typing speed: ~80ms per character
- Backspace speed: ~50ms per character
- Auto-advance after 2500ms pause
- The image has `overflow: hidden` container for the floating tags
